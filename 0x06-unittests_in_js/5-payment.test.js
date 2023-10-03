const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log correct message and be called once for 100 and 20', function () {
    sendPaymentRequestToApi(100, 20);
    
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;
  });

  it('should log correct message and be called once for 10 and 10', function () {
    calculateNumberStub.returns(20); // Stub returning 20 for this test

    sendPaymentRequestToApi(10, 10);
    
    expect(calculateNumberStub.calledOnceWithExactly('SUM', 10, 10)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 20')).to.be.true;
  });
});
