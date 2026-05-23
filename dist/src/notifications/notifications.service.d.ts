import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateNotificationDto): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
    notify(userId: string, type: any, message: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
    findMyNotifications(userId: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }[]>;
    findUnread(userId: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }[]>;
    markAsRead(id: string, userId: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
    markAllAsRead(userId: string): Promise<import(".prisma/client").Prisma.BatchPayload>;
    countUnread(userId: string): Promise<{
        unread_count: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        type: import(".prisma/client").$Enums.notification_type;
        message: string;
        is_read: boolean;
        created_at: Date;
        user_id: string;
    }>;
}
