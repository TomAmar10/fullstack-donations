import mysql from "mysql";
import config from "../6-utils/config";

const usersConnection = mysql.createPool({
  host: config.mySQLhost,
  user: config.mySQLUser,
  password: config.mySQLPassword,
  database: config.mySqlDB,
});

const execute = (sql: string): Promise<any> => {
  return new Promise<any>((resolve, reject) => {
    usersConnection.query(sql, (err, result) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(result);
    });
  });
};

export default execute;
