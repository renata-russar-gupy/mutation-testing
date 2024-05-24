import { Module } from '@nestjs/common';
import { CreatorService } from './creator.service';
import { CreateRepository } from './creator.repository';
import { CreatorController } from './creator.controller';

@Module({
  controllers: [CreatorController],
  providers: [CreatorService, CreateRepository],
})
export class CreatorModule {}
