const { expect } = require('chai');
const request = require('request');
const fs = require('fs');

describe('Testing API endpoints with different values', () => {
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

  it('should return the right response message', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/3',
      method: 'GET'
    };
    request(options, (_, res, body) => {
      expect(res.statusCode).to.be.below(400);
      expect(body).to.equal('Payment methods for cart 3');
      done();
    });
  });

  it('Should return error page with high statusCode', (done) => {
    const options = {
      url: 'http://localhost:7865/cart/hello',
      method: 'GET'
    };
    request(options, (_, res) => {
      expect(res.statusCode).to.be.above(200);
      done();
    });
  });

  it('Should return payment methods object', (done) => {
    const options = {
      url: 'http://localhost:7865/available_payments',
      method: 'GET'
    };
    request(options, (_, res) => {
      expect(res.body).to.include('payment_methods');
      done();
    });
  });
  it('Should return Welcome to the user', (done) => {
    const data = { userName: 'Caroline' };
    request.post('http://localhost:7865/login', {
      json: {
        userName: 'Caroline'
      }
    }, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });
});
