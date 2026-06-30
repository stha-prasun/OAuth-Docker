import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Course } from './entities/course.entity';

@Injectable()
export class CourseService {
  constructor(
    @InjectRepository(Course)
    private readonly courseRepository: Repository<Course>,
  ) {}

  async create(createCourseDto: CreateCourseDto) {
    const course = await this.courseRepository.create({
      title: createCourseDto.title,
      description: createCourseDto.description,
    });

    if (!course) {
      throw new InternalServerErrorException();
    }

    await this.courseRepository.save(course);

    return {
      message: 'Course Created!',
      success: true,
    };
  }
}
