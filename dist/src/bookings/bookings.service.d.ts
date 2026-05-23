import { PrismaService } from '../prisma/prisma.service';
import { CreateBookingDto } from './dto/create-booking.dto';
export declare class BookingsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBookingDto, userId: string): Promise<{
        booking_tables: ({
            club_tables: {
                id: string;
                created_at: Date;
                capacity: number;
                status: import(".prisma/client").$Enums.table_status;
                table_number: string;
                section: string | null;
                min_spend: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            table_id: string;
            booking_id: string;
        })[];
        events: {
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
        };
        tickets: {
            id: string;
            created_at: Date;
            ticket_type: string;
            quantity: number;
            unit_price: import("@prisma/client/runtime/library").Decimal;
            booking_id: string;
        }[];
        users: {
            email: string;
            first_name: string;
            last_name: string;
            id: string;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    }>;
    findAll(): Promise<({
        events: {
            id: string;
            event_date: Date;
            title: string;
        };
        payments: {
            id: string;
            status: import(".prisma/client").$Enums.payment_status;
            amount: import("@prisma/client/runtime/library").Decimal;
            method: import(".prisma/client").$Enums.payment_method;
        }[];
        tickets: {
            id: string;
            created_at: Date;
            ticket_type: string;
            quantity: number;
            unit_price: import("@prisma/client/runtime/library").Decimal;
            booking_id: string;
        }[];
        users: {
            email: string;
            first_name: string;
            last_name: string;
            id: string;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findMyBookings(userId: string): Promise<({
        booking_tables: ({
            club_tables: {
                id: string;
                created_at: Date;
                capacity: number;
                status: import(".prisma/client").$Enums.table_status;
                table_number: string;
                section: string | null;
                min_spend: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            table_id: string;
            booking_id: string;
        })[];
        events: {
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
        };
        payments: {
            id: string;
            created_at: Date;
            updated_at: Date;
            status: import(".prisma/client").$Enums.payment_status;
            booking_id: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string;
            method: import(".prisma/client").$Enums.payment_method;
            transaction_ref: string | null;
            gateway_ref: string | null;
            paid_at: Date | null;
        }[];
        tickets: {
            id: string;
            created_at: Date;
            ticket_type: string;
            quantity: number;
            unit_price: import("@prisma/client/runtime/library").Decimal;
            booking_id: string;
        }[];
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    })[]>;
    findOne(id: string): Promise<{
        booking_tables: ({
            club_tables: {
                id: string;
                created_at: Date;
                capacity: number;
                status: import(".prisma/client").$Enums.table_status;
                table_number: string;
                section: string | null;
                min_spend: import("@prisma/client/runtime/library").Decimal;
            };
        } & {
            table_id: string;
            booking_id: string;
        })[];
        events: {
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
        };
        payments: {
            id: string;
            created_at: Date;
            updated_at: Date;
            status: import(".prisma/client").$Enums.payment_status;
            booking_id: string;
            amount: import("@prisma/client/runtime/library").Decimal;
            currency: string;
            method: import(".prisma/client").$Enums.payment_method;
            transaction_ref: string | null;
            gateway_ref: string | null;
            paid_at: Date | null;
        }[];
        tickets: {
            id: string;
            created_at: Date;
            ticket_type: string;
            quantity: number;
            unit_price: import("@prisma/client/runtime/library").Decimal;
            booking_id: string;
        }[];
        users: {
            email: string;
            first_name: string;
            last_name: string;
            phone: string | null;
            id: string;
        };
    } & {
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    }>;
    cancel(id: string, userId: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    }>;
    confirm(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    }>;
    complete(id: string): Promise<{
        id: string;
        created_at: Date;
        updated_at: Date;
        status: import(".prisma/client").$Enums.booking_status;
        user_id: string;
        event_id: string;
        guest_count: number;
        special_requests: string | null;
        total_amount: import("@prisma/client/runtime/library").Decimal;
    }>;
}
