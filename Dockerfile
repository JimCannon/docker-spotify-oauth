FROM node:latest
#
#WORKDIR /app
#
#COPY package*.json /app/
#
##
#RUN npm install --save
##
#
#RUN npm install express --save
#
#RUN npm install nodemon --save-dev
#
#COPY . .
#
#EXPOSE 3000
#
#CMD nodemon

##CMD node app.js

WORKDIR /app

COPY package*.json /app/

RUN npm install
RUN npm install -g nodemon

ENV DEBUG=app*

EXPOSE 3002

CMD nodemon