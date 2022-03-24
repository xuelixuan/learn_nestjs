import { Injectable } from '@nestjs/common';
import { filter } from 'rxjs';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  // 查询列表数据
  getUsers(): any[] {
    return [
      { id: 1, name: 'zhangsan', age: 14 },
      { id: 2, name: 'wangwu', age: 21 },
    ];
  }

  // 查询一个用户
  getUser(id): any {
    let users = this.getUsers();
    return users.filter((user) => {
      return user.id === parseInt(id);
    });
  }

  // 增加一个用户
  postUser(user): any {
    let users = this.getUsers();
    return users.concat([], user);
  }

  // 更新一个用户
  putUser(user): any {
    let [oneUser] = this.getUser(user.id);
    oneUser.name = user.name;
    oneUser.age = user.age;

    let users = this.getUsers();
    let filterUser = users.filter((user) => {
      return user.id !== oneUser.id;
    });
    filterUser.push(oneUser);
    return filterUser;
  }

  // 删除一个用户
  deleteUser(id): any {
    let users = this.getUsers();
    return users.filter((user) => {
      return user.id !== parseInt(id);
    });
  }
}
