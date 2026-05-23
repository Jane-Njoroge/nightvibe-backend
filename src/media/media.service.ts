import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';

@Injectable()
export class MediaService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateMediaDto, userId: string) {
    if (dto.event_id) {
      const event = await this.prisma.events.findUnique({
        where: { id: dto.event_id },
      });
      if (!event) throw new NotFoundException('Event not found');
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

  async findByEvent(eventId: string) {
    const event = await this.prisma.events.findUnique({ where: { id: eventId } });
    if (!event) throw new NotFoundException('Event not found');

    return this.prisma.media.findMany({
      where: { event_id: eventId },
      orderBy: { created_at: 'desc' },
    });
  }

  async findOne(id: string) {
    const media = await this.prisma.media.findUnique({
      where: { id },
      include: {
        events: { select: { id: true, title: true } },
        users: { select: { id: true, first_name: true, last_name: true } },
      },
    });
    if (!media) throw new NotFoundException('Media not found');
    return media;
  }

  async remove(id: string, userId: string) {
    const media = await this.findOne(id);

    if (media.uploaded_by !== userId)
      throw new ForbiddenException('You can only delete your own media');

    return this.prisma.media.delete({ where: { id } });
  }
}