import { Controller, Get, Param } from '@nestjs/common';
import { InchService } from './inch.service';

@Controller('inch')
export class InchController {
  constructor(private readonly inchService: InchService) {}

  @Get(':inch')
  async convertToCm(@Param('inch') inch: number) {
    return this.inchService.convertToCm(inch);
  }
}
