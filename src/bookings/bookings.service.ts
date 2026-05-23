import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class BookingsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateBookingDto, userId: string) {
    const event = await this.prisma.events.findUnique({
      where: { id: dto.event_id },
    });

    if (!event) throw new NotFoundException('Event not found');
    if (event.status !== 'PUBLISHED')
      throw new BadRequestException('Event is not available for booking');

    const totalAmount = Number(event.ticket_price) * dto.guest_count;

    const booking = await this.prisma.bookings.create({
      data: {
        user_id: userId,
        event_id: dto.event_id,
        guest_count: dto.guest_count,
        special_requests: dto.special_requests,
        total_amount: totalAmount,
        status: 'PENDING',
        ...(dto.table_ids?.length && {
          booking_tables: {
            create: dto.table_ids.map((table_id) => ({ table_id })),
          },
        }),
        ...(dto.ticket_type && {
          tickets: {
            create: {
              ticket_type: dto.ticket_type || 'GENERAL',
              quantity: dto.guest_count,
              unit_price: event.ticket_price,
            },
          },
        }),
      },
      include: {
        events: { include: { venues: true } },
        users: {
          select: { id: true, first_name: true, last_name: true, email: true },
        },
        booking_tables: { include: { club_tables: true } },
        tickets: true,
      },
    });

    if (dto.table_ids?.length) {
      await this.prisma.club_tables.updateMany({
        where: { id: { in: dto.table_ids } },
        data: { status: 'RESERVED' },
      });
    }

    return booking;
  }

  async findAll() {
    return this.prisma.bookings.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        events: { select: { id: true, title: true, event_date: true } },
        users: {
          select: { id: true, first_name: true, last_name: true, email: true },
        },
        payments: { select: { id: true, status: true, amount: true, method: true } },
        tickets: true,
      },
    });
  }

  async findMyBookings(userId: string) {
    return this.prisma.bookings.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
      include: {
        events: {
          include: { venues: true },
        },
        booking_tables: { include: { club_tables: true } },
        tickets: true,
        payments: true,
      },
    });
  }

  async findOne(id: string) {
    const booking = await this.prisma.bookings.findUnique({
      where: { id },
      include: {
        events: { include: { venues: true } },
        users: {
          select: { id: true, first_name: true, last_name: true, email: true, phone: true },
        },
        booking_tables: { include: { club_tables: true } },
        tickets: true,
        payments: true,
      },
    });

    if (!booking) throw new NotFoundException('Booking not found');
    return booking;
  }

  async cancel(id: string, userId: string) {
    const booking = await this.findOne(id);

    if (booking.user_id !== userId)
      throw new BadRequestException('You can only cancel your own bookings');

    if (booking.status === 'CANCELLED')
      throw new BadRequestException('Booking is already cancelled');

    if (booking.status === 'COMPLETED')
      throw new BadRequestException('Cannot cancel a completed booking');

    const tableIds = booking.booking_tables.map((bt) => bt.table_id);
    if (tableIds.length) {
      await this.prisma.club_tables.updateMany({
        where: { id: { in: tableIds } },
        data: { status: 'AVAILABLE' },
      });
    }

    return this.prisma.bookings.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async confirm(id: string) {
    await this.findOne(id);
    return this.prisma.bookings.update({
      where: { id },
      data: { status: 'CONFIRMED' },
    });
  }

  async complete(id: string) {
    await this.findOne(id);
    return this.prisma.bookings.update({
      where: { id },
      data: { status: 'COMPLETED' },
    });
  }
}