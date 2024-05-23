import { Test, TestingModule } from '@nestjs/testing';
import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CalculatorService],
    }).compile();

    service = module.get<CalculatorService>(CalculatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('add', () => {
    it('should add two numbers correctly', () => {
      const result = service.add(1, 0);

      expect(result).toEqual(1);
    });
  });

  describe('multiply', () => {
    it('should multiply two numbers correctly', () => {
      const result = service.multiply(10, 1);

      expect(result).toEqual(10);
    });
  });
});
