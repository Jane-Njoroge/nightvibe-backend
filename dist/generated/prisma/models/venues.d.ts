import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type venuesModel = runtime.Types.Result.DefaultSelection<Prisma.$venuesPayload>;
export type AggregateVenues = {
    _count: VenuesCountAggregateOutputType | null;
    _avg: VenuesAvgAggregateOutputType | null;
    _sum: VenuesSumAggregateOutputType | null;
    _min: VenuesMinAggregateOutputType | null;
    _max: VenuesMaxAggregateOutputType | null;
};
export type VenuesAvgAggregateOutputType = {
    capacity: number | null;
};
export type VenuesSumAggregateOutputType = {
    capacity: number | null;
};
export type VenuesMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    capacity: number | null;
    created_at: Date | null;
};
export type VenuesMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    description: string | null;
    address: string | null;
    city: string | null;
    capacity: number | null;
    created_at: Date | null;
};
export type VenuesCountAggregateOutputType = {
    id: number;
    name: number;
    description: number;
    address: number;
    city: number;
    capacity: number;
    created_at: number;
    _all: number;
};
export type VenuesAvgAggregateInputType = {
    capacity?: true;
};
export type VenuesSumAggregateInputType = {
    capacity?: true;
};
export type VenuesMinAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    address?: true;
    city?: true;
    capacity?: true;
    created_at?: true;
};
export type VenuesMaxAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    address?: true;
    city?: true;
    capacity?: true;
    created_at?: true;
};
export type VenuesCountAggregateInputType = {
    id?: true;
    name?: true;
    description?: true;
    address?: true;
    city?: true;
    capacity?: true;
    created_at?: true;
    _all?: true;
};
export type VenuesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.venuesWhereInput;
    orderBy?: Prisma.venuesOrderByWithRelationInput | Prisma.venuesOrderByWithRelationInput[];
    cursor?: Prisma.venuesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | VenuesCountAggregateInputType;
    _avg?: VenuesAvgAggregateInputType;
    _sum?: VenuesSumAggregateInputType;
    _min?: VenuesMinAggregateInputType;
    _max?: VenuesMaxAggregateInputType;
};
export type GetVenuesAggregateType<T extends VenuesAggregateArgs> = {
    [P in keyof T & keyof AggregateVenues]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateVenues[P]> : Prisma.GetScalarType<T[P], AggregateVenues[P]>;
};
export type venuesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.venuesWhereInput;
    orderBy?: Prisma.venuesOrderByWithAggregationInput | Prisma.venuesOrderByWithAggregationInput[];
    by: Prisma.VenuesScalarFieldEnum[] | Prisma.VenuesScalarFieldEnum;
    having?: Prisma.venuesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: VenuesCountAggregateInputType | true;
    _avg?: VenuesAvgAggregateInputType;
    _sum?: VenuesSumAggregateInputType;
    _min?: VenuesMinAggregateInputType;
    _max?: VenuesMaxAggregateInputType;
};
export type VenuesGroupByOutputType = {
    id: string;
    name: string;
    description: string | null;
    address: string;
    city: string;
    capacity: number;
    created_at: Date;
    _count: VenuesCountAggregateOutputType | null;
    _avg: VenuesAvgAggregateOutputType | null;
    _sum: VenuesSumAggregateOutputType | null;
    _min: VenuesMinAggregateOutputType | null;
    _max: VenuesMaxAggregateOutputType | null;
};
export type GetVenuesGroupByPayload<T extends venuesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<VenuesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof VenuesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], VenuesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], VenuesGroupByOutputType[P]>;
}>>;
export type venuesWhereInput = {
    AND?: Prisma.venuesWhereInput | Prisma.venuesWhereInput[];
    OR?: Prisma.venuesWhereInput[];
    NOT?: Prisma.venuesWhereInput | Prisma.venuesWhereInput[];
    id?: Prisma.UuidFilter<"venues"> | string;
    name?: Prisma.StringFilter<"venues"> | string;
    description?: Prisma.StringNullableFilter<"venues"> | string | null;
    address?: Prisma.StringFilter<"venues"> | string;
    city?: Prisma.StringFilter<"venues"> | string;
    capacity?: Prisma.IntFilter<"venues"> | number;
    created_at?: Prisma.DateTimeFilter<"venues"> | Date | string;
    events?: Prisma.EventsListRelationFilter;
};
export type venuesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    events?: Prisma.eventsOrderByRelationAggregateInput;
};
export type venuesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.venuesWhereInput | Prisma.venuesWhereInput[];
    OR?: Prisma.venuesWhereInput[];
    NOT?: Prisma.venuesWhereInput | Prisma.venuesWhereInput[];
    name?: Prisma.StringFilter<"venues"> | string;
    description?: Prisma.StringNullableFilter<"venues"> | string | null;
    address?: Prisma.StringFilter<"venues"> | string;
    city?: Prisma.StringFilter<"venues"> | string;
    capacity?: Prisma.IntFilter<"venues"> | number;
    created_at?: Prisma.DateTimeFilter<"venues"> | Date | string;
    events?: Prisma.EventsListRelationFilter;
}, "id">;
export type venuesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.venuesCountOrderByAggregateInput;
    _avg?: Prisma.venuesAvgOrderByAggregateInput;
    _max?: Prisma.venuesMaxOrderByAggregateInput;
    _min?: Prisma.venuesMinOrderByAggregateInput;
    _sum?: Prisma.venuesSumOrderByAggregateInput;
};
export type venuesScalarWhereWithAggregatesInput = {
    AND?: Prisma.venuesScalarWhereWithAggregatesInput | Prisma.venuesScalarWhereWithAggregatesInput[];
    OR?: Prisma.venuesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.venuesScalarWhereWithAggregatesInput | Prisma.venuesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"venues"> | string;
    name?: Prisma.StringWithAggregatesFilter<"venues"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"venues"> | string | null;
    address?: Prisma.StringWithAggregatesFilter<"venues"> | string;
    city?: Prisma.StringWithAggregatesFilter<"venues"> | string;
    capacity?: Prisma.IntWithAggregatesFilter<"venues"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"venues"> | Date | string;
};
export type venuesCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    address: string;
    city?: string;
    capacity: number;
    created_at?: Date | string;
    events?: Prisma.eventsCreateNestedManyWithoutVenuesInput;
};
export type venuesUncheckedCreateInput = {
    id?: string;
    name: string;
    description?: string | null;
    address: string;
    city?: string;
    capacity: number;
    created_at?: Date | string;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutVenuesInput;
};
export type venuesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.eventsUpdateManyWithoutVenuesNestedInput;
};
export type venuesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    events?: Prisma.eventsUncheckedUpdateManyWithoutVenuesNestedInput;
};
export type venuesCreateManyInput = {
    id?: string;
    name: string;
    description?: string | null;
    address: string;
    city?: string;
    capacity: number;
    created_at?: Date | string;
};
export type venuesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type venuesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenuesScalarRelationFilter = {
    is?: Prisma.venuesWhereInput;
    isNot?: Prisma.venuesWhereInput;
};
export type venuesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type venuesAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type venuesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type venuesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type venuesSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
};
export type venuesCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.venuesCreateWithoutEventsInput, Prisma.venuesUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.venuesCreateOrConnectWithoutEventsInput;
    connect?: Prisma.venuesWhereUniqueInput;
};
export type venuesUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.venuesCreateWithoutEventsInput, Prisma.venuesUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.venuesCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.venuesUpsertWithoutEventsInput;
    connect?: Prisma.venuesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.venuesUpdateToOneWithWhereWithoutEventsInput, Prisma.venuesUpdateWithoutEventsInput>, Prisma.venuesUncheckedUpdateWithoutEventsInput>;
};
export type venuesCreateWithoutEventsInput = {
    id?: string;
    name: string;
    description?: string | null;
    address: string;
    city?: string;
    capacity: number;
    created_at?: Date | string;
};
export type venuesUncheckedCreateWithoutEventsInput = {
    id?: string;
    name: string;
    description?: string | null;
    address: string;
    city?: string;
    capacity: number;
    created_at?: Date | string;
};
export type venuesCreateOrConnectWithoutEventsInput = {
    where: Prisma.venuesWhereUniqueInput;
    create: Prisma.XOR<Prisma.venuesCreateWithoutEventsInput, Prisma.venuesUncheckedCreateWithoutEventsInput>;
};
export type venuesUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.venuesUpdateWithoutEventsInput, Prisma.venuesUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.venuesCreateWithoutEventsInput, Prisma.venuesUncheckedCreateWithoutEventsInput>;
    where?: Prisma.venuesWhereInput;
};
export type venuesUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.venuesWhereInput;
    data: Prisma.XOR<Prisma.venuesUpdateWithoutEventsInput, Prisma.venuesUncheckedUpdateWithoutEventsInput>;
};
export type venuesUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type venuesUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type VenuesCountOutputType = {
    events: number;
};
export type VenuesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | VenuesCountOutputTypeCountEventsArgs;
};
export type VenuesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.VenuesCountOutputTypeSelect<ExtArgs> | null;
};
export type VenuesCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventsWhereInput;
};
export type venuesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    capacity?: boolean;
    created_at?: boolean;
    events?: boolean | Prisma.venues$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.VenuesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["venues"]>;
export type venuesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    capacity?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["venues"]>;
export type venuesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    capacity?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["venues"]>;
export type venuesSelectScalar = {
    id?: boolean;
    name?: boolean;
    description?: boolean;
    address?: boolean;
    city?: boolean;
    capacity?: boolean;
    created_at?: boolean;
};
export type venuesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "description" | "address" | "city" | "capacity" | "created_at", ExtArgs["result"]["venues"]>;
export type venuesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    events?: boolean | Prisma.venues$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.VenuesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type venuesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type venuesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $venuesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "venues";
    objects: {
        events: Prisma.$eventsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        description: string | null;
        address: string;
        city: string;
        capacity: number;
        created_at: Date;
    }, ExtArgs["result"]["venues"]>;
    composites: {};
};
export type venuesGetPayload<S extends boolean | null | undefined | venuesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$venuesPayload, S>;
export type venuesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<venuesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: VenuesCountAggregateInputType | true;
};
export interface venuesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['venues'];
        meta: {
            name: 'venues';
        };
    };
    findUnique<T extends venuesFindUniqueArgs>(args: Prisma.SelectSubset<T, venuesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends venuesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, venuesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends venuesFindFirstArgs>(args?: Prisma.SelectSubset<T, venuesFindFirstArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends venuesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, venuesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends venuesFindManyArgs>(args?: Prisma.SelectSubset<T, venuesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends venuesCreateArgs>(args: Prisma.SelectSubset<T, venuesCreateArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends venuesCreateManyArgs>(args?: Prisma.SelectSubset<T, venuesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends venuesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, venuesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends venuesDeleteArgs>(args: Prisma.SelectSubset<T, venuesDeleteArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends venuesUpdateArgs>(args: Prisma.SelectSubset<T, venuesUpdateArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends venuesDeleteManyArgs>(args?: Prisma.SelectSubset<T, venuesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends venuesUpdateManyArgs>(args: Prisma.SelectSubset<T, venuesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends venuesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, venuesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends venuesUpsertArgs>(args: Prisma.SelectSubset<T, venuesUpsertArgs<ExtArgs>>): Prisma.Prisma__venuesClient<runtime.Types.Result.GetResult<Prisma.$venuesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends venuesCountArgs>(args?: Prisma.Subset<T, venuesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], VenuesCountAggregateOutputType> : number>;
    aggregate<T extends VenuesAggregateArgs>(args: Prisma.Subset<T, VenuesAggregateArgs>): Prisma.PrismaPromise<GetVenuesAggregateType<T>>;
    groupBy<T extends venuesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: venuesGroupByArgs['orderBy'];
    } : {
        orderBy?: venuesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, venuesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVenuesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: venuesFieldRefs;
}
export interface Prisma__venuesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    events<T extends Prisma.venues$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.venues$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface venuesFieldRefs {
    readonly id: Prisma.FieldRef<"venues", 'String'>;
    readonly name: Prisma.FieldRef<"venues", 'String'>;
    readonly description: Prisma.FieldRef<"venues", 'String'>;
    readonly address: Prisma.FieldRef<"venues", 'String'>;
    readonly city: Prisma.FieldRef<"venues", 'String'>;
    readonly capacity: Prisma.FieldRef<"venues", 'Int'>;
    readonly created_at: Prisma.FieldRef<"venues", 'DateTime'>;
}
export type venuesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where: Prisma.venuesWhereUniqueInput;
};
export type venuesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where: Prisma.venuesWhereUniqueInput;
};
export type venuesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where?: Prisma.venuesWhereInput;
    orderBy?: Prisma.venuesOrderByWithRelationInput | Prisma.venuesOrderByWithRelationInput[];
    cursor?: Prisma.venuesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenuesScalarFieldEnum | Prisma.VenuesScalarFieldEnum[];
};
export type venuesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where?: Prisma.venuesWhereInput;
    orderBy?: Prisma.venuesOrderByWithRelationInput | Prisma.venuesOrderByWithRelationInput[];
    cursor?: Prisma.venuesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenuesScalarFieldEnum | Prisma.VenuesScalarFieldEnum[];
};
export type venuesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where?: Prisma.venuesWhereInput;
    orderBy?: Prisma.venuesOrderByWithRelationInput | Prisma.venuesOrderByWithRelationInput[];
    cursor?: Prisma.venuesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.VenuesScalarFieldEnum | Prisma.VenuesScalarFieldEnum[];
};
export type venuesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.venuesCreateInput, Prisma.venuesUncheckedCreateInput>;
};
export type venuesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.venuesCreateManyInput | Prisma.venuesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type venuesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    data: Prisma.venuesCreateManyInput | Prisma.venuesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type venuesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.venuesUpdateInput, Prisma.venuesUncheckedUpdateInput>;
    where: Prisma.venuesWhereUniqueInput;
};
export type venuesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.venuesUpdateManyMutationInput, Prisma.venuesUncheckedUpdateManyInput>;
    where?: Prisma.venuesWhereInput;
    limit?: number;
};
export type venuesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.venuesUpdateManyMutationInput, Prisma.venuesUncheckedUpdateManyInput>;
    where?: Prisma.venuesWhereInput;
    limit?: number;
};
export type venuesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where: Prisma.venuesWhereUniqueInput;
    create: Prisma.XOR<Prisma.venuesCreateInput, Prisma.venuesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.venuesUpdateInput, Prisma.venuesUncheckedUpdateInput>;
};
export type venuesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
    where: Prisma.venuesWhereUniqueInput;
};
export type venuesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.venuesWhereInput;
    limit?: number;
};
export type venues$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type venuesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.venuesSelect<ExtArgs> | null;
    omit?: Prisma.venuesOmit<ExtArgs> | null;
    include?: Prisma.venuesInclude<ExtArgs> | null;
};
