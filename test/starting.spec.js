var assert = require('assert');
let should = require('chai').should();

describe('Basic Mocha Test', function() {
	it('should deal with objects', function() {
		let obj = {name: 'Trevash', gender:'male'};
    let obj1 = {name: 'Trevash', gender:'male'};

		obj.should.deep.equal(obj1);
	});
	it('should allow testing nulls', function () {
    var nullVal = null;
    should.not.exist(nullVal);
  });
});