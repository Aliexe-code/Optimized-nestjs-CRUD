//get current-user decorator

import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { FastifyRequest } from 'fastify';

export const user = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const request: FastifyRequest = ctx
      .switchToHttp()
      .getRequest<FastifyRequest>();
    console.log(request);
    return;
  },
);
