import { Body, Controller, Get, Param, Post } from '@nestjs/common';
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
}
