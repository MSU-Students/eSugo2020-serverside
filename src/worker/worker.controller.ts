
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateWorkerDto } from 'src/dto/create-worker.dto';
import { WorkerDto } from 'src/dto/worker.dto';
import { WorkerService } from './worker.service';
@Controller('worker')
export class WorkerController {
    constructor(private workerService:WorkerService) { }
    
    @ApiBody({ type: WorkerDto })
    @ApiOperation({ summary: 'Add new worker', operationId: 'addWorker' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Post()
    async create(@Body() worker: CreateWorkerDto) :Promise<WorkerDto> {
        return this.workerService.create(worker);
    }

    @ApiOperation({ summary: 'Get user by id', operationId: 'getUser' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<WorkerDto> {
        const worker = await this.workerService.findOne(id);
        return {
            ...worker,
            password: undefined
        };
    }
}

