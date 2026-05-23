import {
  Controller, Get, Post, Patch,
  Param, Body, UseGuards,
} from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('payments')
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post('initiate')
  initiate(@Body() dto: CreatePaymentDto) {
    return this.paymentsService.initiate(dto);
  }

  @Get()
  findAll() {
    return this.paymentsService.findAll();
  }

  @Get('booking/:bookingId')
  findByBooking(@Param('bookingId') bookingId: string) {
    return this.paymentsService.findByBooking(bookingId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentsService.findOne(id);
  }

  @Patch('confirm/:transactionRef')
  confirm(
    @Param('transactionRef') transactionRef: string,
    @Body() body: { gateway_ref?: string },
  ) {
    return this.paymentsService.confirm(transactionRef, body.gateway_ref);
  }

  @Patch('fail/:transactionRef')
  fail(@Param('transactionRef') transactionRef: string) {
    return this.paymentsService.fail(transactionRef);
  }

  @Patch(':id/refund')
  refund(@Param('id') id: string) {
    return this.paymentsService.refund(id);
  }
}