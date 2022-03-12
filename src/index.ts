import {loadConfig} from './infrastructure/config'
import {loadWebServer} from './infrastructure/server/server'
import {loadDBConnection, MongoDBConnectionOptions} from './infrastructure/db'

async function main() {
  const appConfig = loadConfig()
  const dbOptions: MongoDBConnectionOptions = {
    username: appConfig.MONGO_USERNAME,
    password: appConfig.MONGO_PASSWORD,
    host: appConfig.MONGO_HOST,
    database: appConfig.MONGO_DATABASE,
    authDatabase: appConfig.MONGO_AUTH_DB,
    port: appConfig.MONGO_PORT
  }
  const dbModule = loadDBConnection(dbOptions);
  const webServerModule = loadWebServer({port: appConfig.PORT})

  await dbModule.start()
  webServerModule.start()

  const signals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM']
  signals.forEach(s =>
    process.once(s, async () => {
      console.log('...Closing App...')
      webServerModule.close()
      await dbModule.close()
      console.log('...App Closed...')
    }),
  )

  const errorTypes = ['unhandledRejection', 'uncaughtException']
  errorTypes.map(type => {
    process.on(type, async e => {
      try {
        console.log(`process.on ${type}`)
        console.error(e)
        webServerModule.close()
        await dbModule.close()
        process.exit(0)
      } catch (_) {
        process.exit(1)
      }
    })
  })
}

main()
