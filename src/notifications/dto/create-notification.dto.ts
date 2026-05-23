import { IsString, IsUUID, IsEnum, IsOptional } from 'class-validator';
import { notification_type } from '@prisma/client';

export class CreateNotificationDto {
  @IsUUID()
  user_id: string;

  @IsEnum(notification_type)
  type: notification_type;

  @IsString()
  message: string;
}