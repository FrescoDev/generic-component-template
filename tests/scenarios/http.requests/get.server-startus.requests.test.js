import * as chai from 'chai'

import server from '../../harness-setup/testing.server'

const expect = chai.expect

describe('Call to GET server status at /server-status endpoint', () => {
    describe('#200', () => {
        it('should return the expected response', (done) => {
            server
                .get('/server-status')
                .end((err, res) => {
                    expect(res).to.have.status(200)
                    expect(res.type).to.eql('application/json')
                    expect(res.body.status).to.eql('ok')
                    done()
                })
        })
    })
})