const Engineer = require('../lib/engineer.js');

describe('engineer', () => {
	describe('getGithub', () => {
		it("should get the engineer's github", () => {
			const input = new Engineer('Rick', '3', 'rick@gmail.com', 'michaelzadra27');

			expect('michaelzadra27').toEqual(input.getGithub());
		});
	})

	describe('getRole', () => {
		it("should get the engineer's role", () => {
			const input = new Engineer('Rick', '3', 'rick@gmail.com', 'michaelzadra27');

			expect('Engineer').toEqual(input.getRole());
		});
	})

});