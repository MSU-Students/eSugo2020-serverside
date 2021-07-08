import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { Employer } from './employer/employer.entity';
import { UserService } from './user/user.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';
import { WorkerController } from './worker/worker.controller';
import { WorkerService } from './worker/worker.service';
import { EmployerController } from './employer/employer.controller';
import { EmployerService } from './employer/employer.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Employer]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'esugodb',
      entities: [User, Employer],
      synchronize: true
    })
  ],
  controllers: [AppController, UserController, JobController, WorkerController, EmployerController],
  providers: [AppService, UserService, JobService, WorkerService, EmployerService],
})
export class AppModule {}
