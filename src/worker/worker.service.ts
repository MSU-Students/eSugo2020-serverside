import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateWorkerDto } from 'src/dto/create-worker.dto';
import { WorkerDto } from 'src/dto/worker.dto';
import { Repository } from 'typeorm';
import { Worker } from './worker.entity';
@Injectable()
export class WorkerService {
    constructor(@InjectRepository(Worker) private workerRepository:Repository<Worker>) {}
    async create(worker: CreateWorkerDto): Promise<WorkerDto> {
        return this.workerRepository.save(worker);
    }
    findOne(id: number) {
        return this.workerRepository.findOne(id);
    }
    async update(user: WorkerDto): Promise<WorkerDto> {
        return this.workerRepository.save(user);
    }
    deleteOne(id: number) {
        return this.workerRepository.delete(id);
    }
}
