import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type usersModel = runtime.Types.Result.DefaultSelection<Prisma.$usersPayload>;
export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type UsersMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    role: $Enums.user_role | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    password_hash: string | null;
    first_name: string | null;
    last_name: string | null;
    phone: string | null;
    role: $Enums.user_role | null;
    is_active: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UsersCountAggregateOutputType = {
    id: number;
    email: number;
    password_hash: number;
    first_name: number;
    last_name: number;
    phone: number;
    role: number;
    is_active: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UsersMinAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    phone?: true;
    role?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersMaxAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    phone?: true;
    role?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
};
export type UsersCountAggregateInputType = {
    id?: true;
    email?: true;
    password_hash?: true;
    first_name?: true;
    last_name?: true;
    phone?: true;
    role?: true;
    is_active?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UsersAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UsersCountAggregateInputType;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
    [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUsers[P]> : Prisma.GetScalarType<T[P], AggregateUsers[P]>;
};
export type usersGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithAggregationInput | Prisma.usersOrderByWithAggregationInput[];
    by: Prisma.UsersScalarFieldEnum[] | Prisma.UsersScalarFieldEnum;
    having?: Prisma.usersScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UsersCountAggregateInputType | true;
    _min?: UsersMinAggregateInputType;
    _max?: UsersMaxAggregateInputType;
};
export type UsersGroupByOutputType = {
    id: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone: string | null;
    role: $Enums.user_role;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UsersCountAggregateOutputType | null;
    _min: UsersMinAggregateOutputType | null;
    _max: UsersMaxAggregateOutputType | null;
};
export type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UsersGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UsersGroupByOutputType[P]>;
}>>;
export type usersWhereInput = {
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    id?: Prisma.UuidFilter<"users"> | string;
    email?: Prisma.StringFilter<"users"> | string;
    password_hash?: Prisma.StringFilter<"users"> | string;
    first_name?: Prisma.StringFilter<"users"> | string;
    last_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.Enumuser_roleFilter<"users"> | $Enums.user_role;
    is_active?: Prisma.BoolFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    audit_logs?: Prisma.Audit_logsListRelationFilter;
    bookings?: Prisma.BookingsListRelationFilter;
    events?: Prisma.EventsListRelationFilter;
    media?: Prisma.MediaListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
};
export type usersOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    audit_logs?: Prisma.audit_logsOrderByRelationAggregateInput;
    bookings?: Prisma.bookingsOrderByRelationAggregateInput;
    events?: Prisma.eventsOrderByRelationAggregateInput;
    media?: Prisma.mediaOrderByRelationAggregateInput;
    notifications?: Prisma.notificationsOrderByRelationAggregateInput;
};
export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    email?: string;
    AND?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    OR?: Prisma.usersWhereInput[];
    NOT?: Prisma.usersWhereInput | Prisma.usersWhereInput[];
    password_hash?: Prisma.StringFilter<"users"> | string;
    first_name?: Prisma.StringFilter<"users"> | string;
    last_name?: Prisma.StringFilter<"users"> | string;
    phone?: Prisma.StringNullableFilter<"users"> | string | null;
    role?: Prisma.Enumuser_roleFilter<"users"> | $Enums.user_role;
    is_active?: Prisma.BoolFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"users"> | Date | string;
    audit_logs?: Prisma.Audit_logsListRelationFilter;
    bookings?: Prisma.BookingsListRelationFilter;
    events?: Prisma.EventsListRelationFilter;
    media?: Prisma.MediaListRelationFilter;
    notifications?: Prisma.NotificationsListRelationFilter;
}, "id" | "email">;
export type usersOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.usersCountOrderByAggregateInput;
    _max?: Prisma.usersMaxOrderByAggregateInput;
    _min?: Prisma.usersMinOrderByAggregateInput;
};
export type usersScalarWhereWithAggregatesInput = {
    AND?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    OR?: Prisma.usersScalarWhereWithAggregatesInput[];
    NOT?: Prisma.usersScalarWhereWithAggregatesInput | Prisma.usersScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"users"> | string;
    email?: Prisma.StringWithAggregatesFilter<"users"> | string;
    password_hash?: Prisma.StringWithAggregatesFilter<"users"> | string;
    first_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    last_name?: Prisma.StringWithAggregatesFilter<"users"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"users"> | string | null;
    role?: Prisma.Enumuser_roleWithAggregatesFilter<"users"> | $Enums.user_role;
    is_active?: Prisma.BoolWithAggregatesFilter<"users"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"users"> | Date | string;
};
export type usersCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateManyInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type usersUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type usersUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UsersNullableScalarRelationFilter = {
    is?: Prisma.usersWhereInput | null;
    isNot?: Prisma.usersWhereInput | null;
};
export type UsersScalarRelationFilter = {
    is?: Prisma.usersWhereInput;
    isNot?: Prisma.usersWhereInput;
};
export type usersCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password_hash?: Prisma.SortOrder;
    first_name?: Prisma.SortOrder;
    last_name?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    is_active?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type usersCreateNestedOneWithoutAudit_logsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAudit_logsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneWithoutAudit_logsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutAudit_logsInput;
    upsert?: Prisma.usersUpsertWithoutAudit_logsInput;
    disconnect?: Prisma.usersWhereInput | boolean;
    delete?: Prisma.usersWhereInput | boolean;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutAudit_logsInput, Prisma.usersUpdateWithoutAudit_logsInput>, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
};
export type usersCreateNestedOneWithoutBookingsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutBookingsInput, Prisma.usersUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutBookingsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutBookingsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutBookingsInput, Prisma.usersUncheckedCreateWithoutBookingsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutBookingsInput;
    upsert?: Prisma.usersUpsertWithoutBookingsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutBookingsInput, Prisma.usersUpdateWithoutBookingsInput>, Prisma.usersUncheckedUpdateWithoutBookingsInput>;
};
export type usersCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutEventsInput, Prisma.usersUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutEventsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutEventsInput, Prisma.usersUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.usersUpsertWithoutEventsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutEventsInput, Prisma.usersUpdateWithoutEventsInput>, Prisma.usersUncheckedUpdateWithoutEventsInput>;
};
export type usersCreateNestedOneWithoutMediaInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMediaInput, Prisma.usersUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMediaInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutMediaNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutMediaInput, Prisma.usersUncheckedCreateWithoutMediaInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutMediaInput;
    upsert?: Prisma.usersUpsertWithoutMediaInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutMediaInput, Prisma.usersUpdateWithoutMediaInput>, Prisma.usersUncheckedUpdateWithoutMediaInput>;
};
export type usersCreateNestedOneWithoutNotificationsInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
};
export type usersUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    connectOrCreate?: Prisma.usersCreateOrConnectWithoutNotificationsInput;
    upsert?: Prisma.usersUpsertWithoutNotificationsInput;
    connect?: Prisma.usersWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.usersUpdateToOneWithWhereWithoutNotificationsInput, Prisma.usersUpdateWithoutNotificationsInput>, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type Enumuser_roleFieldUpdateOperationsInput = {
    set?: $Enums.user_role;
};
export type usersCreateWithoutAudit_logsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutAudit_logsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutAudit_logsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
};
export type usersUpsertWithoutAudit_logsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutAudit_logsInput, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutAudit_logsInput, Prisma.usersUncheckedCreateWithoutAudit_logsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutAudit_logsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutAudit_logsInput, Prisma.usersUncheckedUpdateWithoutAudit_logsInput>;
};
export type usersUpdateWithoutAudit_logsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutAudit_logsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutBookingsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutBookingsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutBookingsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutBookingsInput, Prisma.usersUncheckedCreateWithoutBookingsInput>;
};
export type usersUpsertWithoutBookingsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutBookingsInput, Prisma.usersUncheckedUpdateWithoutBookingsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutBookingsInput, Prisma.usersUncheckedCreateWithoutBookingsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutBookingsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutBookingsInput, Prisma.usersUncheckedUpdateWithoutBookingsInput>;
};
export type usersUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutBookingsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutEventsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutEventsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutEventsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutEventsInput, Prisma.usersUncheckedCreateWithoutEventsInput>;
};
export type usersUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutEventsInput, Prisma.usersUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutEventsInput, Prisma.usersUncheckedCreateWithoutEventsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutEventsInput, Prisma.usersUncheckedUpdateWithoutEventsInput>;
};
export type usersUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutMediaInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutMediaInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutUsersInput;
    notifications?: Prisma.notificationsUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutMediaInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutMediaInput, Prisma.usersUncheckedCreateWithoutMediaInput>;
};
export type usersUpsertWithoutMediaInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutMediaInput, Prisma.usersUncheckedUpdateWithoutMediaInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutMediaInput, Prisma.usersUncheckedCreateWithoutMediaInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutMediaInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutMediaInput, Prisma.usersUncheckedUpdateWithoutMediaInput>;
};
export type usersUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutMediaInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput;
    notifications?: Prisma.notificationsUncheckedUpdateManyWithoutUsersNestedInput;
};
export type usersCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaCreateNestedManyWithoutUsersInput;
};
export type usersUncheckedCreateWithoutNotificationsInput = {
    id?: string;
    email: string;
    password_hash: string;
    first_name: string;
    last_name: string;
    phone?: string | null;
    role?: $Enums.user_role;
    is_active?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    audit_logs?: Prisma.audit_logsUncheckedCreateNestedManyWithoutUsersInput;
    bookings?: Prisma.bookingsUncheckedCreateNestedManyWithoutUsersInput;
    events?: Prisma.eventsUncheckedCreateNestedManyWithoutUsersInput;
    media?: Prisma.mediaUncheckedCreateNestedManyWithoutUsersInput;
};
export type usersCreateOrConnectWithoutNotificationsInput = {
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
};
export type usersUpsertWithoutNotificationsInput = {
    update: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
    create: Prisma.XOR<Prisma.usersCreateWithoutNotificationsInput, Prisma.usersUncheckedCreateWithoutNotificationsInput>;
    where?: Prisma.usersWhereInput;
};
export type usersUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: Prisma.usersWhereInput;
    data: Prisma.XOR<Prisma.usersUpdateWithoutNotificationsInput, Prisma.usersUncheckedUpdateWithoutNotificationsInput>;
};
export type usersUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUpdateManyWithoutUsersNestedInput;
};
export type usersUncheckedUpdateWithoutNotificationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password_hash?: Prisma.StringFieldUpdateOperationsInput | string;
    first_name?: Prisma.StringFieldUpdateOperationsInput | string;
    last_name?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.Enumuser_roleFieldUpdateOperationsInput | $Enums.user_role;
    is_active?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    audit_logs?: Prisma.audit_logsUncheckedUpdateManyWithoutUsersNestedInput;
    bookings?: Prisma.bookingsUncheckedUpdateManyWithoutUsersNestedInput;
    events?: Prisma.eventsUncheckedUpdateManyWithoutUsersNestedInput;
    media?: Prisma.mediaUncheckedUpdateManyWithoutUsersNestedInput;
};
export type UsersCountOutputType = {
    audit_logs: number;
    bookings: number;
    events: number;
    media: number;
    notifications: number;
};
export type UsersCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_logs?: boolean | UsersCountOutputTypeCountAudit_logsArgs;
    bookings?: boolean | UsersCountOutputTypeCountBookingsArgs;
    events?: boolean | UsersCountOutputTypeCountEventsArgs;
    media?: boolean | UsersCountOutputTypeCountMediaArgs;
    notifications?: boolean | UsersCountOutputTypeCountNotificationsArgs;
};
export type UsersCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UsersCountOutputTypeSelect<ExtArgs> | null;
};
export type UsersCountOutputTypeCountAudit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.audit_logsWhereInput;
};
export type UsersCountOutputTypeCountBookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.bookingsWhereInput;
};
export type UsersCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.eventsWhereInput;
};
export type UsersCountOutputTypeCountMediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.mediaWhereInput;
};
export type UsersCountOutputTypeCountNotificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.notificationsWhereInput;
};
export type usersSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    phone?: boolean;
    role?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    audit_logs?: boolean | Prisma.users$audit_logsArgs<ExtArgs>;
    bookings?: boolean | Prisma.users$bookingsArgs<ExtArgs>;
    events?: boolean | Prisma.users$eventsArgs<ExtArgs>;
    media?: boolean | Prisma.users$mediaArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["users"]>;
export type usersSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    phone?: boolean;
    role?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    phone?: boolean;
    role?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["users"]>;
export type usersSelectScalar = {
    id?: boolean;
    email?: boolean;
    password_hash?: boolean;
    first_name?: boolean;
    last_name?: boolean;
    phone?: boolean;
    role?: boolean;
    is_active?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type usersOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "password_hash" | "first_name" | "last_name" | "phone" | "role" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["users"]>;
export type usersInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    audit_logs?: boolean | Prisma.users$audit_logsArgs<ExtArgs>;
    bookings?: boolean | Prisma.users$bookingsArgs<ExtArgs>;
    events?: boolean | Prisma.users$eventsArgs<ExtArgs>;
    media?: boolean | Prisma.users$mediaArgs<ExtArgs>;
    notifications?: boolean | Prisma.users$notificationsArgs<ExtArgs>;
    _count?: boolean | Prisma.UsersCountOutputTypeDefaultArgs<ExtArgs>;
};
export type usersIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type usersIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $usersPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "users";
    objects: {
        audit_logs: Prisma.$audit_logsPayload<ExtArgs>[];
        bookings: Prisma.$bookingsPayload<ExtArgs>[];
        events: Prisma.$eventsPayload<ExtArgs>[];
        media: Prisma.$mediaPayload<ExtArgs>[];
        notifications: Prisma.$notificationsPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        password_hash: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        role: $Enums.user_role;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["users"]>;
    composites: {};
};
export type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$usersPayload, S>;
export type usersCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UsersCountAggregateInputType | true;
};
export interface usersDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['users'];
        meta: {
            name: 'users';
        };
    };
    findUnique<T extends usersFindUniqueArgs>(args: Prisma.SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends usersFindFirstArgs>(args?: Prisma.SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends usersFindManyArgs>(args?: Prisma.SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends usersCreateArgs>(args: Prisma.SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends usersCreateManyArgs>(args?: Prisma.SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends usersDeleteArgs>(args: Prisma.SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends usersUpdateArgs>(args: Prisma.SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends usersDeleteManyArgs>(args?: Prisma.SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends usersUpdateManyArgs>(args: Prisma.SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends usersUpsertArgs>(args: Prisma.SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma.Prisma__usersClient<runtime.Types.Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends usersCountArgs>(args?: Prisma.Subset<T, usersCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UsersCountAggregateOutputType> : number>;
    aggregate<T extends UsersAggregateArgs>(args: Prisma.Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>;
    groupBy<T extends usersGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: usersGroupByArgs['orderBy'];
    } : {
        orderBy?: usersGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: usersFieldRefs;
}
export interface Prisma__usersClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    audit_logs<T extends Prisma.users$audit_logsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$audit_logsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$audit_logsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    bookings<T extends Prisma.users$bookingsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$bookingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.users$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$eventsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    media<T extends Prisma.users$mediaArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$mediaArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$mediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    notifications<T extends Prisma.users$notificationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.users$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$notificationsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface usersFieldRefs {
    readonly id: Prisma.FieldRef<"users", 'String'>;
    readonly email: Prisma.FieldRef<"users", 'String'>;
    readonly password_hash: Prisma.FieldRef<"users", 'String'>;
    readonly first_name: Prisma.FieldRef<"users", 'String'>;
    readonly last_name: Prisma.FieldRef<"users", 'String'>;
    readonly phone: Prisma.FieldRef<"users", 'String'>;
    readonly role: Prisma.FieldRef<"users", 'user_role'>;
    readonly is_active: Prisma.FieldRef<"users", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"users", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"users", 'DateTime'>;
}
export type usersFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where?: Prisma.usersWhereInput;
    orderBy?: Prisma.usersOrderByWithRelationInput | Prisma.usersOrderByWithRelationInput[];
    cursor?: Prisma.usersWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UsersScalarFieldEnum | Prisma.UsersScalarFieldEnum[];
};
export type usersCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
};
export type usersCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.usersCreateManyInput | Prisma.usersCreateManyInput[];
    skipDuplicates?: boolean;
};
export type usersUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
    where: Prisma.usersWhereUniqueInput;
};
export type usersUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.usersUpdateManyMutationInput, Prisma.usersUncheckedUpdateManyInput>;
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type usersUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
    create: Prisma.XOR<Prisma.usersCreateInput, Prisma.usersUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.usersUpdateInput, Prisma.usersUncheckedUpdateInput>;
};
export type usersDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
    where: Prisma.usersWhereUniqueInput;
};
export type usersDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.usersWhereInput;
    limit?: number;
};
export type users$audit_logsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.audit_logsSelect<ExtArgs> | null;
    omit?: Prisma.audit_logsOmit<ExtArgs> | null;
    include?: Prisma.audit_logsInclude<ExtArgs> | null;
    where?: Prisma.audit_logsWhereInput;
    orderBy?: Prisma.audit_logsOrderByWithRelationInput | Prisma.audit_logsOrderByWithRelationInput[];
    cursor?: Prisma.audit_logsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.Audit_logsScalarFieldEnum | Prisma.Audit_logsScalarFieldEnum[];
};
export type users$bookingsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$mediaArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type users$notificationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.notificationsSelect<ExtArgs> | null;
    omit?: Prisma.notificationsOmit<ExtArgs> | null;
    include?: Prisma.notificationsInclude<ExtArgs> | null;
    where?: Prisma.notificationsWhereInput;
    orderBy?: Prisma.notificationsOrderByWithRelationInput | Prisma.notificationsOrderByWithRelationInput[];
    cursor?: Prisma.notificationsWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.NotificationsScalarFieldEnum | Prisma.NotificationsScalarFieldEnum[];
};
export type usersDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.usersSelect<ExtArgs> | null;
    omit?: Prisma.usersOmit<ExtArgs> | null;
    include?: Prisma.usersInclude<ExtArgs> | null;
};
