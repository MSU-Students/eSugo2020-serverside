import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { JwtAuthGuard } from '../user/jwt-auth.guard';
import { JobDto } from './job.entity';
import { JobService } from './job.service';

@Controller('job')
export class JobController {
  constructor(private jobService: JobService) {}

  
  @ApiBody({ type: JobDto })
  @ApiOperation({ summary: 'Add new job', operationId: 'AddJob' })
  @ApiResponse({ status: 200, type: JobDto })
  @Post()
  async create(@Body() job: JobDto): Promise<JobDto> {
    return this.jobService.create(job);
  }

  @ApiOperation({ summary: 'Get all jobs', operationId: 'GetJobs' })
  @ApiResponse({ status: 200, type: JobDto })
  @Get()
  async findAll(): Promise<JobDto[]> {
    return this.jobService.findAll();
  }

  
  @ApiOperation({ summary: 'Get job by id', operationId: 'GetJob' })
  @ApiResponse({ status: 200, type: JobDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<JobDto> {
    return this.jobService.findOne(id);
  }

  
  @ApiOperation({ summary: 'Update job by id', operationId: 'UpdateJob' })
  @ApiResponse({ status: 200, type: JobDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() job: JobDto) {
    return this.jobService.update(id, job);
  }

  
  @ApiOperation({ summary: 'Delete job by id', operationId: 'DeleteJob' })
  @ApiResponse({ status: 200, type: JobDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    return this.jobService.deleteOne(id);
  }
}
