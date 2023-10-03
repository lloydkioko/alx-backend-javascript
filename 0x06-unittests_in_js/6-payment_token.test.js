const expect = require('chai').expect;
const sinon = require('sinon');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', function () {
  it('should return successful response for success=true', function (done) {
    const promise = getPaymentTokenFromAPI(true);
    
    promise.then(result => {
      expect(result).to.deep.equal({ data: 'Successful response from the API' });
      done(); // Call done when the async operation is complete
    });
  });

  it('should return undefined for success=false', function (done) {
    const promise = getPaymentTokenFromAPI(false);
    
    promise.then(result => {
      expect(result).to.be.undefined;
      done(); // Call done when the async operation is complete
    });
  });
});

