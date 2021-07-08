
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateEmployerDto } from 'src/dto/create-employer.dto';
import { EmployerDto } from 'src/dto/employer.dto';
import { EmployerService } from './employer.service';
@Controller('employer')
export class EmployerController {
    constructor(private employerService:EmployerService) { }
    
    @Post()
    async create(@Body() employer: CreateEmployerDto) :Promise<EmployerDto> {
        return this.employerService.create(employer);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<EmployerDto> {
        const employer = await this.employerService.findOne(id);
        return {
            ...employer,
            password: undefined
        };
    }
}

