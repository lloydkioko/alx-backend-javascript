const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
  });

  afterEach(function () {
    calculateNumberStub.restore();
  });

  it('should call Utils.calculateNumber with SUM type', function () {
    calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(calculateNumberStub.calledOnce).to.be.true;
    expect(consoleSpy.calledWith('The total is: 120')).to.be.true;

    consoleSpy.restore();
  });
});
