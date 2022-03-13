FROM node:12.14.1

RUN npm install -g typescript

RUN npm install -g ts-node

WORKDIR /app

COPY [ "package*.json", "tsconfig.json", "tsconfig.build.json", "./"]

RUN ls -a

RUN npm install

COPY src /app/src/

RUN npm run build

COPY . .

EXPOSE 3000

CMD [ "node", "./build/index.js" ]