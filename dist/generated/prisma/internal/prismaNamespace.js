"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.VenuesScalarFieldEnum = exports.UsersScalarFieldEnum = exports.TicketsScalarFieldEnum = exports.PromotionsScalarFieldEnum = exports.PaymentsScalarFieldEnum = exports.NotificationsScalarFieldEnum = exports.MediaScalarFieldEnum = exports.EventsScalarFieldEnum = exports.Event_lineupsScalarFieldEnum = exports.DjsScalarFieldEnum = exports.Club_tablesScalarFieldEnum = exports.BookingsScalarFieldEnum = exports.Booking_tablesScalarFieldEnum = exports.Audit_logsScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.8.0",
    engine: "3c6e192761c0362d496ed980de936e2f3cebcd3a"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    audit_logs: 'audit_logs',
    booking_tables: 'booking_tables',
    bookings: 'bookings',
    club_tables: 'club_tables',
    djs: 'djs',
    event_lineups: 'event_lineups',
    events: 'events',
    media: 'media',
    notifications: 'notifications',
    payments: 'payments',
    promotions: 'promotions',
    tickets: 'tickets',
    users: 'users',
    venues: 'venues'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.Audit_logsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    action: 'action',
    entity: 'entity',
    entity_id: 'entity_id',
    description: 'description',
    ip_address: 'ip_address',
    created_at: 'created_at'
};
exports.Booking_tablesScalarFieldEnum = {
    booking_id: 'booking_id',
    table_id: 'table_id'
};
exports.BookingsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    event_id: 'event_id',
    status: 'status',
    guest_count: 'guest_count',
    special_requests: 'special_requests',
    total_amount: 'total_amount',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.Club_tablesScalarFieldEnum = {
    id: 'id',
    table_number: 'table_number',
    section: 'section',
    capacity: 'capacity',
    min_spend: 'min_spend',
    status: 'status',
    created_at: 'created_at'
};
exports.DjsScalarFieldEnum = {
    id: 'id',
    name: 'name',
    bio: 'bio',
    photo_url: 'photo_url',
    instagram: 'instagram',
    soundcloud: 'soundcloud',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.Event_lineupsScalarFieldEnum = {
    id: 'id',
    event_id: 'event_id',
    dj_id: 'dj_id',
    performance_order: 'performance_order',
    start_time: 'start_time',
    end_time: 'end_time'
};
exports.EventsScalarFieldEnum = {
    id: 'id',
    venue_id: 'venue_id',
    title: 'title',
    description: 'description',
    event_date: 'event_date',
    start_time: 'start_time',
    end_time: 'end_time',
    poster_url: 'poster_url',
    ticket_price: 'ticket_price',
    capacity: 'capacity',
    status: 'status',
    created_by: 'created_by',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.MediaScalarFieldEnum = {
    id: 'id',
    event_id: 'event_id',
    url: 'url',
    caption: 'caption',
    media_type: 'media_type',
    uploaded_by: 'uploaded_by',
    created_at: 'created_at'
};
exports.NotificationsScalarFieldEnum = {
    id: 'id',
    user_id: 'user_id',
    type: 'type',
    message: 'message',
    is_read: 'is_read',
    created_at: 'created_at'
};
exports.PaymentsScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    amount: 'amount',
    currency: 'currency',
    method: 'method',
    status: 'status',
    transaction_ref: 'transaction_ref',
    gateway_ref: 'gateway_ref',
    paid_at: 'paid_at',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.PromotionsScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    code: 'code',
    discount_type: 'discount_type',
    discount_value: 'discount_value',
    valid_from: 'valid_from',
    valid_to: 'valid_to',
    max_uses: 'max_uses',
    use_count: 'use_count',
    is_active: 'is_active',
    created_at: 'created_at'
};
exports.TicketsScalarFieldEnum = {
    id: 'id',
    booking_id: 'booking_id',
    ticket_type: 'ticket_type',
    quantity: 'quantity',
    unit_price: 'unit_price',
    created_at: 'created_at'
};
exports.UsersScalarFieldEnum = {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    role: 'role',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
};
exports.VenuesScalarFieldEnum = {
    id: 'id',
    name: 'name',
    description: 'description',
    address: 'address',
    city: 'city',
    capacity: 'capacity',
    created_at: 'created_at'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map