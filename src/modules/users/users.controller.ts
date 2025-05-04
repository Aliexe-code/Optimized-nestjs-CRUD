import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { TrimPipe } from 'src/common/Pipes/trimString.pipe';
import { RolesGuard } from 'src/common/Guards/roles.guard';
import { LoggingInterceptor } from 'src/common/interceptors/logging.interceptor';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('all')
  public getAllUsers() {
    return this.usersService.getAllUsers();
  }

  @UseInterceptors(LoggingInterceptor)
  @Get(':id')
  public getUserById(@Param('id', ParseIntPipe) id: number) {
    return this.usersService.getUserById(id);
  }

  @Post()
  public createUser(@Body('username', TrimPipe) username: string) {
    return this.usersService.createUser(username);
  }

  @UseGuards(RolesGuard)
  @Get('admin')
  public getAdmin() {
    return 'Admin';
  }
}
