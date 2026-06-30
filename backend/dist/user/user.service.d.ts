import { Repository } from 'typeorm';
import { User } from './entities/userEntity';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: Repository<User>);
    findByEmail(email: string): Promise<User | null>;
    create(user: Partial<User>): Promise<User>;
}
