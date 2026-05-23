import { PrismaService } from '../prisma/prisma.service';
import { CreatePaymentDto } from './dto/create-payment.dto';
export declare class PaymentsService {
    private prisma;
    constructor(prisma: PrismaService);
    initiate(dto: CreatePaymentDto): Promise<{
        message: string;
        payment: {
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
        };
        transaction_ref: string;
    }>;
    confirm(transactionRef: string, gatewayRef?: string): Promise<{
        message: string;
        payment: {
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
        };
    }>;
    fail(transactionRef: string): Promise<{
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
    }>;
    refund(id: string): Promise<{
        message: string;
        payment: {
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
        };
    }>;
    findAll(): Promise<({
        bookings: {
            events: {
                id: string;
                event_date: Date;
                title: string;
            };
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
        };
    } & {
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
    })[]>;
    findOne(id: string): Promise<{
        bookings: {
            events: {
                id: string;
                event_date: Date;
                title: string;
            };
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
        };
    } & {
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
    }>;
    findByBooking(bookingId: string): Promise<{
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
    }[]>;
}
