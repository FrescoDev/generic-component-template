import getModulePath from '../../../shared/logging/getModulePath'
const modulePath = getModulePath(__filename)

/**
 * Description: Health check route which responds with health status of 'ok'.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's response object
 * @return  {null} 
 */

const handleGetServeStatusRequest = (req, res) => {
    req.log.info({ modulePath }, 'Handling GET Server Status request')

    res.json({
        description: 'generic api',
        status: 'ok'
    })
}

export default handleGetServeStatusRequest