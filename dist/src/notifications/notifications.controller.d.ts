import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsController {
    private notificationsService;
    constructor(notificationsService: NotificationsService);
    create(dto: CreateNotificationDto): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
    findMine(user: any): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }[]>;
    findUnread(user: any): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }[]>;
    countUnread(user: any): Promise<{
        unread_count: number;
    }>;
    markAsRead(id: string, user: any): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
    markAllAsRead(user: any): Promise<import(".prisma/client").Prisma.BatchPayload>;
    remove(id: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
}
