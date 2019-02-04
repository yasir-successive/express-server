import { config } from 'dotenv';
import { mongo } from 'mongoose';
import { IConfig } from './IConfig';
config();
const configuration: IConfig = Object.freeze({
  mongo: process.env.MONGO_URL,
  port: process.env.PORT,
});
export default configuration;
