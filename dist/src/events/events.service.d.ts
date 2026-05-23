import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateEventDto, userId: string): Promise<{
        users: {
            first_name: string;
            last_name: string;
            id: string;
        };
        venues: {
            id: string;
            created_at: Date;
            name: string;
            description: string | null;
            address: string;
            city: string;
            capacity: number;
        };
    } & {
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
    }>;
    findAll(): Promise<({
        event_lineups: ({
            djs: {
                id: string;
                is_active: boolean;
                created_at: Date;
                name: string;
                bio: string | null;
                photo_url: string | null;
                instagram: string | null;
                soundcloud: string | null;
            };
        } & {
            id: string;
            start_time: Date | null;
            end_time: Date | null;
            performance_order: number;
            event_id: string;
            dj_id: string;
        })[];
        venues: {
            id: string;
            created_at: Date;
            name: string;
            description: string | null;
            address: string;
            city: string;
            capacity: number;
        };
        _count: {
            bookings: number;
        };
    } & {
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
    })[]>;
    findPublished(): Promise<({
        event_lineups: ({
            djs: {
                id: string;
                is_active: boolean;
                created_at: Date;
                name: string;
                bio: string | null;
                photo_url: string | null;
                instagram: string | null;
                soundcloud: string | null;
            };
        } & {
            id: string;
            start_time: Date | null;
            end_time: Date | null;
            performance_order: number;
            event_id: string;
            dj_id: string;
        })[];
        venues: {
            id: string;
            created_at: Date;
            name: string;
            description: string | null;
            address: string;
            city: string;
            capacity: number;
        };
        _count: {
            bookings: number;
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        bookings: {
            id: string;
            status: import(".prisma/client").$Enums.booking_status;
            guest_count: number;
        }[];
        event_lineups: ({
            djs: {
                id: string;
                is_active: boolean;
                created_at: Date;
                name: string;
                bio: string | null;
                photo_url: string | null;
                instagram: string | null;
                soundcloud: string | null;
            };
        } & {
            id: string;
            start_time: Date | null;
            end_time: Date | null;
            performance_order: number;
            event_id: string;
            dj_id: string;
        })[];
        venues: {
            id: string;
            created_at: Date;
            name: string;
            description: string | null;
            address: string;
            city: string;
            capacity: number;
        };
        _count: {
            bookings: number;
        };
    } & {
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
    }>;
    update(id: string, dto: UpdateEventDto): Promise<{
        venues: {
            id: string;
            created_at: Date;
            name: string;
            description: string | null;
            address: string;
            city: string;
            capacity: number;
        };
    } & {
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
    }>;
    publish(id: string): Promise<{
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
    }>;
    cancel(id: string): Promise<{
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
    }>;
    addDjToLineup(eventId: string, djId: string, order: number, startTime?: string, endTime?: string): Promise<{
        djs: {
            id: string;
            is_active: boolean;
            created_at: Date;
            name: string;
            bio: string | null;
            photo_url: string | null;
            instagram: string | null;
            soundcloud: string | null;
        };
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
    }>;
    removeDjFromLineup(eventId: string, djId: string): Promise<{
        id: string;
        start_time: Date | null;
        end_time: Date | null;
        performance_order: number;
        event_id: string;
        dj_id: string;
    }>;
    remove(id: string): Promise<{
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
    }>;
}
