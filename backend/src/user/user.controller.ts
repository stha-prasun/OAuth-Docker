import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { GetUser } from 'src/common/decorators/get-user.decorator';

@Controller('user')
export class UserController {
  @Get('profile')
  @UseGuards(AuthGuard)
  getProfile(@GetUser() user: any) {
    return user;
  }
}
