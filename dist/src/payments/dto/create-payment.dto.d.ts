import { payment_method } from '@prisma/client';
export declare class CreatePaymentDto {
    booking_id: string;
    method: payment_method;
    phone?: string;
}
