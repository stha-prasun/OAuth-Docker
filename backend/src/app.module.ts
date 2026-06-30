import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { CourseModule } from './course/course.module';
import { CourseModule } from './course/course.module';

@Module({
  imports: [AuthModule, UserModule, CourseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
