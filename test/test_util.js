var assert = require('assert');
var Util = require('../src/js/util');

describe('Test Util', function () {

  describe('#add', function () {
  	it('should return correct add result', function () {
  		var result = Util.add(1, 1);
  		assert.equal(2, result);
  	});
  });
  
});