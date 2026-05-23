"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_role = exports.table_status = exports.payment_status = exports.payment_method = exports.notification_type = exports.media_type = exports.event_status = exports.booking_status = void 0;
exports.booking_status = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
    NO_SHOW: 'NO_SHOW'
};
exports.event_status = {
    DRAFT: 'DRAFT',
    PUBLISHED: 'PUBLISHED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED'
};
exports.media_type = {
    IMAGE: 'IMAGE',
    VIDEO: 'VIDEO'
};
exports.notification_type = {
    BOOKING_CONFIRMED: 'BOOKING_CONFIRMED',
    BOOKING_CANCELLED: 'BOOKING_CANCELLED',
    PAYMENT_SUCCESS: 'PAYMENT_SUCCESS',
    PAYMENT_FAILED: 'PAYMENT_FAILED',
    EVENT_REMINDER: 'EVENT_REMINDER',
    GENERAL: 'GENERAL'
};
exports.payment_method = {
    MPESA: 'MPESA',
    STRIPE: 'STRIPE',
    CASH: 'CASH'
};
exports.payment_status = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED'
};
exports.table_status = {
    AVAILABLE: 'AVAILABLE',
    RESERVED: 'RESERVED',
    MAINTENANCE: 'MAINTENANCE'
};
exports.user_role = {
    CUSTOMER: 'CUSTOMER',
    STAFF: 'STAFF',
    ADMIN: 'ADMIN'
};
//# sourceMappingURL=enums.js.map