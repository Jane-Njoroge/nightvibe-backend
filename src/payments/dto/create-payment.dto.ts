import { IsString, IsEnum, IsOptional } from 'class-validator';
import { payment_method } from '@prisma/client';

export class CreatePaymentDto {
  @IsString()
  booking_id: string;

  @IsEnum(payment_method)
  method: payment_method;

  @IsOptional()
  @IsString()
  phone?: string;
}