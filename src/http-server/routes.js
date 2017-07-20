import { handlerGetMetadataRequest } from './resources/request-handlers'
import { Router } from 'express'

const routes = new Router()
    .get('/meta', handlerGetMetadataRequest)

export default routes