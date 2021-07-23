import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UserDto } from './user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @ApiBody({ type: UserDto })
  @ApiOperation({ summary: 'Add new user', operationId: 'AddUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Post()
  async create(@Body() user: UserDto): Promise<UserDto> {
    return this.userService.create(user);
  }

  @ApiOperation({ summary: 'Get all users', operationId: 'GetUsers' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get()
  async findAll(): Promise<UserDto[]> {
    return this.userService.findAll();
  }

  @ApiOperation({ summary: 'Get user by id', operationId: 'GetUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<UserDto> {
    const user = await this.userService.findOne(id);
    return {
      ...user,
      password: undefined,
    };
  }

  @ApiOperation({ summary: 'Update user by id', operationId: 'UpdateUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() user: UserDto) {
    return this.userService.update(id, user);
  }

  @ApiOperation({ summary: 'Delete user by id', operationId: 'DeleteUser' })
  @ApiResponse({ status: 200, type: UserDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.userService.deleteOne(id);
  }
}
