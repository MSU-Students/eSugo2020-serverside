import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { create } from 'domain';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService:UserService) { }
    
    @Post()
    async create(@Body() user: CreateUserDto) :Promise<UserDto> {
        return this.userService.create(user);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<UserDto> {
        const user = await this.userService.findOne(id);
        return {
            ...user,
            password: undefined
        };
    }
}
