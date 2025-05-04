import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from 'src/modules/users/users.module';
import { LoggerModule } from 'nestjs-pino';
import { ApiKeyMiddleware } from 'src/common/middleware/api-key.middleware';
import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from 'src/common/filters/http-exception.filter';
import { LoggerMiddleware } from 'src/common/middleware/logger.middleware';
import { SwordsModule } from 'src/modules/swords/swords.module';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [
    UsersModule,
    SwordsModule,
    PrismaModule,
    LoggerModule.forRoot({
      pinoHttp: {
        transport: {
          target: 'pino-pretty',
          options: {
            colorize: true,
            ignore: 'pid,hostname',
            translateTime: 'SYS:dd-mm-yyyy HH:MM:ss',
          },
        },
      },
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
    consumer.apply(ApiKeyMiddleware).forRoutes('users/all');
  }
}
