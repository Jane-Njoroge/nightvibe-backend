import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: any;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: any;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: any;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: any;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: any;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: any;
export declare const empty: any;
export declare const join: any;
export declare const raw: any;
export declare const Sql: any;
export type Sql = runtime.Sql;
export declare const Decimal: any;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: any;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly audit_logs: "audit_logs";
    readonly booking_tables: "booking_tables";
    readonly bookings: "bookings";
    readonly club_tables: "club_tables";
    readonly djs: "djs";
    readonly event_lineups: "event_lineups";
    readonly events: "events";
    readonly media: "media";
    readonly notifications: "notifications";
    readonly payments: "payments";
    readonly promotions: "promotions";
    readonly tickets: "tickets";
    readonly users: "users";
    readonly venues: "venues";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "audit_logs" | "booking_tables" | "bookings" | "club_tables" | "djs" | "event_lineups" | "events" | "media" | "notifications" | "payments" | "promotions" | "tickets" | "users" | "venues";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        audit_logs: {
            payload: Prisma.$audit_logsPayload<ExtArgs>;
            fields: Prisma.audit_logsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.audit_logsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.audit_logsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findFirst: {
                    args: Prisma.audit_logsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.audit_logsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                findMany: {
                    args: Prisma.audit_logsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                create: {
                    args: Prisma.audit_logsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                createMany: {
                    args: Prisma.audit_logsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.audit_logsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                delete: {
                    args: Prisma.audit_logsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                update: {
                    args: Prisma.audit_logsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                deleteMany: {
                    args: Prisma.audit_logsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.audit_logsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.audit_logsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>[];
                };
                upsert: {
                    args: Prisma.audit_logsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$audit_logsPayload>;
                };
                aggregate: {
                    args: Prisma.Audit_logsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAudit_logs>;
                };
                groupBy: {
                    args: Prisma.audit_logsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.audit_logsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Audit_logsCountAggregateOutputType> | number;
                };
            };
        };
        booking_tables: {
            payload: Prisma.$booking_tablesPayload<ExtArgs>;
            fields: Prisma.booking_tablesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.booking_tablesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.booking_tablesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                findFirst: {
                    args: Prisma.booking_tablesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.booking_tablesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                findMany: {
                    args: Prisma.booking_tablesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>[];
                };
                create: {
                    args: Prisma.booking_tablesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                createMany: {
                    args: Prisma.booking_tablesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.booking_tablesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>[];
                };
                delete: {
                    args: Prisma.booking_tablesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                update: {
                    args: Prisma.booking_tablesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                deleteMany: {
                    args: Prisma.booking_tablesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.booking_tablesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.booking_tablesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>[];
                };
                upsert: {
                    args: Prisma.booking_tablesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$booking_tablesPayload>;
                };
                aggregate: {
                    args: Prisma.Booking_tablesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBooking_tables>;
                };
                groupBy: {
                    args: Prisma.booking_tablesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Booking_tablesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.booking_tablesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Booking_tablesCountAggregateOutputType> | number;
                };
            };
        };
        bookings: {
            payload: Prisma.$bookingsPayload<ExtArgs>;
            fields: Prisma.bookingsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.bookingsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.bookingsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findFirst: {
                    args: Prisma.bookingsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.bookingsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                findMany: {
                    args: Prisma.bookingsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                create: {
                    args: Prisma.bookingsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                createMany: {
                    args: Prisma.bookingsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.bookingsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                delete: {
                    args: Prisma.bookingsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                update: {
                    args: Prisma.bookingsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                deleteMany: {
                    args: Prisma.bookingsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.bookingsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.bookingsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>[];
                };
                upsert: {
                    args: Prisma.bookingsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$bookingsPayload>;
                };
                aggregate: {
                    args: Prisma.BookingsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBookings>;
                };
                groupBy: {
                    args: Prisma.bookingsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.bookingsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookingsCountAggregateOutputType> | number;
                };
            };
        };
        club_tables: {
            payload: Prisma.$club_tablesPayload<ExtArgs>;
            fields: Prisma.club_tablesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.club_tablesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.club_tablesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                findFirst: {
                    args: Prisma.club_tablesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.club_tablesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                findMany: {
                    args: Prisma.club_tablesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>[];
                };
                create: {
                    args: Prisma.club_tablesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                createMany: {
                    args: Prisma.club_tablesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.club_tablesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>[];
                };
                delete: {
                    args: Prisma.club_tablesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                update: {
                    args: Prisma.club_tablesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                deleteMany: {
                    args: Prisma.club_tablesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.club_tablesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.club_tablesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>[];
                };
                upsert: {
                    args: Prisma.club_tablesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$club_tablesPayload>;
                };
                aggregate: {
                    args: Prisma.Club_tablesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateClub_tables>;
                };
                groupBy: {
                    args: Prisma.club_tablesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Club_tablesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.club_tablesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Club_tablesCountAggregateOutputType> | number;
                };
            };
        };
        djs: {
            payload: Prisma.$djsPayload<ExtArgs>;
            fields: Prisma.djsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.djsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.djsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                findFirst: {
                    args: Prisma.djsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.djsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                findMany: {
                    args: Prisma.djsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>[];
                };
                create: {
                    args: Prisma.djsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                createMany: {
                    args: Prisma.djsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.djsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>[];
                };
                delete: {
                    args: Prisma.djsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                update: {
                    args: Prisma.djsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                deleteMany: {
                    args: Prisma.djsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.djsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.djsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>[];
                };
                upsert: {
                    args: Prisma.djsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$djsPayload>;
                };
                aggregate: {
                    args: Prisma.DjsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDjs>;
                };
                groupBy: {
                    args: Prisma.djsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DjsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.djsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DjsCountAggregateOutputType> | number;
                };
            };
        };
        event_lineups: {
            payload: Prisma.$event_lineupsPayload<ExtArgs>;
            fields: Prisma.event_lineupsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.event_lineupsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.event_lineupsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                findFirst: {
                    args: Prisma.event_lineupsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.event_lineupsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                findMany: {
                    args: Prisma.event_lineupsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>[];
                };
                create: {
                    args: Prisma.event_lineupsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                createMany: {
                    args: Prisma.event_lineupsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.event_lineupsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>[];
                };
                delete: {
                    args: Prisma.event_lineupsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                update: {
                    args: Prisma.event_lineupsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                deleteMany: {
                    args: Prisma.event_lineupsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.event_lineupsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.event_lineupsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>[];
                };
                upsert: {
                    args: Prisma.event_lineupsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$event_lineupsPayload>;
                };
                aggregate: {
                    args: Prisma.Event_lineupsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvent_lineups>;
                };
                groupBy: {
                    args: Prisma.event_lineupsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Event_lineupsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.event_lineupsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.Event_lineupsCountAggregateOutputType> | number;
                };
            };
        };
        events: {
            payload: Prisma.$eventsPayload<ExtArgs>;
            fields: Prisma.eventsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.eventsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.eventsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                findFirst: {
                    args: Prisma.eventsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.eventsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                findMany: {
                    args: Prisma.eventsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                create: {
                    args: Prisma.eventsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                createMany: {
                    args: Prisma.eventsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.eventsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                delete: {
                    args: Prisma.eventsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                update: {
                    args: Prisma.eventsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                deleteMany: {
                    args: Prisma.eventsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.eventsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.eventsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>[];
                };
                upsert: {
                    args: Prisma.eventsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$eventsPayload>;
                };
                aggregate: {
                    args: Prisma.EventsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateEvents>;
                };
                groupBy: {
                    args: Prisma.eventsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.eventsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.EventsCountAggregateOutputType> | number;
                };
            };
        };
        media: {
            payload: Prisma.$mediaPayload<ExtArgs>;
            fields: Prisma.mediaFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.mediaFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.mediaFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                findFirst: {
                    args: Prisma.mediaFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.mediaFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                findMany: {
                    args: Prisma.mediaFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>[];
                };
                create: {
                    args: Prisma.mediaCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                createMany: {
                    args: Prisma.mediaCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.mediaCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>[];
                };
                delete: {
                    args: Prisma.mediaDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                update: {
                    args: Prisma.mediaUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                deleteMany: {
                    args: Prisma.mediaDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.mediaUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.mediaUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>[];
                };
                upsert: {
                    args: Prisma.mediaUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$mediaPayload>;
                };
                aggregate: {
                    args: Prisma.MediaAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateMedia>;
                };
                groupBy: {
                    args: Prisma.mediaGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaGroupByOutputType>[];
                };
                count: {
                    args: Prisma.mediaCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.MediaCountAggregateOutputType> | number;
                };
            };
        };
        notifications: {
            payload: Prisma.$notificationsPayload<ExtArgs>;
            fields: Prisma.notificationsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.notificationsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.notificationsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findFirst: {
                    args: Prisma.notificationsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.notificationsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                findMany: {
                    args: Prisma.notificationsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                create: {
                    args: Prisma.notificationsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                createMany: {
                    args: Prisma.notificationsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.notificationsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                delete: {
                    args: Prisma.notificationsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                update: {
                    args: Prisma.notificationsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                deleteMany: {
                    args: Prisma.notificationsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.notificationsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.notificationsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>[];
                };
                upsert: {
                    args: Prisma.notificationsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$notificationsPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotifications>;
                };
                groupBy: {
                    args: Prisma.notificationsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.notificationsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationsCountAggregateOutputType> | number;
                };
            };
        };
        payments: {
            payload: Prisma.$paymentsPayload<ExtArgs>;
            fields: Prisma.paymentsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.paymentsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.paymentsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findFirst: {
                    args: Prisma.paymentsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.paymentsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                findMany: {
                    args: Prisma.paymentsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                create: {
                    args: Prisma.paymentsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                createMany: {
                    args: Prisma.paymentsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.paymentsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                delete: {
                    args: Prisma.paymentsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                update: {
                    args: Prisma.paymentsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                deleteMany: {
                    args: Prisma.paymentsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.paymentsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.paymentsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>[];
                };
                upsert: {
                    args: Prisma.paymentsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$paymentsPayload>;
                };
                aggregate: {
                    args: Prisma.PaymentsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePayments>;
                };
                groupBy: {
                    args: Prisma.paymentsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.paymentsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PaymentsCountAggregateOutputType> | number;
                };
            };
        };
        promotions: {
            payload: Prisma.$promotionsPayload<ExtArgs>;
            fields: Prisma.promotionsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.promotionsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.promotionsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findFirst: {
                    args: Prisma.promotionsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.promotionsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                findMany: {
                    args: Prisma.promotionsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                create: {
                    args: Prisma.promotionsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                createMany: {
                    args: Prisma.promotionsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.promotionsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                delete: {
                    args: Prisma.promotionsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                update: {
                    args: Prisma.promotionsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                deleteMany: {
                    args: Prisma.promotionsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.promotionsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.promotionsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>[];
                };
                upsert: {
                    args: Prisma.promotionsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$promotionsPayload>;
                };
                aggregate: {
                    args: Prisma.PromotionsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregatePromotions>;
                };
                groupBy: {
                    args: Prisma.promotionsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.promotionsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.PromotionsCountAggregateOutputType> | number;
                };
            };
        };
        tickets: {
            payload: Prisma.$ticketsPayload<ExtArgs>;
            fields: Prisma.ticketsFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ticketsFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ticketsFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                findFirst: {
                    args: Prisma.ticketsFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ticketsFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                findMany: {
                    args: Prisma.ticketsFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>[];
                };
                create: {
                    args: Prisma.ticketsCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                createMany: {
                    args: Prisma.ticketsCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ticketsCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>[];
                };
                delete: {
                    args: Prisma.ticketsDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                update: {
                    args: Prisma.ticketsUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                deleteMany: {
                    args: Prisma.ticketsDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ticketsUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ticketsUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>[];
                };
                upsert: {
                    args: Prisma.ticketsUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ticketsPayload>;
                };
                aggregate: {
                    args: Prisma.TicketsAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateTickets>;
                };
                groupBy: {
                    args: Prisma.ticketsGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketsGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ticketsCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.TicketsCountAggregateOutputType> | number;
                };
            };
        };
        users: {
            payload: Prisma.$usersPayload<ExtArgs>;
            fields: Prisma.usersFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.usersFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findFirst: {
                    args: Prisma.usersFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                findMany: {
                    args: Prisma.usersFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                create: {
                    args: Prisma.usersCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                createMany: {
                    args: Prisma.usersCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                delete: {
                    args: Prisma.usersDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                update: {
                    args: Prisma.usersUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                deleteMany: {
                    args: Prisma.usersDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.usersUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>[];
                };
                upsert: {
                    args: Prisma.usersUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$usersPayload>;
                };
                aggregate: {
                    args: Prisma.UsersAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUsers>;
                };
                groupBy: {
                    args: Prisma.usersGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersGroupByOutputType>[];
                };
                count: {
                    args: Prisma.usersCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UsersCountAggregateOutputType> | number;
                };
            };
        };
        venues: {
            payload: Prisma.$venuesPayload<ExtArgs>;
            fields: Prisma.venuesFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.venuesFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.venuesFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                findFirst: {
                    args: Prisma.venuesFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.venuesFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                findMany: {
                    args: Prisma.venuesFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>[];
                };
                create: {
                    args: Prisma.venuesCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                createMany: {
                    args: Prisma.venuesCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.venuesCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>[];
                };
                delete: {
                    args: Prisma.venuesDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                update: {
                    args: Prisma.venuesUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                deleteMany: {
                    args: Prisma.venuesDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.venuesUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.venuesUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>[];
                };
                upsert: {
                    args: Prisma.venuesUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$venuesPayload>;
                };
                aggregate: {
                    args: Prisma.VenuesAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateVenues>;
                };
                groupBy: {
                    args: Prisma.venuesGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenuesGroupByOutputType>[];
                };
                count: {
                    args: Prisma.venuesCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.VenuesCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const Audit_logsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly action: "action";
    readonly entity: "entity";
    readonly entity_id: "entity_id";
    readonly description: "description";
    readonly ip_address: "ip_address";
    readonly created_at: "created_at";
};
export type Audit_logsScalarFieldEnum = (typeof Audit_logsScalarFieldEnum)[keyof typeof Audit_logsScalarFieldEnum];
export declare const Booking_tablesScalarFieldEnum: {
    readonly booking_id: "booking_id";
    readonly table_id: "table_id";
};
export type Booking_tablesScalarFieldEnum = (typeof Booking_tablesScalarFieldEnum)[keyof typeof Booking_tablesScalarFieldEnum];
export declare const BookingsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly event_id: "event_id";
    readonly status: "status";
    readonly guest_count: "guest_count";
    readonly special_requests: "special_requests";
    readonly total_amount: "total_amount";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type BookingsScalarFieldEnum = (typeof BookingsScalarFieldEnum)[keyof typeof BookingsScalarFieldEnum];
export declare const Club_tablesScalarFieldEnum: {
    readonly id: "id";
    readonly table_number: "table_number";
    readonly section: "section";
    readonly capacity: "capacity";
    readonly min_spend: "min_spend";
    readonly status: "status";
    readonly created_at: "created_at";
};
export type Club_tablesScalarFieldEnum = (typeof Club_tablesScalarFieldEnum)[keyof typeof Club_tablesScalarFieldEnum];
export declare const DjsScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly bio: "bio";
    readonly photo_url: "photo_url";
    readonly instagram: "instagram";
    readonly soundcloud: "soundcloud";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type DjsScalarFieldEnum = (typeof DjsScalarFieldEnum)[keyof typeof DjsScalarFieldEnum];
export declare const Event_lineupsScalarFieldEnum: {
    readonly id: "id";
    readonly event_id: "event_id";
    readonly dj_id: "dj_id";
    readonly performance_order: "performance_order";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
};
export type Event_lineupsScalarFieldEnum = (typeof Event_lineupsScalarFieldEnum)[keyof typeof Event_lineupsScalarFieldEnum];
export declare const EventsScalarFieldEnum: {
    readonly id: "id";
    readonly venue_id: "venue_id";
    readonly title: "title";
    readonly description: "description";
    readonly event_date: "event_date";
    readonly start_time: "start_time";
    readonly end_time: "end_time";
    readonly poster_url: "poster_url";
    readonly ticket_price: "ticket_price";
    readonly capacity: "capacity";
    readonly status: "status";
    readonly created_by: "created_by";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type EventsScalarFieldEnum = (typeof EventsScalarFieldEnum)[keyof typeof EventsScalarFieldEnum];
export declare const MediaScalarFieldEnum: {
    readonly id: "id";
    readonly event_id: "event_id";
    readonly url: "url";
    readonly caption: "caption";
    readonly media_type: "media_type";
    readonly uploaded_by: "uploaded_by";
    readonly created_at: "created_at";
};
export type MediaScalarFieldEnum = (typeof MediaScalarFieldEnum)[keyof typeof MediaScalarFieldEnum];
export declare const NotificationsScalarFieldEnum: {
    readonly id: "id";
    readonly user_id: "user_id";
    readonly type: "type";
    readonly message: "message";
    readonly is_read: "is_read";
    readonly created_at: "created_at";
};
export type NotificationsScalarFieldEnum = (typeof NotificationsScalarFieldEnum)[keyof typeof NotificationsScalarFieldEnum];
export declare const PaymentsScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly amount: "amount";
    readonly currency: "currency";
    readonly method: "method";
    readonly status: "status";
    readonly transaction_ref: "transaction_ref";
    readonly gateway_ref: "gateway_ref";
    readonly paid_at: "paid_at";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type PaymentsScalarFieldEnum = (typeof PaymentsScalarFieldEnum)[keyof typeof PaymentsScalarFieldEnum];
export declare const PromotionsScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly code: "code";
    readonly discount_type: "discount_type";
    readonly discount_value: "discount_value";
    readonly valid_from: "valid_from";
    readonly valid_to: "valid_to";
    readonly max_uses: "max_uses";
    readonly use_count: "use_count";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
};
export type PromotionsScalarFieldEnum = (typeof PromotionsScalarFieldEnum)[keyof typeof PromotionsScalarFieldEnum];
export declare const TicketsScalarFieldEnum: {
    readonly id: "id";
    readonly booking_id: "booking_id";
    readonly ticket_type: "ticket_type";
    readonly quantity: "quantity";
    readonly unit_price: "unit_price";
    readonly created_at: "created_at";
};
export type TicketsScalarFieldEnum = (typeof TicketsScalarFieldEnum)[keyof typeof TicketsScalarFieldEnum];
export declare const UsersScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly password_hash: "password_hash";
    readonly first_name: "first_name";
    readonly last_name: "last_name";
    readonly phone: "phone";
    readonly role: "role";
    readonly is_active: "is_active";
    readonly created_at: "created_at";
    readonly updated_at: "updated_at";
};
export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum];
export declare const VenuesScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly description: "description";
    readonly address: "address";
    readonly city: "city";
    readonly capacity: "capacity";
    readonly created_at: "created_at";
};
export type VenuesScalarFieldEnum = (typeof VenuesScalarFieldEnum)[keyof typeof VenuesScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type Enumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status'>;
export type ListEnumbooking_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'booking_status[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type Enumtable_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'table_status'>;
export type ListEnumtable_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'table_status[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type Enumevent_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'event_status'>;
export type ListEnumevent_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'event_status[]'>;
export type Enummedia_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'media_type'>;
export type ListEnummedia_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'media_type[]'>;
export type Enumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type'>;
export type ListEnumnotification_typeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'notification_type[]'>;
export type Enumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method'>;
export type ListEnumpayment_methodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_method[]'>;
export type Enumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status'>;
export type ListEnumpayment_statusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'payment_status[]'>;
export type Enumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role'>;
export type ListEnumuser_roleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'user_role[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export type PrismaClientOptions = ({
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
} | {
    accelerateUrl: string;
    adapter?: never;
}) & {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
};
export type GlobalOmitConfig = {
    audit_logs?: Prisma.audit_logsOmit;
    booking_tables?: Prisma.booking_tablesOmit;
    bookings?: Prisma.bookingsOmit;
    club_tables?: Prisma.club_tablesOmit;
    djs?: Prisma.djsOmit;
    event_lineups?: Prisma.event_lineupsOmit;
    events?: Prisma.eventsOmit;
    media?: Prisma.mediaOmit;
    notifications?: Prisma.notificationsOmit;
    payments?: Prisma.paymentsOmit;
    promotions?: Prisma.promotionsOmit;
    tickets?: Prisma.ticketsOmit;
    users?: Prisma.usersOmit;
    venues?: Prisma.venuesOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
