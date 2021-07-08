import { Jobreport } from './jobreport.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateJobreportDto } from 'src/dto/create-jobreport.dto';
import { JobreportDto } from 'src/dto/jobreport.dto';
import { Repository } from 'typeorm';
@Injectable()
export class JobreportService {
    constructor(@InjectRepository(Jobreport) private jobreportRepository:Repository<Jobreport>) {}
    async create(jobreport: CreateJobreportDto): Promise<JobreportDto> {
        return this.jobreportRepository.save(jobreport);
    }
    findOne(id: number) {
        return this.jobreportRepository.findOne(id);
    }
    async update(jobreport: JobreportDto): Promise<JobreportDto> {
        return this.jobreportRepository.save(jobreport);
    }
    deleteOne(id: number) {
        return this.jobreportRepository.delete(id);
    }
}
