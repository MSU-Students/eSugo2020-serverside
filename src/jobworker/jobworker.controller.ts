import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobworkerDto } from 'src/dto/create-jobworker.dto';
import { JobworkerDto } from 'src/dto/jobworker.dto';
import { JobworkerService } from './jobworker.service';

@Controller('Jobworker')
export class JobworkerController {
    constructor(private jobworkerService:JobworkerService) { }
    
    @Post()
    async create(@Body() jobworker: CreateJobworkerDto) :Promise<JobworkerDto> {
        return this.jobworkerService.create(jobworker);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobworkerDto> {
        const jobworker = await this.jobworkerService.findOne(id);
        return {
            ...jobworker,
        };
    }
}
