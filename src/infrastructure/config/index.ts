import dotenv from 'dotenv'
import Joi from 'joi'

dotenv.config()

interface ConfigInfo {
  NODE_ENV: string
  PORT: number
  MONGO_USERNAME: string
  MONGO_PASSWORD: string
  MONGO_HOST: string
  MONGO_PORT: number
  MONGO_DATABASE: string
  MONGO_AUTH_DB: string
}

function loadConfig() {
  const configSchema = Joi.object<ConfigInfo>({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    PORT: Joi.number().required(),
    MONGO_USERNAME: Joi.string().required(),
    MONGO_PASSWORD: Joi.string().required(),
    MONGO_HOST: Joi.string().ip().required(),
    MONGO_PORT: Joi.number().required(),
    MONGO_DATABASE: Joi.string().required(),
    MONGO_AUTH_DB: Joi.string()
  })

  const {error, value} = configSchema.validate(process.env, {allowUnknown: true})
  console.log('- Environment variables loaded...')

  if (error) throw error
  return {...value} as ConfigInfo
}

export {loadConfig}
