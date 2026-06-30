import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    create(createCourseDto: CreateCourseDto): Promise<{
        message: string;
        success: boolean;
    }>;
}
