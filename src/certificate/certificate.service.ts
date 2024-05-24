import { Injectable } from '@nestjs/common';

const MINIMUM_GRADE = 6;

@Injectable()
export class CertificateService {
  canGenerateCertificate(grade: number): boolean {
    return grade >= MINIMUM_GRADE;
  }
}
