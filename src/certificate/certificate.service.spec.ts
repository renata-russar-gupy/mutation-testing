import { Test, TestingModule } from '@nestjs/testing';
import { CertificateService } from './certificate.service';

describe('CertificateService', () => {
  let service: CertificateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CertificateService],
    }).compile();

    service = module.get<CertificateService>(CertificateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('canGenerateCertificate', () => {
    it('should return true if grade is better than minimum grade', () => {
      const result = service.canGenerateCertificate(10);

      expect(result).toBeTruthy();
    });

    it('should return false if grade is better than minimum grade', () => {
      const result = service.canGenerateCertificate(3);

      expect(result).toBeFalsy();
    });

    it('should return true if grade is equal to the minimum grade', () => {
      const result = service.canGenerateCertificate(6);

      expect(result).toBeTruthy();
    });
  });
});
