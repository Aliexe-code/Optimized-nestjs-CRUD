import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class UsersService {
  constructor(private readonly logger: PinoLogger) {}
  private readonly users = [
    {
      id: 1,
      name: 'Maged',
      email: 'maged@example.com',
    },
    {
      id: 2,
      name: 'ahmed',
      email: 'ahmed@example.com',
    },
  ];

  public getAllUsers() {
    return this.users;
  }
  public getUserById(id: number) {
    this.logger.info(`Getting user by id: ${id}`);
    this.logger.info(typeof id);
    return this.users.find((user) => user.id === id);
  }

  public createUser(username: string) {
    this.logger.info(`Creating user: ${username}`);
    return username;
  }
}
