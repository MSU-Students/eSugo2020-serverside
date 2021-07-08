import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateEmployerDto } from 'src/dto/create-employer.dto';
import { EmployerDto } from 'src/dto/employer.dto';
import { Repository } from 'typeorm';
import { Employer } from './employer.entity';
@Injectable()
export class EmployerService {
    constructor(@InjectRepository(Employer) private employerRepository:Repository<Employer>) {}
    async create(employer: CreateEmployerDto): Promise<EmployerDto> {
        return this.employerRepository.save(employer);
    }
    findOne(id: number) {
        return this.employerRepository.findOne(id);
    }
    async update(user: EmployerDto): Promise<EmployerDto> {
        return this.employerRepository.save(user);
    }
    deleteOne(id: number) {
        return this.employerRepository.delete(id);
    }
}
