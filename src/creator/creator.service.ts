import { Injectable, Logger } from '@nestjs/common';
import { CreateRepository } from './creator.repository';
import { CreateCreatorDto } from './dto/create-creator.dto';
import { UpdateCreatorDto } from './dto/update-creator.dto';

@Injectable()
export class CreatorService {
  constructor(private readonly repository: CreateRepository) {}

  async create(createCreatorDto: CreateCreatorDto) {
    if (!createCreatorDto.name) {
      throw new Error('Name is required');
    }

    await this.repository.create(createCreatorDto);

    Logger.log({
      context: 'Creator Course',
      date: new Date(),
      payload: createCreatorDto,
      company: 1,
    });
    return createCreatorDto;
  }

  async update(id: number, updateCreatorDto: UpdateCreatorDto) {
    if (!updateCreatorDto.name) {
      throw new Error('Name is required');
    }

    await this.repository.update(id, updateCreatorDto);

    Logger.log({
      context: 'Update Course',
      date: new Date(),
      courseId: id,
      payload: updateCreatorDto,
      company: 1,
    });
    return updateCreatorDto;
  }

  async remove(id: number) {
    await this.repository.remove(id);

    Logger.log({
      context: 'Delete Course',
      date: new Date(),
      courseId: id,
      company: 1,
    });
    return id;
  }
}
