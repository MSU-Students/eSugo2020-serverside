
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateWorkerDto } from 'src/dto/create-worker.dto';
import { WorkerDto } from 'src/dto/worker.dto';
import { WorkerService } from './worker.service';
@Controller('worker')
export class WorkerController {
    constructor(private workerService:WorkerService) { }
    
    @Post()
    async create(@Body() worker: CreateWorkerDto) :Promise<WorkerDto> {
        return this.workerService.create(worker);
    }
    @Get(':id')
    async findOne(@Param('id') id: number) : Promise<WorkerDto> {
        const worker = await this.workerService.findOne(id);
        return {
            ...worker,
            password: undefined
        };
    }
}

