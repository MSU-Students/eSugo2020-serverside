import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserDto, UserController, UserService, } from './esugo-module/user';
import { JobDto, JobController, JobService } from "./esugo-module/job"
import { AuthModule } from 'src/esugo-module/user/auth.module';
import configuration from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.dev.local', '.env.dev', '.env.prod']
    }),
    TypeOrmModule.forFeature([UserDto, JobDto]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'esugodb',
      entities: [UserDto, JobDto],
      synchronize: false,
      // dropSchema: true
    }),
    AuthModule  
  ],
  controllers: [AppController, UserController, JobController],
  providers: [AppService, UserService, JobService],
})
export class AppModule {}
