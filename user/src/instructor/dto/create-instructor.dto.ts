import { OmitType } from "@nestjs/mapped-types";
import { Instructor } from "../entities/instructor.entity";

export class CreateInstructorDto extends OmitType(Instructor, ['id']) {}
