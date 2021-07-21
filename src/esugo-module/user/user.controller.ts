import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: User })
  @ApiOperation({ summary: 'Add new user', operationId: 'addUser' })
  @ApiResponse({ status: 200, type: User })
  @Post()
  async create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'get use by id', operationId: 'getUser' })
  @ApiResponse({ status: 200, type: User })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<User> {
    const user = await this.userService.findOne(id);
    return {
      ...user,
      password: undefined,
    };
  }
}
