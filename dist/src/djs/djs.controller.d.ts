import { DjsService } from './djs.service';
import { CreateDjDto } from './dto/create-dj.dto';
export declare class DjsController {
    private djsService;
    constructor(djsService: DjsService);
    create(dto: CreateDjDto): import(".prisma/client").Prisma.Prisma__djsClient<{
        id: string;
        is_active: boolean;
        created_at: Date;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            event_lineups: number;
        };
    } & {
        id: string;
        is_active: boolean;
        created_at: Date;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
    })[]>;
    findOne(id: string): Promise<{
        event_lineups: ({
            events: {
                id: string;
                created_at: Date;
                updated_at: Date;
                description: string | null;
                capacity: number;
                event_date: Date;
                venue_id: string;
                title: string;
                start_time: Date;
                end_time: Date | null;
                poster_url: string | null;
                ticket_price: import("@prisma/client/runtime/library").Decimal;
                status: import(".prisma/client").$Enums.event_status;
                created_by: string;
            };
        } & {
            id: string;
            start_time: Date | null;
            end_time: Date | null;
            performance_order: number;
            event_id: string;
            dj_id: string;
        })[];
    } & {
        id: string;
        is_active: boolean;
        created_at: Date;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
    }>;
    update(id: string, dto: CreateDjDto): Promise<{
        id: string;
        is_active: boolean;
        created_at: Date;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        is_active: boolean;
        created_at: Date;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
    }>;
}
