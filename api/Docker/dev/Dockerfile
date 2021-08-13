FROM node:16.3.0-alpine

WORKDIR /usr/app

COPY package*.json ./

RUN npm install -g npm@latest

RUN npm install typescript -g

RUN npm install

COPY . .