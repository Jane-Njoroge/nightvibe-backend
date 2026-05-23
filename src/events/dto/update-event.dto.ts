import { IsString, IsOptional, IsDateString, IsNumber, IsInt, IsEnum, Min } from 'class-validator';
import { event_status } from '@prisma/client';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  venue_id?: string;

  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsDateString()
  event_date?: string;

  @IsOptional()
  @IsString()
  start_time?: string;

  @IsOptional()
  @IsString()
  end_time?: string;

  @IsOptional()
  @IsString()
  poster_url?: string;

  @IsOptional()
  @IsNumber()
  @Min(0)
  ticket_price?: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  capacity?: number;

  @IsOptional()
  @IsEnum(event_status)
  status?: event_status;
}