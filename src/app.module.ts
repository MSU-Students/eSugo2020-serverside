import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDto, UserController, UserService } from './esugo-module/user';
import { JobDto, JobController, JobService } from './esugo-module/job';
import {
  ApplicationDto,
  ApplicationController,
  ApplicationService,
} from './esugo-module/application';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserDto, JobDto, ApplicationDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'esugodb',
      entities: [UserDto, JobDto, ApplicationDto],
      synchronize: true,
    }),
  ],
  controllers: [AppController, UserController, JobController, ApplicationController],
  providers: [AppService, UserService, JobService, ApplicationService],
})
export class AppModule {}
