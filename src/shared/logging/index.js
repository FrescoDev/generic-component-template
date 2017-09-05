import bunyan from 'bunyan'
import config from '../../configuration'

const logger = bunyan.createLogger({
    name: '__API_NAME__',
    serializers: bunyan.stdSerializers,
    streams: [
        {
            level: config.logging.level,
            stream: process.stdout
        }
    ]
})

export default logger