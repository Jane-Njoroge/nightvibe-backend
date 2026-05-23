import { media_type } from '@prisma/client';
export declare class CreateMediaDto {
    url: string;
    caption?: string;
    media_type?: media_type;
    event_id?: string;
}
