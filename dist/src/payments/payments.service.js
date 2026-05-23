"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let PaymentsService = class PaymentsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async initiate(dto) {
        const booking = await this.prisma.bookings.findUnique({
            where: { id: dto.booking_id },
            include: { payments: true },
        });
        if (!booking)
            throw new common_1.NotFoundException('Booking not found');
        if (booking.status === 'CANCELLED')
            throw new common_1.BadRequestException('Cannot pay for a cancelled booking');
        const alreadyPaid = booking.payments.some((p) => p.status === 'SUCCESS');
        if (alreadyPaid)
            throw new common_1.BadRequestException('Booking is already paid');
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
    async confirm(transactionRef, gatewayRef) {
        const payment = await this.prisma.payments.findFirst({
            where: { transaction_ref: transactionRef },
        });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        if (payment.status === 'SUCCESS')
            throw new common_1.BadRequestException('Payment already confirmed');
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
    async fail(transactionRef) {
        const payment = await this.prisma.payments.findFirst({
            where: { transaction_ref: transactionRef },
        });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        return this.prisma.payments.update({
            where: { id: payment.id },
            data: { status: 'FAILED' },
        });
    }
    async refund(id) {
        const payment = await this.prisma.payments.findUnique({ where: { id } });
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        if (payment.status !== 'SUCCESS')
            throw new common_1.BadRequestException('Only successful payments can be refunded');
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
    async findOne(id) {
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
        if (!payment)
            throw new common_1.NotFoundException('Payment not found');
        return payment;
    }
    async findByBooking(bookingId) {
        return this.prisma.payments.findMany({
            where: { booking_id: bookingId },
            orderBy: { created_at: 'desc' },
        });
    }
};
exports.PaymentsService = PaymentsService;
exports.PaymentsService = PaymentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], PaymentsService);
//# sourceMappingURL=payments.service.js.map