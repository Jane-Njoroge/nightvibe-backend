import { event_status } from '@prisma/client';
export declare class CreateEventDto {
    venue_id: string;
    title: string;
    description?: string;
    event_date: string;
    start_time: string;
    end_time?: string;
    poster_url?: string;
    ticket_price: number;
    capacity: number;
    status?: event_status;
}
