import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type promotionsModel = runtime.Types.Result.DefaultSelection<Prisma.$promotionsPayload>;
export type AggregatePromotions = {
    _count: PromotionsCountAggregateOutputType | null;
    _avg: PromotionsAvgAggregateOutputType | null;
    _sum: PromotionsSumAggregateOutputType | null;
    _min: PromotionsMinAggregateOutputType | null;
    _max: PromotionsMaxAggregateOutputType | null;
};
export type PromotionsAvgAggregateOutputType = {
    discount_value: runtime.Decimal | null;
    max_uses: number | null;
    use_count: number | null;
};
export type PromotionsSumAggregateOutputType = {
    discount_value: runtime.Decimal | null;
    max_uses: number | null;
    use_count: number | null;
};
export type PromotionsMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    code: string | null;
    discount_type: string | null;
    discount_value: runtime.Decimal | null;
    valid_from: Date | null;
    valid_to: Date | null;
    max_uses: number | null;
    use_count: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type PromotionsMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    description: string | null;
    code: string | null;
    discount_type: string | null;
    discount_value: runtime.Decimal | null;
    valid_from: Date | null;
    valid_to: Date | null;
    max_uses: number | null;
    use_count: number | null;
    is_active: boolean | null;
    created_at: Date | null;
};
export type PromotionsCountAggregateOutputType = {
    id: number;
    title: number;
    description: number;
    code: number;
    discount_type: number;
    discount_value: number;
    valid_from: number;
    valid_to: number;
    max_uses: number;
    use_count: number;
    is_active: number;
    created_at: number;
    _all: number;
};
export type PromotionsAvgAggregateInputType = {
    discount_value?: true;
    max_uses?: true;
    use_count?: true;
};
export type PromotionsSumAggregateInputType = {
    discount_value?: true;
    max_uses?: true;
    use_count?: true;
};
export type PromotionsMinAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    code?: true;
    discount_type?: true;
    discount_value?: true;
    valid_from?: true;
    valid_to?: true;
    max_uses?: true;
    use_count?: true;
    is_active?: true;
    created_at?: true;
};
export type PromotionsMaxAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    code?: true;
    discount_type?: true;
    discount_value?: true;
    valid_from?: true;
    valid_to?: true;
    max_uses?: true;
    use_count?: true;
    is_active?: true;
    created_at?: true;
};
export type PromotionsCountAggregateInputType = {
    id?: true;
    title?: true;
    description?: true;
    code?: true;
    discount_type?: true;
    discount_value?: true;
    valid_from?: true;
    valid_to?: true;
    max_uses?: true;
    use_count?: true;
    is_active?: true;
    created_at?: true;
    _all?: true;
};
export type PromotionsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithRelationInput | Prisma.promotionsOrderByWithRelationInput[];
    cursor?: Prisma.promotionsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PromotionsCountAggregateInputType;
    _avg?: PromotionsAvgAggregateInputType;
    _sum?: PromotionsSumAggregateInputType;
    _min?: PromotionsMinAggregateInputType;
    _max?: PromotionsMaxAggregateInputType;
};
export type GetPromotionsAggregateType<T extends PromotionsAggregateArgs> = {
    [P in keyof T & keyof AggregatePromotions]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePromotions[P]> : Prisma.GetScalarType<T[P], AggregatePromotions[P]>;
};
export type promotionsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithAggregationInput | Prisma.promotionsOrderByWithAggregationInput[];
    by: Prisma.PromotionsScalarFieldEnum[] | Prisma.PromotionsScalarFieldEnum;
    having?: Prisma.promotionsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PromotionsCountAggregateInputType | true;
    _avg?: PromotionsAvgAggregateInputType;
    _sum?: PromotionsSumAggregateInputType;
    _min?: PromotionsMinAggregateInputType;
    _max?: PromotionsMaxAggregateInputType;
};
export type PromotionsGroupByOutputType = {
    id: string;
    title: string;
    description: string | null;
    code: string | null;
    discount_type: string;
    discount_value: runtime.Decimal;
    valid_from: Date;
    valid_to: Date;
    max_uses: number | null;
    use_count: number;
    is_active: boolean;
    created_at: Date;
    _count: PromotionsCountAggregateOutputType | null;
    _avg: PromotionsAvgAggregateOutputType | null;
    _sum: PromotionsSumAggregateOutputType | null;
    _min: PromotionsMinAggregateOutputType | null;
    _max: PromotionsMaxAggregateOutputType | null;
};
export type GetPromotionsGroupByPayload<T extends promotionsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PromotionsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PromotionsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PromotionsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PromotionsGroupByOutputType[P]>;
}>>;
export type promotionsWhereInput = {
    AND?: Prisma.promotionsWhereInput | Prisma.promotionsWhereInput[];
    OR?: Prisma.promotionsWhereInput[];
    NOT?: Prisma.promotionsWhereInput | Prisma.promotionsWhereInput[];
    id?: Prisma.UuidFilter<"promotions"> | string;
    title?: Prisma.StringFilter<"promotions"> | string;
    description?: Prisma.StringNullableFilter<"promotions"> | string | null;
    code?: Prisma.StringNullableFilter<"promotions"> | string | null;
    discount_type?: Prisma.StringFilter<"promotions"> | string;
    discount_value?: Prisma.DecimalFilter<"promotions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFilter<"promotions"> | Date | string;
    valid_to?: Prisma.DateTimeFilter<"promotions"> | Date | string;
    max_uses?: Prisma.IntNullableFilter<"promotions"> | number | null;
    use_count?: Prisma.IntFilter<"promotions"> | number;
    is_active?: Prisma.BoolFilter<"promotions"> | boolean;
    created_at?: Prisma.DateTimeFilter<"promotions"> | Date | string;
};
export type promotionsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    discount_value?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_to?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type promotionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    code?: string;
    AND?: Prisma.promotionsWhereInput | Prisma.promotionsWhereInput[];
    OR?: Prisma.promotionsWhereInput[];
    NOT?: Prisma.promotionsWhereInput | Prisma.promotionsWhereInput[];
    title?: Prisma.StringFilter<"promotions"> | string;
    description?: Prisma.StringNullableFilter<"promotions"> | string | null;
    discount_type?: Prisma.StringFilter<"promotions"> | string;
    discount_value?: Prisma.DecimalFilter<"promotions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFilter<"promotions"> | Date | string;
    valid_to?: Prisma.DateTimeFilter<"promotions"> | Date | string;
    max_uses?: Prisma.IntNullableFilter<"promotions"> | number | null;
    use_count?: Prisma.IntFilter<"promotions"> | number;
    is_active?: Prisma.BoolFilter<"promotions"> | boolean;
    created_at?: Prisma.DateTimeFilter<"promotions"> | Date | string;
}, "id" | "code">;
export type promotionsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    code?: Prisma.SortOrderInput | Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    discount_value?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_to?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrderInput | Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.promotionsCountOrderByAggregateInput;
    _avg?: Prisma.promotionsAvgOrderByAggregateInput;
    _max?: Prisma.promotionsMaxOrderByAggregateInput;
    _min?: Prisma.promotionsMinOrderByAggregateInput;
    _sum?: Prisma.promotionsSumOrderByAggregateInput;
};
export type promotionsScalarWhereWithAggregatesInput = {
    AND?: Prisma.promotionsScalarWhereWithAggregatesInput | Prisma.promotionsScalarWhereWithAggregatesInput[];
    OR?: Prisma.promotionsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.promotionsScalarWhereWithAggregatesInput | Prisma.promotionsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"promotions"> | string;
    title?: Prisma.StringWithAggregatesFilter<"promotions"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"promotions"> | string | null;
    code?: Prisma.StringNullableWithAggregatesFilter<"promotions"> | string | null;
    discount_type?: Prisma.StringWithAggregatesFilter<"promotions"> | string;
    discount_value?: Prisma.DecimalWithAggregatesFilter<"promotions"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeWithAggregatesFilter<"promotions"> | Date | string;
    valid_to?: Prisma.DateTimeWithAggregatesFilter<"promotions"> | Date | string;
    max_uses?: Prisma.IntNullableWithAggregatesFilter<"promotions"> | number | null;
    use_count?: Prisma.IntWithAggregatesFilter<"promotions"> | number;
    is_active?: Prisma.BoolWithAggregatesFilter<"promotions"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"promotions"> | Date | string;
};
export type promotionsCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    code?: string | null;
    discount_type: string;
    discount_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from: Date | string;
    valid_to: Date | string;
    max_uses?: number | null;
    use_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type promotionsUncheckedCreateInput = {
    id?: string;
    title: string;
    description?: string | null;
    code?: string | null;
    discount_type: string;
    discount_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from: Date | string;
    valid_to: Date | string;
    max_uses?: number | null;
    use_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type promotionsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valid_to?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    use_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type promotionsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valid_to?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    use_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type promotionsCreateManyInput = {
    id?: string;
    title: string;
    description?: string | null;
    code?: string | null;
    discount_type: string;
    discount_value: runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from: Date | string;
    valid_to: Date | string;
    max_uses?: number | null;
    use_count?: number;
    is_active?: boolean;
    created_at?: Date | string;
};
export type promotionsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valid_to?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    use_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type promotionsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    code?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    discount_type?: Prisma.StringFieldUpdateOperationsInput | string;
    discount_value?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    valid_from?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    valid_to?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    max_uses?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    use_count?: Prisma.IntFieldUpdateOperationsInput | number;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type promotionsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    discount_value?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_to?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type promotionsAvgOrderByAggregateInput = {
    discount_value?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
};
export type promotionsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    discount_value?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_to?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type promotionsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    code?: Prisma.SortOrder;
    discount_type?: Prisma.SortOrder;
    discount_value?: Prisma.SortOrder;
    valid_from?: Prisma.SortOrder;
    valid_to?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type promotionsSumOrderByAggregateInput = {
    discount_value?: Prisma.SortOrder;
    max_uses?: Prisma.SortOrder;
    use_count?: Prisma.SortOrder;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type promotionsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    code?: boolean;
    discount_type?: boolean;
    discount_value?: boolean;
    valid_from?: boolean;
    valid_to?: boolean;
    max_uses?: boolean;
    use_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["promotions"]>;
export type promotionsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    code?: boolean;
    discount_type?: boolean;
    discount_value?: boolean;
    valid_from?: boolean;
    valid_to?: boolean;
    max_uses?: boolean;
    use_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["promotions"]>;
export type promotionsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    description?: boolean;
    code?: boolean;
    discount_type?: boolean;
    discount_value?: boolean;
    valid_from?: boolean;
    valid_to?: boolean;
    max_uses?: boolean;
    use_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
}, ExtArgs["result"]["promotions"]>;
export type promotionsSelectScalar = {
    id?: boolean;
    title?: boolean;
    description?: boolean;
    code?: boolean;
    discount_type?: boolean;
    discount_value?: boolean;
    valid_from?: boolean;
    valid_to?: boolean;
    max_uses?: boolean;
    use_count?: boolean;
    is_active?: boolean;
    created_at?: boolean;
};
export type promotionsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "description" | "code" | "discount_type" | "discount_value" | "valid_from" | "valid_to" | "max_uses" | "use_count" | "is_active" | "created_at", ExtArgs["result"]["promotions"]>;
export type $promotionsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "promotions";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        description: string | null;
        code: string | null;
        discount_type: string;
        discount_value: runtime.Decimal;
        valid_from: Date;
        valid_to: Date;
        max_uses: number | null;
        use_count: number;
        is_active: boolean;
        created_at: Date;
    }, ExtArgs["result"]["promotions"]>;
    composites: {};
};
export type promotionsGetPayload<S extends boolean | null | undefined | promotionsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$promotionsPayload, S>;
export type promotionsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<promotionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PromotionsCountAggregateInputType | true;
};
export interface promotionsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['promotions'];
        meta: {
            name: 'promotions';
        };
    };
    findUnique<T extends promotionsFindUniqueArgs>(args: Prisma.SelectSubset<T, promotionsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends promotionsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, promotionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends promotionsFindFirstArgs>(args?: Prisma.SelectSubset<T, promotionsFindFirstArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends promotionsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, promotionsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends promotionsFindManyArgs>(args?: Prisma.SelectSubset<T, promotionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends promotionsCreateArgs>(args: Prisma.SelectSubset<T, promotionsCreateArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends promotionsCreateManyArgs>(args?: Prisma.SelectSubset<T, promotionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends promotionsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, promotionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends promotionsDeleteArgs>(args: Prisma.SelectSubset<T, promotionsDeleteArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends promotionsUpdateArgs>(args: Prisma.SelectSubset<T, promotionsUpdateArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends promotionsDeleteManyArgs>(args?: Prisma.SelectSubset<T, promotionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends promotionsUpdateManyArgs>(args: Prisma.SelectSubset<T, promotionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends promotionsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, promotionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends promotionsUpsertArgs>(args: Prisma.SelectSubset<T, promotionsUpsertArgs<ExtArgs>>): Prisma.Prisma__promotionsClient<runtime.Types.Result.GetResult<Prisma.$promotionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends promotionsCountArgs>(args?: Prisma.Subset<T, promotionsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PromotionsCountAggregateOutputType> : number>;
    aggregate<T extends PromotionsAggregateArgs>(args: Prisma.Subset<T, PromotionsAggregateArgs>): Prisma.PrismaPromise<GetPromotionsAggregateType<T>>;
    groupBy<T extends promotionsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: promotionsGroupByArgs['orderBy'];
    } : {
        orderBy?: promotionsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, promotionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPromotionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: promotionsFieldRefs;
}
export interface Prisma__promotionsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface promotionsFieldRefs {
    readonly id: Prisma.FieldRef<"promotions", 'String'>;
    readonly title: Prisma.FieldRef<"promotions", 'String'>;
    readonly description: Prisma.FieldRef<"promotions", 'String'>;
    readonly code: Prisma.FieldRef<"promotions", 'String'>;
    readonly discount_type: Prisma.FieldRef<"promotions", 'String'>;
    readonly discount_value: Prisma.FieldRef<"promotions", 'Decimal'>;
    readonly valid_from: Prisma.FieldRef<"promotions", 'DateTime'>;
    readonly valid_to: Prisma.FieldRef<"promotions", 'DateTime'>;
    readonly max_uses: Prisma.FieldRef<"promotions", 'Int'>;
    readonly use_count: Prisma.FieldRef<"promotions", 'Int'>;
    readonly is_active: Prisma.FieldRef<"promotions", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"promotions", 'DateTime'>;
}
export type promotionsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where: Prisma.promotionsWhereUniqueInput;
};
export type promotionsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where: Prisma.promotionsWhereUniqueInput;
};
export type promotionsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithRelationInput | Prisma.promotionsOrderByWithRelationInput[];
    cursor?: Prisma.promotionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionsScalarFieldEnum | Prisma.PromotionsScalarFieldEnum[];
};
export type promotionsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithRelationInput | Prisma.promotionsOrderByWithRelationInput[];
    cursor?: Prisma.promotionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionsScalarFieldEnum | Prisma.PromotionsScalarFieldEnum[];
};
export type promotionsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where?: Prisma.promotionsWhereInput;
    orderBy?: Prisma.promotionsOrderByWithRelationInput | Prisma.promotionsOrderByWithRelationInput[];
    cursor?: Prisma.promotionsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PromotionsScalarFieldEnum | Prisma.PromotionsScalarFieldEnum[];
};
export type promotionsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotionsCreateInput, Prisma.promotionsUncheckedCreateInput>;
};
export type promotionsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.promotionsCreateManyInput | Prisma.promotionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type promotionsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    data: Prisma.promotionsCreateManyInput | Prisma.promotionsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type promotionsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotionsUpdateInput, Prisma.promotionsUncheckedUpdateInput>;
    where: Prisma.promotionsWhereUniqueInput;
};
export type promotionsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.promotionsUpdateManyMutationInput, Prisma.promotionsUncheckedUpdateManyInput>;
    where?: Prisma.promotionsWhereInput;
    limit?: number;
};
export type promotionsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.promotionsUpdateManyMutationInput, Prisma.promotionsUncheckedUpdateManyInput>;
    where?: Prisma.promotionsWhereInput;
    limit?: number;
};
export type promotionsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where: Prisma.promotionsWhereUniqueInput;
    create: Prisma.XOR<Prisma.promotionsCreateInput, Prisma.promotionsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.promotionsUpdateInput, Prisma.promotionsUncheckedUpdateInput>;
};
export type promotionsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
    where: Prisma.promotionsWhereUniqueInput;
};
export type promotionsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.promotionsWhereInput;
    limit?: number;
};
export type promotionsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.promotionsSelect<ExtArgs> | null;
    omit?: Prisma.promotionsOmit<ExtArgs> | null;
};
