import { Injectable } from '@nestjs/common';

@Injectable()
export class AltService {
  getAlt(): string {
    return 'Hello Alternative!';
  }
}