import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculatorService } from './calculator/calculator.service';
import { CertificateService } from './certificate/certificate.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, CalculatorService, CertificateService],
})
export class AppModule {}
