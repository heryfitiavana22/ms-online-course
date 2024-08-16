import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AdminService } from './admin.service';

@Controller()
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @MessagePattern('findOneAdmin')
  findOne(@Payload('id') id: string) {
    return this.adminService.findOne(id);
  }
}
