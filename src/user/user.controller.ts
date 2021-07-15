import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) { }
    
    @ApiBody({ type: UserDto })
    @ApiOperation({ summary: 'Add new user', operationId: 'addUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Post()
    async create(@Body() user: CreateUserDto) :Promise<UserDto> {
        return this.userService.create(user);
    }

    @ApiOperation({ summary: 'get user by id', operationId: 'getUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<UserDto> {
        const user = await this.userService.findOne(id);
        return {
            ...user,
            password: undefined
        };
    }

    @ApiOperation({ summary: 'Get all user', operationId: 'getUsers' })
    @ApiResponse({ status: 200, type: UserDto })
    @Get()
    async findAll(): Promise<UserDto[]>  {
        return await this.userService.findAll();
    }

    @ApiOperation({ summary: 'Update user by id', operationId: 'updateUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Put(':id')
    async update(@Param('id') id: number, @Body() worker: CreateUserDto) {
    this.userService.update(id, worker);
  }
  
    @ApiOperation({ summary: 'Delete user by id', operationId: 'deleteUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.userService.delete(id);
    }
}
