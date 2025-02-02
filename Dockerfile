FROM node:lts-alpine3.14

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm i 

COPY . .
EXPOSE 3000
CMD ["npm", "start"]
