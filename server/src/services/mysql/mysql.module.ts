import { Logger } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';
import { join } from 'path';

export class MysqlModule {
  private readonly logger = new Logger('MySQLDatabase');
  public sequelize = new Sequelize({
    dialect: 'mysql',
    host: process.env.DB_MYSQL_HOST,
    port: Number(process.env.DB_MYSQl_PORT),
    database: process.env.DB_MYSQL_DATABASE,
    username: process.env.DB_MYSQL_USER,
    password: process.env.DB_MYSQL_PASS,
    dialectOptions: {
      decimalNumbers: true,
    },
    models: [join(__dirname, '..', '..', 'models')],
    logging: false,
  });

  async init() {
    try {
      await this.sequelize.authenticate();
      await this.sequelize.sync({ force: true });

      this.logger.log('Successfully connected to MySQL database');
    } catch (err) {
      this.logger.error('Error while connecting to MySQL database', JSON.stringify(err.message || err));
      throw err;
    }
  }
}
