import { ApiProperty } from "@nestjs/swagger";
import { CreateWorkerDto } from "src/dto/create-worker.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Worker implements CreateWorkerDto {

    @ApiProperty()
    @PrimaryGeneratedColumn() 
    id: number;
    
    @ApiProperty()
    @Column({length: 35, nullable: false}) 
    firstName: string;
    
    @ApiProperty()
    @Column({length: 35, nullable: true})
    middleName?: string;
    
    @ApiProperty()
    @Column({length: 35, nullable: false})
    lastName: string;

    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    dateofbirth: string;

    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    gender: string;

    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    email: string;

    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    acctStatus: string;

    @ApiProperty()
    @Column({length: 35, nullable: false})
    username: string;
    
    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    password: string;
     
    
}
