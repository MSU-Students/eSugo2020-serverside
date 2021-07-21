
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { User } from './user/user.entity';
import { Employer } from './esugo-module/employer/employer.entity';
import { Worker } from './worker/worker.entity';
import { Job } from './job/job.entity';
import { Jobreport } from './jobreport/jobreport.entity';
import { Jobworker } from './jobworker/jobworker.entity';
import { UserService } from './user/user.service';
import { JobController } from './job/job.controller';
import { JobService } from './job/job.service';
import { WorkerController } from './worker/worker.controller';
import { WorkerService } from './worker/worker.service';
import { EmployerController } from './esugo-module/employer/employer.controller';
import { EmployerService } from './esugo-module/employer/employer.service';
import { JobreportController } from './jobreport/jobreport.controller';
import { JobreportService } from './jobreport/jobreport.service';
import { JobworkerController } from './jobworker/jobworker.controller';
import { JobworkerService } from './jobworker/jobworker.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Employer,Worker, Jobreport,Job ,Jobworker]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'esugodb',
      entities: [User, Employer, Worker, Jobreport, Job, Jobworker],
      synchronize: true
    })
  ],
  controllers: [AppController, UserController, JobController, WorkerController, EmployerController, JobreportController, JobworkerController],
  providers: [AppService, UserService, JobService, WorkerService, EmployerService, JobreportService, JobworkerService],
})
export class AppModule {}
