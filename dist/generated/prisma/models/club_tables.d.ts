import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type club_tablesModel = runtime.Types.Result.DefaultSelection<Prisma.$club_tablesPayload>;
export type AggregateClub_tables = {
    _count: Club_tablesCountAggregateOutputType | null;
    _avg: Club_tablesAvgAggregateOutputType | null;
    _sum: Club_tablesSumAggregateOutputType | null;
    _min: Club_tablesMinAggregateOutputType | null;
    _max: Club_tablesMaxAggregateOutputType | null;
};
export type Club_tablesAvgAggregateOutputType = {
    capacity: number | null;
    min_spend: runtime.Decimal | null;
};
export type Club_tablesSumAggregateOutputType = {
    capacity: number | null;
    min_spend: runtime.Decimal | null;
};
export type Club_tablesMinAggregateOutputType = {
    id: string | null;
    table_number: string | null;
    section: string | null;
    capacity: number | null;
    min_spend: runtime.Decimal | null;
    status: $Enums.table_status | null;
    created_at: Date | null;
};
export type Club_tablesMaxAggregateOutputType = {
    id: string | null;
    table_number: string | null;
    section: string | null;
    capacity: number | null;
    min_spend: runtime.Decimal | null;
    status: $Enums.table_status | null;
    created_at: Date | null;
};
export type Club_tablesCountAggregateOutputType = {
    id: number;
    table_number: number;
    section: number;
    capacity: number;
    min_spend: number;
    status: number;
    created_at: number;
    _all: number;
};
export type Club_tablesAvgAggregateInputType = {
    capacity?: true;
    min_spend?: true;
};
export type Club_tablesSumAggregateInputType = {
    capacity?: true;
    min_spend?: true;
};
export type Club_tablesMinAggregateInputType = {
    id?: true;
    table_number?: true;
    section?: true;
    capacity?: true;
    min_spend?: true;
    status?: true;
    created_at?: true;
};
export type Club_tablesMaxAggregateInputType = {
    id?: true;
    table_number?: true;
    section?: true;
    capacity?: true;
    min_spend?: true;
    status?: true;
    created_at?: true;
};
export type Club_tablesCountAggregateInputType = {
    id?: true;
    table_number?: true;
    section?: true;
    capacity?: true;
    min_spend?: true;
    status?: true;
    created_at?: true;
    _all?: true;
};
export type Club_tablesAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.club_tablesWhereInput;
    orderBy?: Prisma.club_tablesOrderByWithRelationInput | Prisma.club_tablesOrderByWithRelationInput[];
    cursor?: Prisma.club_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | Club_tablesCountAggregateInputType;
    _avg?: Club_tablesAvgAggregateInputType;
    _sum?: Club_tablesSumAggregateInputType;
    _min?: Club_tablesMinAggregateInputType;
    _max?: Club_tablesMaxAggregateInputType;
};
export type GetClub_tablesAggregateType<T extends Club_tablesAggregateArgs> = {
    [P in keyof T & keyof AggregateClub_tables]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateClub_tables[P]> : Prisma.GetScalarType<T[P], AggregateClub_tables[P]>;
};
export type club_tablesGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.club_tablesWhereInput;
    orderBy?: Prisma.club_tablesOrderByWithAggregationInput | Prisma.club_tablesOrderByWithAggregationInput[];
    by: Prisma.Club_tablesScalarFieldEnum[] | Prisma.Club_tablesScalarFieldEnum;
    having?: Prisma.club_tablesScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Club_tablesCountAggregateInputType | true;
    _avg?: Club_tablesAvgAggregateInputType;
    _sum?: Club_tablesSumAggregateInputType;
    _min?: Club_tablesMinAggregateInputType;
    _max?: Club_tablesMaxAggregateInputType;
};
export type Club_tablesGroupByOutputType = {
    id: string;
    table_number: string;
    section: string | null;
    capacity: number;
    min_spend: runtime.Decimal;
    status: $Enums.table_status;
    created_at: Date;
    _count: Club_tablesCountAggregateOutputType | null;
    _avg: Club_tablesAvgAggregateOutputType | null;
    _sum: Club_tablesSumAggregateOutputType | null;
    _min: Club_tablesMinAggregateOutputType | null;
    _max: Club_tablesMaxAggregateOutputType | null;
};
export type GetClub_tablesGroupByPayload<T extends club_tablesGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<Club_tablesGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof Club_tablesGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], Club_tablesGroupByOutputType[P]> : Prisma.GetScalarType<T[P], Club_tablesGroupByOutputType[P]>;
}>>;
export type club_tablesWhereInput = {
    AND?: Prisma.club_tablesWhereInput | Prisma.club_tablesWhereInput[];
    OR?: Prisma.club_tablesWhereInput[];
    NOT?: Prisma.club_tablesWhereInput | Prisma.club_tablesWhereInput[];
    id?: Prisma.UuidFilter<"club_tables"> | string;
    table_number?: Prisma.StringFilter<"club_tables"> | string;
    section?: Prisma.StringNullableFilter<"club_tables"> | string | null;
    capacity?: Prisma.IntFilter<"club_tables"> | number;
    min_spend?: Prisma.DecimalFilter<"club_tables"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFilter<"club_tables"> | $Enums.table_status;
    created_at?: Prisma.DateTimeFilter<"club_tables"> | Date | string;
    booking_tables?: Prisma.Booking_tablesListRelationFilter;
};
export type club_tablesOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    section?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    booking_tables?: Prisma.booking_tablesOrderByRelationAggregateInput;
};
export type club_tablesWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    table_number?: string;
    AND?: Prisma.club_tablesWhereInput | Prisma.club_tablesWhereInput[];
    OR?: Prisma.club_tablesWhereInput[];
    NOT?: Prisma.club_tablesWhereInput | Prisma.club_tablesWhereInput[];
    section?: Prisma.StringNullableFilter<"club_tables"> | string | null;
    capacity?: Prisma.IntFilter<"club_tables"> | number;
    min_spend?: Prisma.DecimalFilter<"club_tables"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFilter<"club_tables"> | $Enums.table_status;
    created_at?: Prisma.DateTimeFilter<"club_tables"> | Date | string;
    booking_tables?: Prisma.Booking_tablesListRelationFilter;
}, "id" | "table_number">;
export type club_tablesOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    section?: Prisma.SortOrderInput | Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.club_tablesCountOrderByAggregateInput;
    _avg?: Prisma.club_tablesAvgOrderByAggregateInput;
    _max?: Prisma.club_tablesMaxOrderByAggregateInput;
    _min?: Prisma.club_tablesMinOrderByAggregateInput;
    _sum?: Prisma.club_tablesSumOrderByAggregateInput;
};
export type club_tablesScalarWhereWithAggregatesInput = {
    AND?: Prisma.club_tablesScalarWhereWithAggregatesInput | Prisma.club_tablesScalarWhereWithAggregatesInput[];
    OR?: Prisma.club_tablesScalarWhereWithAggregatesInput[];
    NOT?: Prisma.club_tablesScalarWhereWithAggregatesInput | Prisma.club_tablesScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"club_tables"> | string;
    table_number?: Prisma.StringWithAggregatesFilter<"club_tables"> | string;
    section?: Prisma.StringNullableWithAggregatesFilter<"club_tables"> | string | null;
    capacity?: Prisma.IntWithAggregatesFilter<"club_tables"> | number;
    min_spend?: Prisma.DecimalWithAggregatesFilter<"club_tables"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusWithAggregatesFilter<"club_tables"> | $Enums.table_status;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"club_tables"> | Date | string;
};
export type club_tablesCreateInput = {
    id?: string;
    table_number: string;
    section?: string | null;
    capacity: number;
    min_spend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.table_status;
    created_at?: Date | string;
    booking_tables?: Prisma.booking_tablesCreateNestedManyWithoutClub_tablesInput;
};
export type club_tablesUncheckedCreateInput = {
    id?: string;
    table_number: string;
    section?: string | null;
    capacity: number;
    min_spend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.table_status;
    created_at?: Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedCreateNestedManyWithoutClub_tablesInput;
};
export type club_tablesUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUpdateManyWithoutClub_tablesNestedInput;
};
export type club_tablesUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    booking_tables?: Prisma.booking_tablesUncheckedUpdateManyWithoutClub_tablesNestedInput;
};
export type club_tablesCreateManyInput = {
    id?: string;
    table_number: string;
    section?: string | null;
    capacity: number;
    min_spend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.table_status;
    created_at?: Date | string;
};
export type club_tablesUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type club_tablesUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Club_tablesScalarRelationFilter = {
    is?: Prisma.club_tablesWhereInput;
    isNot?: Prisma.club_tablesWhereInput;
};
export type club_tablesCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type club_tablesAvgOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
};
export type club_tablesMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type club_tablesMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    table_number?: Prisma.SortOrder;
    section?: Prisma.SortOrder;
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type club_tablesSumOrderByAggregateInput = {
    capacity?: Prisma.SortOrder;
    min_spend?: Prisma.SortOrder;
};
export type club_tablesCreateNestedOneWithoutBooking_tablesInput = {
    create?: Prisma.XOR<Prisma.club_tablesCreateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedCreateWithoutBooking_tablesInput>;
    connectOrCreate?: Prisma.club_tablesCreateOrConnectWithoutBooking_tablesInput;
    connect?: Prisma.club_tablesWhereUniqueInput;
};
export type club_tablesUpdateOneRequiredWithoutBooking_tablesNestedInput = {
    create?: Prisma.XOR<Prisma.club_tablesCreateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedCreateWithoutBooking_tablesInput>;
    connectOrCreate?: Prisma.club_tablesCreateOrConnectWithoutBooking_tablesInput;
    upsert?: Prisma.club_tablesUpsertWithoutBooking_tablesInput;
    connect?: Prisma.club_tablesWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.club_tablesUpdateToOneWithWhereWithoutBooking_tablesInput, Prisma.club_tablesUpdateWithoutBooking_tablesInput>, Prisma.club_tablesUncheckedUpdateWithoutBooking_tablesInput>;
};
export type Enumtable_statusFieldUpdateOperationsInput = {
    set?: $Enums.table_status;
};
export type club_tablesCreateWithoutBooking_tablesInput = {
    id?: string;
    table_number: string;
    section?: string | null;
    capacity: number;
    min_spend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.table_status;
    created_at?: Date | string;
};
export type club_tablesUncheckedCreateWithoutBooking_tablesInput = {
    id?: string;
    table_number: string;
    section?: string | null;
    capacity: number;
    min_spend?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: $Enums.table_status;
    created_at?: Date | string;
};
export type club_tablesCreateOrConnectWithoutBooking_tablesInput = {
    where: Prisma.club_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.club_tablesCreateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedCreateWithoutBooking_tablesInput>;
};
export type club_tablesUpsertWithoutBooking_tablesInput = {
    update: Prisma.XOR<Prisma.club_tablesUpdateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedUpdateWithoutBooking_tablesInput>;
    create: Prisma.XOR<Prisma.club_tablesCreateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedCreateWithoutBooking_tablesInput>;
    where?: Prisma.club_tablesWhereInput;
};
export type club_tablesUpdateToOneWithWhereWithoutBooking_tablesInput = {
    where?: Prisma.club_tablesWhereInput;
    data: Prisma.XOR<Prisma.club_tablesUpdateWithoutBooking_tablesInput, Prisma.club_tablesUncheckedUpdateWithoutBooking_tablesInput>;
};
export type club_tablesUpdateWithoutBooking_tablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type club_tablesUncheckedUpdateWithoutBooking_tablesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    table_number?: Prisma.StringFieldUpdateOperationsInput | string;
    section?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    capacity?: Prisma.IntFieldUpdateOperationsInput | number;
    min_spend?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    status?: Prisma.Enumtable_statusFieldUpdateOperationsInput | $Enums.table_status;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type Club_tablesCountOutputType = {
    booking_tables: number;
};
export type Club_tablesCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking_tables?: boolean | Club_tablesCountOutputTypeCountBooking_tablesArgs;
};
export type Club_tablesCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.Club_tablesCountOutputTypeSelect<ExtArgs> | null;
};
export type Club_tablesCountOutputTypeCountBooking_tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.booking_tablesWhereInput;
};
export type club_tablesSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    section?: boolean;
    capacity?: boolean;
    min_spend?: boolean;
    status?: boolean;
    created_at?: boolean;
    booking_tables?: boolean | Prisma.club_tables$booking_tablesArgs<ExtArgs>;
    _count?: boolean | Prisma.Club_tablesCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["club_tables"]>;
export type club_tablesSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    section?: boolean;
    capacity?: boolean;
    min_spend?: boolean;
    status?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["club_tables"]>;
export type club_tablesSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    table_number?: boolean;
    section?: boolean;
    capacity?: boolean;
    min_spend?: boolean;
    status?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["club_tables"]>;
export type club_tablesSelectScalar = {
    id?: boolean;
    table_number?: boolean;
    section?: boolean;
    capacity?: boolean;
    min_spend?: boolean;
    status?: boolean;
    created_at?: boolean;
};
export type club_tablesOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "table_number" | "section" | "capacity" | "min_spend" | "status" | "created_at", ExtArgs["result"]["club_tables"]>;
export type club_tablesInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    booking_tables?: boolean | Prisma.club_tables$booking_tablesArgs<ExtArgs>;
    _count?: boolean | Prisma.Club_tablesCountOutputTypeDefaultArgs<ExtArgs>;
};
export type club_tablesIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type club_tablesIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $club_tablesPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "club_tables";
    objects: {
        booking_tables: Prisma.$booking_tablesPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        table_number: string;
        section: string | null;
        capacity: number;
        min_spend: runtime.Decimal;
        status: $Enums.table_status;
        created_at: Date;
    }, ExtArgs["result"]["club_tables"]>;
    composites: {};
};
export type club_tablesGetPayload<S extends boolean | null | undefined | club_tablesDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$club_tablesPayload, S>;
export type club_tablesCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<club_tablesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: Club_tablesCountAggregateInputType | true;
};
export interface club_tablesDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['club_tables'];
        meta: {
            name: 'club_tables';
        };
    };
    findUnique<T extends club_tablesFindUniqueArgs>(args: Prisma.SelectSubset<T, club_tablesFindUniqueArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends club_tablesFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, club_tablesFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends club_tablesFindFirstArgs>(args?: Prisma.SelectSubset<T, club_tablesFindFirstArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends club_tablesFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, club_tablesFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends club_tablesFindManyArgs>(args?: Prisma.SelectSubset<T, club_tablesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends club_tablesCreateArgs>(args: Prisma.SelectSubset<T, club_tablesCreateArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends club_tablesCreateManyArgs>(args?: Prisma.SelectSubset<T, club_tablesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends club_tablesCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, club_tablesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends club_tablesDeleteArgs>(args: Prisma.SelectSubset<T, club_tablesDeleteArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends club_tablesUpdateArgs>(args: Prisma.SelectSubset<T, club_tablesUpdateArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends club_tablesDeleteManyArgs>(args?: Prisma.SelectSubset<T, club_tablesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends club_tablesUpdateManyArgs>(args: Prisma.SelectSubset<T, club_tablesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends club_tablesUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, club_tablesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends club_tablesUpsertArgs>(args: Prisma.SelectSubset<T, club_tablesUpsertArgs<ExtArgs>>): Prisma.Prisma__club_tablesClient<runtime.Types.Result.GetResult<Prisma.$club_tablesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends club_tablesCountArgs>(args?: Prisma.Subset<T, club_tablesCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], Club_tablesCountAggregateOutputType> : number>;
    aggregate<T extends Club_tablesAggregateArgs>(args: Prisma.Subset<T, Club_tablesAggregateArgs>): Prisma.PrismaPromise<GetClub_tablesAggregateType<T>>;
    groupBy<T extends club_tablesGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: club_tablesGroupByArgs['orderBy'];
    } : {
        orderBy?: club_tablesGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, club_tablesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClub_tablesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: club_tablesFieldRefs;
}
export interface Prisma__club_tablesClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    booking_tables<T extends Prisma.club_tables$booking_tablesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.club_tables$booking_tablesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$booking_tablesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface club_tablesFieldRefs {
    readonly id: Prisma.FieldRef<"club_tables", 'String'>;
    readonly table_number: Prisma.FieldRef<"club_tables", 'String'>;
    readonly section: Prisma.FieldRef<"club_tables", 'String'>;
    readonly capacity: Prisma.FieldRef<"club_tables", 'Int'>;
    readonly min_spend: Prisma.FieldRef<"club_tables", 'Decimal'>;
    readonly status: Prisma.FieldRef<"club_tables", 'table_status'>;
    readonly created_at: Prisma.FieldRef<"club_tables", 'DateTime'>;
}
export type club_tablesFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where: Prisma.club_tablesWhereUniqueInput;
};
export type club_tablesFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where: Prisma.club_tablesWhereUniqueInput;
};
export type club_tablesFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where?: Prisma.club_tablesWhereInput;
    orderBy?: Prisma.club_tablesOrderByWithRelationInput | Prisma.club_tablesOrderByWithRelationInput[];
    cursor?: Prisma.club_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Club_tablesScalarFieldEnum | Prisma.Club_tablesScalarFieldEnum[];
};
export type club_tablesFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where?: Prisma.club_tablesWhereInput;
    orderBy?: Prisma.club_tablesOrderByWithRelationInput | Prisma.club_tablesOrderByWithRelationInput[];
    cursor?: Prisma.club_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Club_tablesScalarFieldEnum | Prisma.Club_tablesScalarFieldEnum[];
};
export type club_tablesFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where?: Prisma.club_tablesWhereInput;
    orderBy?: Prisma.club_tablesOrderByWithRelationInput | Prisma.club_tablesOrderByWithRelationInput[];
    cursor?: Prisma.club_tablesWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Club_tablesScalarFieldEnum | Prisma.Club_tablesScalarFieldEnum[];
};
export type club_tablesCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.club_tablesCreateInput, Prisma.club_tablesUncheckedCreateInput>;
};
export type club_tablesCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.club_tablesCreateManyInput | Prisma.club_tablesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type club_tablesCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    data: Prisma.club_tablesCreateManyInput | Prisma.club_tablesCreateManyInput[];
    skipDuplicates?: boolean;
};
export type club_tablesUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.club_tablesUpdateInput, Prisma.club_tablesUncheckedUpdateInput>;
    where: Prisma.club_tablesWhereUniqueInput;
};
export type club_tablesUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.club_tablesUpdateManyMutationInput, Prisma.club_tablesUncheckedUpdateManyInput>;
    where?: Prisma.club_tablesWhereInput;
    limit?: number;
};
export type club_tablesUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.club_tablesUpdateManyMutationInput, Prisma.club_tablesUncheckedUpdateManyInput>;
    where?: Prisma.club_tablesWhereInput;
    limit?: number;
};
export type club_tablesUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where: Prisma.club_tablesWhereUniqueInput;
    create: Prisma.XOR<Prisma.club_tablesCreateInput, Prisma.club_tablesUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.club_tablesUpdateInput, Prisma.club_tablesUncheckedUpdateInput>;
};
export type club_tablesDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
    where: Prisma.club_tablesWhereUniqueInput;
};
export type club_tablesDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.club_tablesWhereInput;
    limit?: number;
};
export type club_tables$booking_tablesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type club_tablesDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.club_tablesSelect<ExtArgs> | null;
    omit?: Prisma.club_tablesOmit<ExtArgs> | null;
    include?: Prisma.club_tablesInclude<ExtArgs> | null;
};
