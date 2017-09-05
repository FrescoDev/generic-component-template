import { handleGetServeStatusRequest } from './resources/request-handlers'
import { Router } from 'express'
import bunyanMiddleware from 'bunyan-middleware'
import logger from '../shared/logging'

const requestLogger = bunyanMiddleware({
    logger: logger,
    headerName: '__API_NAME__-Request-Id',
    obscureHeaders: ['authorization', 'token', 'access_token'],
    level: (process.env.NODE_ENV === 'development') ? 'debug' : 'info'
})

const routes = new Router()
    .use(requestLogger)
    .get('/server-status', handleGetServeStatusRequest)

export default routes