import { notification_type } from '@prisma/client';
export declare class CreateNotificationDto {
    user_id: string;
    type: notification_type;
    message: string;
}
