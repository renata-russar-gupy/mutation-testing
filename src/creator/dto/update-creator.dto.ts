import { PickType } from '@nestjs/mapped-types';
import { CreateCreatorDto } from './create-creator.dto';

export class UpdateCreatorDto extends PickType(CreateCreatorDto, [
  'name',
] as const) {}
