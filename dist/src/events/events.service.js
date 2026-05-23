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
exports.EventsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let EventsService = class EventsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
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
    async findOne(id) {
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
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        return event;
    }
    async update(id, dto) {
        await this.findOne(id);
        const data = { ...dto };
        if (dto.event_date)
            data.event_date = new Date(dto.event_date);
        if (dto.start_time)
            data.start_time = new Date(`1970-01-01T${dto.start_time}:00`);
        if (dto.end_time)
            data.end_time = new Date(`1970-01-01T${dto.end_time}:00`);
        return this.prisma.events.update({
            where: { id },
            data,
            include: { venues: true },
        });
    }
    async publish(id) {
        await this.findOne(id);
        return this.prisma.events.update({
            where: { id },
            data: { status: 'PUBLISHED' },
        });
    }
    async cancel(id) {
        await this.findOne(id);
        return this.prisma.events.update({
            where: { id },
            data: { status: 'CANCELLED' },
        });
    }
    async addDjToLineup(eventId, djId, order, startTime, endTime) {
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
    async removeDjFromLineup(eventId, djId) {
        return this.prisma.event_lineups.delete({
            where: { event_id_dj_id: { event_id: eventId, dj_id: djId } },
        });
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.events.delete({ where: { id } });
    }
};
exports.EventsService = EventsService;
exports.EventsService = EventsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], EventsService);
//# sourceMappingURL=events.service.js.map