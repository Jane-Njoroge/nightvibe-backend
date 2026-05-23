import { IsString, IsOptional, IsDateString, IsNumber, IsInt, IsEnum, Min } from 'class-validator';
import { event_status } from '@prisma/client';

export class CreateEventDto {
  @IsString()
  venue_id: string;

  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsDateString()
  event_date: string;

  @IsString()
  start_time: string;

  @IsOptional()
  @IsString()
  end_time?: string;

  @IsOptional()
  @IsString()
  poster_url?: string;

  @IsNumber()
  @Min(0)
  ticket_price: number;

  @IsInt()
  @Min(1)
  capacity: number;

  @IsOptional()
  @IsEnum(event_status)
  status?: event_status;
}