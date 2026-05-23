import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateNotificationDto) {
    return this.prisma.notifications.create({
      data: {
        user_id: dto.user_id,
        type: dto.type,
        message: dto.message,
      },
    });
  }

  async notify(userId: string, type: any, message: string) {
    return this.prisma.notifications.create({
      data: { user_id: userId, type, message },
    });
  }

  async findMyNotifications(userId: string) {
    return this.prisma.notifications.findMany({
      where: { user_id: userId },
      orderBy: { created_at: 'desc' },
    });
  }

  async findUnread(userId: string) {
    return this.prisma.notifications.findMany({
      where: { user_id: userId, is_read: false },
      orderBy: { created_at: 'desc' },
    });
  }

  async markAsRead(id: string, userId: string) {
    const notif = await this.prisma.notifications.findUnique({ where: { id } });
    if (!notif) throw new NotFoundException('Notification not found');

    return this.prisma.notifications.update({
      where: { id },
      data: { is_read: true },
    });
  }

  async markAllAsRead(userId: string) {
    return this.prisma.notifications.updateMany({
      where: { user_id: userId, is_read: false },
      data: { is_read: true },
    });
  }

  async countUnread(userId: string) {
    const count = await this.prisma.notifications.count({
      where: { user_id: userId, is_read: false },
    });
    return { unread_count: count };
  }

  async remove(id: string) {
    const notif = await this.prisma.notifications.findUnique({ where: { id } });
    if (!notif) throw new NotFoundException('Notification not found');
    return this.prisma.notifications.delete({ where: { id } });
  }
}