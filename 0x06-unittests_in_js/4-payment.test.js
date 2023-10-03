const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
  });

  afterEach(function () {
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with SUM type', function () {
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(consoleSpy.calledWith('The total is: 10')).to.be.true;

    consoleSpy.restore();
  });
});
