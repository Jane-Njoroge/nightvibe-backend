import {
  Controller, Get, Post, Patch,
  Param, Body, UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/current-user.decorator';

@UseGuards(JwtAuthGuard)
@Controller('bookings')
export class BookingsController {
  constructor(private bookingsService: BookingsService) {}

  @Post()
  create(@Body() dto: CreateBookingDto, @CurrentUser() user: any) {
    return this.bookingsService.create(dto, user.id);
  }

  @Get()
  findAll() {
    return this.bookingsService.findAll();
  }

  @Get('my')
  findMyBookings(@CurrentUser() user: any) {
    return this.bookingsService.findMyBookings(user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingsService.findOne(id);
  }

  @Patch(':id/cancel')
  cancel(@Param('id') id: string, @CurrentUser() user: any) {
    return this.bookingsService.cancel(id, user.id);
  }

  @Patch(':id/confirm')
  confirm(@Param('id') id: string) {
    return this.bookingsService.confirm(id);
  }

  @Patch(':id/complete')
  complete(@Param('id') id: string) {
    return this.bookingsService.complete(id);
  }
}