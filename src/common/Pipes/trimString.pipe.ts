import { PipeTransform, Injectable } from '@nestjs/common';

@Injectable()
export class TrimPipe implements PipeTransform {
  transform(value: unknown) {
    if (typeof value === 'string') {
      return value.replace(/\s+/g, '');
    }
    return value;
  }
}
