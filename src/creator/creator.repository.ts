import { Injectable } from '@nestjs/common';
import { Creator } from './entities/creator.entity';

@Injectable()
export class CreateRepository {
  async create(creator: Omit<Creator, 'id'>) {
    return creator;
  }

  async update(id: number, creator: Omit<Creator, 'id'>) {
    return creator;
  }

  async remove(id: number) {
    return id;
  }
}
