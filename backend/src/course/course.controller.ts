import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/roles.decorator';
import { Role } from 'src/user/user.types';

@Controller('course')
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post('/create')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
}
