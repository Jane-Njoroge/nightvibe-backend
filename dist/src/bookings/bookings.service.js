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
exports.BookingsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let BookingsService = class BookingsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        const event = await this.prisma.events.findUnique({
            where: { id: dto.event_id },
        });
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        if (event.status !== 'PUBLISHED')
            throw new common_1.BadRequestException('Event is not available for booking');
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
    async findMyBookings(userId) {
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
    async findOne(id) {
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
        if (!booking)
            throw new common_1.NotFoundException('Booking not found');
        return booking;
    }
    async cancel(id, userId) {
        const booking = await this.findOne(id);
        if (booking.user_id !== userId)
            throw new common_1.BadRequestException('You can only cancel your own bookings');
        if (booking.status === 'CANCELLED')
            throw new common_1.BadRequestException('Booking is already cancelled');
        if (booking.status === 'COMPLETED')
            throw new common_1.BadRequestException('Cannot cancel a completed booking');
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
    async confirm(id) {
        await this.findOne(id);
        return this.prisma.bookings.update({
            where: { id },
            data: { status: 'CONFIRMED' },
        });
    }
    async complete(id) {
        await this.findOne(id);
        return this.prisma.bookings.update({
            where: { id },
            data: { status: 'COMPLETED' },
        });
    }
};
exports.BookingsService = BookingsService;
exports.BookingsService = BookingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookingsService);
//# sourceMappingURL=bookings.service.js.map