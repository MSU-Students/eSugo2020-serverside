import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateJobworkerDto } from 'src/dto/create-jobworker.dto';
import { JobworkerDto } from 'src/dto/jobworker.dto';
import { JobworkerService } from './jobworker.service';

@Controller('Jobworker')
export class JobworkerController {
    constructor(private jobworkerService:JobworkerService) { }
    
    @ApiBody({ type: JobworkerDto })
    @ApiOperation({ summary: 'Add new jobworker', operationId: 'addJobworker' })
    @ApiResponse({ status: 200, type: JobworkerDto })
    @Post()
    async create(@Body() jobworker: CreateJobworkerDto) :Promise<JobworkerDto> {
        return this.jobworkerService.create(jobworker);
    }

    @ApiOperation({ summary: 'get jobworker by id', operationId: 'getJobworker' })
    @ApiResponse({ status: 200, type: JobworkerDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobworkerDto> {
        const jobworker = await this.jobworkerService.findOne(id);
        return {
            ...jobworker,
        };
    }

    @ApiOperation({ summary: 'Get all jobworker', operationId: 'getJobworkers' })
    @ApiResponse({ status: 200, type: JobworkerDto })
    @Get()
    async findAll(): Promise<JobworkerDto[]>  {
        return await this.jobworkerService.findAll();
    }
    
    @ApiOperation({ summary: 'Update jobworker by id', operationId: 'updateJobworker' })
    @ApiResponse({ status: 200, type: JobworkerDto })
    @Put(':id')
    async update(@Param('id') id: number, @Body() jobworker: CreateJobworkerDto) {
    return await this.jobworkerService.update(id, jobworker);
  }
  
    @ApiOperation({ summary: 'Delete jobworker by id', operationId: 'deleteJobworker' })
    @ApiResponse({ status: 200, type: JobworkerDto })
    @Delete(':id')
    async delete(@Param('id') id: number){
        return await this.jobworkerService.delete(id);
    }
}
