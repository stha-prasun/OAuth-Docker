import { CreateCourseDto } from './dto/create-course.dto';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';
export declare class CourseService {
    private readonly courseRepository;
    constructor(courseRepository: Repository<Course>);
    create(createCourseDto: CreateCourseDto): Promise<{
        message: string;
        success: boolean;
    }>;
}
