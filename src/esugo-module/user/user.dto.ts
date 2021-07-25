import { ApiProperty } from '@nestjs/swagger';
import { IJob } from 'src/interface/job.interface';
import { Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { JobDto } from '../job';
export interface IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: string;
  gender: string;
  address?: string;
  contact?: string;
  email?: string;
  company?: string;
  location?: string;
  type: 'worker' | 'employer' | 'moderator' | 'admin';
  status: 'available' | 'suspended' | 'banned';
  username?: string;
  password?: string;
  jobs?: IJob[];
}

export class RegisterUserDto implements IUser {
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

  @ApiProperty({ example: '2021-08-11' })
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

  @ApiProperty({ example: 'employer' })
  @Column({ length: 100 })
  type: 'worker' | 'employer' | 'moderator' | 'admin';

  @ApiProperty({ example: 'available' })
  @Column({ length: 100 })
  status: 'available' | 'suspended' | 'banned';

  @ApiProperty({ example: 'user' })
  @Column({ length: 100 })
  username?: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100 })
  password?: string;

  @OneToMany(() => JobDto, (job) => job.user)
  jobs?: JobDto[];
}

export class LoginUserDto implements IUser {
  id?: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  birthdate: string;
  gender: string;
  address?: string;
  contact?: string;
  email?: string;
  company?: string;
  location?: string;
  type: 'worker' | 'employer' | 'moderator' | 'admin';
  status: 'available' | 'suspended' | 'banned';
  @ApiProperty()
  username?: string;
  @ApiProperty()
  password?: string;
  jobs?: IJob[];
}

export class RefreshDto {
  @ApiProperty({
    required: true,
    minLength: 5,
  })
  refresh_token: string;










  
}

export class AccessTokenDto {
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  accessToken?: string;
  @ApiProperty({
    required: false,
    minLength: 5,
  })
  refreshToken?: string;
}
