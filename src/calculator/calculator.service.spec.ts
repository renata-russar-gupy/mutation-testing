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
    it.each([
      [1, 0, 1],
      [1, 2, 3],
    ])('should add two numbers correctly', (a, b, expected) => {
      const result = service.add(a, b);

      expect(result).toEqual(expected);
    });
  });

  describe('multiply', () => {
    it.each([
      [10, 1, 10],
      [10, 2, 20],
    ])('should multiply two numbers correctly', (a, b, expected) => {
      const result = service.multiply(a, b);

      expect(result).toEqual(expected);
    });
  });
});
