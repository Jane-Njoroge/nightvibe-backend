import { VenuesService } from './venues.service';
import { CreateVenueDto } from './dto/create-venue.dto';
export declare class VenuesController {
    private venuesService;
    constructor(venuesService: VenuesService);
    create(dto: CreateVenueDto): import(".prisma/client").Prisma.Prisma__venuesClient<{
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    findAll(): import(".prisma/client").Prisma.PrismaPromise<({
        _count: {
            events: number;
        };
    } & {
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
    })[]>;
    findOne(id: string): Promise<{
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
        }[];
    } & {
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
    }>;
    update(id: string, dto: CreateVenueDto): Promise<{
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
    }>;
    remove(id: string): Promise<{
        id: string;
        created_at: Date;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
    }>;
}
