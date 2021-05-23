export default {
  name: 'default',
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  migrations: ['./dist/database/migrations/*.js'],
  entities: ['./dist/modules/**/entities/*.js'],
  cli: {
    migrationsDir: './dist/database/migrations',
  },
};
