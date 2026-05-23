import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type eventsModel = runtime.Types.Result.DefaultSelection<Prisma.$eventsPayload>;
export type AggregateEvents = {
    _count: EventsCountAggregateOutputType | null;
    _avg: EventsAvgAggregateOutputType | null;
    _sum: EventsSumAggregateOutputType | null;
    _min: EventsMinAggregateOutputType | null;
    _max: EventsMaxAggregateOutputType | null;
};
export type EventsAvgAggregateOutputType = {
    ticket_price: runtime.Decimal | null;
    capacity: number | null;
};
export type EventsSumAggregateOutputType = {
    ticket_price: runtime.Decimal | null;
    capacity: number | null;
};
export type EventsMinAggregateOutputType = {
    id: string | null;
    venue_id: string | null;
    title: string | null;
    description: string | null;
    event_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    poster_url: string | null;
    ticket_price: runtime.Decimal | null;
    capacity: number | null;
    status: $Enums.event_status | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type EventsMaxAggregateOutputType = {
    id: string | null;
    venue_id: string | null;
    title: string | null;
    description: string | null;
    event_date: Date | null;
    start_time: Date | null;
    end_time: Date | null;
    poster_url: string | null;
    ticket_price: runtime.Decimal | null;
    capacity: number | null;
    status: $Enums.event_status | null;
    created_by: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type EventsCountAggregateOutputType = {
    id: number;
    venue_id: number;
    title: number;
    description: number;
    event_date: number;
    start_time: number;
    end_time: number;
    poster_url: number;
    ticket_price: number;
    capacity: number;
    status: number;
    created_by: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type EventsAvgAggregateInputType = {
    ticket_price?: true;
    capacity?: true;
};
export type EventsSumAggregateInputType = {
    ticket_price?: true;
    capacity?: true;
};
export type EventsMinAggregateInputType = {
    id?: true;
    venue_id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    start_time?: true;
    end_time?: true;
    poster_url?: true;
    ticket_price?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type EventsMaxAggregateInputType = {
    id?: true;
    venue_id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    start_time?: true;
    end_time?: true;
    poster_url?: true;
    ticket_price?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
};
export type EventsCountAggregateInputType = {
    id?: true;
    venue_id?: true;
    title?: true;
    description?: true;
    event_date?: true;
    start_time?: true;
    end_time?: true;
    poster_url?: true;
    ticket_price?: true;
    capacity?: true;
    status?: true;
    created_by?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type EventsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventsWhereInput;
    orderBy?: Prisma.eventsOrderByWithRelationInput | Prisma.eventsOrderByWithRelationInput[];
    cursor?: Prisma.eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventsCountAggregateInputType;
    _avg?: EventsAvgAggregateInputType;
    _sum?: EventsSumAggregateInputType;
    _min?: EventsMinAggregateInputType;
    _max?: EventsMaxAggregateInputType;
};
export type GetEventsAggregateType<T extends EventsAggregateArgs> = {
    [P in keyof T & keyof AggregateEvents]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvents[P]> : Prisma.GetScalarType<T[P], AggregateEvents[P]>;
};
export type eventsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventsWhereInput;
    orderBy?: Prisma.eventsOrderByWithAggregationInput | Prisma.eventsOrderByWithAggregationInput[];
    by: Prisma.EventsScalarFieldEnum[] | Prisma.EventsScalarFieldEnum;
    having?: Prisma.eventsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventsCountAggregateInputType | true;
    _avg?: EventsAvgAggregateInputType;
    _sum?: EventsSumAggregateInputType;
    _min?: EventsMinAggregateInputType;
    _max?: EventsMaxAggregateInputType;
};
export type EventsGroupByOutputType = {
    id: string;
    venue_id: string;
    title: string;
    description: string | null;
    event_date: Date;
    start_time: Date;
    end_time: Date | null;
    poster_url: string | null;
    ticket_price: runtime.Decimal;
    capacity: number;
    status: $Enums.event_status;
    created_by: string;
    created_at: Date;
    updated_at: Date;
    _count: EventsCountAggregateOutputType | null;
    _avg: EventsAvgAggregateOutputType | null;
    _sum: EventsSumAggregateOutputType | null;
    _min: EventsMinAggregateOutputType | null;
    _max: EventsMaxAggregateOutputType | null;
};
export type GetEventsGroupByPayload<T extends eventsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventsGroupByOutputType[P]>;
}>>;
export type eventsWhereInput = {
    AND?: Prisma.eventsWhereInput | Prisma.eventsWhereInput[];
    OR?: Prisma.eventsWhereInput[];
    NOT?: Prisma.eventsWhereInput | Prisma.eventsWhereInput[];
    id?: Prisma.UuidFilter<"events"> | string;
    venue_id?: Prisma.UuidFilter<"events"> | string;
    title?: Prisma.StringFilter<"events"> | string;
    description?: Prisma.StringNullableFilter<"events"> | string | null;
    event_date?: Prisma.DateTimeFilter<"events"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"events"> | Date | string;
    end_time?: Prisma.DateTimeNullableFilter<"events"> | Date | string | null;
    poster_url?: Prisma.StringNullableFilter<"events"> | string | null;
    ticket_price?: Prisma.DecimalFilter<"events"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFilter<"events"> | number;
    status?: Prisma.Enumevent_statusFilter<"events"> | $Enums.event_status;
    created_by?: Prisma.UuidFilter<"events"> | string;
    created_at?: Prisma.DateTimeFilter<"events"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"events"> | Date | string;
    bookings?: Prisma.BookingsListRelationFilter;
    event_lineups?: Prisma.Event_lineupsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    venues?: Prisma.XOR<Prisma.VenuesScalarRelationFilter, Prisma.venuesWhereInput>;
    media?: Prisma.MediaListRelationFilter;
};
export type eventsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    venue_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    poster_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByRelationAggregateInput;
    event_lineups?: Prisma.event_lineupsOrderByRelationAggregateInput;
    users?: Prisma.usersOrderByWithRelationInput;
    venues?: Prisma.venuesOrderByWithRelationInput;
    media?: Prisma.mediaOrderByRelationAggregateInput;
};
export type eventsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.eventsWhereInput | Prisma.eventsWhereInput[];
    OR?: Prisma.eventsWhereInput[];
    NOT?: Prisma.eventsWhereInput | Prisma.eventsWhereInput[];
    venue_id?: Prisma.UuidFilter<"events"> | string;
    title?: Prisma.StringFilter<"events"> | string;
    description?: Prisma.StringNullableFilter<"events"> | string | null;
    event_date?: Prisma.DateTimeFilter<"events"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"events"> | Date | string;
    end_time?: Prisma.DateTimeNullableFilter<"events"> | Date | string | null;
    poster_url?: Prisma.StringNullableFilter<"events"> | string | null;
    ticket_price?: Prisma.DecimalFilter<"events"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFilter<"events"> | number;
    status?: Prisma.Enumevent_statusFilter<"events"> | $Enums.event_status;
    created_by?: Prisma.UuidFilter<"events"> | string;
    created_at?: Prisma.DateTimeFilter<"events"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"events"> | Date | string;
    bookings?: Prisma.BookingsListRelationFilter;
    event_lineups?: Prisma.Event_lineupsListRelationFilter;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
    venues?: Prisma.XOR<Prisma.VenuesScalarRelationFilter, Prisma.venuesWhereInput>;
    media?: Prisma.MediaListRelationFilter;
}, "id">;
export type eventsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    venue_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    event_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    poster_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.eventsCountOrderByAggregateInput;
    _avg?: Prisma.eventsAvgOrderByAggregateInput;
    _max?: Prisma.eventsMaxOrderByAggregateInput;
    _min?: Prisma.eventsMinOrderByAggregateInput;
    _sum?: Prisma.eventsSumOrderByAggregateInput;
};
export type eventsScalarWhereWithAggregatesInput = {
    AND?: Prisma.eventsScalarWhereWithAggregatesInput | Prisma.eventsScalarWhereWithAggregatesInput[];
    OR?: Prisma.eventsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.eventsScalarWhereWithAggregatesInput | Prisma.eventsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"events"> | string;
    venue_id?: Prisma.UuidWithAggregatesFilter<"events"> | string;
    title?: Prisma.StringWithAggregatesFilter<"events"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"events"> | string | null;
    event_date?: Prisma.DateTimeWithAggregatesFilter<"events"> | Date | string;
    start_time?: Prisma.DateTimeWithAggregatesFilter<"events"> | Date | string;
    end_time?: Prisma.DateTimeNullableWithAggregatesFilter<"events"> | Date | string | null;
    poster_url?: Prisma.StringNullableWithAggregatesFilter<"events"> | string | null;
    ticket_price?: Prisma.DecimalWithAggregatesFilter<"events"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntWithAggregatesFilter<"events"> | number;
    status?: Prisma.Enumevent_statusWithAggregatesFilter<"events"> | $Enums.event_status;
    created_by?: Prisma.UuidWithAggregatesFilter<"events"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"events"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"events"> | Date | string;
};
export type eventsCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutEventsInput;
    users: Prisma.usersCreateNestedOneWithoutEventsInput;
    venues: Prisma.venuesCreateNestedOneWithoutEventsInput;
    media?: Prisma.mediaCreateNestedManyWithoutEventsInput;
};
export type eventsUncheckedCreateInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutEventsInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutEventsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEventsNestedInput;
    venues?: Prisma.venuesUpdateOneRequiredWithoutEventsNestedInput;
    media?: Prisma.mediaUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutEventsNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsCreateManyInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type eventsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventsScalarRelationFilter = {
    is?: Prisma.eventsWhereInput;
    isNot?: Prisma.eventsWhereInput;
};
export type eventsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venue_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    event_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    poster_url?: Prisma.SortOrder;
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type eventsAvgOrderByAggregateInput = {
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type eventsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venue_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    event_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    poster_url?: Prisma.SortOrder;
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type eventsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    venue_id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    event_date?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
    poster_url?: Prisma.SortOrder;
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type eventsSumOrderByAggregateInput = {
    ticket_price?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
};
export type EventsNullableScalarRelationFilter = {
    is?: Prisma.eventsWhereInput | null;
    isNot?: Prisma.eventsWhereInput | null;
};
export type EventsListRelationFilter = {
    every?: Prisma.eventsWhereInput;
    some?: Prisma.eventsWhereInput;
    none?: Prisma.eventsWhereInput;
};
export type eventsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type eventsCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutBookingsInput, Prisma.eventsUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.eventsWhereUniqueInput;
};
export type eventsUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutBookingsInput, Prisma.eventsUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.eventsUpsertWithoutBookingsInput;
    connect?: Prisma.eventsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.eventsUpdateToOneWithWhereWithoutBookingsInput, Prisma.eventsUpdateWithoutBookingsInput>, Prisma.eventsUncheckedUpdateWithoutBookingsInput>;
};
export type eventsCreateNestedOneWithoutEvent_lineupsInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutEvent_lineupsInput, Prisma.eventsUncheckedCreateWithoutEvent_lineupsInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutEvent_lineupsInput;
    connect?: Prisma.eventsWhereUniqueInput;
};
export type eventsUpdateOneRequiredWithoutEvent_lineupsNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutEvent_lineupsInput, Prisma.eventsUncheckedCreateWithoutEvent_lineupsInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutEvent_lineupsInput;
    upsert?: Prisma.eventsUpsertWithoutEvent_lineupsInput;
    connect?: Prisma.eventsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.eventsUpdateToOneWithWhereWithoutEvent_lineupsInput, Prisma.eventsUpdateWithoutEvent_lineupsInput>, Prisma.eventsUncheckedUpdateWithoutEvent_lineupsInput>;
};
export type Enumevent_statusFieldUpdateOperationsInput = {
    set?: $Enums.event_status;
};
export type eventsCreateNestedOneWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutMediaInput, Prisma.eventsUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutMediaInput;
    connect?: Prisma.eventsWhereUniqueInput;
};
export type eventsUpdateOneWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutMediaInput, Prisma.eventsUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutMediaInput;
    upsert?: Prisma.eventsUpsertWithoutMediaInput;
    disconnect?: Prisma.eventsWhereInput | boolean;
    delete?: Prisma.eventsWhereInput | boolean;
    connect?: Prisma.eventsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.eventsUpdateToOneWithWhereWithoutMediaInput, Prisma.eventsUpdateWithoutMediaInput>, Prisma.eventsUncheckedUpdateWithoutMediaInput>;
};
export type eventsCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput> | Prisma.eventsCreateWithoutUsersInput[] | Prisma.eventsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutUsersInput | Prisma.eventsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.eventsCreateManyUsersInputEnvelope;
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
};
export type eventsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput> | Prisma.eventsCreateWithoutUsersInput[] | Prisma.eventsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutUsersInput | Prisma.eventsCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.eventsCreateManyUsersInputEnvelope;
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
};
export type eventsUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput> | Prisma.eventsCreateWithoutUsersInput[] | Prisma.eventsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutUsersInput | Prisma.eventsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput | Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.eventsCreateManyUsersInputEnvelope;
    set?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    disconnect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    delete?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    update?: Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput | Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.eventsUpdateManyWithWhereWithoutUsersInput | Prisma.eventsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
};
export type eventsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput> | Prisma.eventsCreateWithoutUsersInput[] | Prisma.eventsUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutUsersInput | Prisma.eventsCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput | Prisma.eventsUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.eventsCreateManyUsersInputEnvelope;
    set?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    disconnect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    delete?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    update?: Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput | Prisma.eventsUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.eventsUpdateManyWithWhereWithoutUsersInput | Prisma.eventsUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
};
export type eventsCreateNestedManyWithoutVenuesInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput> | Prisma.eventsCreateWithoutVenuesInput[] | Prisma.eventsUncheckedCreateWithoutVenuesInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutVenuesInput | Prisma.eventsCreateOrConnectWithoutVenuesInput[];
    createMany?: Prisma.eventsCreateManyVenuesInputEnvelope;
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
};
export type eventsUncheckedCreateNestedManyWithoutVenuesInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput> | Prisma.eventsCreateWithoutVenuesInput[] | Prisma.eventsUncheckedCreateWithoutVenuesInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutVenuesInput | Prisma.eventsCreateOrConnectWithoutVenuesInput[];
    createMany?: Prisma.eventsCreateManyVenuesInputEnvelope;
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
};
export type eventsUpdateManyWithoutVenuesNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput> | Prisma.eventsCreateWithoutVenuesInput[] | Prisma.eventsUncheckedCreateWithoutVenuesInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutVenuesInput | Prisma.eventsCreateOrConnectWithoutVenuesInput[];
    upsert?: Prisma.eventsUpsertWithWhereUniqueWithoutVenuesInput | Prisma.eventsUpsertWithWhereUniqueWithoutVenuesInput[];
    createMany?: Prisma.eventsCreateManyVenuesInputEnvelope;
    set?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    disconnect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    delete?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    update?: Prisma.eventsUpdateWithWhereUniqueWithoutVenuesInput | Prisma.eventsUpdateWithWhereUniqueWithoutVenuesInput[];
    updateMany?: Prisma.eventsUpdateManyWithWhereWithoutVenuesInput | Prisma.eventsUpdateManyWithWhereWithoutVenuesInput[];
    deleteMany?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
};
export type eventsUncheckedUpdateManyWithoutVenuesNestedInput = {
    create?: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput> | Prisma.eventsCreateWithoutVenuesInput[] | Prisma.eventsUncheckedCreateWithoutVenuesInput[];
    connectOrCreate?: Prisma.eventsCreateOrConnectWithoutVenuesInput | Prisma.eventsCreateOrConnectWithoutVenuesInput[];
    upsert?: Prisma.eventsUpsertWithWhereUniqueWithoutVenuesInput | Prisma.eventsUpsertWithWhereUniqueWithoutVenuesInput[];
    createMany?: Prisma.eventsCreateManyVenuesInputEnvelope;
    set?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    disconnect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    delete?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    connect?: Prisma.eventsWhereUniqueInput | Prisma.eventsWhereUniqueInput[];
    update?: Prisma.eventsUpdateWithWhereUniqueWithoutVenuesInput | Prisma.eventsUpdateWithWhereUniqueWithoutVenuesInput[];
    updateMany?: Prisma.eventsUpdateManyWithWhereWithoutVenuesInput | Prisma.eventsUpdateManyWithWhereWithoutVenuesInput[];
    deleteMany?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
};
export type eventsCreateWithoutBookingsInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutEventsInput;
    users: Prisma.usersCreateNestedOneWithoutEventsInput;
    venues: Prisma.venuesCreateNestedOneWithoutEventsInput;
    media?: Prisma.mediaCreateNestedManyWithoutEventsInput;
};
export type eventsUncheckedCreateWithoutBookingsInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutEventsInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsCreateOrConnectWithoutBookingsInput = {
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateWithoutBookingsInput, Prisma.eventsUncheckedCreateWithoutBookingsInput>;
};
export type eventsUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.eventsUpdateWithoutBookingsInput, Prisma.eventsUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.eventsCreateWithoutBookingsInput, Prisma.eventsUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.eventsWhereInput;
};
export type eventsUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.eventsWhereInput;
    data: Prisma.XOR<Prisma.eventsUpdateWithoutBookingsInput, Prisma.eventsUncheckedUpdateWithoutBookingsInput>;
};
export type eventsUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutEventsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEventsNestedInput;
    venues?: Prisma.venuesUpdateOneRequiredWithoutEventsNestedInput;
    media?: Prisma.mediaUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutEventsNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsCreateWithoutEvent_lineupsInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutEventsInput;
    users: Prisma.usersCreateNestedOneWithoutEventsInput;
    venues: Prisma.venuesCreateNestedOneWithoutEventsInput;
    media?: Prisma.mediaCreateNestedManyWithoutEventsInput;
};
export type eventsUncheckedCreateWithoutEvent_lineupsInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutEventsInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsCreateOrConnectWithoutEvent_lineupsInput = {
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateWithoutEvent_lineupsInput, Prisma.eventsUncheckedCreateWithoutEvent_lineupsInput>;
};
export type eventsUpsertWithoutEvent_lineupsInput = {
    update: Prisma.XOR<Prisma.eventsUpdateWithoutEvent_lineupsInput, Prisma.eventsUncheckedUpdateWithoutEvent_lineupsInput>;
    create: Prisma.XOR<Prisma.eventsCreateWithoutEvent_lineupsInput, Prisma.eventsUncheckedCreateWithoutEvent_lineupsInput>;
    where?: Prisma.eventsWhereInput;
};
export type eventsUpdateToOneWithWhereWithoutEvent_lineupsInput = {
    where?: Prisma.eventsWhereInput;
    data: Prisma.XOR<Prisma.eventsUpdateWithoutEvent_lineupsInput, Prisma.eventsUncheckedUpdateWithoutEvent_lineupsInput>;
};
export type eventsUpdateWithoutEvent_lineupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutEventsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEventsNestedInput;
    venues?: Prisma.venuesUpdateOneRequiredWithoutEventsNestedInput;
    media?: Prisma.mediaUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateWithoutEvent_lineupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutEventsNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsCreateWithoutMediaInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutEventsInput;
    users: Prisma.usersCreateNestedOneWithoutEventsInput;
    venues: Prisma.venuesCreateNestedOneWithoutEventsInput;
};
export type eventsUncheckedCreateWithoutMediaInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsCreateOrConnectWithoutMediaInput = {
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateWithoutMediaInput, Prisma.eventsUncheckedCreateWithoutMediaInput>;
};
export type eventsUpsertWithoutMediaInput = {
    update: Prisma.XOR<Prisma.eventsUpdateWithoutMediaInput, Prisma.eventsUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.eventsCreateWithoutMediaInput, Prisma.eventsUncheckedCreateWithoutMediaInput>;
    where?: Prisma.eventsWhereInput;
};
export type eventsUpdateToOneWithWhereWithoutMediaInput = {
    where?: Prisma.eventsWhereInput;
    data: Prisma.XOR<Prisma.eventsUpdateWithoutMediaInput, Prisma.eventsUncheckedUpdateWithoutMediaInput>;
};
export type eventsUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutEventsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEventsNestedInput;
    venues?: Prisma.venuesUpdateOneRequiredWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsCreateWithoutUsersInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutEventsInput;
    venues: Prisma.venuesCreateNestedOneWithoutEventsInput;
    media?: Prisma.mediaCreateNestedManyWithoutEventsInput;
};
export type eventsUncheckedCreateWithoutUsersInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutEventsInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsCreateOrConnectWithoutUsersInput = {
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput>;
};
export type eventsCreateManyUsersInputEnvelope = {
    data: Prisma.eventsCreateManyUsersInput | Prisma.eventsCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type eventsUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.eventsWhereUniqueInput;
    update: Prisma.XOR<Prisma.eventsUpdateWithoutUsersInput, Prisma.eventsUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.eventsCreateWithoutUsersInput, Prisma.eventsUncheckedCreateWithoutUsersInput>;
};
export type eventsUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.eventsWhereUniqueInput;
    data: Prisma.XOR<Prisma.eventsUpdateWithoutUsersInput, Prisma.eventsUncheckedUpdateWithoutUsersInput>;
};
export type eventsUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.eventsScalarWhereInput;
    data: Prisma.XOR<Prisma.eventsUpdateManyMutationInput, Prisma.eventsUncheckedUpdateManyWithoutUsersInput>;
};
export type eventsScalarWhereInput = {
    AND?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
    OR?: Prisma.eventsScalarWhereInput[];
    NOT?: Prisma.eventsScalarWhereInput | Prisma.eventsScalarWhereInput[];
    id?: Prisma.UuidFilter<"events"> | string;
    venue_id?: Prisma.UuidFilter<"events"> | string;
    title?: Prisma.StringFilter<"events"> | string;
    description?: Prisma.StringNullableFilter<"events"> | string | null;
    event_date?: Prisma.DateTimeFilter<"events"> | Date | string;
    start_time?: Prisma.DateTimeFilter<"events"> | Date | string;
    end_time?: Prisma.DateTimeNullableFilter<"events"> | Date | string | null;
    poster_url?: Prisma.StringNullableFilter<"events"> | string | null;
    ticket_price?: Prisma.DecimalFilter<"events"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFilter<"events"> | number;
    status?: Prisma.Enumevent_statusFilter<"events"> | $Enums.event_status;
    created_by?: Prisma.UuidFilter<"events"> | string;
    created_at?: Prisma.DateTimeFilter<"events"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"events"> | Date | string;
};
export type eventsCreateWithoutVenuesInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutEventsInput;
    users: Prisma.usersCreateNestedOneWithoutEventsInput;
    media?: Prisma.mediaCreateNestedManyWithoutEventsInput;
};
export type eventsUncheckedCreateWithoutVenuesInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutEventsInput;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutEventsInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutEventsInput;
};
export type eventsCreateOrConnectWithoutVenuesInput = {
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput>;
};
export type eventsCreateManyVenuesInputEnvelope = {
    data: Prisma.eventsCreateManyVenuesInput | Prisma.eventsCreateManyVenuesInput[];
    skipDuplicates?: boolean;
};
export type eventsUpsertWithWhereUniqueWithoutVenuesInput = {
    where: Prisma.eventsWhereUniqueInput;
    update: Prisma.XOR<Prisma.eventsUpdateWithoutVenuesInput, Prisma.eventsUncheckedUpdateWithoutVenuesInput>;
    create: Prisma.XOR<Prisma.eventsCreateWithoutVenuesInput, Prisma.eventsUncheckedCreateWithoutVenuesInput>;
};
export type eventsUpdateWithWhereUniqueWithoutVenuesInput = {
    where: Prisma.eventsWhereUniqueInput;
    data: Prisma.XOR<Prisma.eventsUpdateWithoutVenuesInput, Prisma.eventsUncheckedUpdateWithoutVenuesInput>;
};
export type eventsUpdateManyWithWhereWithoutVenuesInput = {
    where: Prisma.eventsScalarWhereInput;
    data: Prisma.XOR<Prisma.eventsUpdateManyMutationInput, Prisma.eventsUncheckedUpdateManyWithoutVenuesInput>;
};
export type eventsCreateManyUsersInput = {
    id?: string;
    venue_id: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type eventsUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutEventsNestedInput;
    venues?: Prisma.venuesUpdateOneRequiredWithoutEventsNestedInput;
    media?: Prisma.mediaUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutEventsNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    venue_id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type eventsCreateManyVenuesInput = {
    id?: string;
    title: string;
    description?: string | null;
    event_date: Date | string;
    start_time: Date | string;
    end_time?: Date | string | null;
    poster_url?: string | null;
    ticket_price?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity: number;
    status?: $Enums.event_status;
    created_by: string;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type eventsUpdateWithoutVenuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutEventsNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutEventsNestedInput;
    media?: Prisma.mediaUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateWithoutVenuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutEventsNestedInput;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutEventsNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutEventsNestedInput;
};
export type eventsUncheckedUpdateManyWithoutVenuesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    event_date?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    start_time?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    poster_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ticket_price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    status?: Prisma.Enumevent_statusFieldUpdateOperationsInput | $Enums.event_status;
    created_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventsCountOutputType = {
    bookings: number;
    event_lineups: number;
    media: number;
};
export type EventsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | EventsCountOutputTypeCountBookingsArgs;
    event_lineups?: boolean | EventsCountOutputTypeCountEvent_lineupsArgs;
    media?: boolean | EventsCountOutputTypeCountMediaArgs;
};
export type EventsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventsCountOutputTypeSelect<ExtArgs> | null;
};
export type EventsCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
};
export type EventsCountOutputTypeCountEvent_lineupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.event_lineupsWhereInput;
};
export type EventsCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mediaWhereInput;
};
export type eventsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venue_id?: boolean;
    title?: boolean;
    description?: boolean;
    event_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    poster_url?: boolean;
    ticket_price?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bookings?: boolean | Prisma.events$bookingsArgs<ExtArgs>;
    event_lineups?: boolean | Prisma.events$event_lineupsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.events$mediaArgs<ExtArgs>;
    _count?: boolean | Prisma.EventsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["events"]>;
export type eventsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venue_id?: boolean;
    title?: boolean;
    description?: boolean;
    event_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    poster_url?: boolean;
    ticket_price?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["events"]>;
export type eventsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    venue_id?: boolean;
    title?: boolean;
    description?: boolean;
    event_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    poster_url?: boolean;
    ticket_price?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["events"]>;
export type eventsSelectScalar = {
    id?: boolean;
    venue_id?: boolean;
    title?: boolean;
    description?: boolean;
    event_date?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    poster_url?: boolean;
    ticket_price?: boolean;
    capacity?: boolean;
    status?: boolean;
    created_by?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type eventsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "venue_id" | "title" | "description" | "event_date" | "start_time" | "end_time" | "poster_url" | "ticket_price" | "capacity" | "status" | "created_by" | "created_at" | "updated_at", ExtArgs["result"]["events"]>;
export type eventsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.events$bookingsArgs<ExtArgs>;
    event_lineups?: boolean | Prisma.events$event_lineupsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
    media?: boolean | Prisma.events$mediaArgs<ExtArgs>;
    _count?: boolean | Prisma.EventsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type eventsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
};
export type eventsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
    venues?: boolean | Prisma.venuesDefaultArgs<ExtArgs>;
};
export type $eventsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "events";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>[];
        event_lineups: Prisma.$event_lineupsPayload<ExtArgs>[];
        users: Prisma.$usersPayload<ExtArgs>;
        venues: Prisma.$venuesPayload<ExtArgs>;
        media: Prisma.$mediaPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        venue_id: string;
        title: string;
        description: string | null;
        event_date: Date;
        start_time: Date;
        end_time: Date | null;
        poster_url: string | null;
        ticket_price: runtime.Decimal;
        capacity: number;
        status: $Enums.event_status;
        created_by: string;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["events"]>;
    composites: {};
};
export type eventsGetPayload<S extends boolean | null | undefined | eventsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$eventsPayload, S>;
export type eventsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<eventsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventsCountAggregateInputType | true;
};
export interface eventsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['events'];
        meta: {
            name: 'events';
        };
    };
    findUnique<T extends eventsFindUniqueArgs>(args: Prisma.SelectSubset<T, eventsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends eventsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, eventsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends eventsFindFirstArgs>(args?: Prisma.SelectSubset<T, eventsFindFirstArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends eventsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, eventsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends eventsFindManyArgs>(args?: Prisma.SelectSubset<T, eventsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends eventsCreateArgs>(args: Prisma.SelectSubset<T, eventsCreateArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends eventsCreateManyArgs>(args?: Prisma.SelectSubset<T, eventsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends eventsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, eventsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends eventsDeleteArgs>(args: Prisma.SelectSubset<T, eventsDeleteArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends eventsUpdateArgs>(args: Prisma.SelectSubset<T, eventsUpdateArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends eventsDeleteManyArgs>(args?: Prisma.SelectSubset<T, eventsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends eventsUpdateManyArgs>(args: Prisma.SelectSubset<T, eventsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends eventsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, eventsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends eventsUpsertArgs>(args: Prisma.SelectSubset<T, eventsUpsertArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends eventsCountArgs>(args?: Prisma.Subset<T, eventsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventsCountAggregateOutputType> : number>;
    aggregate<T extends EventsAggregateArgs>(args: Prisma.Subset<T, EventsAggregateArgs>): Prisma.PrismaPromise<GetEventsAggregateType<T>>;
    groupBy<T extends eventsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: eventsGroupByArgs['orderBy'];
    } : {
        orderBy?: eventsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, eventsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: eventsFieldRefs;
}
export interface Prisma__eventsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.events$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.events$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    event_lineups<T extends Prisma.events$event_lineupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.events$event_lineupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    venues<T extends Prisma.venuesDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.venuesDefaultArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    media<T extends Prisma.events$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.events$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface eventsFieldRefs {
    readonly id: Prisma.FieldRef<"events", 'String'>;
    readonly venue_id: Prisma.FieldRef<"events", 'String'>;
    readonly title: Prisma.FieldRef<"events", 'String'>;
    readonly description: Prisma.FieldRef<"events", 'String'>;
    readonly event_date: Prisma.FieldRef<"events", 'DateTime'>;
    readonly start_time: Prisma.FieldRef<"events", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"events", 'DateTime'>;
    readonly poster_url: Prisma.FieldRef<"events", 'String'>;
    readonly ticket_price: Prisma.FieldRef<"events", 'Decimal'>;
    readonly capacity: Prisma.FieldRef<"events", 'Int'>;
    readonly status: Prisma.FieldRef<"events", 'event_status'>;
    readonly created_by: Prisma.FieldRef<"events", 'String'>;
    readonly created_at: Prisma.FieldRef<"events", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"events", 'DateTime'>;
}
export type eventsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where: Prisma.eventsWhereUniqueInput;
};
export type eventsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where: Prisma.eventsWhereUniqueInput;
};
export type eventsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where?: Prisma.eventsWhereInput;
    orderBy?: Prisma.eventsOrderByWithRelationInput | Prisma.eventsOrderByWithRelationInput[];
    cursor?: Prisma.eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventsScalarFieldEnum | Prisma.EventsScalarFieldEnum[];
};
export type eventsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where?: Prisma.eventsWhereInput;
    orderBy?: Prisma.eventsOrderByWithRelationInput | Prisma.eventsOrderByWithRelationInput[];
    cursor?: Prisma.eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventsScalarFieldEnum | Prisma.EventsScalarFieldEnum[];
};
export type eventsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where?: Prisma.eventsWhereInput;
    orderBy?: Prisma.eventsOrderByWithRelationInput | Prisma.eventsOrderByWithRelationInput[];
    cursor?: Prisma.eventsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventsScalarFieldEnum | Prisma.EventsScalarFieldEnum[];
};
export type eventsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventsCreateInput, Prisma.eventsUncheckedCreateInput>;
};
export type eventsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.eventsCreateManyInput | Prisma.eventsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type eventsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    data: Prisma.eventsCreateManyInput | Prisma.eventsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.eventsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type eventsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventsUpdateInput, Prisma.eventsUncheckedUpdateInput>;
    where: Prisma.eventsWhereUniqueInput;
};
export type eventsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.eventsUpdateManyMutationInput, Prisma.eventsUncheckedUpdateManyInput>;
    where?: Prisma.eventsWhereInput;
    limit?: number;
};
export type eventsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.eventsUpdateManyMutationInput, Prisma.eventsUncheckedUpdateManyInput>;
    where?: Prisma.eventsWhereInput;
    limit?: number;
    include?: Prisma.eventsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type eventsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where: Prisma.eventsWhereUniqueInput;
    create: Prisma.XOR<Prisma.eventsCreateInput, Prisma.eventsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.eventsUpdateInput, Prisma.eventsUncheckedUpdateInput>;
};
export type eventsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where: Prisma.eventsWhereUniqueInput;
};
export type eventsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventsWhereInput;
    limit?: number;
};
export type events$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type events$event_lineupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    where?: Prisma.event_lineupsWhereInput;
    orderBy?: Prisma.event_lineupsOrderByWithRelationInput | Prisma.event_lineupsOrderByWithRelationInput[];
    cursor?: Prisma.event_lineupsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Event_lineupsScalarFieldEnum | Prisma.Event_lineupsScalarFieldEnum[];
};
export type events$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    where?: Prisma.mediaWhereInput;
    orderBy?: Prisma.mediaOrderByWithRelationInput | Prisma.mediaOrderByWithRelationInput[];
    cursor?: Prisma.mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.MediaScalarFieldEnum | Prisma.MediaScalarFieldEnum[];
};
export type eventsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
};
