import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const now = Date.now();
    const req: FastifyRequest = context.switchToHttp().getRequest();
    const method = req.method;
    const url = req.url;

    console.log(`[Request] ${method} ${url} - started`);

    return next.handle().pipe(
      tap(() => {
        const ms = Date.now() - now;
        console.log(`[Response] ${method} ${url} - completed in ${ms}ms`);
      }),
      map((data: unknown) => ({
        success: true,
        data,
        timestamp: new Date().toISOString(),
      })),
      catchError((err: unknown) => {
        let errorMessage = 'Unknown error';
        if (err instanceof Error) {
          errorMessage = err.message;
        }
        console.error(`[Error] ${method} ${url} - ${errorMessage}`);
        throw err;
      }),
    );
  }
}
