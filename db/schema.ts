import {mysqlTable, primaryKey, serial, tinyint, int, datetime, varchar} from 'drizzle-orm/mysql-core';

export const game = mysqlTable('game', {
  id: int('id').primaryKey().autoincrement(),
  gameType: int('game_type'),
  duration: int('duration'),
  gameDate: datetime('game_date'),
  createdAt: datetime('created_at'),
  updatedAt: datetime('updated_at')
});

export const team = mysqlTable('team', {
  id: int('id').primaryKey().autoincrement(),
  team_name: varchar('team_name', {length: 255}),
  level: varchar('level', {length: 255}),
  createdAt: datetime('created_at'),
  updatedAt: datetime('updated_at')
});

export const user = mysqlTable('user', {
  id: int('id').primaryKey().autoincrement(),
  user_name: varchar('user_name', {length: 255}),
  age: int('age'),
  gender: varchar('gender', {length: 1}),
  phone_number: varchar('phone_number', {length: 20}),
  position: varchar('position', {length: 255}),
  user_level: int('user_level'),
  blood_type: varchar('blood_type', {length: 10}),
  createdAt: datetime('created_at'),
  updatedAt: datetime('updated_at')
});

export const teamRecord = mysqlTable(
  'team_record',
  {
    teamId: int('team_id').references(() => team.id),
    gameId: int('game_id').references(() => game.id),
    duration: int('duration'),
    gameDate: datetime('game_date'),
    createdAt: datetime('created_at'),
    updatedAt: datetime('updated_at')
  },
  (table) => {
    return {
      pk: primaryKey({columns: [table.teamId, table.gameId]})
    };
  }
);

export const teamUsers = mysqlTable(
  'team_users',
  {
    teamId: int('team_id').references(() => team.id),
    userId: int('user_id').references(() => user.id),
    createdAt: datetime('created_at'),
    updatedAt: datetime('updated_at')
  },
  (table) => {
    return {
      pk: primaryKey({columns: [table.teamId, table.userId]})
    };
  }
);

export const userRecord = mysqlTable(
  'user_record',
  {
    userId: int('user_id').references(() => user.id),
    gameId: int('game_id').references(() => game.id),
    gameQuoter: int('game_quoter'),
    goal: int('goal'),
    assist: int('assist'),
    deced: int('deced'),
    createdAt: datetime('created_at'),
    updatedAt: datetime('updated_at')
  },
  (table) => {
    return {
      pk: primaryKey({columns: [table.userId, table.gameId]})
    };
  }
);
