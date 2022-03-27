import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get(':id')
  getUser(@Param('id') id: string) {
    return this.userService.getUser(parseInt(id));
  }

  @Post()
  addUser(@Body() user: createUserDTO) {
    return this.userService.addUser(user);
  }

  @Post()
  updateUser(@Body() id, user: createUserDTO) {
    return this.userService.updateUser(id, user);
  }
}
