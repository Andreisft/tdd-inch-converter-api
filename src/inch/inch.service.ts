import { Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class InchService {
  async convertToCm(inch: number) {
    if (inch <= 0) throw new BadRequestException('invalid number');
    
    return inch * 2.54;
  }
}
