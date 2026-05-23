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
exports.MediaService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let MediaService = class MediaService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto, userId) {
        if (dto.event_id) {
            const event = await this.prisma.events.findUnique({
                where: { id: dto.event_id },
            });
            if (!event)
                throw new common_1.NotFoundException('Event not found');
        }
        return this.prisma.media.create({
            data: {
                url: dto.url,
                caption: dto.caption,
                media_type: dto.media_type || 'IMAGE',
                event_id: dto.event_id || null,
                uploaded_by: userId,
            },
            include: {
                events: { select: { id: true, title: true } },
                users: { select: { id: true, first_name: true, last_name: true } },
            },
        });
    }
    async findAll() {
        return this.prisma.media.findMany({
            orderBy: { created_at: 'desc' },
            include: {
                events: { select: { id: true, title: true, event_date: true } },
                users: { select: { id: true, first_name: true, last_name: true } },
            },
        });
    }
    async findByEvent(eventId) {
        const event = await this.prisma.events.findUnique({ where: { id: eventId } });
        if (!event)
            throw new common_1.NotFoundException('Event not found');
        return this.prisma.media.findMany({
            where: { event_id: eventId },
            orderBy: { created_at: 'desc' },
        });
    }
    async findOne(id) {
        const media = await this.prisma.media.findUnique({
            where: { id },
            include: {
                events: { select: { id: true, title: true } },
                users: { select: { id: true, first_name: true, last_name: true } },
            },
        });
        if (!media)
            throw new common_1.NotFoundException('Media not found');
        return media;
    }
    async remove(id, userId) {
        const media = await this.findOne(id);
        if (media.uploaded_by !== userId)
            throw new common_1.ForbiddenException('You can only delete your own media');
        return this.prisma.media.delete({ where: { id } });
    }
};
exports.MediaService = MediaService;
exports.MediaService = MediaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MediaService);
//# sourceMappingURL=media.service.js.map