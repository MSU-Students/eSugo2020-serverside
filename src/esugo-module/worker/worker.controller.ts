
import { Body, Controller, Get, Param, Post , Put, Delete} from '@nestjs/common';
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

    @ApiOperation({ summary: 'Get worker by id', operationId: 'getWorker' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<WorkerDto> {
        const worker = await this.workerService.findOne(id);
        return {
            ...worker,
            password: undefined
        };
    }

    @ApiOperation({ summary: 'Get all worker', operationId: 'getWorkers' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Get()
    async findAll(): Promise<WorkerDto[]>  {
        return await this.workerService.findAll();
    }

    @ApiOperation({ summary: 'Update worker by id', operationId: 'updateWorker' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Put(':id')
    async update(@Param('id') id: number, @Body() worker: CreateWorkerDto) {
    this.workerService.update(id, worker);
  }
  
    @ApiOperation({ summary: 'Delete worker by id', operationId: 'deleteWorker' })
    @ApiResponse({ status: 200, type: WorkerDto })
    @Delete(':id')
    async delete(@Param('id') id: number){
        await this.workerService.delete(id);
    }
}

