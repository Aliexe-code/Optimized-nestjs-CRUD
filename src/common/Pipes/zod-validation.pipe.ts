import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { z, ZodSchema } from 'zod';

@Injectable()
export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown): z.infer<typeof this.schema> {
    const result = this.schema.safeParse(value);
    if (!result.success) {
      throw new BadRequestException({
        errors: result.error.errors,
        message: 'Validation failed',
      });
    }
    return result.data;
  }
}
