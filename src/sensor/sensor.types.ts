import { Sensor as SensorPrisma } from '@prisma/client';

export type Sensor = SensorPrisma;

export enum SensorType {
  Door = 'DOOR',
  Window = 'WINDOW',
  Temperature = 'TEMPERATURE',
  Humidity = 'HUMIDITY',
  Occupancy = 'OCCUPANCY',
  Motion = 'MOTION',
  WaterLeak = 'WATER_LEAK',
  CO2 = 'CO2',
  FireSmoke = 'FIRE_SMOKE',
  AccessControl = 'ACCESS_CONTROL',
  Elevator = 'ELEVATOR',
  Noise = 'NOISE',
}
