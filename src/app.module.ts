import { Module } from '@nestjs/common';
import { InchModule } from './inch/inch.module';

@Module({
  imports: [InchModule],
})
export class AppModule {}
