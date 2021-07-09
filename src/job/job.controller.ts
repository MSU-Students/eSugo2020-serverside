import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateJobDto } from 'src/dto/create-job.dto';
import { JobDto } from 'src/dto/job.dto';
import { JobService } from './job.service';

@Controller('Job')
export class JobController {
    constructor(private jobService:JobService) { }
    
    @Post()
    async create(@Body() job: CreateJobDto) :Promise<JobDto> {
        return this.jobService.create(job);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobDto> {
        const job = await this.jobService.findOne(id);
        return {
            ...job,
        };
    }
}
