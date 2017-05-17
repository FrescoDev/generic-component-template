import * as chai from 'chai'
import server from '../../harness.setup/testing.server'

const expect = chai.expect

describe('Call to POST component spec at /spec endpoint', () => {
    describe('#200', () => {
        it('should return json', (done) => {
            server
                .post('/spec')
                .end((err, res) => {
                    expect(res)
                        .to
                        .have
                        .status(200)
                    expect(res.type)
                        .to
                        .eql('application/json')
                    done()
                })
        })
    })
})