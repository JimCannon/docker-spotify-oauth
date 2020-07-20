FROM node:alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json /app/

RUN npm install
RUN npm install react-scripts -g

EXPOSE 3000

CMD npm start
