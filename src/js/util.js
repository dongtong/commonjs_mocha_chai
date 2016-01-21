/**
 * Util module
 * @module  Util
 */

module.exports = {

	testWindow: function () {
		window.name = 'foobar';
		return window.name;
	},

	add: function (a, b) {
		return a + b;
	}
};