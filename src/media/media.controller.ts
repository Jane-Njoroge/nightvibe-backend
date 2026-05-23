import {
  Controller, Get, Post, Delete,
  Param, Body, UseGuards,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/create-media.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@Controller('media')
export class MediaController {
  constructor(private mediaService: MediaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateMediaDto, @CurrentUser() user: any) {
    return this.mediaService.create(dto, user.id);
  }

  @Get()
  findAll() {
    return this.mediaService.findAll();
  }

  @Get('event/:eventId')
  findByEvent(@Param('eventId') eventId: string) {
    return this.mediaService.findByEvent(eventId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mediaService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string, @CurrentUser() user: any) {
    return this.mediaService.remove(id, user.id);
  }
}