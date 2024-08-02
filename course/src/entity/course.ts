import {
  IsNotEmpty,
  IsString,
  IsNumber,
  IsInt,
  IsArray,
  IsOptional,
} from 'class-validator';

export class Course {
  @IsNotEmpty()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsArray()
  @IsOptional()
  tags?: string[];
}
