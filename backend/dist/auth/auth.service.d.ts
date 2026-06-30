import { UserService } from "../user/user.service";
import { RegisterDto } from './dto/register.dto';
export declare class AuthService {
    private readonly usersService;
    constructor(usersService: UserService);
    register(registerDto: RegisterDto): Promise<{
        id: string;
        name: string;
        email: string;
        role: string;
        googleId: string;
        createdAt: Date;
    }>;
}
