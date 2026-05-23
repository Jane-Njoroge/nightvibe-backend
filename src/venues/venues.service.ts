import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateVenueDto } from './dto/create-venue.dto';

@Injectable()
export class VenuesService {
  constructor(private prisma: PrismaService) {}

  create(dto: CreateVenueDto) {
    return this.prisma.venues.create({ data: dto });
  }

  findAll() {
    return this.prisma.venues.findMany({
      include: { _count: { select: { events: true } } },
    });
  }

  async findOne(id: string) {
    const venue = await this.prisma.venues.findUnique({
      where: { id },
      include: { events: { orderBy: { event_date: 'desc' }, take: 5 } },
    });
    if (!venue) throw new NotFoundException('Venue not found');
    return venue;
  }

  async update(id: string, dto: Partial<CreateVenueDto>) {
    await this.findOne(id);
    return this.prisma.venues.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    await this.findOne(id);
    return this.prisma.venues.delete({ where: { id } });
  }
}