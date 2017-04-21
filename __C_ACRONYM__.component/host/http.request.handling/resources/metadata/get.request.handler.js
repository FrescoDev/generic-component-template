import BaseHandler from 'fresco-http-service-utilities';

class GetMetaHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            description: '__C_NAME__',
            health: 'ok'
        });
    }
}

export default new GetMetaHandler();