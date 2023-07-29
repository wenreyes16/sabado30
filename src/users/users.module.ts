import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { Module } from "@nestjs/common";

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[],
    controllers:[]
})
export class UserModule{}