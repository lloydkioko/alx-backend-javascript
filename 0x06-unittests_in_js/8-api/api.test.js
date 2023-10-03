const { expect } = require('chai');
const request = require('request');

describe('Testing homepage (GET /)', () => {
  it('should return the right response message', (done) => {
    const options = {
      url: 'http://localhost:7865',
      method: 'GET'
    };
    request(options, (_, res, body) => {
      expect(res.statusCode).to.be.below(400);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
