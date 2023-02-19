import { PartialType } from '@nestjs/mapped-types';
import { CreateCameraDto } from './create-camera.dto';

export class UpdateCameraDto extends PartialType(CreateCameraDto) {}
