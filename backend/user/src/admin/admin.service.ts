import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Admin } from './entities/admin.entity';
import { rcpExpection } from 'src/helpers/rcp-expection';
import { ROLE } from 'src/users/entity/user';

@Injectable()
export class AdminService {
  private admins: Admin[] = [
    {
      id: '1',
      name: 'Hery',
      email: 'hery@gmail.com',
      password: 'password',
      role: ROLE.ADMIN,
    },
  ];

  create = (createAdminDto: CreateAdminDto) => {
    const newAdmin = { id: Date.now().toString(), ...createAdminDto };
    this.admins.push(newAdmin);
    return newAdmin;
  };

  findAll = () => {
    return this.admins;
  };

  findOne = (id: string) => {
    const admins = this.admins.find((user) => user.id === id);
    if (admins) return admins;

    throw rcpExpection(
      new NotFoundException(`Admin with id : ${id} not found`),
    );
  };

  update = (id: string, updateAdminDto: UpdateAdminDto) => {
    const courseIndex = this.admins.findIndex((course) => course.id == id);
    if (courseIndex !== -1) {
      this.admins[courseIndex] = {
        ...this.admins[courseIndex],
        ...updateAdminDto,
      };
      return this.admins[courseIndex];
    }
    return null;
  };

  remove = (id: string) => {
    const courseIndex = this.admins.findIndex((course) => course.id === id);
    if (courseIndex !== -1) {
      const course = this.admins[courseIndex];
      this.admins.splice(courseIndex, 1);
      return course;
    }
    return null;
  };
}
