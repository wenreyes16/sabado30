import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class CreateProductDto{
    @IsNotEmpty()
    @IsNumber()
    id:number;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name:string;
    
    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    password:string;
    
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    sexo:string;

    @IsOptional()
    @IsBoolean()
    active:boolean;

}