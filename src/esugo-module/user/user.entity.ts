import { ApiProperty } from '@nestjs/swagger';
import { IUser } from '../../interface/user.interface';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Job } from '../job/job.entity';

@Entity('User')
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty({ example: 'Pandi' })
  @Column({ length: 35, nullable: false })
  firstName: string;

  @ApiProperty({ example: 'Pogi' })
  @Column({ length: 35, nullable: true })
  middleName?: string;

  @ApiProperty({ example: 'Panontongan' })
  @Column({ length: 35, nullable: false })
  lastName: string;

  @ApiProperty({ example: 'user' })
  @Column({ length: 35, nullable: false })
  username: string;

  @ApiProperty({ example: 'password' })
  @Column({ length: 100, nullable: false })
  password: string;

  @OneToMany(() => Job, (job) => job.user)
  jobs?: Job[];
}
