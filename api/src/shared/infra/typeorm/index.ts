import { createConnection, getConnectionOptions } from 'typeorm';

// interface IOptions {
//   host: string;
//   username: string;
//   password: string;
// }

getConnectionOptions().then(options => {
  // const newOptions = options as IOptions;
  // newOptions.host = process.env.DB_HOST || 'localhost';
  // newOptions.username =
  //   process.env.DB_USERNAME || newOptions.username || 'root';
  // console.log(process.env.DB_PASSWORD);
  // newOptions.password = process.env.DB_PASSWORD || 'postgres';
  createConnection({
    ...options,
  });
});
