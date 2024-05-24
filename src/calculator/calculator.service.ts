import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculatorService {
  public add(a: number, b: number): number {
    return a + b;
  }

  public multiply(a: number, b: number): number {
    return a * b;
  }
}
