import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorService } from './calculator/calculator.service';
import { CertificateService } from './certificate/certificate.service';
import { CreatorModule } from './creator/creator.module';

@Module({
  imports: [CreatorModule],
  controllers: [AppController],
  providers: [AppService, CalculatorService, CertificateService],
})
export class AppModule {}
