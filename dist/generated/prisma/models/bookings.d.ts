import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type bookingsModel = runtime.Types.Result.DefaultSelection<Prisma.$bookingsPayload>;
export type AggregateBookings = {
    _count: BookingsCountAggregateOutputType | null;
    _avg: BookingsAvgAggregateOutputType | null;
    _sum: BookingsSumAggregateOutputType | null;
    _min: BookingsMinAggregateOutputType | null;
    _max: BookingsMaxAggregateOutputType | null;
};
export type BookingsAvgAggregateOutputType = {
    guest_count: number | null;
    total_amount: runtime.Decimal | null;
};
export type BookingsSumAggregateOutputType = {
    guest_count: number | null;
    total_amount: runtime.Decimal | null;
};
export type BookingsMinAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    event_id: string | null;
    status: $Enums.booking_status | null;
    guest_count: number | null;
    special_requests: string | null;
    total_amount: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BookingsMaxAggregateOutputType = {
    id: string | null;
    user_id: string | null;
    event_id: string | null;
    status: $Enums.booking_status | null;
    guest_count: number | null;
    special_requests: string | null;
    total_amount: runtime.Decimal | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type BookingsCountAggregateOutputType = {
    id: number;
    user_id: number;
    event_id: number;
    status: number;
    guest_count: number;
    special_requests: number;
    total_amount: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type BookingsAvgAggregateInputType = {
    guest_count?: true;
    total_amount?: true;
};
export type BookingsSumAggregateInputType = {
    guest_count?: true;
    total_amount?: true;
};
export type BookingsMinAggregateInputType = {
    id?: true;
    user_id?: true;
    event_id?: true;
    status?: true;
    guest_count?: true;
    special_requests?: true;
    total_amount?: true;
    created_at?: true;
    updated_at?: true;
};
export type BookingsMaxAggregateInputType = {
    id?: true;
    user_id?: true;
    event_id?: true;
    status?: true;
    guest_count?: true;
    special_requests?: true;
    total_amount?: true;
    created_at?: true;
    updated_at?: true;
};
export type BookingsCountAggregateInputType = {
    id?: true;
    user_id?: true;
    event_id?: true;
    status?: true;
    guest_count?: true;
    special_requests?: true;
    total_amount?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type BookingsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookingsCountAggregateInputType;
    _avg?: BookingsAvgAggregateInputType;
    _sum?: BookingsSumAggregateInputType;
    _min?: BookingsMinAggregateInputType;
    _max?: BookingsMaxAggregateInputType;
};
export type GetBookingsAggregateType<T extends BookingsAggregateArgs> = {
    [P in keyof T & keyof AggregateBookings]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBookings[P]> : Prisma.GetScalarType<T[P], AggregateBookings[P]>;
};
export type bookingsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithAggregationInput | Prisma.bookingsOrderByWithAggregationInput[];
    by: Prisma.BookingsScalarFieldEnum[] | Prisma.BookingsScalarFieldEnum;
    having?: Prisma.bookingsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookingsCountAggregateInputType | true;
    _avg?: BookingsAvgAggregateInputType;
    _sum?: BookingsSumAggregateInputType;
    _min?: BookingsMinAggregateInputType;
    _max?: BookingsMaxAggregateInputType;
};
export type BookingsGroupByOutputType = {
    id: string;
    user_id: string;
    event_id: string;
    status: $Enums.booking_status;
    guest_count: number;
    special_requests: string | null;
    total_amount: runtime.Decimal;
    created_at: Date;
    updated_at: Date;
    _count: BookingsCountAggregateOutputType | null;
    _avg: BookingsAvgAggregateOutputType | null;
    _sum: BookingsSumAggregateOutputType | null;
    _min: BookingsMinAggregateOutputType | null;
    _max: BookingsMaxAggregateOutputType | null;
};
export type GetBookingsGroupByPayload<T extends bookingsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookingsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookingsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookingsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookingsGroupByOutputType[P]>;
}>>;
export type bookingsWhereInput = {
    AND?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    OR?: Prisma.bookingsWhereInput[];
    NOT?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    id?: Prisma.UuidFilter<"bookings"> | string;
    user_id?: Prisma.UuidFilter<"bookings"> | string;
    event_id?: Prisma.UuidFilter<"bookings"> | string;
    status?: Prisma.Enumbooking_statusFilter<"bookings"> | $Enums.booking_status;
    guest_count?: Prisma.IntFilter<"bookings"> | number;
    special_requests?: Prisma.StringNullableFilter<"bookings"> | string | null;
    total_amount?: Prisma.DecimalFilter<"bookings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
    booking_tables?: Prisma.Booking_tablesListRelationFilter;
    events?: Prisma.XOR<Prisma.EventsScalarRelationFilter, Prisma.eventsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
    tickets?: Prisma.TicketsListRelationFilter;
};
export type bookingsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guest_count?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    booking_tables?: Prisma.booking_tablesOrderByRelationAggregateInput;
    events?: Prisma.eventsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
    payments?: Prisma.paymentsOrderByRelationAggregateInput;
    tickets?: Prisma.ticketsOrderByRelationAggregateInput;
};
export type bookingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    OR?: Prisma.bookingsWhereInput[];
    NOT?: Prisma.bookingsWhereInput | Prisma.bookingsWhereInput[];
    user_id?: Prisma.UuidFilter<"bookings"> | string;
    event_id?: Prisma.UuidFilter<"bookings"> | string;
    status?: Prisma.Enumbooking_statusFilter<"bookings"> | $Enums.booking_status;
    guest_count?: Prisma.IntFilter<"bookings"> | number;
    special_requests?: Prisma.StringNullableFilter<"bookings"> | string | null;
    total_amount?: Prisma.DecimalFilter<"bookings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
    booking_tables?: Prisma.Booking_tablesListRelationFilter;
    events?: Prisma.XOR<Prisma.EventsScalarRelationFilter, Prisma.eventsWhereInput>;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    payments?: Prisma.PaymentsListRelationFilter;
    tickets?: Prisma.TicketsListRelationFilter;
}, "id">;
export type bookingsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guest_count?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrderInput | Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.bookingsCountOrderByAggregateInput;
    _avg?: Prisma.bookingsAvgOrderByAggregateInput;
    _max?: Prisma.bookingsMaxOrderByAggregateInput;
    _min?: Prisma.bookingsMinOrderByAggregateInput;
    _sum?: Prisma.bookingsSumOrderByAggregateInput;
};
export type bookingsScalarWhereWithAggregatesInput = {
    AND?: Prisma.bookingsScalarWhereWithAggregatesInput | Prisma.bookingsScalarWhereWithAggregatesInput[];
    OR?: Prisma.bookingsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.bookingsScalarWhereWithAggregatesInput | Prisma.bookingsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"bookings"> | string;
    user_id?: Prisma.UuidWithAggregatesFilter<"bookings"> | string;
    event_id?: Prisma.UuidWithAggregatesFilter<"bookings"> | string;
    status?: Prisma.Enumbooking_statusWithAggregatesFilter<"bookings"> | $Enums.booking_status;
    guest_count?: Prisma.IntWithAggregatesFilter<"bookings"> | number;
    special_requests?: Prisma.StringNullableWithAggregatesFilter<"bookings"> | string | null;
    total_amount?: Prisma.DecimalWithAggregatesFilter<"bookings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"bookings"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"bookings"> | Date | string;
};
export type bookingsCreateInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutBookingsInput;
    events: Prisma.eventsCreateNestedOneWithoutBookingsInput;
    users: Prisma.usersCreateNestedOneWithoutBookingsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateInput = {
    id?: string;
    user_id: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutBookingsInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutBookingsNestedInput;
    events?: Prisma.eventsUpdateOneRequiredWithoutBookingsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsCreateManyInput = {
    id?: string;
    user_id: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type bookingsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type bookingsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingsScalarRelationFilter = {
    is?: Prisma.bookingsWhereInput;
    isNot?: Prisma.bookingsWhereInput;
};
export type bookingsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guest_count?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsAvgOrderByAggregateInput = {
    guest_count?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
};
export type bookingsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guest_count?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    user_id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    guest_count?: Prisma.SortOrder;
    special_requests?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type bookingsSumOrderByAggregateInput = {
    guest_count?: Prisma.SortOrder;
    total_amount?: Prisma.SortOrder;
};
export type BookingsListRelationFilter = {
    every?: Prisma.bookingsWhereInput;
    some?: Prisma.bookingsWhereInput;
    none?: Prisma.bookingsWhereInput;
};
export type bookingsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type bookingsCreateNestedOneWithoutBooking_tablesInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutBooking_tablesInput, Prisma.bookingsUncheckedCreateWithoutBooking_tablesInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutBooking_tablesInput;
    connect?: Prisma.bookingsWhereUniqueInput;
};
export type bookingsUpdateOneRequiredWithoutBooking_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutBooking_tablesInput, Prisma.bookingsUncheckedCreateWithoutBooking_tablesInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutBooking_tablesInput;
    upsert?: Prisma.bookingsUpsertWithoutBooking_tablesInput;
    connect?: Prisma.bookingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bookingsUpdateToOneWithWhereWithoutBooking_tablesInput, Prisma.bookingsUpdateWithoutBooking_tablesInput>, Prisma.bookingsUncheckedUpdateWithoutBooking_tablesInput>;
};
export type Enumbooking_statusFieldUpdateOperationsInput = {
    set?: $Enums.booking_status;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type bookingsCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput> | Prisma.bookingsCreateWithoutEventsInput[] | Prisma.bookingsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutEventsInput | Prisma.bookingsCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.bookingsCreateManyEventsInputEnvelope;
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
};
export type bookingsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput> | Prisma.bookingsCreateWithoutEventsInput[] | Prisma.bookingsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutEventsInput | Prisma.bookingsCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.bookingsCreateManyEventsInputEnvelope;
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
};
export type bookingsUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput> | Prisma.bookingsCreateWithoutEventsInput[] | Prisma.bookingsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutEventsInput | Prisma.bookingsCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.bookingsUpsertWithWhereUniqueWithoutEventsInput | Prisma.bookingsUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.bookingsCreateManyEventsInputEnvelope;
    set?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    disconnect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    delete?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    update?: Prisma.bookingsUpdateWithWhereUniqueWithoutEventsInput | Prisma.bookingsUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.bookingsUpdateManyWithWhereWithoutEventsInput | Prisma.bookingsUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
};
export type bookingsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput> | Prisma.bookingsCreateWithoutEventsInput[] | Prisma.bookingsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutEventsInput | Prisma.bookingsCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.bookingsUpsertWithWhereUniqueWithoutEventsInput | Prisma.bookingsUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.bookingsCreateManyEventsInputEnvelope;
    set?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    disconnect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    delete?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    update?: Prisma.bookingsUpdateWithWhereUniqueWithoutEventsInput | Prisma.bookingsUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.bookingsUpdateManyWithWhereWithoutEventsInput | Prisma.bookingsUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
};
export type bookingsCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutPaymentsInput, Prisma.bookingsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.bookingsWhereUniqueInput;
};
export type bookingsUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutPaymentsInput, Prisma.bookingsUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.bookingsUpsertWithoutPaymentsInput;
    connect?: Prisma.bookingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bookingsUpdateToOneWithWhereWithoutPaymentsInput, Prisma.bookingsUpdateWithoutPaymentsInput>, Prisma.bookingsUncheckedUpdateWithoutPaymentsInput>;
};
export type bookingsCreateNestedOneWithoutTicketsInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutTicketsInput, Prisma.bookingsUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutTicketsInput;
    connect?: Prisma.bookingsWhereUniqueInput;
};
export type bookingsUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutTicketsInput, Prisma.bookingsUncheckedCreateWithoutTicketsInput>;
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutTicketsInput;
    upsert?: Prisma.bookingsUpsertWithoutTicketsInput;
    connect?: Prisma.bookingsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.bookingsUpdateToOneWithWhereWithoutTicketsInput, Prisma.bookingsUpdateWithoutTicketsInput>, Prisma.bookingsUncheckedUpdateWithoutTicketsInput>;
};
export type bookingsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput> | Prisma.bookingsCreateWithoutUsersInput[] | Prisma.bookingsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutUsersInput | Prisma.bookingsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.bookingsCreateManyUsersInputEnvelope;
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
};
export type bookingsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput> | Prisma.bookingsCreateWithoutUsersInput[] | Prisma.bookingsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutUsersInput | Prisma.bookingsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.bookingsCreateManyUsersInputEnvelope;
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
};
export type bookingsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput> | Prisma.bookingsCreateWithoutUsersInput[] | Prisma.bookingsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutUsersInput | Prisma.bookingsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.bookingsUpsertWithWhereUniqueWithoutUsersInput | Prisma.bookingsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.bookingsCreateManyUsersInputEnvelope;
    set?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    disconnect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    delete?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    update?: Prisma.bookingsUpdateWithWhereUniqueWithoutUsersInput | Prisma.bookingsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.bookingsUpdateManyWithWhereWithoutUsersInput | Prisma.bookingsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
};
export type bookingsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput> | Prisma.bookingsCreateWithoutUsersInput[] | Prisma.bookingsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.bookingsCreateOrConnectWithoutUsersInput | Prisma.bookingsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.bookingsUpsertWithWhereUniqueWithoutUsersInput | Prisma.bookingsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.bookingsCreateManyUsersInputEnvelope;
    set?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    disconnect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    delete?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    connect?: Prisma.bookingsWhereUniqueInput | Prisma.bookingsWhereUniqueInput[];
    update?: Prisma.bookingsUpdateWithWhereUniqueWithoutUsersInput | Prisma.bookingsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.bookingsUpdateManyWithWhereWithoutUsersInput | Prisma.bookingsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
};
export type bookingsCreateWithoutBooking_tablesInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    events: Prisma.eventsCreateNestedOneWithoutBookingsInput;
    users: Prisma.usersCreateNestedOneWithoutBookingsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateWithoutBooking_tablesInput = {
    id?: string;
    user_id: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsCreateOrConnectWithoutBooking_tablesInput = {
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutBooking_tablesInput, Prisma.bookingsUncheckedCreateWithoutBooking_tablesInput>;
};
export type bookingsUpsertWithoutBooking_tablesInput = {
    update: Prisma.XOR<Prisma.bookingsUpdateWithoutBooking_tablesInput, Prisma.bookingsUncheckedUpdateWithoutBooking_tablesInput>;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutBooking_tablesInput, Prisma.bookingsUncheckedCreateWithoutBooking_tablesInput>;
    where?: Prisma.bookingsWhereInput;
};
export type bookingsUpdateToOneWithWhereWithoutBooking_tablesInput = {
    where?: Prisma.bookingsWhereInput;
    data: Prisma.XOR<Prisma.bookingsUpdateWithoutBooking_tablesInput, Prisma.bookingsUncheckedUpdateWithoutBooking_tablesInput>;
};
export type bookingsUpdateWithoutBooking_tablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.eventsUpdateOneRequiredWithoutBookingsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateWithoutBooking_tablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsCreateWithoutEventsInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutBookingsInput;
    users: Prisma.usersCreateNestedOneWithoutBookingsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateWithoutEventsInput = {
    id?: string;
    user_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutBookingsInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsCreateOrConnectWithoutEventsInput = {
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput>;
};
export type bookingsCreateManyEventsInputEnvelope = {
    data: Prisma.bookingsCreateManyEventsInput | Prisma.bookingsCreateManyEventsInput[];
    skipDuplicates?: boolean;
};
export type bookingsUpsertWithWhereUniqueWithoutEventsInput = {
    where: Prisma.bookingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.bookingsUpdateWithoutEventsInput, Prisma.bookingsUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutEventsInput, Prisma.bookingsUncheckedCreateWithoutEventsInput>;
};
export type bookingsUpdateWithWhereUniqueWithoutEventsInput = {
    where: Prisma.bookingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.bookingsUpdateWithoutEventsInput, Prisma.bookingsUncheckedUpdateWithoutEventsInput>;
};
export type bookingsUpdateManyWithWhereWithoutEventsInput = {
    where: Prisma.bookingsScalarWhereInput;
    data: Prisma.XOR<Prisma.bookingsUpdateManyMutationInput, Prisma.bookingsUncheckedUpdateManyWithoutEventsInput>;
};
export type bookingsScalarWhereInput = {
    AND?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
    OR?: Prisma.bookingsScalarWhereInput[];
    NOT?: Prisma.bookingsScalarWhereInput | Prisma.bookingsScalarWhereInput[];
    id?: Prisma.UuidFilter<"bookings"> | string;
    user_id?: Prisma.UuidFilter<"bookings"> | string;
    event_id?: Prisma.UuidFilter<"bookings"> | string;
    status?: Prisma.Enumbooking_statusFilter<"bookings"> | $Enums.booking_status;
    guest_count?: Prisma.IntFilter<"bookings"> | number;
    special_requests?: Prisma.StringNullableFilter<"bookings"> | string | null;
    total_amount?: Prisma.DecimalFilter<"bookings"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"bookings"> | Date | string;
};
export type bookingsCreateWithoutPaymentsInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutBookingsInput;
    events: Prisma.eventsCreateNestedOneWithoutBookingsInput;
    users: Prisma.usersCreateNestedOneWithoutBookingsInput;
    tickets?: Prisma.ticketsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    user_id: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutPaymentsInput, Prisma.bookingsUncheckedCreateWithoutPaymentsInput>;
};
export type bookingsUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.bookingsUpdateWithoutPaymentsInput, Prisma.bookingsUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutPaymentsInput, Prisma.bookingsUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.bookingsWhereInput;
};
export type bookingsUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.bookingsWhereInput;
    data: Prisma.XOR<Prisma.bookingsUpdateWithoutPaymentsInput, Prisma.bookingsUncheckedUpdateWithoutPaymentsInput>;
};
export type bookingsUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutBookingsNestedInput;
    events?: Prisma.eventsUpdateOneRequiredWithoutBookingsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsCreateWithoutTicketsInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutBookingsInput;
    events: Prisma.eventsCreateNestedOneWithoutBookingsInput;
    users: Prisma.usersCreateNestedOneWithoutBookingsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateWithoutTicketsInput = {
    id?: string;
    user_id: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutBookingsInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsCreateOrConnectWithoutTicketsInput = {
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutTicketsInput, Prisma.bookingsUncheckedCreateWithoutTicketsInput>;
};
export type bookingsUpsertWithoutTicketsInput = {
    update: Prisma.XOR<Prisma.bookingsUpdateWithoutTicketsInput, Prisma.bookingsUncheckedUpdateWithoutTicketsInput>;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutTicketsInput, Prisma.bookingsUncheckedCreateWithoutTicketsInput>;
    where?: Prisma.bookingsWhereInput;
};
export type bookingsUpdateToOneWithWhereWithoutTicketsInput = {
    where?: Prisma.bookingsWhereInput;
    data: Prisma.XOR<Prisma.bookingsUpdateWithoutTicketsInput, Prisma.bookingsUncheckedUpdateWithoutTicketsInput>;
};
export type bookingsUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutBookingsNestedInput;
    events?: Prisma.eventsUpdateOneRequiredWithoutBookingsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateWithoutTicketsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsCreateWithoutUsersInput = {
    id?: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutBookingsInput;
    events: Prisma.eventsCreateNestedOneWithoutBookingsInput;
    payments?: Prisma.paymentsCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsCreateNestedManyWithoutBookingsInput;
};
export type bookingsUncheckedCreateWithoutUsersInput = {
    id?: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutBookingsInput;
    payments?: Prisma.paymentsUncheckedCreateNestedManyWithoutBookingsInput;
    tickets?: Prisma.ticketsUncheckedCreateNestedManyWithoutBookingsInput;
};
export type bookingsCreateOrConnectWithoutUsersInput = {
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput>;
};
export type bookingsCreateManyUsersInputEnvelope = {
    data: Prisma.bookingsCreateManyUsersInput | Prisma.bookingsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type bookingsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.bookingsWhereUniqueInput;
    update: Prisma.XOR<Prisma.bookingsUpdateWithoutUsersInput, Prisma.bookingsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.bookingsCreateWithoutUsersInput, Prisma.bookingsUncheckedCreateWithoutUsersInput>;
};
export type bookingsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.bookingsWhereUniqueInput;
    data: Prisma.XOR<Prisma.bookingsUpdateWithoutUsersInput, Prisma.bookingsUncheckedUpdateWithoutUsersInput>;
};
export type bookingsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.bookingsScalarWhereInput;
    data: Prisma.XOR<Prisma.bookingsUpdateManyMutationInput, Prisma.bookingsUncheckedUpdateManyWithoutUsersInput>;
};
export type bookingsCreateManyEventsInput = {
    id?: string;
    user_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type bookingsUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutBookingsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateManyWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type bookingsCreateManyUsersInput = {
    id?: string;
    event_id: string;
    status?: $Enums.booking_status;
    guest_count?: number;
    special_requests?: string | null;
    total_amount?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type bookingsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutBookingsNestedInput;
    events?: Prisma.eventsUpdateOneRequiredWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutBookingsNestedInput;
    payments?: Prisma.paymentsUncheckedUpdateManyWithoutBookingsNestedInput;
    tickets?: Prisma.ticketsUncheckedUpdateManyWithoutBookingsNestedInput;
};
export type bookingsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.Enumbooking_statusFieldUpdateOperationsInput | $Enums.booking_status;
    guest_count?: Prisma.IntFieldUpdateOperationsInput | number;
    special_requests?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    total_amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookingsCountOutputType = {
    booking_tables: number;
    payments: number;
    tickets: number;
};
export type BookingsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking_tables?: boolean | BookingsCountOutputTypeCountBooking_tablesArgs;
    payments?: boolean | BookingsCountOutputTypeCountPaymentsArgs;
    tickets?: boolean | BookingsCountOutputTypeCountTicketsArgs;
};
export type BookingsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookingsCountOutputTypeSelect<ExtArgs> | null;
};
export type BookingsCountOutputTypeCountBooking_tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.booking_tablesWhereInput;
};
export type BookingsCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
};
export type BookingsCountOutputTypeCountTicketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ticketsWhereInput;
};
export type bookingsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    event_id?: boolean;
    status?: boolean;
    guest_count?: boolean;
    special_requests?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    booking_tables?: boolean | Prisma.bookings$booking_tablesArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.bookings$paymentsArgs<ExtArgs>;
    tickets?: boolean | Prisma.bookings$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookingsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookings"]>;
export type bookingsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    event_id?: boolean;
    status?: boolean;
    guest_count?: boolean;
    special_requests?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookings"]>;
export type bookingsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    user_id?: boolean;
    event_id?: boolean;
    status?: boolean;
    guest_count?: boolean;
    special_requests?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bookings"]>;
export type bookingsSelectScalar = {
    id?: boolean;
    user_id?: boolean;
    event_id?: boolean;
    status?: boolean;
    guest_count?: boolean;
    special_requests?: boolean;
    total_amount?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type bookingsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "user_id" | "event_id" | "status" | "guest_count" | "special_requests" | "total_amount" | "created_at" | "updated_at", ExtArgs["result"]["bookings"]>;
export type bookingsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking_tables?: boolean | Prisma.bookings$booking_tablesArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    payments?: boolean | Prisma.bookings$paymentsArgs<ExtArgs>;
    tickets?: boolean | Prisma.bookings$ticketsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookingsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type bookingsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type bookingsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $bookingsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "bookings";
    objects: {
        booking_tables: Prisma.$booking_tablesPayload<ExtArgs>[];
        events: Prisma.$eventsPayload<ExtArgs>;
        users: Prisma.$usersPayload<ExtArgs>;
        payments: Prisma.$paymentsPayload<ExtArgs>[];
        tickets: Prisma.$ticketsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        user_id: string;
        event_id: string;
        status: $Enums.booking_status;
        guest_count: number;
        special_requests: string | null;
        total_amount: runtime.Decimal;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["bookings"]>;
    composites: {};
};
export type bookingsGetPayload<S extends boolean | null | undefined | bookingsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$bookingsPayload, S>;
export type bookingsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<bookingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookingsCountAggregateInputType | true;
};
export interface bookingsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['bookings'];
        meta: {
            name: 'bookings';
        };
    };
    findUnique<T extends bookingsFindUniqueArgs>(args: Prisma.SelectSubset<T, bookingsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends bookingsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, bookingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends bookingsFindFirstArgs>(args?: Prisma.SelectSubset<T, bookingsFindFirstArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends bookingsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, bookingsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends bookingsFindManyArgs>(args?: Prisma.SelectSubset<T, bookingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends bookingsCreateArgs>(args: Prisma.SelectSubset<T, bookingsCreateArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends bookingsCreateManyArgs>(args?: Prisma.SelectSubset<T, bookingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends bookingsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, bookingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends bookingsDeleteArgs>(args: Prisma.SelectSubset<T, bookingsDeleteArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends bookingsUpdateArgs>(args: Prisma.SelectSubset<T, bookingsUpdateArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends bookingsDeleteManyArgs>(args?: Prisma.SelectSubset<T, bookingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends bookingsUpdateManyArgs>(args: Prisma.SelectSubset<T, bookingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends bookingsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, bookingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends bookingsUpsertArgs>(args: Prisma.SelectSubset<T, bookingsUpsertArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends bookingsCountArgs>(args?: Prisma.Subset<T, bookingsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookingsCountAggregateOutputType> : number>;
    aggregate<T extends BookingsAggregateArgs>(args: Prisma.Subset<T, BookingsAggregateArgs>): Prisma.PrismaPromise<GetBookingsAggregateType<T>>;
    groupBy<T extends bookingsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: bookingsGroupByArgs['orderBy'];
    } : {
        orderBy?: bookingsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, bookingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: bookingsFieldRefs;
}
export interface Prisma__bookingsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    booking_tables<T extends Prisma.bookings$booking_tablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookings$booking_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.eventsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.eventsDefaultArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.bookings$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookings$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    tickets<T extends Prisma.bookings$ticketsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookings$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ticketsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface bookingsFieldRefs {
    readonly id: Prisma.FieldRef<"bookings", 'String'>;
    readonly user_id: Prisma.FieldRef<"bookings", 'String'>;
    readonly event_id: Prisma.FieldRef<"bookings", 'String'>;
    readonly status: Prisma.FieldRef<"bookings", 'booking_status'>;
    readonly guest_count: Prisma.FieldRef<"bookings", 'Int'>;
    readonly special_requests: Prisma.FieldRef<"bookings", 'String'>;
    readonly total_amount: Prisma.FieldRef<"bookings", 'Decimal'>;
    readonly created_at: Prisma.FieldRef<"bookings", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"bookings", 'DateTime'>;
}
export type bookingsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where?: Prisma.bookingsWhereInput;
    orderBy?: Prisma.bookingsOrderByWithRelationInput | Prisma.bookingsOrderByWithRelationInput[];
    cursor?: Prisma.bookingsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookingsScalarFieldEnum | Prisma.BookingsScalarFieldEnum[];
};
export type bookingsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bookingsCreateInput, Prisma.bookingsUncheckedCreateInput>;
};
export type bookingsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.bookingsCreateManyInput | Prisma.bookingsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type bookingsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    data: Prisma.bookingsCreateManyInput | Prisma.bookingsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.bookingsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type bookingsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bookingsUpdateInput, Prisma.bookingsUncheckedUpdateInput>;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.bookingsUpdateManyMutationInput, Prisma.bookingsUncheckedUpdateManyInput>;
    where?: Prisma.bookingsWhereInput;
    limit?: number;
};
export type bookingsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.bookingsUpdateManyMutationInput, Prisma.bookingsUncheckedUpdateManyInput>;
    where?: Prisma.bookingsWhereInput;
    limit?: number;
    include?: Prisma.bookingsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type bookingsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
    create: Prisma.XOR<Prisma.bookingsCreateInput, Prisma.bookingsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.bookingsUpdateInput, Prisma.bookingsUncheckedUpdateInput>;
};
export type bookingsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
    where: Prisma.bookingsWhereUniqueInput;
};
export type bookingsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
    limit?: number;
};
export type bookings$booking_tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type bookings$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentsScalarFieldEnum | Prisma.PaymentsScalarFieldEnum[];
};
export type bookings$ticketsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type bookingsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.bookingsSelect<ExtArgs> | null;
    omit?: Prisma.bookingsOmit<ExtArgs> | null;
    include?: Prisma.bookingsInclude<ExtArgs> | null;
};
