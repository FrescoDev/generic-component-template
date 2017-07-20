/**
 * Description: Health check route which responds with health status of 'ok'.
 * 
 * @param  {object} req Express's request object
 * @param  {object} res Express's callback response object
 * @return  {null} 
 */

const handleGetMetadataRequest = (req, res) => {
    res.json({
        description: 'geenric api',
        health: 'ok'
    })
}

export default handleGetMetadataRequest