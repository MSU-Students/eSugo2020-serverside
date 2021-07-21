import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
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
    @ApiOperation({ summary: 'Get all jobreport', operationId: 'getJobreports' })
    @ApiResponse({ status: 200, type: JobreportDto })
    @Get()
    async findAll(): Promise<JobreportDto[]>  {
        return await this.jobreportService.findAll();
    
    }
    @ApiOperation({ summary: 'Update jobreport by id', operationId: 'updateJobreport' })
    @ApiResponse({ status: 200, type: JobreportDto })
    @Put(':id')
    async update(@Param('id') id: number, @Body() jobreport: CreateJobreportDto) {
    this.jobreportService.update(id, jobreport);
  }
  
    @ApiOperation({ summary: 'Delete jobreport by id', operationId: 'deleteJobreport' })
    @ApiResponse({ status: 200, type: JobreportDto })
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.jobreportService.delete(id);
    }
}
