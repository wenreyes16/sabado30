import { TypeOrmModule } from "@nestjs/typeorm";
import { Product } from "./entities/product.entity";
import {  Module } from '@nestjs/common';

@Module({
    imports:[TypeOrmModule.forFeature([Product])],
    providers:[],
    controllers:[]
})
export class ProductModule{}