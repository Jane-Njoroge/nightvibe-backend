import {
  Controller, Get, Post, Patch, Delete,
  Param, Body, UseGuards
} from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateEventDto, @CurrentUser() user: any) {
    return this.eventsService.create(dto, user.id);
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get('published')
  findPublished() {
    return this.eventsService.findPublished();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateEventDto) {
    return this.eventsService.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/publish')
  publish(@Param('id') id: string) {
    return this.eventsService.publish(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id/cancel')
  cancel(@Param('id') id: string) {
    return this.eventsService.cancel(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':id/lineup')
  addDj(
    @Param('id') eventId: string,
    @Body() body: { dj_id: string; performance_order: number; start_time?: string; end_time?: string },
  ) {
    return this.eventsService.addDjToLineup(
      eventId, body.dj_id, body.performance_order, body.start_time, body.end_time,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id/lineup/:djId')
  removeDj(@Param('id') eventId: string, @Param('djId') djId: string) {
    return this.eventsService.removeDjFromLineup(eventId, djId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(id);
  }
}