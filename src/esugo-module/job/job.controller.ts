import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Job } from './job.entity';
import { JobService } from './job.service';

@Controller('Job')
export class JobController {
    constructor(private jobService:JobService) { }
    
    @ApiBody({ type: Job })
    @ApiOperation({ summary: 'Add new job', operationId: 'addJob' })
    @ApiResponse({ status: 200, type: Job })
    @Post()
    async create(@Body() job: Job) :Promise<Job> {
        return this.jobService.create(job);
    }

    @ApiOperation({ summary: 'Get job by id', operationId: 'getJob' })
    @ApiResponse({ status: 200, type: Job })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<Job> {
        const job = await this.jobService.findOne(id);
        return {
            ...job,
        };
    }

    @ApiOperation({ summary: 'Get all job', operationId: 'getJobs' })
    @ApiResponse({ status: 200, type: Job })
    @Get()
    async findAll(): Promise<Job[]>  {
        return await this.jobService.findAll();
    }

    @ApiOperation({ summary: 'Update job by id', operationId: 'updateJob' })
    @ApiResponse({ status: 200, type: Job })
    @Put(':id')
    async update(@Param('id') id: number, @Body() job: Job) {
    this.jobService.update(id, job);
  }
  
    @ApiOperation({ summary: 'Delete job by id', operationId: 'deleteJob' })
    @ApiResponse({ status: 200, type: Job })
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.jobService.delete(id);
    }
}
