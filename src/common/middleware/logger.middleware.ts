import { Injectable } from '@nestjs/common';
import { FastifyReply, FastifyRequest } from 'fastify';

@Injectable()
export class LoggerMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void) {
    console.log('LoggerMiddleware initialized');

    next();
  }
}
