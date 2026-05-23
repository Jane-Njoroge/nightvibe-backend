import { PrismaService } from '../prisma/prisma.service';
import { CreateMediaDto } from './dto/create-media.dto';
export declare class MediaService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateMediaDto, userId: string): Promise<{
        events: {
            id: string;
            title: string;
        } | null;
        users: {
            id: string;
            first_name: string;
            last_name: string;
        };
    } & {
        id: string;
        url: string;
        caption: string | null;
        media_type: import(".prisma/client").$Enums.media_type;
        created_at: Date;
        event_id: string | null;
        uploaded_by: string;
    }>;
    findAll(): Promise<({
        events: {
            id: string;
            title: string;
            event_date: Date;
        } | null;
        users: {
            id: string;
            first_name: string;
            last_name: string;
        };
    } & {
        id: string;
        url: string;
        caption: string | null;
        media_type: import(".prisma/client").$Enums.media_type;
        created_at: Date;
        event_id: string | null;
        uploaded_by: string;
    })[]>;
    findByEvent(eventId: string): Promise<{
        id: string;
        url: string;
        caption: string | null;
        media_type: import(".prisma/client").$Enums.media_type;
        created_at: Date;
        event_id: string | null;
        uploaded_by: string;
    }[]>;
    findOne(id: string): Promise<{
        events: {
            id: string;
            title: string;
        } | null;
        users: {
            id: string;
            first_name: string;
            last_name: string;
        };
    } & {
        id: string;
        url: string;
        caption: string | null;
        media_type: import(".prisma/client").$Enums.media_type;
        created_at: Date;
        event_id: string | null;
        uploaded_by: string;
    }>;
    remove(id: string, userId: string): Promise<{
        id: string;
        url: string;
        caption: string | null;
        media_type: import(".prisma/client").$Enums.media_type;
        created_at: Date;
        event_id: string | null;
        uploaded_by: string;
    }>;
}
