import { Module } from '@nestjs/common';
import { InchService } from './inch.service';
import { InchController } from './inch.controller';

@Module({
  providers: [InchService],
  controllers: [InchController]
})
export class InchModule {}
