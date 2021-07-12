import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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

    @ApiOperation({ summary: 'get use by id', operationId: 'getUser' })
    @ApiResponse({ status: 200, type: UserDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<UserDto> {
        const user = await this.userService.findOne(id);
        return {
            ...user,
            password: undefined
        };
    }
}
