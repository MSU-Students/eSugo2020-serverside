import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateJobDto } from 'src/dto/create-job.dto';
import { JobDto } from 'src/dto/job.dto';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { JobService } from './job.service';

@Controller('Job')
export class JobController {
    constructor(private jobService:JobService) { }
    
    @ApiBody({ type: JobDto })
    @ApiOperation({ summary: 'Add new job', operationId: 'addJob' })
    @ApiResponse({ status: 200, type: JobDto })
    @Post()
    async create(@Body() job: CreateJobDto) :Promise<JobDto> {
        return this.jobService.create(job);
    }

    @ApiOperation({ summary: 'Get job by id', operationId: 'getJob' })
    @ApiResponse({ status: 200, type: JobDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobDto> {
        const job = await this.jobService.findOne(id);
        return {
            ...job,
        };
    }

    @ApiOperation({ summary: 'Get all job', operationId: 'getJobs' })
    @ApiResponse({ status: 200, type: JobDto })
    @Get()
    async findAll(): Promise<JobDto[]>  {
        return await this.jobService.findAll();
    }

    @ApiOperation({ summary: 'Update job by id', operationId: 'updateJob' })
    @ApiResponse({ status: 200, type: JobDto })
    @Put(':id')
    async update(@Param('id') id: number, @Body() job: CreateJobDto) {
    this.jobService.update(id, job);
  }
  
    @ApiOperation({ summary: 'Delete job by id', operationId: 'deleteJob' })
    @ApiResponse({ status: 200, type: JobDto })
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.jobService.delete(id);
    }
}
