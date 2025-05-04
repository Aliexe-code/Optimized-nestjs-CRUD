import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from '@nestjs/common';
import { FastifyRequest, FastifyReply } from 'fastify';
@Injectable()
export class ApiKeyMiddleware implements NestMiddleware {
  use(req: FastifyRequest, res: FastifyReply, next: () => void): void {
    const apiKey = req.headers['api-key'];
    if (apiKey !== process.env.API_KEY) {
      throw new UnauthorizedException('Invalid API key');
    }
    next();
  }
}
