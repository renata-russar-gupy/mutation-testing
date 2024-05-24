import { Test, TestingModule } from '@nestjs/testing';
import { CreatorService } from './creator.service';
import { CreateRepository } from './creator.repository';

describe('CreatorService', () => {
  let service: CreatorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatorService, CreateRepository],
    }).compile();

    service = module.get<CreatorService>(CreatorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('crud', () => {
    describe('create', () => {
      it('should create', async () => {
        const createCreatorDto = {
          name: 'test',
        };
        const result = await service.create(createCreatorDto);
        expect(result).toEqual(createCreatorDto);
      });

      it('should throw error if name is not provided', async () => {
        const createCreatorDto = {
          name: null,
        };

        await expect(service.create(createCreatorDto)).rejects.toThrow(
          'Name is required',
        );
      });
    });

    describe('update', () => {
      it('should update', async () => {
        const updateCreatorDto = {
          name: 'test',
        };
        const result = await service.update(1, updateCreatorDto);
        expect(result).toEqual(updateCreatorDto);
      });

      it('should throw error if name is not provided', async () => {
        const updateCreatorDto = {
          name: null,
        };
        await expect(service.update(1, updateCreatorDto)).rejects.toThrow(
          'Name is required',
        );
      });
    });

    describe('remove', () => {
      it('should remove', async () => {
        const result = await service.remove(1);
        expect(result).toEqual(1);
      });
    });
  });
});
