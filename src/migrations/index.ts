import * as migration_20260709_033456_initial from './20260709_033456_initial';

export const migrations = [
  {
    up: migration_20260709_033456_initial.up,
    down: migration_20260709_033456_initial.down,
    name: '20260709_033456_initial'
  },
];
