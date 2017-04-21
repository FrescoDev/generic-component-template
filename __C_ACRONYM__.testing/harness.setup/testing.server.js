import * as chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../../__C_NAME__.component/host/server';

chai.use(chaiHttp);
export default chai.request(server);