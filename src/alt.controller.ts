import { Controller, Get } from '@nestjs/common';
import { AltService } from './alt.service';

@Controller()
export class AltController {
  constructor(private readonly altService: AltService) {}

  @Get('/alt/hello')
  getAlt(): string {
    return this.altService.getAlt();
  }
}
