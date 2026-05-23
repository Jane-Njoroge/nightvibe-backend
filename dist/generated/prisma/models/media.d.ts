import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type mediaModel = runtime.Types.Result.DefaultSelection<Prisma.$mediaPayload>;
export type AggregateMedia = {
    _count: MediaCountAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
};
export type MediaMinAggregateOutputType = {
    id: string | null;
    event_id: string | null;
    url: string | null;
    caption: string | null;
    media_type: $Enums.media_type | null;
    uploaded_by: string | null;
    created_at: Date | null;
};
export type MediaMaxAggregateOutputType = {
    id: string | null;
    event_id: string | null;
    url: string | null;
    caption: string | null;
    media_type: $Enums.media_type | null;
    uploaded_by: string | null;
    created_at: Date | null;
};
export type MediaCountAggregateOutputType = {
    id: number;
    event_id: number;
    url: number;
    caption: number;
    media_type: number;
    uploaded_by: number;
    created_at: number;
    _all: number;
};
export type MediaMinAggregateInputType = {
    id?: true;
    event_id?: true;
    url?: true;
    caption?: true;
    media_type?: true;
    uploaded_by?: true;
    created_at?: true;
};
export type MediaMaxAggregateInputType = {
    id?: true;
    event_id?: true;
    url?: true;
    caption?: true;
    media_type?: true;
    uploaded_by?: true;
    created_at?: true;
};
export type MediaCountAggregateInputType = {
    id?: true;
    event_id?: true;
    url?: true;
    caption?: true;
    media_type?: true;
    uploaded_by?: true;
    created_at?: true;
    _all?: true;
};
export type MediaAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mediaWhereInput;
    orderBy?: Prisma.mediaOrderByWithRelationInput | Prisma.mediaOrderByWithRelationInput[];
    cursor?: Prisma.mediaWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | MediaCountAggregateInputType;
    _min?: MediaMinAggregateInputType;
    _max?: MediaMaxAggregateInputType;
};
export type GetMediaAggregateType<T extends MediaAggregateArgs> = {
    [P in keyof T & keyof AggregateMedia]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateMedia[P]> : Prisma.GetScalarType<T[P], AggregateMedia[P]>;
};
export type mediaGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mediaWhereInput;
    orderBy?: Prisma.mediaOrderByWithAggregationInput | Prisma.mediaOrderByWithAggregationInput[];
    by: Prisma.MediaScalarFieldEnum[] | Prisma.MediaScalarFieldEnum;
    having?: Prisma.mediaScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: MediaCountAggregateInputType | true;
    _min?: MediaMinAggregateInputType;
    _max?: MediaMaxAggregateInputType;
};
export type MediaGroupByOutputType = {
    id: string;
    event_id: string | null;
    url: string;
    caption: string | null;
    media_type: $Enums.media_type;
    uploaded_by: string;
    created_at: Date;
    _count: MediaCountAggregateOutputType | null;
    _min: MediaMinAggregateOutputType | null;
    _max: MediaMaxAggregateOutputType | null;
};
export type GetMediaGroupByPayload<T extends mediaGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<MediaGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof MediaGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], MediaGroupByOutputType[P]> : Prisma.GetScalarType<T[P], MediaGroupByOutputType[P]>;
}>>;
export type mediaWhereInput = {
    AND?: Prisma.mediaWhereInput | Prisma.mediaWhereInput[];
    OR?: Prisma.mediaWhereInput[];
    NOT?: Prisma.mediaWhereInput | Prisma.mediaWhereInput[];
    id?: Prisma.UuidFilter<"media"> | string;
    event_id?: Prisma.UuidNullableFilter<"media"> | string | null;
    url?: Prisma.StringFilter<"media"> | string;
    caption?: Prisma.StringNullableFilter<"media"> | string | null;
    media_type?: Prisma.Enummedia_typeFilter<"media"> | $Enums.media_type;
    uploaded_by?: Prisma.UuidFilter<"media"> | string;
    created_at?: Prisma.DateTimeFilter<"media"> | Date | string;
    events?: Prisma.XOR<Prisma.EventsNullableScalarRelationFilter, Prisma.eventsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
};
export type mediaOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    events?: Prisma.eventsOrderByWithRelationInput;
    users?: Prisma.usersOrderByWithRelationInput;
};
export type mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.mediaWhereInput | Prisma.mediaWhereInput[];
    OR?: Prisma.mediaWhereInput[];
    NOT?: Prisma.mediaWhereInput | Prisma.mediaWhereInput[];
    event_id?: Prisma.UuidNullableFilter<"media"> | string | null;
    url?: Prisma.StringFilter<"media"> | string;
    caption?: Prisma.StringNullableFilter<"media"> | string | null;
    media_type?: Prisma.Enummedia_typeFilter<"media"> | $Enums.media_type;
    uploaded_by?: Prisma.UuidFilter<"media"> | string;
    created_at?: Prisma.DateTimeFilter<"media"> | Date | string;
    events?: Prisma.XOR<Prisma.EventsNullableScalarRelationFilter, Prisma.eventsWhereInput> | null;
    users?: Prisma.XOR<Prisma.UsersScalarRelationFilter, Prisma.usersWhereInput>;
}, "id">;
export type mediaOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrderInput | Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrderInput | Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.mediaCountOrderByAggregateInput;
    _max?: Prisma.mediaMaxOrderByAggregateInput;
    _min?: Prisma.mediaMinOrderByAggregateInput;
};
export type mediaScalarWhereWithAggregatesInput = {
    AND?: Prisma.mediaScalarWhereWithAggregatesInput | Prisma.mediaScalarWhereWithAggregatesInput[];
    OR?: Prisma.mediaScalarWhereWithAggregatesInput[];
    NOT?: Prisma.mediaScalarWhereWithAggregatesInput | Prisma.mediaScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"media"> | string;
    event_id?: Prisma.UuidNullableWithAggregatesFilter<"media"> | string | null;
    url?: Prisma.StringWithAggregatesFilter<"media"> | string;
    caption?: Prisma.StringNullableWithAggregatesFilter<"media"> | string | null;
    media_type?: Prisma.Enummedia_typeWithAggregatesFilter<"media"> | $Enums.media_type;
    uploaded_by?: Prisma.UuidWithAggregatesFilter<"media"> | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"media"> | Date | string;
};
export type mediaCreateInput = {
    id?: string;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    created_at?: Date | string;
    events?: Prisma.eventsCreateNestedOneWithoutMediaInput;
    users: Prisma.usersCreateNestedOneWithoutMediaInput;
};
export type mediaUncheckedCreateInput = {
    id?: string;
    event_id?: string | null;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    uploaded_by: string;
    created_at?: Date | string;
};
export type mediaUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.eventsUpdateOneWithoutMediaNestedInput;
    users?: Prisma.usersUpdateOneRequiredWithoutMediaNestedInput;
};
export type mediaUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaCreateManyInput = {
    id?: string;
    event_id?: string | null;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    uploaded_by: string;
    created_at?: Date | string;
};
export type mediaUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type MediaListRelationFilter = {
    every?: Prisma.mediaWhereInput;
    some?: Prisma.mediaWhereInput;
    none?: Prisma.mediaWhereInput;
};
export type mediaOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type mediaCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type mediaMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type mediaMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    event_id?: Prisma.SortOrder;
    url?: Prisma.SortOrder;
    caption?: Prisma.SortOrder;
    media_type?: Prisma.SortOrder;
    uploaded_by?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type mediaCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput> | Prisma.mediaCreateWithoutEventsInput[] | Prisma.mediaUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutEventsInput | Prisma.mediaCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.mediaCreateManyEventsInputEnvelope;
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
};
export type mediaUncheckedCreateNestedManyWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput> | Prisma.mediaCreateWithoutEventsInput[] | Prisma.mediaUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutEventsInput | Prisma.mediaCreateOrConnectWithoutEventsInput[];
    createMany?: Prisma.mediaCreateManyEventsInputEnvelope;
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
};
export type mediaUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput> | Prisma.mediaCreateWithoutEventsInput[] | Prisma.mediaUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutEventsInput | Prisma.mediaCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.mediaUpsertWithWhereUniqueWithoutEventsInput | Prisma.mediaUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.mediaCreateManyEventsInputEnvelope;
    set?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    disconnect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    delete?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    update?: Prisma.mediaUpdateWithWhereUniqueWithoutEventsInput | Prisma.mediaUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.mediaUpdateManyWithWhereWithoutEventsInput | Prisma.mediaUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
};
export type mediaUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput> | Prisma.mediaCreateWithoutEventsInput[] | Prisma.mediaUncheckedCreateWithoutEventsInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutEventsInput | Prisma.mediaCreateOrConnectWithoutEventsInput[];
    upsert?: Prisma.mediaUpsertWithWhereUniqueWithoutEventsInput | Prisma.mediaUpsertWithWhereUniqueWithoutEventsInput[];
    createMany?: Prisma.mediaCreateManyEventsInputEnvelope;
    set?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    disconnect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    delete?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    update?: Prisma.mediaUpdateWithWhereUniqueWithoutEventsInput | Prisma.mediaUpdateWithWhereUniqueWithoutEventsInput[];
    updateMany?: Prisma.mediaUpdateManyWithWhereWithoutEventsInput | Prisma.mediaUpdateManyWithWhereWithoutEventsInput[];
    deleteMany?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
};
export type Enummedia_typeFieldUpdateOperationsInput = {
    set?: $Enums.media_type;
};
export type mediaCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput> | Prisma.mediaCreateWithoutUsersInput[] | Prisma.mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutUsersInput | Prisma.mediaCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.mediaCreateManyUsersInputEnvelope;
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
};
export type mediaUncheckedCreateNestedManyWithoutUsersInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput> | Prisma.mediaCreateWithoutUsersInput[] | Prisma.mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutUsersInput | Prisma.mediaCreateOrConnectWithoutUsersInput[];
    createMany?: Prisma.mediaCreateManyUsersInputEnvelope;
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
};
export type mediaUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput> | Prisma.mediaCreateWithoutUsersInput[] | Prisma.mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutUsersInput | Prisma.mediaCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.mediaUpsertWithWhereUniqueWithoutUsersInput | Prisma.mediaUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.mediaCreateManyUsersInputEnvelope;
    set?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    disconnect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    delete?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    update?: Prisma.mediaUpdateWithWhereUniqueWithoutUsersInput | Prisma.mediaUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.mediaUpdateManyWithWhereWithoutUsersInput | Prisma.mediaUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
};
export type mediaUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput> | Prisma.mediaCreateWithoutUsersInput[] | Prisma.mediaUncheckedCreateWithoutUsersInput[];
    connectOrCreate?: Prisma.mediaCreateOrConnectWithoutUsersInput | Prisma.mediaCreateOrConnectWithoutUsersInput[];
    upsert?: Prisma.mediaUpsertWithWhereUniqueWithoutUsersInput | Prisma.mediaUpsertWithWhereUniqueWithoutUsersInput[];
    createMany?: Prisma.mediaCreateManyUsersInputEnvelope;
    set?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    disconnect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    delete?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    connect?: Prisma.mediaWhereUniqueInput | Prisma.mediaWhereUniqueInput[];
    update?: Prisma.mediaUpdateWithWhereUniqueWithoutUsersInput | Prisma.mediaUpdateWithWhereUniqueWithoutUsersInput[];
    updateMany?: Prisma.mediaUpdateManyWithWhereWithoutUsersInput | Prisma.mediaUpdateManyWithWhereWithoutUsersInput[];
    deleteMany?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
};
export type mediaCreateWithoutEventsInput = {
    id?: string;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    created_at?: Date | string;
    users: Prisma.usersCreateNestedOneWithoutMediaInput;
};
export type mediaUncheckedCreateWithoutEventsInput = {
    id?: string;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    uploaded_by: string;
    created_at?: Date | string;
};
export type mediaCreateOrConnectWithoutEventsInput = {
    where: Prisma.mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput>;
};
export type mediaCreateManyEventsInputEnvelope = {
    data: Prisma.mediaCreateManyEventsInput | Prisma.mediaCreateManyEventsInput[];
    skipDuplicates?: boolean;
};
export type mediaUpsertWithWhereUniqueWithoutEventsInput = {
    where: Prisma.mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.mediaUpdateWithoutEventsInput, Prisma.mediaUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.mediaCreateWithoutEventsInput, Prisma.mediaUncheckedCreateWithoutEventsInput>;
};
export type mediaUpdateWithWhereUniqueWithoutEventsInput = {
    where: Prisma.mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.mediaUpdateWithoutEventsInput, Prisma.mediaUncheckedUpdateWithoutEventsInput>;
};
export type mediaUpdateManyWithWhereWithoutEventsInput = {
    where: Prisma.mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.mediaUpdateManyMutationInput, Prisma.mediaUncheckedUpdateManyWithoutEventsInput>;
};
export type mediaScalarWhereInput = {
    AND?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
    OR?: Prisma.mediaScalarWhereInput[];
    NOT?: Prisma.mediaScalarWhereInput | Prisma.mediaScalarWhereInput[];
    id?: Prisma.UuidFilter<"media"> | string;
    event_id?: Prisma.UuidNullableFilter<"media"> | string | null;
    url?: Prisma.StringFilter<"media"> | string;
    caption?: Prisma.StringNullableFilter<"media"> | string | null;
    media_type?: Prisma.Enummedia_typeFilter<"media"> | $Enums.media_type;
    uploaded_by?: Prisma.UuidFilter<"media"> | string;
    created_at?: Prisma.DateTimeFilter<"media"> | Date | string;
};
export type mediaCreateWithoutUsersInput = {
    id?: string;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    created_at?: Date | string;
    events?: Prisma.eventsCreateNestedOneWithoutMediaInput;
};
export type mediaUncheckedCreateWithoutUsersInput = {
    id?: string;
    event_id?: string | null;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    created_at?: Date | string;
};
export type mediaCreateOrConnectWithoutUsersInput = {
    where: Prisma.mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput>;
};
export type mediaCreateManyUsersInputEnvelope = {
    data: Prisma.mediaCreateManyUsersInput | Prisma.mediaCreateManyUsersInput[];
    skipDuplicates?: boolean;
};
export type mediaUpsertWithWhereUniqueWithoutUsersInput = {
    where: Prisma.mediaWhereUniqueInput;
    update: Prisma.XOR<Prisma.mediaUpdateWithoutUsersInput, Prisma.mediaUncheckedUpdateWithoutUsersInput>;
    create: Prisma.XOR<Prisma.mediaCreateWithoutUsersInput, Prisma.mediaUncheckedCreateWithoutUsersInput>;
};
export type mediaUpdateWithWhereUniqueWithoutUsersInput = {
    where: Prisma.mediaWhereUniqueInput;
    data: Prisma.XOR<Prisma.mediaUpdateWithoutUsersInput, Prisma.mediaUncheckedUpdateWithoutUsersInput>;
};
export type mediaUpdateManyWithWhereWithoutUsersInput = {
    where: Prisma.mediaScalarWhereInput;
    data: Prisma.XOR<Prisma.mediaUpdateManyMutationInput, Prisma.mediaUncheckedUpdateManyWithoutUsersInput>;
};
export type mediaCreateManyEventsInput = {
    id?: string;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    uploaded_by: string;
    created_at?: Date | string;
};
export type mediaUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    users?: Prisma.usersUpdateOneRequiredWithoutMediaNestedInput;
};
export type mediaUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaUncheckedUpdateManyWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    uploaded_by?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaCreateManyUsersInput = {
    id?: string;
    event_id?: string | null;
    url: string;
    caption?: string | null;
    media_type?: $Enums.media_type;
    created_at?: Date | string;
};
export type mediaUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.eventsUpdateOneWithoutMediaNestedInput;
};
export type mediaUncheckedUpdateWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaUncheckedUpdateManyWithoutUsersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    event_id?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    url?: Prisma.StringFieldUpdateOperationsInput | string;
    caption?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    media_type?: Prisma.Enummedia_typeFieldUpdateOperationsInput | $Enums.media_type;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type mediaSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    url?: boolean;
    caption?: boolean;
    media_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["media"]>;
export type mediaSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    url?: boolean;
    caption?: boolean;
    media_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["media"]>;
export type mediaSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    event_id?: boolean;
    url?: boolean;
    caption?: boolean;
    media_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["media"]>;
export type mediaSelectScalar = {
    id?: boolean;
    event_id?: boolean;
    url?: boolean;
    caption?: boolean;
    media_type?: boolean;
    uploaded_by?: boolean;
    created_at?: boolean;
};
export type mediaOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "event_id" | "url" | "caption" | "media_type" | "uploaded_by" | "created_at", ExtArgs["result"]["media"]>;
export type mediaInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type mediaIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type mediaIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.media$eventsArgs<ExtArgs>;
    users?: boolean | Prisma.usersDefaultArgs<ExtArgs>;
};
export type $mediaPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "media";
    objects: {
        events: Prisma.$eventsPayload<ExtArgs> | null;
        users: Prisma.$usersPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        event_id: string | null;
        url: string;
        caption: string | null;
        media_type: $Enums.media_type;
        uploaded_by: string;
        created_at: Date;
    }, ExtArgs["result"]["media"]>;
    composites: {};
};
export type mediaGetPayload<S extends boolean | null | undefined | mediaDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$mediaPayload, S>;
export type mediaCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<mediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: MediaCountAggregateInputType | true;
};
export interface mediaDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['media'];
        meta: {
            name: 'media';
        };
    };
    findUnique<T extends mediaFindUniqueArgs>(args: Prisma.SelectSubset<T, mediaFindUniqueArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends mediaFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends mediaFindFirstArgs>(args?: Prisma.SelectSubset<T, mediaFindFirstArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends mediaFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends mediaFindManyArgs>(args?: Prisma.SelectSubset<T, mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends mediaCreateArgs>(args: Prisma.SelectSubset<T, mediaCreateArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends mediaCreateManyArgs>(args?: Prisma.SelectSubset<T, mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends mediaCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends mediaDeleteArgs>(args: Prisma.SelectSubset<T, mediaDeleteArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends mediaUpdateArgs>(args: Prisma.SelectSubset<T, mediaUpdateArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends mediaDeleteManyArgs>(args?: Prisma.SelectSubset<T, mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends mediaUpdateManyArgs>(args: Prisma.SelectSubset<T, mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends mediaUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, mediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends mediaUpsertArgs>(args: Prisma.SelectSubset<T, mediaUpsertArgs<ExtArgs>>): Prisma.Prisma__mediaClient<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends mediaCountArgs>(args?: Prisma.Subset<T, mediaCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], MediaCountAggregateOutputType> : number>;
    aggregate<T extends MediaAggregateArgs>(args: Prisma.Subset<T, MediaAggregateArgs>): Prisma.PrismaPromise<GetMediaAggregateType<T>>;
    groupBy<T extends mediaGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: mediaGroupByArgs['orderBy'];
    } : {
        orderBy?: mediaGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: mediaFieldRefs;
}
export interface Prisma__mediaClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.media$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.media$eventsArgs<ExtArgs>>): Prisma.Prisma__eventsClient<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    users<T extends Prisma.usersDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.usersDefaultArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface mediaFieldRefs {
    readonly id: Prisma.FieldRef<"media", 'String'>;
    readonly event_id: Prisma.FieldRef<"media", 'String'>;
    readonly url: Prisma.FieldRef<"media", 'String'>;
    readonly caption: Prisma.FieldRef<"media", 'String'>;
    readonly media_type: Prisma.FieldRef<"media", 'media_type'>;
    readonly uploaded_by: Prisma.FieldRef<"media", 'String'>;
    readonly created_at: Prisma.FieldRef<"media", 'DateTime'>;
}
export type mediaFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    where: Prisma.mediaWhereUniqueInput;
};
export type mediaFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    where: Prisma.mediaWhereUniqueInput;
};
export type mediaFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type mediaFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type mediaFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type mediaCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mediaCreateInput, Prisma.mediaUncheckedCreateInput>;
};
export type mediaCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.mediaCreateManyInput | Prisma.mediaCreateManyInput[];
    skipDuplicates?: boolean;
};
export type mediaCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    data: Prisma.mediaCreateManyInput | Prisma.mediaCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.mediaIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type mediaUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mediaUpdateInput, Prisma.mediaUncheckedUpdateInput>;
    where: Prisma.mediaWhereUniqueInput;
};
export type mediaUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.mediaUpdateManyMutationInput, Prisma.mediaUncheckedUpdateManyInput>;
    where?: Prisma.mediaWhereInput;
    limit?: number;
};
export type mediaUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.mediaUpdateManyMutationInput, Prisma.mediaUncheckedUpdateManyInput>;
    where?: Prisma.mediaWhereInput;
    limit?: number;
    include?: Prisma.mediaIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type mediaUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    where: Prisma.mediaWhereUniqueInput;
    create: Prisma.XOR<Prisma.mediaCreateInput, Prisma.mediaUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.mediaUpdateInput, Prisma.mediaUncheckedUpdateInput>;
};
export type mediaDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
    where: Prisma.mediaWhereUniqueInput;
};
export type mediaDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mediaWhereInput;
    limit?: number;
};
export type media$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.eventsSelect<ExtArgs> | null;
    omit?: Prisma.eventsOmit<ExtArgs> | null;
    include?: Prisma.eventsInclude<ExtArgs> | null;
    where?: Prisma.eventsWhereInput;
};
export type mediaDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.mediaSelect<ExtArgs> | null;
    omit?: Prisma.mediaOmit<ExtArgs> | null;
    include?: Prisma.mediaInclude<ExtArgs> | null;
};
