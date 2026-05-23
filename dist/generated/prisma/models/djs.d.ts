import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type djsModel = runtime.Types.Result.DefaultSelection<Prisma.$djsPayload>;
export type AggregateDjs = {
    _count: DjsCountAggregateOutputType | null;
    _min: DjsMinAggregateOutputType | null;
    _max: DjsMaxAggregateOutputType | null;
};
export type DjsMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
    photo_url: string | null;
    instagram: string | null;
    soundcloud: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type DjsMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    bio: string | null;
    photo_url: string | null;
    instagram: string | null;
    soundcloud: string | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type DjsCountAggregateOutputType = {
    id: number;
    name: number;
    bio: number;
    photo_url: number;
    instagram: number;
    soundcloud: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type DjsMinAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    photo_url?: true;
    instagram?: true;
    soundcloud?: true;
    is_active?: true;
    created_at?: true;
};
export type DjsMaxAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    photo_url?: true;
    instagram?: true;
    soundcloud?: true;
    is_active?: true;
    created_at?: true;
};
export type DjsCountAggregateInputType = {
    id?: true;
    name?: true;
    bio?: true;
    photo_url?: true;
    instagram?: true;
    soundcloud?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type DjsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.djsWhereInput;
    orderBy?: Prisma.djsOrderByWithRelationInput | Prisma.djsOrderByWithRelationInput[];
    cursor?: Prisma.djsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DjsCountAggregateInputType;
    _min?: DjsMinAggregateInputType;
    _max?: DjsMaxAggregateInputType;
};
export type GetDjsAggregateType<T extends DjsAggregateArgs> = {
    [P in keyof T & keyof AggregateDjs]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDjs[P]> : Prisma.GetScalarType<T[P], AggregateDjs[P]>;
};
export type djsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.djsWhereInput;
    orderBy?: Prisma.djsOrderByWithAggregationInput | Prisma.djsOrderByWithAggregationInput[];
    by: Prisma.DjsScalarFieldEnum[] | Prisma.DjsScalarFieldEnum;
    having?: Prisma.djsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DjsCountAggregateInputType | true;
    _min?: DjsMinAggregateInputType;
    _max?: DjsMaxAggregateInputType;
};
export type DjsGroupByOutputType = {
    id: string;
    name: string;
    bio: string | null;
    photo_url: string | null;
    instagram: string | null;
    soundcloud: string | null;
    is_active: boolean;
    created_at: Date;
    _count: DjsCountAggregateOutputType | null;
    _min: DjsMinAggregateOutputType | null;
    _max: DjsMaxAggregateOutputType | null;
};
export type GetDjsGroupByPayload<T extends djsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DjsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DjsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DjsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DjsGroupByOutputType[P]>;
}>>;
export type djsWhereInput = {
    AND?: Prisma.djsWhereInput | Prisma.djsWhereInput[];
    OR?: Prisma.djsWhereInput[];
    NOT?: Prisma.djsWhereInput | Prisma.djsWhereInput[];
    id?: Prisma.UuidFilter<"djs"> | string;
    name?: Prisma.StringFilter<"djs"> | string;
    bio?: Prisma.StringNullableFilter<"djs"> | string | null;
    photo_url?: Prisma.StringNullableFilter<"djs"> | string | null;
    instagram?: Prisma.StringNullableFilter<"djs"> | string | null;
    soundcloud?: Prisma.StringNullableFilter<"djs"> | string | null;
    is_active?: Prisma.BoolFilter<"djs"> | boolean;
    created_at?: Prisma.DateTimeFilter<"djs"> | Date | string;
    event_lineups?: Prisma.Event_lineupsListRelationFilter;
};
export type djsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    instagram?: Prisma.SortOrderInput | Prisma.SortOrder;
    soundcloud?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    event_lineups?: Prisma.event_lineupsOrderByRelationAggregateInput;
};
export type djsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.djsWhereInput | Prisma.djsWhereInput[];
    OR?: Prisma.djsWhereInput[];
    NOT?: Prisma.djsWhereInput | Prisma.djsWhereInput[];
    name?: Prisma.StringFilter<"djs"> | string;
    bio?: Prisma.StringNullableFilter<"djs"> | string | null;
    photo_url?: Prisma.StringNullableFilter<"djs"> | string | null;
    instagram?: Prisma.StringNullableFilter<"djs"> | string | null;
    soundcloud?: Prisma.StringNullableFilter<"djs"> | string | null;
    is_active?: Prisma.BoolFilter<"djs"> | boolean;
    created_at?: Prisma.DateTimeFilter<"djs"> | Date | string;
    event_lineups?: Prisma.Event_lineupsListRelationFilter;
}, "id">;
export type djsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    photo_url?: Prisma.SortOrderInput | Prisma.SortOrder;
    instagram?: Prisma.SortOrderInput | Prisma.SortOrder;
    soundcloud?: Prisma.SortOrderInput | Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.djsCountOrderByAggregateInput;
    _max?: Prisma.djsMaxOrderByAggregateInput;
    _min?: Prisma.djsMinOrderByAggregateInput;
};
export type djsScalarWhereWithAggregatesInput = {
    AND?: Prisma.djsScalarWhereWithAggregatesInput | Prisma.djsScalarWhereWithAggregatesInput[];
    OR?: Prisma.djsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.djsScalarWhereWithAggregatesInput | Prisma.djsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"djs"> | string;
    name?: Prisma.StringWithAggregatesFilter<"djs"> | string;
    bio?: Prisma.StringNullableWithAggregatesFilter<"djs"> | string | null;
    photo_url?: Prisma.StringNullableWithAggregatesFilter<"djs"> | string | null;
    instagram?: Prisma.StringNullableWithAggregatesFilter<"djs"> | string | null;
    soundcloud?: Prisma.StringNullableWithAggregatesFilter<"djs"> | string | null;
    is_active?: Prisma.BoolWithAggregatesFilter<"djs"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"djs"> | Date | string;
};
export type djsCreateInput = {
    id?: string;
    name: string;
    bio?: string | null;
    photo_url?: string | null;
    instagram?: string | null;
    soundcloud?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    event_lineups?: Prisma.event_lineupsCreateNestedManyWithoutDjsInput;
};
export type djsUncheckedCreateInput = {
    id?: string;
    name: string;
    bio?: string | null;
    photo_url?: string | null;
    instagram?: string | null;
    soundcloud?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
    event_lineups?: Prisma.event_lineupsUncheckedCreateNestedManyWithoutDjsInput;
};
export type djsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event_lineups?: Prisma.event_lineupsUpdateManyWithoutDjsNestedInput;
};
export type djsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    event_lineups?: Prisma.event_lineupsUncheckedUpdateManyWithoutDjsNestedInput;
};
export type djsCreateManyInput = {
    id?: string;
    name: string;
    bio?: string | null;
    photo_url?: string | null;
    instagram?: string | null;
    soundcloud?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type djsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type djsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type djsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    instagram?: Prisma.SortOrder;
    soundcloud?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type djsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    instagram?: Prisma.SortOrder;
    soundcloud?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type djsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    photo_url?: Prisma.SortOrder;
    instagram?: Prisma.SortOrder;
    soundcloud?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type DjsScalarRelationFilter = {
    is?: Prisma.djsWhereInput;
    isNot?: Prisma.djsWhereInput;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type djsCreateNestedOneWithoutEvent_lineupsInput = {
    create?: Prisma.XOR<Prisma.djsCreateWithoutEvent_lineupsInput, Prisma.djsUncheckedCreateWithoutEvent_lineupsInput>;
    connectOrCreate?: Prisma.djsCreateOrConnectWithoutEvent_lineupsInput;
    connect?: Prisma.djsWhereUniqueInput;
};
export type djsUpdateOneRequiredWithoutEvent_lineupsNestedInput = {
    create?: Prisma.XOR<Prisma.djsCreateWithoutEvent_lineupsInput, Prisma.djsUncheckedCreateWithoutEvent_lineupsInput>;
    connectOrCreate?: Prisma.djsCreateOrConnectWithoutEvent_lineupsInput;
    upsert?: Prisma.djsUpsertWithoutEvent_lineupsInput;
    connect?: Prisma.djsWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.djsUpdateToOneWithWhereWithoutEvent_lineupsInput, Prisma.djsUpdateWithoutEvent_lineupsInput>, Prisma.djsUncheckedUpdateWithoutEvent_lineupsInput>;
};
export type djsCreateWithoutEvent_lineupsInput = {
    id?: string;
    name: string;
    bio?: string | null;
    photo_url?: string | null;
    instagram?: string | null;
    soundcloud?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type djsUncheckedCreateWithoutEvent_lineupsInput = {
    id?: string;
    name: string;
    bio?: string | null;
    photo_url?: string | null;
    instagram?: string | null;
    soundcloud?: string | null;
    is_active?: boolean;
    created_at?: Date | string;
};
export type djsCreateOrConnectWithoutEvent_lineupsInput = {
    where: Prisma.djsWhereUniqueInput;
    create: Prisma.XOR<Prisma.djsCreateWithoutEvent_lineupsInput, Prisma.djsUncheckedCreateWithoutEvent_lineupsInput>;
};
export type djsUpsertWithoutEvent_lineupsInput = {
    update: Prisma.XOR<Prisma.djsUpdateWithoutEvent_lineupsInput, Prisma.djsUncheckedUpdateWithoutEvent_lineupsInput>;
    create: Prisma.XOR<Prisma.djsCreateWithoutEvent_lineupsInput, Prisma.djsUncheckedCreateWithoutEvent_lineupsInput>;
    where?: Prisma.djsWhereInput;
};
export type djsUpdateToOneWithWhereWithoutEvent_lineupsInput = {
    where?: Prisma.djsWhereInput;
    data: Prisma.XOR<Prisma.djsUpdateWithoutEvent_lineupsInput, Prisma.djsUncheckedUpdateWithoutEvent_lineupsInput>;
};
export type djsUpdateWithoutEvent_lineupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type djsUncheckedUpdateWithoutEvent_lineupsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    photo_url?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    instagram?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    soundcloud?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DjsCountOutputType = {
    event_lineups: number;
};
export type DjsCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event_lineups?: boolean | DjsCountOutputTypeCountEvent_lineupsArgs;
};
export type DjsCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DjsCountOutputTypeSelect<ExtArgs> | null;
};
export type DjsCountOutputTypeCountEvent_lineupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.event_lineupsWhereInput;
};
export type djsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    photo_url?: boolean;
    instagram?: boolean;
    soundcloud?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    event_lineups?: boolean | Prisma.djs$event_lineupsArgs<ExtArgs>;
    _count?: boolean | Prisma.DjsCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["djs"]>;
export type djsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    photo_url?: boolean;
    instagram?: boolean;
    soundcloud?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["djs"]>;
export type djsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    photo_url?: boolean;
    instagram?: boolean;
    soundcloud?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["djs"]>;
export type djsSelectScalar = {
    id?: boolean;
    name?: boolean;
    bio?: boolean;
    photo_url?: boolean;
    instagram?: boolean;
    soundcloud?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type djsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "bio" | "photo_url" | "instagram" | "soundcloud" | "is_active" | "created_at", ExtArgs["result"]["djs"]>;
export type djsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    event_lineups?: boolean | Prisma.djs$event_lineupsArgs<ExtArgs>;
    _count?: boolean | Prisma.DjsCountOutputTypeDefaultArgs<ExtArgs>;
};
export type djsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type djsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $djsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "djs";
    objects: {
        event_lineups: Prisma.$event_lineupsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        bio: string | null;
        photo_url: string | null;
        instagram: string | null;
        soundcloud: string | null;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["djs"]>;
    composites: {};
};
export type djsGetPayload<S extends boolean | null | undefined | djsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$djsPayload, S>;
export type djsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<djsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DjsCountAggregateInputType | true;
};
export interface djsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['djs'];
        meta: {
            name: 'djs';
        };
    };
    findUnique<T extends djsFindUniqueArgs>(args: Prisma.SelectSubset<T, djsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends djsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, djsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends djsFindFirstArgs>(args?: Prisma.SelectSubset<T, djsFindFirstArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends djsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, djsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends djsFindManyArgs>(args?: Prisma.SelectSubset<T, djsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends djsCreateArgs>(args: Prisma.SelectSubset<T, djsCreateArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends djsCreateManyArgs>(args?: Prisma.SelectSubset<T, djsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends djsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, djsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends djsDeleteArgs>(args: Prisma.SelectSubset<T, djsDeleteArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends djsUpdateArgs>(args: Prisma.SelectSubset<T, djsUpdateArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends djsDeleteManyArgs>(args?: Prisma.SelectSubset<T, djsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends djsUpdateManyArgs>(args: Prisma.SelectSubset<T, djsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends djsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, djsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends djsUpsertArgs>(args: Prisma.SelectSubset<T, djsUpsertArgs<ExtArgs>>): Prisma.Prisma__djsClient<runtime.Types.Result.GetResult<Prisma.$djsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends djsCountArgs>(args?: Prisma.Subset<T, djsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DjsCountAggregateOutputType> : number>;
    aggregate<T extends DjsAggregateArgs>(args: Prisma.Subset<T, DjsAggregateArgs>): Prisma.PrismaPromise<GetDjsAggregateType<T>>;
    groupBy<T extends djsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: djsGroupByArgs['orderBy'];
    } : {
        orderBy?: djsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, djsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDjsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: djsFieldRefs;
}
export interface Prisma__djsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    event_lineups<T extends Prisma.djs$event_lineupsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.djs$event_lineupsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$event_lineupsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface djsFieldRefs {
    readonly id: Prisma.FieldRef<"djs", 'String'>;
    readonly name: Prisma.FieldRef<"djs", 'String'>;
    readonly bio: Prisma.FieldRef<"djs", 'String'>;
    readonly photo_url: Prisma.FieldRef<"djs", 'String'>;
    readonly instagram: Prisma.FieldRef<"djs", 'String'>;
    readonly soundcloud: Prisma.FieldRef<"djs", 'String'>;
    readonly is_active: Prisma.FieldRef<"djs", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"djs", 'DateTime'>;
}
export type djsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where: Prisma.djsWhereUniqueInput;
};
export type djsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where: Prisma.djsWhereUniqueInput;
};
export type djsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where?: Prisma.djsWhereInput;
    orderBy?: Prisma.djsOrderByWithRelationInput | Prisma.djsOrderByWithRelationInput[];
    cursor?: Prisma.djsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DjsScalarFieldEnum | Prisma.DjsScalarFieldEnum[];
};
export type djsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where?: Prisma.djsWhereInput;
    orderBy?: Prisma.djsOrderByWithRelationInput | Prisma.djsOrderByWithRelationInput[];
    cursor?: Prisma.djsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DjsScalarFieldEnum | Prisma.DjsScalarFieldEnum[];
};
export type djsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where?: Prisma.djsWhereInput;
    orderBy?: Prisma.djsOrderByWithRelationInput | Prisma.djsOrderByWithRelationInput[];
    cursor?: Prisma.djsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DjsScalarFieldEnum | Prisma.DjsScalarFieldEnum[];
};
export type djsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.djsCreateInput, Prisma.djsUncheckedCreateInput>;
};
export type djsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.djsCreateManyInput | Prisma.djsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type djsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    data: Prisma.djsCreateManyInput | Prisma.djsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type djsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.djsUpdateInput, Prisma.djsUncheckedUpdateInput>;
    where: Prisma.djsWhereUniqueInput;
};
export type djsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.djsUpdateManyMutationInput, Prisma.djsUncheckedUpdateManyInput>;
    where?: Prisma.djsWhereInput;
    limit?: number;
};
export type djsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.djsUpdateManyMutationInput, Prisma.djsUncheckedUpdateManyInput>;
    where?: Prisma.djsWhereInput;
    limit?: number;
};
export type djsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where: Prisma.djsWhereUniqueInput;
    create: Prisma.XOR<Prisma.djsCreateInput, Prisma.djsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.djsUpdateInput, Prisma.djsUncheckedUpdateInput>;
};
export type djsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
    where: Prisma.djsWhereUniqueInput;
};
export type djsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.djsWhereInput;
    limit?: number;
};
export type djs$event_lineupsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type djsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.djsSelect<ExtArgs> | null;
    omit?: Prisma.djsOmit<ExtArgs> | null;
    include?: Prisma.djsInclude<ExtArgs> | null;
};
