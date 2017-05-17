import BaseHandler from 'fresco-http-service-utilities';

class PostSpecHandler extends BaseHandler {
    handle(req, res) {
        res.json({
            description: 'architect',
            health: 'ok'
        });
    }
}

export default new PostSpecHandler();