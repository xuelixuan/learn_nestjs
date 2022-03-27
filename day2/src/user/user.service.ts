import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { createUserDTO } from './dto/createUser.dto';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'zhangsan', age: 24 },
    { id: 2, name: 'lisi', age: 28 },
  ];

  async getUsers() {
    return this.users;
  }

  async getUser(id: number) {
    const user = await this.users.find((user) => {
      return user.id == id;
    });
    if (!user) {
      throw new HttpException('user not found', 404);
    }
    return user;
  }

  async addUser(user: createUserDTO) {
    this.users.push(user);
    return await this.users;
  }

  async updateUser(id: number, userObj) {
    const user = await this.getUser(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, userObj);
    return this.users;
  }
}
