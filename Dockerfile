FROM node:latest

WORKDIR /app

COPY package*.json ./

COPY keys ./

RUN npm install

COPY ./dist .
