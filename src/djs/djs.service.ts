import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateDjDto } from './dto/create-dj.dto';

@Injectable()
export class DjsService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateDjDto) {
    return this.prisma.djs.create({ data: dto });
  }

  findAll() {
    return this.prisma.djs.findMany({
      where: { is_active: true },
      include: { _count: { select: { event_lineups: true } } },
    });
  }

  async findOne(id: string) {
    const dj = await this.prisma.djs.findUnique({
      where: { id },
      include: {
        event_lineups: {
          include: { events: true },
          orderBy: { events: { event_date: 'desc' } },
          take: 5,
        },
      },
    });
    if (!dj) throw new NotFoundException('DJ not found');
    return dj;
  }

  async update(id: string, dto: Partial<CreateDjDto>) {
    await this.findOne(id);
    return this.prisma.djs.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.djs.update({ where: { id }, data: { is_active: false } });
  }
}