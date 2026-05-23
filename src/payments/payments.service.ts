import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';

@Injectable()
export class PaymentsService {
  constructor(private prisma: PrismaService) {}

  async initiate(dto: CreatePaymentDto) {
    const booking = await this.prisma.bookings.findUnique({
      where: { id: dto.booking_id },
      include: { payments: true },
    });

    if (!booking) throw new NotFoundException('Booking not found');

    if (booking.status === 'CANCELLED')
      throw new BadRequestException('Cannot pay for a cancelled booking');

    const alreadyPaid = booking.payments.some((p) => p.status === 'SUCCESS');
    if (alreadyPaid)
      throw new BadRequestException('Booking is already paid');

    const transactionRef = `NV-${Date.now()}-${Math.random().toString(36).substring(2, 8).toUpperCase()}`;

    const payment = await this.prisma.payments.create({
      data: {
        booking_id: dto.booking_id,
        amount: booking.total_amount,
        currency: 'KES',
        method: dto.method,
        status: 'PENDING',
        transaction_ref: transactionRef,
      },
    });

    return {
      message: dto.method === 'MPESA'
        ? `STK push sent to ${dto.phone}. Enter your M-Pesa PIN to complete.`
        : 'Payment initiated successfully',
      payment,
      transaction_ref: transactionRef,
    };
  }

  async confirm(transactionRef: string, gatewayRef?: string) {
    const payment = await this.prisma.payments.findFirst({
      where: { transaction_ref: transactionRef },
    });

    if (!payment) throw new NotFoundException('Payment not found');
    if (payment.status === 'SUCCESS')
      throw new BadRequestException('Payment already confirmed');

    const updated = await this.prisma.payments.update({
      where: { id: payment.id },
      data: {
        status: 'SUCCESS',
        gateway_ref: gatewayRef || null,
        paid_at: new Date(),
      },
    });

    await this.prisma.bookings.update({
      where: { id: payment.booking_id },
      data: { status: 'CONFIRMED' },
    });

    return { message: 'Payment confirmed successfully', payment: updated };
  }

  async fail(transactionRef: string) {
    const payment = await this.prisma.payments.findFirst({
      where: { transaction_ref: transactionRef },
    });

    if (!payment) throw new NotFoundException('Payment not found');

    return this.prisma.payments.update({
      where: { id: payment.id },
      data: { status: 'FAILED' },
    });
  }

  async refund(id: string) {
    const payment = await this.prisma.payments.findUnique({ where: { id } });

    if (!payment) throw new NotFoundException('Payment not found');
    if (payment.status !== 'SUCCESS')
      throw new BadRequestException('Only successful payments can be refunded');

    const updated = await this.prisma.payments.update({
      where: { id },
      data: { status: 'REFUNDED' },
    });

    await this.prisma.bookings.update({
      where: { id: payment.booking_id },
      data: { status: 'CANCELLED' },
    });

    return { message: 'Payment refunded successfully', payment: updated };
  }

  async findAll() {
    return this.prisma.payments.findMany({
      orderBy: { created_at: 'desc' },
      include: {
        bookings: {
          include: {
            users: {
              select: { id: true, first_name: true, last_name: true, email: true },
            },
            events: { select: { id: true, title: true, event_date: true } },
          },
        },
      },
    });
  }

  async findOne(id: string) {
    const payment = await this.prisma.payments.findUnique({
      where: { id },
      include: {
        bookings: {
          include: {
            users: {
              select: { id: true, first_name: true, last_name: true, email: true },
            },
            events: { select: { id: true, title: true, event_date: true } },
          },
        },
      },
    });

    if (!payment) throw new NotFoundException('Payment not found');
    return payment;
  }

  async findByBooking(bookingId: string) {
    return this.prisma.payments.findMany({
      where: { booking_id: bookingId },
      orderBy: { created_at: 'desc' },
    });
  }
}
