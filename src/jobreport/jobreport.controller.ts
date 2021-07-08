import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobreportDto } from 'src/dto/create-jobreport.dto';
import { JobreportDto } from 'src/dto/jobreport.dto';
import { JobreportService } from './jobreport.service';

@Controller('Jobreport')
export class JobreportController {
    constructor(private jobreportService:JobreportService) { }
    
    @Post()
    async create(@Body() jobreport: CreateJobreportDto) :Promise<JobreportDto> {
        return this.jobreportService.create(jobreport);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobreportDto> {
        const jobreport = await this.jobreportService.findOne(id);
        return {
            ...jobreport,
        };
    }
}
