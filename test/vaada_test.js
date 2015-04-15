var chai = require('chai');
var expect = chai.expect;

var Vaada = require('../src/vaada');

describe('Vaada', function() {
  it('can be constructed and used as an object', function () {
    var promise = new Vaada();
    promise.aProperty = 1;
    expect(promise.aProperty).to.equal(1);
  });
});

