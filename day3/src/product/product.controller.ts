import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Controller('product')
export class ProductController {
  constructor(private userService: UserService) {}

  @Get()
  async getALLProducts() {
    let users = await this.userService.getAllUsers();
    return users;
  }
}
