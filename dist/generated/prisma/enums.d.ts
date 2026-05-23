export declare const booking_status: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
    readonly NO_SHOW: "NO_SHOW";
};
export type booking_status = (typeof booking_status)[keyof typeof booking_status];
export declare const event_status: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly CANCELLED: "CANCELLED";
    readonly COMPLETED: "COMPLETED";
};
export type event_status = (typeof event_status)[keyof typeof event_status];
export declare const media_type: {
    readonly IMAGE: "IMAGE";
    readonly VIDEO: "VIDEO";
};
export type media_type = (typeof media_type)[keyof typeof media_type];
export declare const notification_type: {
    readonly BOOKING_CONFIRMED: "BOOKING_CONFIRMED";
    readonly BOOKING_CANCELLED: "BOOKING_CANCELLED";
    readonly PAYMENT_SUCCESS: "PAYMENT_SUCCESS";
    readonly PAYMENT_FAILED: "PAYMENT_FAILED";
    readonly EVENT_REMINDER: "EVENT_REMINDER";
    readonly GENERAL: "GENERAL";
};
export type notification_type = (typeof notification_type)[keyof typeof notification_type];
export declare const payment_method: {
    readonly MPESA: "MPESA";
    readonly STRIPE: "STRIPE";
    readonly CASH: "CASH";
};
export type payment_method = (typeof payment_method)[keyof typeof payment_method];
export declare const payment_status: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type payment_status = (typeof payment_status)[keyof typeof payment_status];
export declare const table_status: {
    readonly AVAILABLE: "AVAILABLE";
    readonly RESERVED: "RESERVED";
    readonly MAINTENANCE: "MAINTENANCE";
};
export type table_status = (typeof table_status)[keyof typeof table_status];
export declare const user_role: {
    readonly CUSTOMER: "CUSTOMER";
    readonly STAFF: "STAFF";
    readonly ADMIN: "ADMIN";
};
export type user_role = (typeof user_role)[keyof typeof user_role];
