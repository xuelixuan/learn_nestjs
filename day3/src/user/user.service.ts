import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  private users = [
    { id: 1, name: 'zhangsan', age: 18 },
    { id: 2, name: 'lisi', age: 9 },
  ];

  async getAllUsers() {
    return this.users;
  }
}
