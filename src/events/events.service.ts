import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateEventDto, userId: string) {
    return this.prisma.events.create({
      data: {
        venue_id: dto.venue_id,
        title: dto.title,
        description: dto.description,
        event_date: new Date(dto.event_date),
        start_time: new Date(`1970-01-01T${dto.start_time}:00`),
        end_time: dto.end_time ? new Date(`1970-01-01T${dto.end_time}:00`) : null,
        poster_url: dto.poster_url,
        ticket_price: dto.ticket_price,
        capacity: dto.capacity,
        status: dto.status || 'DRAFT',
        created_by: userId,
      },
      include: {
        venues: true,
        users: {
          select: { id: true, first_name: true, last_name: true },
        },
      },
    });
  }

  async findAll() {
    return this.prisma.events.findMany({
      orderBy: { event_date: 'desc' },
      include: {
        venues: true,
        event_lineups: {
          include: { djs: true },
          orderBy: { performance_order: 'asc' },
        },
        _count: { select: { bookings: true } },
      },
    });
  }

  async findPublished() {
    return this.prisma.events.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { event_date: 'asc' },
      include: {
        venues: true,
        event_lineups: {
          include: { djs: true },
          orderBy: { performance_order: 'asc' },
        },
        _count: { select: { bookings: true } },
      },
    });
  }

  async findOne(id: string) {
    const event = await this.prisma.events.findUnique({
      where: { id },
      include: {
        venues: true,
        event_lineups: {
          include: { djs: true },
          orderBy: { performance_order: 'asc' },
        },
        bookings: {
          select: { id: true, status: true, guest_count: true },
        },
        _count: { select: { bookings: true } },
      },
    });

    if (!event) throw new NotFoundException('Event not found');
    return event;
  }

  async update(id: string, dto: UpdateEventDto) {
    await this.findOne(id);

    const data: any = { ...dto };
    if (dto.event_date) data.event_date = new Date(dto.event_date);
    if (dto.start_time) data.start_time = new Date(`1970-01-01T${dto.start_time}:00`);
    if (dto.end_time) data.end_time = new Date(`1970-01-01T${dto.end_time}:00`);

    return this.prisma.events.update({
      where: { id },
      data,
      include: { venues: true },
    });
  }

  async publish(id: string) {
    await this.findOne(id);
    return this.prisma.events.update({
      where: { id },
      data: { status: 'PUBLISHED' },
    });
  }

  async cancel(id: string) {
    await this.findOne(id);
    return this.prisma.events.update({
      where: { id },
      data: { status: 'CANCELLED' },
    });
  }

  async addDjToLineup(eventId: string, djId: string, order: number, startTime?: string, endTime?: string) {
    return this.prisma.event_lineups.create({
      data: {
        event_id: eventId,
        dj_id: djId,
        performance_order: order,
        start_time: startTime ? new Date(`1970-01-01T${startTime}:00`) : null,
        end_time: endTime ? new Date(`1970-01-01T${endTime}:00`) : null,
      },
      include: { djs: true, events: true },
    });
  }

  async removeDjFromLineup(eventId: string, djId: string) {
    return this.prisma.event_lineups.delete({
      where: { event_id_dj_id: { event_id: eventId, dj_id: djId } },
    });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.events.delete({ where: { id } });
  }
}