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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationsService = class NotificationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        return this.prisma.notifications.create({
            data: {
                user_id: dto.user_id,
                type: dto.type,
                message: dto.message,
            },
        });
    }
    async notify(userId, type, message) {
        return this.prisma.notifications.create({
            data: { user_id: userId, type, message },
        });
    }
    async findMyNotifications(userId) {
        return this.prisma.notifications.findMany({
            where: { user_id: userId },
            orderBy: { created_at: 'desc' },
        });
    }
    async findUnread(userId) {
        return this.prisma.notifications.findMany({
            where: { user_id: userId, is_read: false },
            orderBy: { created_at: 'desc' },
        });
    }
    async markAsRead(id, userId) {
        const notif = await this.prisma.notifications.findUnique({ where: { id } });
        if (!notif)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notifications.update({
            where: { id },
            data: { is_read: true },
        });
    }
    async markAllAsRead(userId) {
        return this.prisma.notifications.updateMany({
            where: { user_id: userId, is_read: false },
            data: { is_read: true },
        });
    }
    async countUnread(userId) {
        const count = await this.prisma.notifications.count({
            where: { user_id: userId, is_read: false },
        });
        return { unread_count: count };
    }
    async remove(id) {
        const notif = await this.prisma.notifications.findUnique({ where: { id } });
        if (!notif)
            throw new common_1.NotFoundException('Notification not found');
        return this.prisma.notifications.delete({ where: { id } });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map