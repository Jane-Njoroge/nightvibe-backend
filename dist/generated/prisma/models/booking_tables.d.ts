import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type booking_tablesModel = runtime.Types.Result.DefaultSelection<Prisma.$booking_tablesPayload>;
export type AggregateBooking_tables = {
    _count: Booking_tablesCountAggregateOutputType | null;
    _min: Booking_tablesMinAggregateOutputType | null;
    _max: Booking_tablesMaxAggregateOutputType | null;
};
export type Booking_tablesMinAggregateOutputType = {
    booking_id: string | null;
    table_id: string | null;
};
export type Booking_tablesMaxAggregateOutputType = {
    booking_id: string | null;
    table_id: string | null;
};
export type Booking_tablesCountAggregateOutputType = {
    booking_id: number;
    table_id: number;
    _all: number;
};
export type Booking_tablesMinAggregateInputType = {
    booking_id?: true;
    table_id?: true;
};
export type Booking_tablesMaxAggregateInputType = {
    booking_id?: true;
    table_id?: true;
};
export type Booking_tablesCountAggregateInputType = {
    booking_id?: true;
    table_id?: true;
    _all?: true;
};
export type Booking_tablesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.booking_tablesWhereInput;
    orderBy?: Prisma.booking_tablesOrderByWithRelationInput | Prisma.booking_tablesOrderByWithRelationInput[];
    cursor?: Prisma.booking_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Booking_tablesCountAggregateInputType;
    _min?: Booking_tablesMinAggregateInputType;
    _max?: Booking_tablesMaxAggregateInputType;
};
export type GetBooking_tablesAggregateType<T extends Booking_tablesAggregateArgs> = {
    [P in keyof T & keyof AggregateBooking_tables]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBooking_tables[P]> : Prisma.GetScalarType<T[P], AggregateBooking_tables[P]>;
};
export type booking_tablesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.booking_tablesWhereInput;
    orderBy?: Prisma.booking_tablesOrderByWithAggregationInput | Prisma.booking_tablesOrderByWithAggregationInput[];
    by: Prisma.Booking_tablesScalarFieldEnum[] | Prisma.Booking_tablesScalarFieldEnum;
    having?: Prisma.booking_tablesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Booking_tablesCountAggregateInputType | true;
    _min?: Booking_tablesMinAggregateInputType;
    _max?: Booking_tablesMaxAggregateInputType;
};
export type Booking_tablesGroupByOutputType = {
    booking_id: string;
    table_id: string;
    _count: Booking_tablesCountAggregateOutputType | null;
    _min: Booking_tablesMinAggregateOutputType | null;
    _max: Booking_tablesMaxAggregateOutputType | null;
};
export type GetBooking_tablesGroupByPayload<T extends booking_tablesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Booking_tablesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Booking_tablesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Booking_tablesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Booking_tablesGroupByOutputType[P]>;
}>>;
export type booking_tablesWhereInput = {
    AND?: Prisma.booking_tablesWhereInput | Prisma.booking_tablesWhereInput[];
    OR?: Prisma.booking_tablesWhereInput[];
    NOT?: Prisma.booking_tablesWhereInput | Prisma.booking_tablesWhereInput[];
    booking_id?: Prisma.UuidFilter<"booking_tables"> | string;
    table_id?: Prisma.UuidFilter<"booking_tables"> | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
    club_tables?: Prisma.XOR<Prisma.Club_tablesScalarRelationFilter, Prisma.club_tablesWhereInput>;
};
export type booking_tablesOrderByWithRelationInput = {
    booking_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByWithRelationInput;
    club_tables?: Prisma.club_tablesOrderByWithRelationInput;
};
export type booking_tablesWhereUniqueInput = Prisma.AtLeast<{
    booking_id_table_id?: Prisma.booking_tablesBooking_idTable_idCompoundUniqueInput;
    AND?: Prisma.booking_tablesWhereInput | Prisma.booking_tablesWhereInput[];
    OR?: Prisma.booking_tablesWhereInput[];
    NOT?: Prisma.booking_tablesWhereInput | Prisma.booking_tablesWhereInput[];
    booking_id?: Prisma.UuidFilter<"booking_tables"> | string;
    table_id?: Prisma.UuidFilter<"booking_tables"> | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
    club_tables?: Prisma.XOR<Prisma.Club_tablesScalarRelationFilter, Prisma.club_tablesWhereInput>;
}, "booking_id_table_id">;
export type booking_tablesOrderByWithAggregationInput = {
    booking_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
    _count?: Prisma.booking_tablesCountOrderByAggregateInput;
    _max?: Prisma.booking_tablesMaxOrderByAggregateInput;
    _min?: Prisma.booking_tablesMinOrderByAggregateInput;
};
export type booking_tablesScalarWhereWithAggregatesInput = {
    AND?: Prisma.booking_tablesScalarWhereWithAggregatesInput | Prisma.booking_tablesScalarWhereWithAggregatesInput[];
    OR?: Prisma.booking_tablesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.booking_tablesScalarWhereWithAggregatesInput | Prisma.booking_tablesScalarWhereWithAggregatesInput[];
    booking_id?: Prisma.UuidWithAggregatesFilter<"booking_tables"> | string;
    table_id?: Prisma.UuidWithAggregatesFilter<"booking_tables"> | string;
};
export type booking_tablesCreateInput = {
    bookings: Prisma.bookingsCreateNestedOneWithoutBooking_tablesInput;
    club_tables: Prisma.club_tablesCreateNestedOneWithoutBooking_tablesInput;
};
export type booking_tablesUncheckedCreateInput = {
    booking_id: string;
    table_id: string;
};
export type booking_tablesUpdateInput = {
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutBooking_tablesNestedInput;
    club_tables?: Prisma.club_tablesUpdateOneRequiredWithoutBooking_tablesNestedInput;
};
export type booking_tablesUncheckedUpdateInput = {
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesCreateManyInput = {
    booking_id: string;
    table_id: string;
};
export type booking_tablesUpdateManyMutationInput = {};
export type booking_tablesUncheckedUpdateManyInput = {
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesBooking_idTable_idCompoundUniqueInput = {
    booking_id: string;
    table_id: string;
};
export type booking_tablesCountOrderByAggregateInput = {
    booking_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
};
export type booking_tablesMaxOrderByAggregateInput = {
    booking_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
};
export type booking_tablesMinOrderByAggregateInput = {
    booking_id?: Prisma.SortOrder;
    table_id?: Prisma.SortOrder;
};
export type Booking_tablesListRelationFilter = {
    every?: Prisma.booking_tablesWhereInput;
    some?: Prisma.booking_tablesWhereInput;
    none?: Prisma.booking_tablesWhereInput;
};
export type booking_tablesOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type booking_tablesCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput> | Prisma.booking_tablesCreateWithoutBookingsInput[] | Prisma.booking_tablesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutBookingsInput | Prisma.booking_tablesCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.booking_tablesCreateManyBookingsInputEnvelope;
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
};
export type booking_tablesUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput> | Prisma.booking_tablesCreateWithoutBookingsInput[] | Prisma.booking_tablesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutBookingsInput | Prisma.booking_tablesCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.booking_tablesCreateManyBookingsInputEnvelope;
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
};
export type booking_tablesUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput> | Prisma.booking_tablesCreateWithoutBookingsInput[] | Prisma.booking_tablesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutBookingsInput | Prisma.booking_tablesCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.booking_tablesUpsertWithWhereUniqueWithoutBookingsInput | Prisma.booking_tablesUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.booking_tablesCreateManyBookingsInputEnvelope;
    set?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    disconnect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    delete?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    update?: Prisma.booking_tablesUpdateWithWhereUniqueWithoutBookingsInput | Prisma.booking_tablesUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.booking_tablesUpdateManyWithWhereWithoutBookingsInput | Prisma.booking_tablesUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
};
export type booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput> | Prisma.booking_tablesCreateWithoutBookingsInput[] | Prisma.booking_tablesUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutBookingsInput | Prisma.booking_tablesCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.booking_tablesUpsertWithWhereUniqueWithoutBookingsInput | Prisma.booking_tablesUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.booking_tablesCreateManyBookingsInputEnvelope;
    set?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    disconnect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    delete?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    update?: Prisma.booking_tablesUpdateWithWhereUniqueWithoutBookingsInput | Prisma.booking_tablesUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.booking_tablesUpdateManyWithWhereWithoutBookingsInput | Prisma.booking_tablesUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
};
export type booking_tablesCreateNestedManyWithoutClub_tablesInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput> | Prisma.booking_tablesCreateWithoutClub_tablesInput[] | Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput | Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput[];
    createMany?: Prisma.booking_tablesCreateManyClub_tablesInputEnvelope;
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
};
export type booking_tablesUncheckedCreateNestedManyWithoutClub_tablesInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput> | Prisma.booking_tablesCreateWithoutClub_tablesInput[] | Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput | Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput[];
    createMany?: Prisma.booking_tablesCreateManyClub_tablesInputEnvelope;
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
};
export type booking_tablesUpdateManyWithoutClub_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput> | Prisma.booking_tablesCreateWithoutClub_tablesInput[] | Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput | Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput[];
    upsert?: Prisma.booking_tablesUpsertWithWhereUniqueWithoutClub_tablesInput | Prisma.booking_tablesUpsertWithWhereUniqueWithoutClub_tablesInput[];
    createMany?: Prisma.booking_tablesCreateManyClub_tablesInputEnvelope;
    set?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    disconnect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    delete?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    update?: Prisma.booking_tablesUpdateWithWhereUniqueWithoutClub_tablesInput | Prisma.booking_tablesUpdateWithWhereUniqueWithoutClub_tablesInput[];
    updateMany?: Prisma.booking_tablesUpdateManyWithWhereWithoutClub_tablesInput | Prisma.booking_tablesUpdateManyWithWhereWithoutClub_tablesInput[];
    deleteMany?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
};
export type booking_tablesUncheckedUpdateManyWithoutClub_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput> | Prisma.booking_tablesCreateWithoutClub_tablesInput[] | Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput[];
    connectOrCreate?: Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput | Prisma.booking_tablesCreateOrConnectWithoutClub_tablesInput[];
    upsert?: Prisma.booking_tablesUpsertWithWhereUniqueWithoutClub_tablesInput | Prisma.booking_tablesUpsertWithWhereUniqueWithoutClub_tablesInput[];
    createMany?: Prisma.booking_tablesCreateManyClub_tablesInputEnvelope;
    set?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    disconnect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    delete?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    connect?: Prisma.booking_tablesWhereUniqueInput | Prisma.booking_tablesWhereUniqueInput[];
    update?: Prisma.booking_tablesUpdateWithWhereUniqueWithoutClub_tablesInput | Prisma.booking_tablesUpdateWithWhereUniqueWithoutClub_tablesInput[];
    updateMany?: Prisma.booking_tablesUpdateManyWithWhereWithoutClub_tablesInput | Prisma.booking_tablesUpdateManyWithWhereWithoutClub_tablesInput[];
    deleteMany?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
};
export type booking_tablesCreateWithoutBookingsInput = {
    club_tables: Prisma.club_tablesCreateNestedOneWithoutBooking_tablesInput;
};
export type booking_tablesUncheckedCreateWithoutBookingsInput = {
    table_id: string;
};
export type booking_tablesCreateOrConnectWithoutBookingsInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput>;
};
export type booking_tablesCreateManyBookingsInputEnvelope = {
    data: Prisma.booking_tablesCreateManyBookingsInput | Prisma.booking_tablesCreateManyBookingsInput[];
    skipDuplicates?: boolean;
};
export type booking_tablesUpsertWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    update: Prisma.XOR<Prisma.booking_tablesUpdateWithoutBookingsInput, Prisma.booking_tablesUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.booking_tablesCreateWithoutBookingsInput, Prisma.booking_tablesUncheckedCreateWithoutBookingsInput>;
};
export type booking_tablesUpdateWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    data: Prisma.XOR<Prisma.booking_tablesUpdateWithoutBookingsInput, Prisma.booking_tablesUncheckedUpdateWithoutBookingsInput>;
};
export type booking_tablesUpdateManyWithWhereWithoutBookingsInput = {
    where: Prisma.booking_tablesScalarWhereInput;
    data: Prisma.XOR<Prisma.booking_tablesUpdateManyMutationInput, Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsInput>;
};
export type booking_tablesScalarWhereInput = {
    AND?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
    OR?: Prisma.booking_tablesScalarWhereInput[];
    NOT?: Prisma.booking_tablesScalarWhereInput | Prisma.booking_tablesScalarWhereInput[];
    booking_id?: Prisma.UuidFilter<"booking_tables"> | string;
    table_id?: Prisma.UuidFilter<"booking_tables"> | string;
};
export type booking_tablesCreateWithoutClub_tablesInput = {
    bookings: Prisma.bookingsCreateNestedOneWithoutBooking_tablesInput;
};
export type booking_tablesUncheckedCreateWithoutClub_tablesInput = {
    booking_id: string;
};
export type booking_tablesCreateOrConnectWithoutClub_tablesInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput>;
};
export type booking_tablesCreateManyClub_tablesInputEnvelope = {
    data: Prisma.booking_tablesCreateManyClub_tablesInput | Prisma.booking_tablesCreateManyClub_tablesInput[];
    skipDuplicates?: boolean;
};
export type booking_tablesUpsertWithWhereUniqueWithoutClub_tablesInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    update: Prisma.XOR<Prisma.booking_tablesUpdateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedUpdateWithoutClub_tablesInput>;
    create: Prisma.XOR<Prisma.booking_tablesCreateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedCreateWithoutClub_tablesInput>;
};
export type booking_tablesUpdateWithWhereUniqueWithoutClub_tablesInput = {
    where: Prisma.booking_tablesWhereUniqueInput;
    data: Prisma.XOR<Prisma.booking_tablesUpdateWithoutClub_tablesInput, Prisma.booking_tablesUncheckedUpdateWithoutClub_tablesInput>;
};
export type booking_tablesUpdateManyWithWhereWithoutClub_tablesInput = {
    where: Prisma.booking_tablesScalarWhereInput;
    data: Prisma.XOR<Prisma.booking_tablesUpdateManyMutationInput, Prisma.booking_tablesUncheckedUpdateManyWithoutClub_tablesInput>;
};
export type booking_tablesCreateManyBookingsInput = {
    table_id: string;
};
export type booking_tablesUpdateWithoutBookingsInput = {
    club_tables?: Prisma.club_tablesUpdateOneRequiredWithoutBooking_tablesNestedInput;
};
export type booking_tablesUncheckedUpdateWithoutBookingsInput = {
    table_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesUncheckedUpdateManyWithoutBookingsInput = {
    table_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesCreateManyClub_tablesInput = {
    booking_id: string;
};
export type booking_tablesUpdateWithoutClub_tablesInput = {
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutBooking_tablesNestedInput;
};
export type booking_tablesUncheckedUpdateWithoutClub_tablesInput = {
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesUncheckedUpdateManyWithoutClub_tablesInput = {
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type booking_tablesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    booking_id?: boolean;
    table_id?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["booking_tables"]>;
export type booking_tablesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    booking_id?: boolean;
    table_id?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["booking_tables"]>;
export type booking_tablesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    booking_id?: boolean;
    table_id?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["booking_tables"]>;
export type booking_tablesSelectScalar = {
    booking_id?: boolean;
    table_id?: boolean;
};
export type booking_tablesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"booking_id" | "table_id", ExtArgs["result"]["booking_tables"]>;
export type booking_tablesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
};
export type booking_tablesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
};
export type booking_tablesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
    club_tables?: boolean | Prisma.club_tablesDefaultArgs<ExtArgs>;
};
export type $booking_tablesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "booking_tables";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>;
        club_tables: Prisma.$club_tablesPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        booking_id: string;
        table_id: string;
    }, ExtArgs["result"]["booking_tables"]>;
    composites: {};
};
export type booking_tablesGetPayload<S extends boolean | null | undefined | booking_tablesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload, S>;
export type booking_tablesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<booking_tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Booking_tablesCountAggregateInputType | true;
};
export interface booking_tablesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['booking_tables'];
        meta: {
            name: 'booking_tables';
        };
    };
    findUnique<T extends booking_tablesFindUniqueArgs>(args: Prisma.SelectSubset<T, booking_tablesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends booking_tablesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, booking_tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends booking_tablesFindFirstArgs>(args?: Prisma.SelectSubset<T, booking_tablesFindFirstArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends booking_tablesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, booking_tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends booking_tablesFindManyArgs>(args?: Prisma.SelectSubset<T, booking_tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends booking_tablesCreateArgs>(args: Prisma.SelectSubset<T, booking_tablesCreateArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends booking_tablesCreateManyArgs>(args?: Prisma.SelectSubset<T, booking_tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends booking_tablesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, booking_tablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends booking_tablesDeleteArgs>(args: Prisma.SelectSubset<T, booking_tablesDeleteArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends booking_tablesUpdateArgs>(args: Prisma.SelectSubset<T, booking_tablesUpdateArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends booking_tablesDeleteManyArgs>(args?: Prisma.SelectSubset<T, booking_tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends booking_tablesUpdateManyArgs>(args: Prisma.SelectSubset<T, booking_tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends booking_tablesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, booking_tablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends booking_tablesUpsertArgs>(args: Prisma.SelectSubset<T, booking_tablesUpsertArgs<ExtArgs>>): Prisma.Prisma__booking_tablesClient<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends booking_tablesCountArgs>(args?: Prisma.Subset<T, booking_tablesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Booking_tablesCountAggregateOutputType> : number>;
    aggregate<T extends Booking_tablesAggregateArgs>(args: Prisma.Subset<T, Booking_tablesAggregateArgs>): Prisma.PrismaPromise<GetBooking_tablesAggregateType<T>>;
    groupBy<T extends booking_tablesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: booking_tablesGroupByArgs['orderBy'];
    } : {
        orderBy?: booking_tablesGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, booking_tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBooking_tablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: booking_tablesFieldRefs;
}
export interface Prisma__booking_tablesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.bookingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookingsDefaultArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    club_tables<T extends Prisma.club_tablesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.club_tablesDefaultArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface booking_tablesFieldRefs {
    readonly booking_id: Prisma.FieldRef<"booking_tables", 'String'>;
    readonly table_id: Prisma.FieldRef<"booking_tables", 'String'>;
}
export type booking_tablesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where: Prisma.booking_tablesWhereUniqueInput;
};
export type booking_tablesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where: Prisma.booking_tablesWhereUniqueInput;
};
export type booking_tablesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where?: Prisma.booking_tablesWhereInput;
    orderBy?: Prisma.booking_tablesOrderByWithRelationInput | Prisma.booking_tablesOrderByWithRelationInput[];
    cursor?: Prisma.booking_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Booking_tablesScalarFieldEnum | Prisma.Booking_tablesScalarFieldEnum[];
};
export type booking_tablesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where?: Prisma.booking_tablesWhereInput;
    orderBy?: Prisma.booking_tablesOrderByWithRelationInput | Prisma.booking_tablesOrderByWithRelationInput[];
    cursor?: Prisma.booking_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Booking_tablesScalarFieldEnum | Prisma.Booking_tablesScalarFieldEnum[];
};
export type booking_tablesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where?: Prisma.booking_tablesWhereInput;
    orderBy?: Prisma.booking_tablesOrderByWithRelationInput | Prisma.booking_tablesOrderByWithRelationInput[];
    cursor?: Prisma.booking_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Booking_tablesScalarFieldEnum | Prisma.Booking_tablesScalarFieldEnum[];
};
export type booking_tablesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.booking_tablesCreateInput, Prisma.booking_tablesUncheckedCreateInput>;
};
export type booking_tablesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.booking_tablesCreateManyInput | Prisma.booking_tablesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type booking_tablesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    data: Prisma.booking_tablesCreateManyInput | Prisma.booking_tablesCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.booking_tablesIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type booking_tablesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.booking_tablesUpdateInput, Prisma.booking_tablesUncheckedUpdateInput>;
    where: Prisma.booking_tablesWhereUniqueInput;
};
export type booking_tablesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.booking_tablesUpdateManyMutationInput, Prisma.booking_tablesUncheckedUpdateManyInput>;
    where?: Prisma.booking_tablesWhereInput;
    limit?: number;
};
export type booking_tablesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.booking_tablesUpdateManyMutationInput, Prisma.booking_tablesUncheckedUpdateManyInput>;
    where?: Prisma.booking_tablesWhereInput;
    limit?: number;
    include?: Prisma.booking_tablesIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type booking_tablesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where: Prisma.booking_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.booking_tablesCreateInput, Prisma.booking_tablesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.booking_tablesUpdateInput, Prisma.booking_tablesUncheckedUpdateInput>;
};
export type booking_tablesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
    where: Prisma.booking_tablesWhereUniqueInput;
};
export type booking_tablesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.booking_tablesWhereInput;
    limit?: number;
};
export type booking_tablesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.booking_tablesSelect<ExtArgs> | null;
    omit?: Prisma.booking_tablesOmit<ExtArgs> | null;
    include?: Prisma.booking_tablesInclude<ExtArgs> | null;
};
