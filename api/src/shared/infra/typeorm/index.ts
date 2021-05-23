import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
  username: string;
  password: string;
  database: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;
  newOptions.host = process.env.DB_HOST || newOptions.host;
  newOptions.username = process.env.DB_USERNAME || newOptions.username;
  newOptions.password = process.env.DB_PASSWORD || newOptions.password;
  newOptions.database = process.env.DB_DATABASE || newOptions.database;
  createConnection({
    ...options,
  });
});
