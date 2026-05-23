import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type event_lineupsModel = runtime.Types.Result.DefaultSelection<Prisma.$event_lineupsPayload>;
export type AggregateEvent_lineups = {
    _count: Event_lineupsCountAggregateOutputType | null;
    _avg: Event_lineupsAvgAggregateOutputType | null;
    _sum: Event_lineupsSumAggregateOutputType | null;
    _min: Event_lineupsMinAggregateOutputType | null;
    _max: Event_lineupsMaxAggregateOutputType | null;
};
export type Event_lineupsAvgAggregateOutputType = {
    performance_order: number | null;
};
export type Event_lineupsSumAggregateOutputType = {
    performance_order: number | null;
};
export type Event_lineupsMinAggregateOutputType = {
    id: string | null;
    event_id: string | null;
    dj_id: string | null;
    performance_order: number | null;
    start_time: Date | null;
    end_time: Date | null;
};
export type Event_lineupsMaxAggregateOutputType = {
    id: string | null;
    event_id: string | null;
    dj_id: string | null;
    performance_order: number | null;
    start_time: Date | null;
    end_time: Date | null;
};
export type Event_lineupsCountAggregateOutputType = {
    id: number;
    event_id: number;
    dj_id: number;
    performance_order: number;
    start_time: number;
    end_time: number;
    _all: number;
};
export type Event_lineupsAvgAggregateInputType = {
    performance_order?: true;
};
export type Event_lineupsSumAggregateInputType = {
    performance_order?: true;
};
export type Event_lineupsMinAggregateInputType = {
    id?: true;
    event_id?: true;
    dj_id?: true;
    performance_order?: true;
    start_time?: true;
    end_time?: true;
};
export type Event_lineupsMaxAggregateInputType = {
    id?: true;
    event_id?: true;
    dj_id?: true;
    performance_order?: true;
    start_time?: true;
    end_time?: true;
};
export type Event_lineupsCountAggregateInputType = {
    id?: true;
    event_id?: true;
    dj_id?: true;
    performance_order?: true;
    start_time?: true;
    end_time?: true;
    _all?: true;
};
export type Event_lineupsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.event_lineupsWhereInput;
    orderBy?: Prisma.event_lineupsOrderByWithRelationInput | Prisma.event_lineupsOrderByWithRelationInput[];
    cursor?: Prisma.event_lineupsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Event_lineupsCountAggregateInputType;
    _avg?: Event_lineupsAvgAggregateInputType;
    _sum?: Event_lineupsSumAggregateInputType;
    _min?: Event_lineupsMinAggregateInputType;
    _max?: Event_lineupsMaxAggregateInputType;
};
export type GetEvent_lineupsAggregateType<T extends Event_lineupsAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent_lineups]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent_lineups[P]> : Prisma.GetScalarType<T[P], AggregateEvent_lineups[P]>;
};
export type event_lineupsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.event_lineupsWhereInput;
    orderBy?: Prisma.event_lineupsOrderByWithAggregationInput | Prisma.event_lineupsOrderByWithAggregationInput[];
    by: Prisma.Event_lineupsScalarFieldEnum[] | Prisma.Event_lineupsScalarFieldEnum;
    having?: Prisma.event_lineupsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Event_lineupsCountAggregateInputType | true;
    _avg?: Event_lineupsAvgAggregateInputType;
    _sum?: Event_lineupsSumAggregateInputType;
    _min?: Event_lineupsMinAggregateInputType;
    _max?: Event_lineupsMaxAggregateInputType;
};
export type Event_lineupsGroupByOutputType = {
    id: string;
    event_id: string;
    dj_id: string;
    performance_order: number;
    start_time: Date | null;
    end_time: Date | null;
    _count: Event_lineupsCountAggregateOutputType | null;
    _avg: Event_lineupsAvgAggregateOutputType | null;
    _sum: Event_lineupsSumAggregateOutputType | null;
    _min: Event_lineupsMinAggregateOutputType | null;
    _max: Event_lineupsMaxAggregateOutputType | null;
};
export type GetEvent_lineupsGroupByPayload<T extends event_lineupsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Event_lineupsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Event_lineupsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Event_lineupsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Event_lineupsGroupByOutputType[P]>;
}>>;
export type event_lineupsWhereInput = {
    AND?: Prisma.event_lineupsWhereInput | Prisma.event_lineupsWhereInput[];
    OR?: Prisma.event_lineupsWhereInput[];
    NOT?: Prisma.event_lineupsWhereInput | Prisma.event_lineupsWhereInput[];
    id?: Prisma.UuidFilter<"event_lineups"> | string;
    event_id?: Prisma.UuidFilter<"event_lineups"> | string;
    dj_id?: Prisma.UuidFilter<"event_lineups"> | string;
    performance_order?: Prisma.IntFilter<"event_lineups"> | number;
    start_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
    djs?: Prisma.XOR<Prisma.DjsScalarRelationFilter, Prisma.djsWhereInput>;
    events?: Prisma.XOR<Prisma.EventsScalarRelationFilter, Prisma.eventsWhereInput>;
};
export type event_lineupsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    dj_id?: Prisma.SortOrder;
    performance_order?: Prisma.SortOrder;
    start_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    djs?: Prisma.djsOrderByWithRelationInput;
    events?: Prisma.eventsOrderByWithRelationInput;
};
export type event_lineupsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    event_id_dj_id?: Prisma.event_lineupsEvent_idDj_idCompoundUniqueInput;
    AND?: Prisma.event_lineupsWhereInput | Prisma.event_lineupsWhereInput[];
    OR?: Prisma.event_lineupsWhereInput[];
    NOT?: Prisma.event_lineupsWhereInput | Prisma.event_lineupsWhereInput[];
    event_id?: Prisma.UuidFilter<"event_lineups"> | string;
    dj_id?: Prisma.UuidFilter<"event_lineups"> | string;
    performance_order?: Prisma.IntFilter<"event_lineups"> | number;
    start_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
    djs?: Prisma.XOR<Prisma.DjsScalarRelationFilter, Prisma.djsWhereInput>;
    events?: Prisma.XOR<Prisma.EventsScalarRelationFilter, Prisma.eventsWhereInput>;
}, "id" | "event_id_dj_id">;
export type event_lineupsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    dj_id?: Prisma.SortOrder;
    performance_order?: Prisma.SortOrder;
    start_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    end_time?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.event_lineupsCountOrderByAggregateInput;
    _avg?: Prisma.event_lineupsAvgOrderByAggregateInput;
    _max?: Prisma.event_lineupsMaxOrderByAggregateInput;
    _min?: Prisma.event_lineupsMinOrderByAggregateInput;
    _sum?: Prisma.event_lineupsSumOrderByAggregateInput;
};
export type event_lineupsScalarWhereWithAggregatesInput = {
    AND?: Prisma.event_lineupsScalarWhereWithAggregatesInput | Prisma.event_lineupsScalarWhereWithAggregatesInput[];
    OR?: Prisma.event_lineupsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.event_lineupsScalarWhereWithAggregatesInput | Prisma.event_lineupsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"event_lineups"> | string;
    event_id?: Prisma.UuidWithAggregatesFilter<"event_lineups"> | string;
    dj_id?: Prisma.UuidWithAggregatesFilter<"event_lineups"> | string;
    performance_order?: Prisma.IntWithAggregatesFilter<"event_lineups"> | number;
    start_time?: Prisma.DateTimeNullableWithAggregatesFilter<"event_lineups"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableWithAggregatesFilter<"event_lineups"> | Date | string | null;
};
export type event_lineupsCreateInput = {
    id?: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    djs: Prisma.djsCreateNestedOneWithoutEvent_lineupsInput;
    events: Prisma.eventsCreateNestedOneWithoutEvent_lineupsInput;
};
export type event_lineupsUncheckedCreateInput = {
    id?: string;
    event_id: string;
    dj_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    djs?: Prisma.djsUpdateOneRequiredWithoutEvent_lineupsNestedInput;
    events?: Prisma.eventsUpdateOneRequiredWithoutEvent_lineupsNestedInput;
};
export type event_lineupsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dj_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsCreateManyInput = {
    id?: string;
    event_id: string;
    dj_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    dj_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type Event_lineupsListRelationFilter = {
    every?: Prisma.event_lineupsWhereInput;
    some?: Prisma.event_lineupsWhereInput;
    none?: Prisma.event_lineupsWhereInput;
};
export type event_lineupsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type event_lineupsEvent_idDj_idCompoundUniqueInput = {
    event_id: string;
    dj_id: string;
};
export type event_lineupsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    dj_id?: Prisma.SortOrder;
    performance_order?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
};
export type event_lineupsAvgOrderByAggregateInput = {
    performance_order?: Prisma.SortOrder;
};
export type event_lineupsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    dj_id?: Prisma.SortOrder;
    performance_order?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
};
export type event_lineupsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    dj_id?: Prisma.SortOrder;
    performance_order?: Prisma.SortOrder;
    start_time?: Prisma.SortOrder;
    end_time?: Prisma.SortOrder;
};
export type event_lineupsSumOrderByAggregateInput = {
    performance_order?: Prisma.SortOrder;
};
export type event_lineupsCreateNestedManyWithoutDjsInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput> | Prisma.event_lineupsCreateWithoutDjsInput[] | Prisma.event_lineupsUncheckedCreateWithoutDjsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutDjsInput | Prisma.event_lineupsCreateOrConnectWithoutDjsInput[];
    createMany?: Prisma.event_lineupsCreateManyDjsInputEnvelope;
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
};
export type event_lineupsUncheckedCreateNestedManyWithoutDjsInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput> | Prisma.event_lineupsCreateWithoutDjsInput[] | Prisma.event_lineupsUncheckedCreateWithoutDjsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutDjsInput | Prisma.event_lineupsCreateOrConnectWithoutDjsInput[];
    createMany?: Prisma.event_lineupsCreateManyDjsInputEnvelope;
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
};
export type event_lineupsUpdateManyWithoutDjsNestedInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput> | Prisma.event_lineupsCreateWithoutDjsInput[] | Prisma.event_lineupsUncheckedCreateWithoutDjsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutDjsInput | Prisma.event_lineupsCreateOrConnectWithoutDjsInput[];
    upsert?: Prisma.event_lineupsUpsertWithWhereUniqueWithoutDjsInput | Prisma.event_lineupsUpsertWithWhereUniqueWithoutDjsInput[];
    createMany?: Prisma.event_lineupsCreateManyDjsInputEnvelope;
    set?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    disconnect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    delete?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    update?: Prisma.event_lineupsUpdateWithWhereUniqueWithoutDjsInput | Prisma.event_lineupsUpdateWithWhereUniqueWithoutDjsInput[];
    updateMany?: Prisma.event_lineupsUpdateManyWithWhereWithoutDjsInput | Prisma.event_lineupsUpdateManyWithWhereWithoutDjsInput[];
    deleteMany?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
};
export type event_lineupsUncheckedUpdateManyWithoutDjsNestedInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput> | Prisma.event_lineupsCreateWithoutDjsInput[] | Prisma.event_lineupsUncheckedCreateWithoutDjsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutDjsInput | Prisma.event_lineupsCreateOrConnectWithoutDjsInput[];
    upsert?: Prisma.event_lineupsUpsertWithWhereUniqueWithoutDjsInput | Prisma.event_lineupsUpsertWithWhereUniqueWithoutDjsInput[];
    createMany?: Prisma.event_lineupsCreateManyDjsInputEnvelope;
    set?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    disconnect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    delete?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    update?: Prisma.event_lineupsUpdateWithWhereUniqueWithoutDjsInput | Prisma.event_lineupsUpdateWithWhereUniqueWithoutDjsInput[];
    updateMany?: Prisma.event_lineupsUpdateManyWithWhereWithoutDjsInput | Prisma.event_lineupsUpdateManyWithWhereWithoutDjsInput[];
    deleteMany?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type event_lineupsCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput> | Prisma.event_lineupsCreateWithoutEventsInput[] | Prisma.event_lineupsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutEventsInput | Prisma.event_lineupsCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.event_lineupsCreateManyEventsInputEnvelope;
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
};
export type event_lineupsUncheckedCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput> | Prisma.event_lineupsCreateWithoutEventsInput[] | Prisma.event_lineupsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutEventsInput | Prisma.event_lineupsCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.event_lineupsCreateManyEventsInputEnvelope;
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
};
export type event_lineupsUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput> | Prisma.event_lineupsCreateWithoutEventsInput[] | Prisma.event_lineupsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutEventsInput | Prisma.event_lineupsCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.event_lineupsUpsertWithWhereUniqueWithoutEventsInput | Prisma.event_lineupsUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.event_lineupsCreateManyEventsInputEnvelope;
    set?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    disconnect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    delete?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    update?: Prisma.event_lineupsUpdateWithWhereUniqueWithoutEventsInput | Prisma.event_lineupsUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.event_lineupsUpdateManyWithWhereWithoutEventsInput | Prisma.event_lineupsUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
};
export type event_lineupsUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput> | Prisma.event_lineupsCreateWithoutEventsInput[] | Prisma.event_lineupsUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.event_lineupsCreateOrConnectWithoutEventsInput | Prisma.event_lineupsCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.event_lineupsUpsertWithWhereUniqueWithoutEventsInput | Prisma.event_lineupsUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.event_lineupsCreateManyEventsInputEnvelope;
    set?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    disconnect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    delete?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    connect?: Prisma.event_lineupsWhereUniqueInput | Prisma.event_lineupsWhereUniqueInput[];
    update?: Prisma.event_lineupsUpdateWithWhereUniqueWithoutEventsInput | Prisma.event_lineupsUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.event_lineupsUpdateManyWithWhereWithoutEventsInput | Prisma.event_lineupsUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
};
export type event_lineupsCreateWithoutDjsInput = {
    id?: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    events: Prisma.eventsCreateNestedOneWithoutEvent_lineupsInput;
};
export type event_lineupsUncheckedCreateWithoutDjsInput = {
    id?: string;
    event_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsCreateOrConnectWithoutDjsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput>;
};
export type event_lineupsCreateManyDjsInputEnvelope = {
    data: Prisma.event_lineupsCreateManyDjsInput | Prisma.event_lineupsCreateManyDjsInput[];
    skipDuplicates?: boolean;
};
export type event_lineupsUpsertWithWhereUniqueWithoutDjsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.event_lineupsUpdateWithoutDjsInput, Prisma.event_lineupsUncheckedUpdateWithoutDjsInput>;
    create: Prisma.XOR<Prisma.event_lineupsCreateWithoutDjsInput, Prisma.event_lineupsUncheckedCreateWithoutDjsInput>;
};
export type event_lineupsUpdateWithWhereUniqueWithoutDjsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.event_lineupsUpdateWithoutDjsInput, Prisma.event_lineupsUncheckedUpdateWithoutDjsInput>;
};
export type event_lineupsUpdateManyWithWhereWithoutDjsInput = {
    where: Prisma.event_lineupsScalarWhereInput;
    data: Prisma.XOR<Prisma.event_lineupsUpdateManyMutationInput, Prisma.event_lineupsUncheckedUpdateManyWithoutDjsInput>;
};
export type event_lineupsScalarWhereInput = {
    AND?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
    OR?: Prisma.event_lineupsScalarWhereInput[];
    NOT?: Prisma.event_lineupsScalarWhereInput | Prisma.event_lineupsScalarWhereInput[];
    id?: Prisma.UuidFilter<"event_lineups"> | string;
    event_id?: Prisma.UuidFilter<"event_lineups"> | string;
    dj_id?: Prisma.UuidFilter<"event_lineups"> | string;
    performance_order?: Prisma.IntFilter<"event_lineups"> | number;
    start_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
    end_time?: Prisma.DateTimeNullableFilter<"event_lineups"> | Date | string | null;
};
export type event_lineupsCreateWithoutEventsInput = {
    id?: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
    djs: Prisma.djsCreateNestedOneWithoutEvent_lineupsInput;
};
export type event_lineupsUncheckedCreateWithoutEventsInput = {
    id?: string;
    dj_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsCreateOrConnectWithoutEventsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput>;
};
export type event_lineupsCreateManyEventsInputEnvelope = {
    data: Prisma.event_lineupsCreateManyEventsInput | Prisma.event_lineupsCreateManyEventsInput[];
    skipDuplicates?: boolean;
};
export type event_lineupsUpsertWithWhereUniqueWithoutEventsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    update: Prisma.XOR<Prisma.event_lineupsUpdateWithoutEventsInput, Prisma.event_lineupsUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.event_lineupsCreateWithoutEventsInput, Prisma.event_lineupsUncheckedCreateWithoutEventsInput>;
};
export type event_lineupsUpdateWithWhereUniqueWithoutEventsInput = {
    where: Prisma.event_lineupsWhereUniqueInput;
    data: Prisma.XOR<Prisma.event_lineupsUpdateWithoutEventsInput, Prisma.event_lineupsUncheckedUpdateWithoutEventsInput>;
};
export type event_lineupsUpdateManyWithWhereWithoutEventsInput = {
    where: Prisma.event_lineupsScalarWhereInput;
    data: Prisma.XOR<Prisma.event_lineupsUpdateManyMutationInput, Prisma.event_lineupsUncheckedUpdateManyWithoutEventsInput>;
};
export type event_lineupsCreateManyDjsInput = {
    id?: string;
    event_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsUpdateWithoutDjsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    events?: Prisma.eventsUpdateOneRequiredWithoutEvent_lineupsNestedInput;
};
export type event_lineupsUncheckedUpdateWithoutDjsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsUncheckedUpdateManyWithoutDjsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsCreateManyEventsInput = {
    id?: string;
    dj_id: string;
    performance_order?: number;
    start_time?: Date | string | null;
    end_time?: Date | string | null;
};
export type event_lineupsUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    djs?: Prisma.djsUpdateOneRequiredWithoutEvent_lineupsNestedInput;
};
export type event_lineupsUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dj_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsUncheckedUpdateManyWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    dj_id?: Prisma.StringFieldUpdateOperationsInput | string;
    performance_order?: Prisma.IntFieldUpdateOperationsInput | number;
    start_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    end_time?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type event_lineupsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    dj_id?: boolean;
    performance_order?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event_lineups"]>;
export type event_lineupsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    dj_id?: boolean;
    performance_order?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event_lineups"]>;
export type event_lineupsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    dj_id?: boolean;
    performance_order?: boolean;
    start_time?: boolean;
    end_time?: boolean;
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event_lineups"]>;
export type event_lineupsSelectScalar = {
    id?: boolean;
    event_id?: boolean;
    dj_id?: boolean;
    performance_order?: boolean;
    start_time?: boolean;
    end_time?: boolean;
};
export type event_lineupsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "event_id" | "dj_id" | "performance_order" | "start_time" | "end_time", ExtArgs["result"]["event_lineups"]>;
export type event_lineupsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
};
export type event_lineupsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
};
export type event_lineupsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    djs?: boolean | Prisma.djsDefaultArgs<ExtArgs>;
    events?: boolean | Prisma.eventsDefaultArgs<ExtArgs>;
};
export type $event_lineupsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "event_lineups";
    objects: {
        djs: Prisma.$djsPayload<ExtArgs>;
        events: Prisma.$eventsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        event_id: string;
        dj_id: string;
        performance_order: number;
        start_time: Date | null;
        end_time: Date | null;
    }, ExtArgs["result"]["event_lineups"]>;
    composites: {};
};
export type event_lineupsGetPayload<S extends boolean | null | undefined | event_lineupsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload, S>;
export type event_lineupsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<event_lineupsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Event_lineupsCountAggregateInputType | true;
};
export interface event_lineupsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['event_lineups'];
        meta: {
            name: 'event_lineups';
        };
    };
    findUnique<T extends event_lineupsFindUniqueArgs>(args: Prisma.SelectSubset<T, event_lineupsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends event_lineupsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, event_lineupsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends event_lineupsFindFirstArgs>(args?: Prisma.SelectSubset<T, event_lineupsFindFirstArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends event_lineupsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, event_lineupsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends event_lineupsFindManyArgs>(args?: Prisma.SelectSubset<T, event_lineupsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends event_lineupsCreateArgs>(args: Prisma.SelectSubset<T, event_lineupsCreateArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends event_lineupsCreateManyArgs>(args?: Prisma.SelectSubset<T, event_lineupsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends event_lineupsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, event_lineupsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends event_lineupsDeleteArgs>(args: Prisma.SelectSubset<T, event_lineupsDeleteArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends event_lineupsUpdateArgs>(args: Prisma.SelectSubset<T, event_lineupsUpdateArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends event_lineupsDeleteManyArgs>(args?: Prisma.SelectSubset<T, event_lineupsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends event_lineupsUpdateManyArgs>(args: Prisma.SelectSubset<T, event_lineupsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends event_lineupsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, event_lineupsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends event_lineupsUpsertArgs>(args: Prisma.SelectSubset<T, event_lineupsUpsertArgs<ExtArgs>>): Prisma.Prisma__event_lineupsClient<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends event_lineupsCountArgs>(args?: Prisma.Subset<T, event_lineupsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Event_lineupsCountAggregateOutputType> : number>;
    aggregate<T extends Event_lineupsAggregateArgs>(args: Prisma.Subset<T, Event_lineupsAggregateArgs>): Prisma.PrismaPromise<GetEvent_lineupsAggregateType<T>>;
    groupBy<T extends event_lineupsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: event_lineupsGroupByArgs['orderBy'];
    } : {
        orderBy?: event_lineupsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, event_lineupsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_lineupsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: event_lineupsFieldRefs;
}
export interface Prisma__event_lineupsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    djs<T extends Prisma.djsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.djsDefaultArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    events<T extends Prisma.eventsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.eventsDefaultArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface event_lineupsFieldRefs {
    readonly id: Prisma.FieldRef<"event_lineups", 'String'>;
    readonly event_id: Prisma.FieldRef<"event_lineups", 'String'>;
    readonly dj_id: Prisma.FieldRef<"event_lineups", 'String'>;
    readonly performance_order: Prisma.FieldRef<"event_lineups", 'Int'>;
    readonly start_time: Prisma.FieldRef<"event_lineups", 'DateTime'>;
    readonly end_time: Prisma.FieldRef<"event_lineups", 'DateTime'>;
}
export type event_lineupsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    where: Prisma.event_lineupsWhereUniqueInput;
};
export type event_lineupsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    where: Prisma.event_lineupsWhereUniqueInput;
};
export type event_lineupsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type event_lineupsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type event_lineupsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type event_lineupsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.event_lineupsCreateInput, Prisma.event_lineupsUncheckedCreateInput>;
};
export type event_lineupsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.event_lineupsCreateManyInput | Prisma.event_lineupsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type event_lineupsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    data: Prisma.event_lineupsCreateManyInput | Prisma.event_lineupsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.event_lineupsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type event_lineupsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.event_lineupsUpdateInput, Prisma.event_lineupsUncheckedUpdateInput>;
    where: Prisma.event_lineupsWhereUniqueInput;
};
export type event_lineupsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.event_lineupsUpdateManyMutationInput, Prisma.event_lineupsUncheckedUpdateManyInput>;
    where?: Prisma.event_lineupsWhereInput;
    limit?: number;
};
export type event_lineupsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.event_lineupsUpdateManyMutationInput, Prisma.event_lineupsUncheckedUpdateManyInput>;
    where?: Prisma.event_lineupsWhereInput;
    limit?: number;
    include?: Prisma.event_lineupsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type event_lineupsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    where: Prisma.event_lineupsWhereUniqueInput;
    create: Prisma.XOR<Prisma.event_lineupsCreateInput, Prisma.event_lineupsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.event_lineupsUpdateInput, Prisma.event_lineupsUncheckedUpdateInput>;
};
export type event_lineupsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
    where: Prisma.event_lineupsWhereUniqueInput;
};
export type event_lineupsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.event_lineupsWhereInput;
    limit?: number;
};
export type event_lineupsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.event_lineupsSelect<ExtArgs> | null;
    omit?: Prisma.event_lineupsOmit<ExtArgs> | null;
    include?: Prisma.event_lineupsInclude<ExtArgs> | null;
};
