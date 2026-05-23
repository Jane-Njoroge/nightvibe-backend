import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type ticketsModel = runtime.Types.Result.DefaultSelection<Prisma.$ticketsPayload>;
export type AggregateTickets = {
    _count: TicketsCountAggregateOutputType | null;
    _avg: TicketsAvgAggregateOutputType | null;
    _sum: TicketsSumAggregateOutputType | null;
    _min: TicketsMinAggregateOutputType | null;
    _max: TicketsMaxAggregateOutputType | null;
};
export type TicketsAvgAggregateOutputType = {
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type TicketsSumAggregateOutputType = {
    quantity: number | null;
    unit_price: runtime.Decimal | null;
};
export type TicketsMinAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    ticket_type: string | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    created_at: Date | null;
};
export type TicketsMaxAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    ticket_type: string | null;
    quantity: number | null;
    unit_price: runtime.Decimal | null;
    created_at: Date | null;
};
export type TicketsCountAggregateOutputType = {
    id: number;
    booking_id: number;
    ticket_type: number;
    quantity: number;
    unit_price: number;
    created_at: number;
    _all: number;
};
export type TicketsAvgAggregateInputType = {
    quantity?: true;
    unit_price?: true;
};
export type TicketsSumAggregateInputType = {
    quantity?: true;
    unit_price?: true;
};
export type TicketsMinAggregateInputType = {
    id?: true;
    booking_id?: true;
    ticket_type?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
};
export type TicketsMaxAggregateInputType = {
    id?: true;
    booking_id?: true;
    ticket_type?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
};
export type TicketsCountAggregateInputType = {
    id?: true;
    booking_id?: true;
    ticket_type?: true;
    quantity?: true;
    unit_price?: true;
    created_at?: true;
    _all?: true;
};
export type TicketsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketsWhereInput;
    orderBy?: Prisma.ticketsOrderByWithRelationInput | Prisma.ticketsOrderByWithRelationInput[];
    cursor?: Prisma.ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TicketsCountAggregateInputType;
    _avg?: TicketsAvgAggregateInputType;
    _sum?: TicketsSumAggregateInputType;
    _min?: TicketsMinAggregateInputType;
    _max?: TicketsMaxAggregateInputType;
};
export type GetTicketsAggregateType<T extends TicketsAggregateArgs> = {
    [P in keyof T & keyof AggregateTickets]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTickets[P]> : Prisma.GetScalarType<T[P], AggregateTickets[P]>;
};
export type ticketsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketsWhereInput;
    orderBy?: Prisma.ticketsOrderByWithAggregationInput | Prisma.ticketsOrderByWithAggregationInput[];
    by: Prisma.TicketsScalarFieldEnum[] | Prisma.TicketsScalarFieldEnum;
    having?: Prisma.ticketsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TicketsCountAggregateInputType | true;
    _avg?: TicketsAvgAggregateInputType;
    _sum?: TicketsSumAggregateInputType;
    _min?: TicketsMinAggregateInputType;
    _max?: TicketsMaxAggregateInputType;
};
export type TicketsGroupByOutputType = {
    id: string;
    booking_id: string;
    ticket_type: string;
    quantity: number;
    unit_price: runtime.Decimal;
    created_at: Date;
    _count: TicketsCountAggregateOutputType | null;
    _avg: TicketsAvgAggregateOutputType | null;
    _sum: TicketsSumAggregateOutputType | null;
    _min: TicketsMinAggregateOutputType | null;
    _max: TicketsMaxAggregateOutputType | null;
};
export type GetTicketsGroupByPayload<T extends ticketsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TicketsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TicketsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TicketsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TicketsGroupByOutputType[P]>;
}>>;
export type ticketsWhereInput = {
    AND?: Prisma.ticketsWhereInput | Prisma.ticketsWhereInput[];
    OR?: Prisma.ticketsWhereInput[];
    NOT?: Prisma.ticketsWhereInput | Prisma.ticketsWhereInput[];
    id?: Prisma.UuidFilter<"tickets"> | string;
    booking_id?: Prisma.UuidFilter<"tickets"> | string;
    ticket_type?: Prisma.StringFilter<"tickets"> | string;
    quantity?: Prisma.IntFilter<"tickets"> | number;
    unit_price?: Prisma.DecimalFilter<"tickets"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"tickets"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
};
export type ticketsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    ticket_type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByWithRelationInput;
};
export type ticketsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.ticketsWhereInput | Prisma.ticketsWhereInput[];
    OR?: Prisma.ticketsWhereInput[];
    NOT?: Prisma.ticketsWhereInput | Prisma.ticketsWhereInput[];
    booking_id?: Prisma.UuidFilter<"tickets"> | string;
    ticket_type?: Prisma.StringFilter<"tickets"> | string;
    quantity?: Prisma.IntFilter<"tickets"> | number;
    unit_price?: Prisma.DecimalFilter<"tickets"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"tickets"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
}, "id">;
export type ticketsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    ticket_type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ticketsCountOrderByAggregateInput;
    _avg?: Prisma.ticketsAvgOrderByAggregateInput;
    _max?: Prisma.ticketsMaxOrderByAggregateInput;
    _min?: Prisma.ticketsMinOrderByAggregateInput;
    _sum?: Prisma.ticketsSumOrderByAggregateInput;
};
export type ticketsScalarWhereWithAggregatesInput = {
    AND?: Prisma.ticketsScalarWhereWithAggregatesInput | Prisma.ticketsScalarWhereWithAggregatesInput[];
    OR?: Prisma.ticketsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ticketsScalarWhereWithAggregatesInput | Prisma.ticketsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"tickets"> | string;
    booking_id?: Prisma.UuidWithAggregatesFilter<"tickets"> | string;
    ticket_type?: Prisma.StringWithAggregatesFilter<"tickets"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"tickets"> | number;
    unit_price?: Prisma.DecimalWithAggregatesFilter<"tickets"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"tickets"> | Date | string;
};
export type ticketsCreateInput = {
    id?: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    bookings: Prisma.bookingsCreateNestedOneWithoutTicketsInput;
};
export type ticketsUncheckedCreateInput = {
    id?: string;
    booking_id: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type ticketsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutTicketsNestedInput;
};
export type ticketsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ticketsCreateManyInput = {
    id?: string;
    booking_id: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type ticketsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ticketsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TicketsListRelationFilter = {
    every?: Prisma.ticketsWhereInput;
    some?: Prisma.ticketsWhereInput;
    none?: Prisma.ticketsWhereInput;
};
export type ticketsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ticketsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    ticket_type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ticketsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type ticketsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    ticket_type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ticketsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    ticket_type?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ticketsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    unit_price?: Prisma.SortOrder;
};
export type ticketsCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput> | Prisma.ticketsCreateWithoutBookingsInput[] | Prisma.ticketsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.ticketsCreateOrConnectWithoutBookingsInput | Prisma.ticketsCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.ticketsCreateManyBookingsInputEnvelope;
    connect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
};
export type ticketsUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput> | Prisma.ticketsCreateWithoutBookingsInput[] | Prisma.ticketsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.ticketsCreateOrConnectWithoutBookingsInput | Prisma.ticketsCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.ticketsCreateManyBookingsInputEnvelope;
    connect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
};
export type ticketsUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput> | Prisma.ticketsCreateWithoutBookingsInput[] | Prisma.ticketsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.ticketsCreateOrConnectWithoutBookingsInput | Prisma.ticketsCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.ticketsUpsertWithWhereUniqueWithoutBookingsInput | Prisma.ticketsUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.ticketsCreateManyBookingsInputEnvelope;
    set?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    disconnect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    delete?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    connect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    update?: Prisma.ticketsUpdateWithWhereUniqueWithoutBookingsInput | Prisma.ticketsUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.ticketsUpdateManyWithWhereWithoutBookingsInput | Prisma.ticketsUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.ticketsScalarWhereInput | Prisma.ticketsScalarWhereInput[];
};
export type ticketsUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput> | Prisma.ticketsCreateWithoutBookingsInput[] | Prisma.ticketsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.ticketsCreateOrConnectWithoutBookingsInput | Prisma.ticketsCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.ticketsUpsertWithWhereUniqueWithoutBookingsInput | Prisma.ticketsUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.ticketsCreateManyBookingsInputEnvelope;
    set?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    disconnect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    delete?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    connect?: Prisma.ticketsWhereUniqueInput | Prisma.ticketsWhereUniqueInput[];
    update?: Prisma.ticketsUpdateWithWhereUniqueWithoutBookingsInput | Prisma.ticketsUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.ticketsUpdateManyWithWhereWithoutBookingsInput | Prisma.ticketsUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.ticketsScalarWhereInput | Prisma.ticketsScalarWhereInput[];
};
export type ticketsCreateWithoutBookingsInput = {
    id?: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type ticketsUncheckedCreateWithoutBookingsInput = {
    id?: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type ticketsCreateOrConnectWithoutBookingsInput = {
    where: Prisma.ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput>;
};
export type ticketsCreateManyBookingsInputEnvelope = {
    data: Prisma.ticketsCreateManyBookingsInput | Prisma.ticketsCreateManyBookingsInput[];
    skipDuplicates?: boolean;
};
export type ticketsUpsertWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.ticketsWhereUniqueInput;
    update: Prisma.XOR<Prisma.ticketsUpdateWithoutBookingsInput, Prisma.ticketsUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.ticketsCreateWithoutBookingsInput, Prisma.ticketsUncheckedCreateWithoutBookingsInput>;
};
export type ticketsUpdateWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.ticketsWhereUniqueInput;
    data: Prisma.XOR<Prisma.ticketsUpdateWithoutBookingsInput, Prisma.ticketsUncheckedUpdateWithoutBookingsInput>;
};
export type ticketsUpdateManyWithWhereWithoutBookingsInput = {
    where: Prisma.ticketsScalarWhereInput;
    data: Prisma.XOR<Prisma.ticketsUpdateManyMutationInput, Prisma.ticketsUncheckedUpdateManyWithoutBookingsInput>;
};
export type ticketsScalarWhereInput = {
    AND?: Prisma.ticketsScalarWhereInput | Prisma.ticketsScalarWhereInput[];
    OR?: Prisma.ticketsScalarWhereInput[];
    NOT?: Prisma.ticketsScalarWhereInput | Prisma.ticketsScalarWhereInput[];
    id?: Prisma.UuidFilter<"tickets"> | string;
    booking_id?: Prisma.UuidFilter<"tickets"> | string;
    ticket_type?: Prisma.StringFilter<"tickets"> | string;
    quantity?: Prisma.IntFilter<"tickets"> | number;
    unit_price?: Prisma.DecimalFilter<"tickets"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"tickets"> | Date | string;
};
export type ticketsCreateManyBookingsInput = {
    id?: string;
    ticket_type?: string;
    quantity?: number;
    unit_price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
};
export type ticketsUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ticketsUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ticketsUncheckedUpdateManyWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    ticket_type?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    unit_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ticketsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    ticket_type?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tickets"]>;
export type ticketsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    ticket_type?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tickets"]>;
export type ticketsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    ticket_type?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["tickets"]>;
export type ticketsSelectScalar = {
    id?: boolean;
    booking_id?: boolean;
    ticket_type?: boolean;
    quantity?: boolean;
    unit_price?: boolean;
    created_at?: boolean;
};
export type ticketsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "booking_id" | "ticket_type" | "quantity" | "unit_price" | "created_at", ExtArgs["result"]["tickets"]>;
export type ticketsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type ticketsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type ticketsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type $ticketsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "tickets";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        booking_id: string;
        ticket_type: string;
        quantity: number;
        unit_price: runtime.Decimal;
        created_at: Date;
    }, ExtArgs["result"]["tickets"]>;
    composites: {};
};
export type ticketsGetPayload<S extends boolean | null | undefined | ticketsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ticketsPayload, S>;
export type ticketsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ticketsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TicketsCountAggregateInputType | true;
};
export interface ticketsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['tickets'];
        meta: {
            name: 'tickets';
        };
    };
    findUnique<T extends ticketsFindUniqueArgs>(args: Prisma.SelectSubset<T, ticketsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ticketsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ticketsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ticketsFindFirstArgs>(args?: Prisma.SelectSubset<T, ticketsFindFirstArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ticketsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ticketsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ticketsFindManyArgs>(args?: Prisma.SelectSubset<T, ticketsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ticketsCreateArgs>(args: Prisma.SelectSubset<T, ticketsCreateArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ticketsCreateManyArgs>(args?: Prisma.SelectSubset<T, ticketsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ticketsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ticketsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ticketsDeleteArgs>(args: Prisma.SelectSubset<T, ticketsDeleteArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ticketsUpdateArgs>(args: Prisma.SelectSubset<T, ticketsUpdateArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ticketsDeleteManyArgs>(args?: Prisma.SelectSubset<T, ticketsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ticketsUpdateManyArgs>(args: Prisma.SelectSubset<T, ticketsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ticketsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ticketsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ticketsUpsertArgs>(args: Prisma.SelectSubset<T, ticketsUpsertArgs<ExtArgs>>): Prisma.Prisma__ticketsClient<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ticketsCountArgs>(args?: Prisma.Subset<T, ticketsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TicketsCountAggregateOutputType> : number>;
    aggregate<T extends TicketsAggregateArgs>(args: Prisma.Subset<T, TicketsAggregateArgs>): Prisma.PrismaPromise<GetTicketsAggregateType<T>>;
    groupBy<T extends ticketsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ticketsGroupByArgs['orderBy'];
    } : {
        orderBy?: ticketsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ticketsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ticketsFieldRefs;
}
export interface Prisma__ticketsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.bookingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookingsDefaultArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ticketsFieldRefs {
    readonly id: Prisma.FieldRef<"tickets", 'String'>;
    readonly booking_id: Prisma.FieldRef<"tickets", 'String'>;
    readonly ticket_type: Prisma.FieldRef<"tickets", 'String'>;
    readonly quantity: Prisma.FieldRef<"tickets", 'Int'>;
    readonly unit_price: Prisma.FieldRef<"tickets", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"tickets", 'DateTime'>;
}
export type ticketsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where: Prisma.ticketsWhereUniqueInput;
};
export type ticketsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where: Prisma.ticketsWhereUniqueInput;
};
export type ticketsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where?: Prisma.ticketsWhereInput;
    orderBy?: Prisma.ticketsOrderByWithRelationInput | Prisma.ticketsOrderByWithRelationInput[];
    cursor?: Prisma.ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketsScalarFieldEnum | Prisma.TicketsScalarFieldEnum[];
};
export type ticketsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where?: Prisma.ticketsWhereInput;
    orderBy?: Prisma.ticketsOrderByWithRelationInput | Prisma.ticketsOrderByWithRelationInput[];
    cursor?: Prisma.ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketsScalarFieldEnum | Prisma.TicketsScalarFieldEnum[];
};
export type ticketsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where?: Prisma.ticketsWhereInput;
    orderBy?: Prisma.ticketsOrderByWithRelationInput | Prisma.ticketsOrderByWithRelationInput[];
    cursor?: Prisma.ticketsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TicketsScalarFieldEnum | Prisma.TicketsScalarFieldEnum[];
};
export type ticketsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketsCreateInput, Prisma.ticketsUncheckedCreateInput>;
};
export type ticketsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ticketsCreateManyInput | Prisma.ticketsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ticketsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    data: Prisma.ticketsCreateManyInput | Prisma.ticketsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ticketsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ticketsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketsUpdateInput, Prisma.ticketsUncheckedUpdateInput>;
    where: Prisma.ticketsWhereUniqueInput;
};
export type ticketsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ticketsUpdateManyMutationInput, Prisma.ticketsUncheckedUpdateManyInput>;
    where?: Prisma.ticketsWhereInput;
    limit?: number;
};
export type ticketsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ticketsUpdateManyMutationInput, Prisma.ticketsUncheckedUpdateManyInput>;
    where?: Prisma.ticketsWhereInput;
    limit?: number;
    include?: Prisma.ticketsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ticketsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where: Prisma.ticketsWhereUniqueInput;
    create: Prisma.XOR<Prisma.ticketsCreateInput, Prisma.ticketsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ticketsUpdateInput, Prisma.ticketsUncheckedUpdateInput>;
};
export type ticketsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
    where: Prisma.ticketsWhereUniqueInput;
};
export type ticketsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketsWhereInput;
    limit?: number;
};
export type ticketsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ticketsSelect<ExtArgs> | null;
    omit?: Prisma.ticketsOmit<ExtArgs> | null;
    include?: Prisma.ticketsInclude<ExtArgs> | null;
};
