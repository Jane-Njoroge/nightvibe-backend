import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type paymentsModel = runtime.Types.Result.DefaultSelection<Prisma.$paymentsPayload>;
export type AggregatePayments = {
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type PaymentsAvgAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsSumAggregateOutputType = {
    amount: runtime.Decimal | null;
};
export type PaymentsMinAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    method: $Enums.payment_method | null;
    status: $Enums.payment_status | null;
    transaction_ref: string | null;
    gateway_ref: string | null;
    paid_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsMaxAggregateOutputType = {
    id: string | null;
    booking_id: string | null;
    amount: runtime.Decimal | null;
    currency: string | null;
    method: $Enums.payment_method | null;
    status: $Enums.payment_status | null;
    transaction_ref: string | null;
    gateway_ref: string | null;
    paid_at: Date | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type PaymentsCountAggregateOutputType = {
    id: number;
    booking_id: number;
    amount: number;
    currency: number;
    method: number;
    status: number;
    transaction_ref: number;
    gateway_ref: number;
    paid_at: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type PaymentsAvgAggregateInputType = {
    amount?: true;
};
export type PaymentsSumAggregateInputType = {
    amount?: true;
};
export type PaymentsMinAggregateInputType = {
    id?: true;
    booking_id?: true;
    amount?: true;
    currency?: true;
    method?: true;
    status?: true;
    transaction_ref?: true;
    gateway_ref?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsMaxAggregateInputType = {
    id?: true;
    booking_id?: true;
    amount?: true;
    currency?: true;
    method?: true;
    status?: true;
    transaction_ref?: true;
    gateway_ref?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
};
export type PaymentsCountAggregateInputType = {
    id?: true;
    booking_id?: true;
    amount?: true;
    currency?: true;
    method?: true;
    status?: true;
    transaction_ref?: true;
    gateway_ref?: true;
    paid_at?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type PaymentsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithRelationInput | Prisma.paymentsOrderByWithRelationInput[];
    cursor?: Prisma.paymentsWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | PaymentsCountAggregateInputType;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type GetPaymentsAggregateType<T extends PaymentsAggregateArgs> = {
    [P in keyof T & keyof AggregatePayments]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregatePayments[P]> : Prisma.GetScalarType<T[P], AggregatePayments[P]>;
};
export type paymentsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    orderBy?: Prisma.paymentsOrderByWithAggregationInput | Prisma.paymentsOrderByWithAggregationInput[];
    by: Prisma.PaymentsScalarFieldEnum[] | Prisma.PaymentsScalarFieldEnum;
    having?: Prisma.paymentsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: PaymentsCountAggregateInputType | true;
    _avg?: PaymentsAvgAggregateInputType;
    _sum?: PaymentsSumAggregateInputType;
    _min?: PaymentsMinAggregateInputType;
    _max?: PaymentsMaxAggregateInputType;
};
export type PaymentsGroupByOutputType = {
    id: string;
    booking_id: string;
    amount: runtime.Decimal;
    currency: string;
    method: $Enums.payment_method;
    status: $Enums.payment_status;
    transaction_ref: string | null;
    gateway_ref: string | null;
    paid_at: Date | null;
    created_at: Date;
    updated_at: Date;
    _count: PaymentsCountAggregateOutputType | null;
    _avg: PaymentsAvgAggregateOutputType | null;
    _sum: PaymentsSumAggregateOutputType | null;
    _min: PaymentsMinAggregateOutputType | null;
    _max: PaymentsMaxAggregateOutputType | null;
};
export type GetPaymentsGroupByPayload<T extends paymentsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<PaymentsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof PaymentsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], PaymentsGroupByOutputType[P]>;
}>>;
export type paymentsWhereInput = {
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    booking_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"payments"> | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    transaction_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    gateway_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
};
export type paymentsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    gateway_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    bookings?: Prisma.bookingsOrderByWithRelationInput;
};
export type paymentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    OR?: Prisma.paymentsWhereInput[];
    NOT?: Prisma.paymentsWhereInput | Prisma.paymentsWhereInput[];
    booking_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"payments"> | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    transaction_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    gateway_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    bookings?: Prisma.XOR<Prisma.BookingsScalarRelationFilter, Prisma.bookingsWhereInput>;
}, "id">;
export type paymentsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    gateway_ref?: Prisma.SortOrderInput | Prisma.SortOrder;
    paid_at?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.paymentsCountOrderByAggregateInput;
    _avg?: Prisma.paymentsAvgOrderByAggregateInput;
    _max?: Prisma.paymentsMaxOrderByAggregateInput;
    _min?: Prisma.paymentsMinOrderByAggregateInput;
    _sum?: Prisma.paymentsSumOrderByAggregateInput;
};
export type paymentsScalarWhereWithAggregatesInput = {
    AND?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    OR?: Prisma.paymentsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.paymentsScalarWhereWithAggregatesInput | Prisma.paymentsScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    booking_id?: Prisma.UuidWithAggregatesFilter<"payments"> | string;
    amount?: Prisma.DecimalWithAggregatesFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"payments"> | string;
    method?: Prisma.Enumpayment_methodWithAggregatesFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusWithAggregatesFilter<"payments"> | $Enums.payment_status;
    transaction_ref?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    gateway_ref?: Prisma.StringNullableWithAggregatesFilter<"payments"> | string | null;
    paid_at?: Prisma.DateTimeNullableWithAggregatesFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"payments"> | Date | string;
};
export type paymentsCreateInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings: Prisma.bookingsCreateNestedOneWithoutPaymentsInput;
};
export type paymentsUncheckedCreateInput = {
    id?: string;
    booking_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateOneRequiredWithoutPaymentsNestedInput;
};
export type paymentsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsCreateManyInput = {
    id?: string;
    booking_id: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    booking_id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type PaymentsListRelationFilter = {
    every?: Prisma.paymentsWhereInput;
    some?: Prisma.paymentsWhereInput;
    none?: Prisma.paymentsWhereInput;
};
export type paymentsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type paymentsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_ref?: Prisma.SortOrder;
    gateway_ref?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsAvgOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type paymentsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_ref?: Prisma.SortOrder;
    gateway_ref?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    booking_id?: Prisma.SortOrder;
    amount?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    method?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    transaction_ref?: Prisma.SortOrder;
    gateway_ref?: Prisma.SortOrder;
    paid_at?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type paymentsSumOrderByAggregateInput = {
    amount?: Prisma.SortOrder;
};
export type paymentsCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput> | Prisma.paymentsCreateWithoutBookingsInput[] | Prisma.paymentsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutBookingsInput | Prisma.paymentsCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.paymentsCreateManyBookingsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUncheckedCreateNestedManyWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput> | Prisma.paymentsCreateWithoutBookingsInput[] | Prisma.paymentsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutBookingsInput | Prisma.paymentsCreateOrConnectWithoutBookingsInput[];
    createMany?: Prisma.paymentsCreateManyBookingsInputEnvelope;
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
};
export type paymentsUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput> | Prisma.paymentsCreateWithoutBookingsInput[] | Prisma.paymentsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutBookingsInput | Prisma.paymentsCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutBookingsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.paymentsCreateManyBookingsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutBookingsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutBookingsInput | Prisma.paymentsUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type paymentsUncheckedUpdateManyWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput> | Prisma.paymentsCreateWithoutBookingsInput[] | Prisma.paymentsUncheckedCreateWithoutBookingsInput[];
    connectOrCreate?: Prisma.paymentsCreateOrConnectWithoutBookingsInput | Prisma.paymentsCreateOrConnectWithoutBookingsInput[];
    upsert?: Prisma.paymentsUpsertWithWhereUniqueWithoutBookingsInput | Prisma.paymentsUpsertWithWhereUniqueWithoutBookingsInput[];
    createMany?: Prisma.paymentsCreateManyBookingsInputEnvelope;
    set?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    disconnect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    delete?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    connect?: Prisma.paymentsWhereUniqueInput | Prisma.paymentsWhereUniqueInput[];
    update?: Prisma.paymentsUpdateWithWhereUniqueWithoutBookingsInput | Prisma.paymentsUpdateWithWhereUniqueWithoutBookingsInput[];
    updateMany?: Prisma.paymentsUpdateManyWithWhereWithoutBookingsInput | Prisma.paymentsUpdateManyWithWhereWithoutBookingsInput[];
    deleteMany?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
};
export type Enumpayment_methodFieldUpdateOperationsInput = {
    set?: $Enums.payment_method;
};
export type Enumpayment_statusFieldUpdateOperationsInput = {
    set?: $Enums.payment_status;
};
export type paymentsCreateWithoutBookingsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUncheckedCreateWithoutBookingsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsCreateOrConnectWithoutBookingsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput>;
};
export type paymentsCreateManyBookingsInputEnvelope = {
    data: Prisma.paymentsCreateManyBookingsInput | Prisma.paymentsCreateManyBookingsInput[];
    skipDuplicates?: boolean;
};
export type paymentsUpsertWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    update: Prisma.XOR<Prisma.paymentsUpdateWithoutBookingsInput, Prisma.paymentsUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.paymentsCreateWithoutBookingsInput, Prisma.paymentsUncheckedCreateWithoutBookingsInput>;
};
export type paymentsUpdateWithWhereUniqueWithoutBookingsInput = {
    where: Prisma.paymentsWhereUniqueInput;
    data: Prisma.XOR<Prisma.paymentsUpdateWithoutBookingsInput, Prisma.paymentsUncheckedUpdateWithoutBookingsInput>;
};
export type paymentsUpdateManyWithWhereWithoutBookingsInput = {
    where: Prisma.paymentsScalarWhereInput;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyWithoutBookingsInput>;
};
export type paymentsScalarWhereInput = {
    AND?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    OR?: Prisma.paymentsScalarWhereInput[];
    NOT?: Prisma.paymentsScalarWhereInput | Prisma.paymentsScalarWhereInput[];
    id?: Prisma.UuidFilter<"payments"> | string;
    booking_id?: Prisma.UuidFilter<"payments"> | string;
    amount?: Prisma.DecimalFilter<"payments"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"payments"> | string;
    method?: Prisma.Enumpayment_methodFilter<"payments"> | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFilter<"payments"> | $Enums.payment_status;
    transaction_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    gateway_ref?: Prisma.StringNullableFilter<"payments"> | string | null;
    paid_at?: Prisma.DateTimeNullableFilter<"payments"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"payments"> | Date | string;
};
export type paymentsCreateManyBookingsInput = {
    id?: string;
    amount: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    method: $Enums.payment_method;
    status?: $Enums.payment_status;
    transaction_ref?: string | null;
    gateway_ref?: string | null;
    paid_at?: Date | string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type paymentsUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsUncheckedUpdateManyWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    amount?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    method?: Prisma.Enumpayment_methodFieldUpdateOperationsInput | $Enums.payment_method;
    status?: Prisma.Enumpayment_statusFieldUpdateOperationsInput | $Enums.payment_status;
    transaction_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    gateway_ref?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    paid_at?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type paymentsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    status?: boolean;
    transaction_ref?: boolean;
    gateway_ref?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    status?: boolean;
    transaction_ref?: boolean;
    gateway_ref?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    booking_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    status?: boolean;
    transaction_ref?: boolean;
    gateway_ref?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["payments"]>;
export type paymentsSelectScalar = {
    id?: boolean;
    booking_id?: boolean;
    amount?: boolean;
    currency?: boolean;
    method?: boolean;
    status?: boolean;
    transaction_ref?: boolean;
    gateway_ref?: boolean;
    paid_at?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type paymentsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "booking_id" | "amount" | "currency" | "method" | "status" | "transaction_ref" | "gateway_ref" | "paid_at" | "created_at" | "updated_at", ExtArgs["result"]["payments"]>;
export type paymentsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type paymentsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type paymentsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bookings?: boolean | Prisma.bookingsDefaultArgs<ExtArgs>;
};
export type $paymentsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "payments";
    objects: {
        bookings: Prisma.$bookingsPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        booking_id: string;
        amount: runtime.Decimal;
        currency: string;
        method: $Enums.payment_method;
        status: $Enums.payment_status;
        transaction_ref: string | null;
        gateway_ref: string | null;
        paid_at: Date | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["payments"]>;
    composites: {};
};
export type paymentsGetPayload<S extends boolean | null | undefined | paymentsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$paymentsPayload, S>;
export type paymentsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<paymentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: PaymentsCountAggregateInputType | true;
};
export interface paymentsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['payments'];
        meta: {
            name: 'payments';
        };
    };
    findUnique<T extends paymentsFindUniqueArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends paymentsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, paymentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends paymentsFindFirstArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends paymentsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, paymentsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends paymentsFindManyArgs>(args?: Prisma.SelectSubset<T, paymentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends paymentsCreateArgs>(args: Prisma.SelectSubset<T, paymentsCreateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends paymentsCreateManyArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends paymentsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, paymentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends paymentsDeleteArgs>(args: Prisma.SelectSubset<T, paymentsDeleteArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends paymentsUpdateArgs>(args: Prisma.SelectSubset<T, paymentsUpdateArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends paymentsDeleteManyArgs>(args?: Prisma.SelectSubset<T, paymentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends paymentsUpdateManyArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends paymentsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, paymentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends paymentsUpsertArgs>(args: Prisma.SelectSubset<T, paymentsUpsertArgs<ExtArgs>>): Prisma.Prisma__paymentsClient<runtime.Types.Result.GetResult<Prisma.$paymentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends paymentsCountArgs>(args?: Prisma.Subset<T, paymentsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], PaymentsCountAggregateOutputType> : number>;
    aggregate<T extends PaymentsAggregateArgs>(args: Prisma.Subset<T, PaymentsAggregateArgs>): Prisma.PrismaPromise<GetPaymentsAggregateType<T>>;
    groupBy<T extends paymentsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: paymentsGroupByArgs['orderBy'];
    } : {
        orderBy?: paymentsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, paymentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: paymentsFieldRefs;
}
export interface Prisma__paymentsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bookings<T extends Prisma.bookingsDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.bookingsDefaultArgs<ExtArgs>>): Prisma.Prisma__bookingsClient<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface paymentsFieldRefs {
    readonly id: Prisma.FieldRef<"payments", 'String'>;
    readonly booking_id: Prisma.FieldRef<"payments", 'String'>;
    readonly amount: Prisma.FieldRef<"payments", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"payments", 'String'>;
    readonly method: Prisma.FieldRef<"payments", 'payment_method'>;
    readonly status: Prisma.FieldRef<"payments", 'payment_status'>;
    readonly transaction_ref: Prisma.FieldRef<"payments", 'String'>;
    readonly gateway_ref: Prisma.FieldRef<"payments", 'String'>;
    readonly paid_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"payments", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"payments", 'DateTime'>;
}
export type paymentsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type paymentsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
};
export type paymentsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
};
export type paymentsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.paymentsCreateManyInput | Prisma.paymentsCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.paymentsIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.paymentsUpdateManyMutationInput, Prisma.paymentsUncheckedUpdateManyInput>;
    where?: Prisma.paymentsWhereInput;
    limit?: number;
    include?: Prisma.paymentsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type paymentsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
    create: Prisma.XOR<Prisma.paymentsCreateInput, Prisma.paymentsUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.paymentsUpdateInput, Prisma.paymentsUncheckedUpdateInput>;
};
export type paymentsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
    where: Prisma.paymentsWhereUniqueInput;
};
export type paymentsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.paymentsWhereInput;
    limit?: number;
};
export type paymentsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.paymentsSelect<ExtArgs> | null;
    omit?: Prisma.paymentsOmit<ExtArgs> | null;
    include?: Prisma.paymentsInclude<ExtArgs> | null;
};
