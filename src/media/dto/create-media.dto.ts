import { IsString, IsOptional, IsEnum, IsUUID } from 'class-validator';
import { media_type } from '@prisma/client';

export class CreateMediaDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  caption?: string;

  @IsOptional()
  @IsEnum(media_type)
  media_type?: media_type;

  @IsOptional()
  @IsUUID()
  event_id?: string;
}