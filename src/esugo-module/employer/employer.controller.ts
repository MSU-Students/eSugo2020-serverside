import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateEmployerDto } from 'src/dto/create-employer.dto';
import { EmployerDto } from 'src/dto/employer.dto';
import { EmployerService } from './employer.service';
@Controller('employer')
export class EmployerController {
  constructor(private employerService: EmployerService) {}

  @ApiBody({ type: EmployerDto })
  @ApiOperation({ summary: 'Add new employer', operationId: 'addEmployer' })
  @ApiResponse({ status: 200, type: EmployerDto })
  @Post()
  async create(@Body() employer: CreateEmployerDto): Promise<EmployerDto> {
    return this.employerService.create(employer);
  }

  @ApiOperation({ summary: 'Get employer by id', operationId: 'getEmployer' })
  @ApiResponse({ status: 200, type: EmployerDto })
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<EmployerDto> {
    const employer = await this.employerService.findOne(id);
    return {
      ...employer,
      password: undefined,
    };
  }

  @ApiOperation({ summary: 'Get all employer', operationId: 'getEmployers' })
  @ApiResponse({ status: 200, type: EmployerDto })
  @Get()
  async findAll(): Promise<EmployerDto[]> {
    return await this.employerService.findAll();
  }

  @ApiOperation({
    summary: 'Update employer by id',
    operationId: 'updateEmployer',
  })
  @ApiResponse({ status: 200, type: EmployerDto })
  @Put(':id')
  async update(@Param('id') id: number, @Body() employer: CreateEmployerDto) {
    this.employerService.update(id, employer);
  }

  @ApiOperation({
    summary: 'Delete employer by id',
    operationId: 'deleteEmployer',
  })
  @ApiResponse({ status: 200, type: EmployerDto })
  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.employerService.delete(id);
  }
}
