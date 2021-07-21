import { ApiProperty } from "@nestjs/swagger";
import { CreateUserDto } from "src/dto/create-user.dto";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User implements CreateUserDto {

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
    @Column({length: 35, nullable: false})
    dateofbirth: string;
  
    @ApiProperty()
    @Column({length: 35, nullable: false})
    gender: string;
  
    @ApiProperty()
    @Column({length: 35, nullable: false})
    email: string;
  
    @ApiProperty()
    @Column({length: 35, nullable: false, default: 'pending'})
    acctStatus: string;

    @ApiProperty()
    @Column({length: 35, nullable: false})
    acctCategory: string;


    @ApiProperty()
    @Column({length: 35, nullable: false})
    username: string;
    
    @ApiProperty()
    @Column({length: 100, nullable: false}) 
    password: string;
}
