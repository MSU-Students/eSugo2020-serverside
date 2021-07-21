import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/dto/create-user.dto';
import { UserDto } from 'src/dto/user.dto';
import { Repository } from 'typeorm';
import { User } from './user.entity';
@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}
  async create(user: CreateUserDto): Promise<UserDto> {
    return this.userRepository.save(user);
  }
  findOne(id: number) {
    return this.userRepository.findOne(id);
  }
  findAll(): Promise<UserDto[]> {
    return this.userRepository.find();
  }
  async update(id: number, user: UserDto) {
    return this.userRepository.update(id, user);
  }
  async delete(id: number) {
    await this.userRepository.delete(id);
  }
}