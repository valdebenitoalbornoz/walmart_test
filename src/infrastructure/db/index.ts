import mongoose from 'mongoose'

export interface MongoDBConnectionOptions {
  username: string
  password: string
  host: string
  port: number
  database: string
  authDatabase: string
}

export function loadDBConnection(connectOptions: MongoDBConnectionOptions) {
  let db: typeof mongoose | undefined = undefined
  const { username, password, host, port, database, authDatabase } = connectOptions;

  const dbUri = `mongodb://${username}:${password}@${host}:${port}/${database}?authSource=${authDatabase}`;
  return {
    start: async () => {
      db = await mongoose.connect(dbUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      console.log('- Connected to MongoDB')
    },
    close: async () => {
      if (db) await db.disconnect()
      console.log('- Closed MongoDB connection')
    },
  }
}
