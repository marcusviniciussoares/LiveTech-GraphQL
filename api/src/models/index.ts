import * as mongoose from 'mongoose';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import { Models } from '../types';

const { MONGODB_URI } = process.env;

const connect = () => {
  mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

const models: Models = Object.create({});

readdirSync(__dirname)
  .filter((fileName) => !fileName.includes('index'))
  .forEach((fileName) => {
    const model = require(resolve(__dirname, fileName)).default;
    const modelName = fileName.split('.').shift().replace('Model', '');
    console.log('File Name: ', fileName);
    console.log('Model Name: ', modelName);
    models[modelName] = model;
  });

export { connect, models };
