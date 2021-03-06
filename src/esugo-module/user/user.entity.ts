import { ApplicationDto } from './../application/application.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../../interface/user.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { JobDto } from 'src/esugo-module/job/job.entity';

@Entity('User')
export class UserDto implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Pandi' })
  @Column({ length: 100 })
  firstName: string;

  @ApiProperty({ example: 'Pogi' })
  @Column({ length: 100, nullable: true })
  middleName?: string;

  @ApiProperty({ example: 'Panontongan' })
  @Column({ length: 100 })
  lastName: string;

  @ApiProperty({ example: '2021/08/11' })
  @Column({ length: 100, nullable: true })
  birthdate: string;

  @ApiProperty({ example: 'Male' })
  @Column({ length: 100 })
  gender: string;

  @ApiProperty({ example: 'MSU Main, Marawi City' })
  @Column({ length: 100, nullable: true })
  address?: string;

  @ApiProperty({ example: '+639990001111' })
  @Column({ length: 100, nullable: true })
  contact?: string;

  @ApiProperty({ example: 'example@gmail.com' })
  @Column({ length: 100, nullable: true })
  email?: string;

  @ApiProperty({ example: 'example co.' })
  @Column({ length: 100 })
  company?: string;

  @ApiProperty({ example: 'Marawi City' })
  @Column({ length: 100 })
  location?: string;

  @ApiProperty({ example: 'admin' })
  @Column({ length: 100 })
  type: 'worker' | 'employer' | 'moderator' | 'admin';

  @ApiProperty({ example: 'available' })
  @Column({ length: 100 })
  status: 'available' | 'suspended' | 'banned' | 'pending';

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  password: string;

  @ApiProperty({ required: false })
  @Column({ length: 255, default: '' })
  refreshToken?: string;

  @OneToMany(() => JobDto, (job) => job.user)
  jobs: JobDto[];

  @OneToMany(() => ApplicationDto, (workerApplication) => workerApplication.worker)
  workerApplication: ApplicationDto[];

  @OneToMany(() => ApplicationDto, (employerApplication) => employerApplication.employer)
  employerApplication: ApplicationDto[];
}

