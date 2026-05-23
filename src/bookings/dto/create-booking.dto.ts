import { IsString, IsInt, IsOptional, IsArray, Min } from 'class-validator';

export class CreateBookingDto {
  @IsString()
  event_id: string;

  @IsInt()
  @Min(1)
  guest_count: number;

  @IsOptional()
  @IsString()
  special_requests?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  table_ids?: string[];

  @IsOptional()
  @IsString()
  ticket_type?: string;
}