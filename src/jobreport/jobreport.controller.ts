import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateJobreportDto } from 'src/dto/create-jobreport.dto';
import { JobreportDto } from 'src/dto/jobreport.dto';
import { JobreportService } from './jobreport.service';

@Controller('Jobreport')
export class JobreportController {
    constructor(private jobreportService:JobreportService) { }
    
    @ApiBody({ type: JobreportDto })
    @ApiOperation({ summary: 'Add new jobreport', operationId: 'addJobreport' })
    @ApiResponse({ status: 200, type: JobreportDto })
    @Post()
    async create(@Body() jobreport: CreateJobreportDto) :Promise<JobreportDto> {
        return this.jobreportService.create(jobreport);
    }

    @ApiOperation({ summary: 'Get jobreport by id', operationId: 'getJobreport' })
    @ApiResponse({ status: 200, type: JobreportDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<JobreportDto> {
        const jobreport = await this.jobreportService.findOne(id);
        return {
            ...jobreport,
        };
    }
}
