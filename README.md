# Walmart challenge backend

NodeJS Typescript Aplication for Walmart tecnical test.

## Install

```
    npm install
```
## Run

```
    npm run dev
```

## Environment

It's required to specify environment variables on your .env file:

- NODE_ENV=development
- PORT=3000
- MONGO_USERNAME=productListUser
- MONGO_PASSWORD=productListPassword
- MONGO_HOST=192.168.1.7
- MONGO_PORT=27017
- MONGO_DATABASE=promotions
- MONGO_AUTH_DB=admin


# Docker

For Docker compose, run this command to create service and database mongo.
```
    docker-compose up -d
```



