import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        id: string;
        role: import(".prisma/client").$Enums.user_role;
        is_active: boolean;
        created_at: Date;
    }[]>;
    getMe(user: any): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        id: string;
        role: import(".prisma/client").$Enums.user_role;
        is_active: boolean;
        created_at: Date;
    }>;
    findOne(id: string): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        id: string;
        role: import(".prisma/client").$Enums.user_role;
        is_active: boolean;
        created_at: Date;
    }>;
    updateMe(user: any, dto: UpdateUserDto): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        id: string;
        role: import(".prisma/client").$Enums.user_role;
    }>;
    deactivate(id: string): Promise<{
        email: string;
        first_name: string;
        last_name: string;
        phone: string | null;
        id: string;
        password_hash: string;
        role: import(".prisma/client").$Enums.user_role;
        is_active: boolean;
        created_at: Date;
        updated_at: Date;
    }>;
}
