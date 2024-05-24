import { Logger } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CreatorService } from './creator.service';
import { CreateRepository } from './creator.repository';

describe('CreatorService', () => {
  let service: CreatorService;
  let repository: CreateRepository;

  let spyLoggerLog: jest.SpyInstance;
  let spyRepositoryCreate: jest.SpyInstance;
  let spyRepositoryUpdate: jest.SpyInstance;
  let spyRepositoryRemove: jest.SpyInstance;

  beforeAll(() => {
    spyLoggerLog = jest.spyOn(Logger, 'log');
    jest.useFakeTimers().setSystemTime(new Date('2024-05-24'));
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreatorService, CreateRepository],
    }).compile();

    service = module.get<CreatorService>(CreatorService);
    repository = module.get<CreateRepository>(CreateRepository);

    spyRepositoryCreate = jest.spyOn(repository, 'create');
    spyRepositoryUpdate = jest.spyOn(repository, 'update');
    spyRepositoryRemove = jest.spyOn(repository, 'remove');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(repository).toBeDefined();
  });

  describe('crud', () => {
    describe('create', () => {
      it('should create', async () => {
        const createCreatorDto = {
          name: 'test',
        };
        await expect(service.create(createCreatorDto)).resolves.toEqual(
          createCreatorDto,
        );

        expect(spyRepositoryCreate).toHaveBeenCalledTimes(1);
        expect(spyRepositoryCreate).toHaveBeenCalledWith(createCreatorDto);

        expect(spyLoggerLog).toHaveBeenCalledTimes(1);
        expect(spyLoggerLog).toHaveBeenCalledWith({
          context: 'Creator Course',
          date: new Date('2024-05-24'),
          payload: createCreatorDto,
          company: 1,
        });
      });

      it('should throw error if name is not provided', async () => {
        const createCreatorDto = {
          name: null,
        };

        await expect(service.create(createCreatorDto)).rejects.toThrow(
          'Name is required',
        );
        expect(spyRepositoryCreate).not.toHaveBeenCalled();
        expect(spyLoggerLog).not.toHaveBeenCalled();
      });
    });

    describe('update', () => {
      it('should update', async () => {
        const updateCreatorDto = {
          name: 'test',
        };
        await expect(service.update(1, updateCreatorDto)).resolves.toEqual(
          updateCreatorDto,
        );

        expect(spyRepositoryUpdate).toHaveBeenCalledTimes(1);
        expect(spyRepositoryUpdate).toHaveBeenCalledWith(1, updateCreatorDto);

        expect(spyLoggerLog).toHaveBeenCalledTimes(1);
        expect(spyLoggerLog).toHaveBeenCalledWith({
          context: 'Update Course',
          date: new Date('2024-05-24'),
          courseId: 1,
          payload: updateCreatorDto,
          company: 1,
        });
      });

      it('should throw error if name is not provided', async () => {
        const updateCreatorDto = {
          name: null,
        };
        await expect(service.update(1, updateCreatorDto)).rejects.toThrow(
          'Name is required',
        );

        expect(spyRepositoryUpdate).not.toHaveBeenCalled();
        expect(spyLoggerLog).not.toHaveBeenCalled();
      });
    });

    describe('remove', () => {
      it('should remove', async () => {
        await expect(service.remove(1)).resolves.toEqual(1);

        expect(spyRepositoryRemove).toHaveBeenCalledTimes(1);
        expect(spyRepositoryRemove).toHaveBeenCalledWith(1);

        expect(spyLoggerLog).toHaveBeenCalledTimes(1);
        expect(spyLoggerLog).toHaveBeenCalledWith({
          context: 'Delete Course',
          date: new Date(),
          courseId: 1,
          company: 1,
        });
      });
    });
  });
});
