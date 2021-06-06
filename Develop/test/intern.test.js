const Intern = require('../lib/intern.js');

describe('intern', () => {
	describe('getSchool', () => {
		it("should get the engineer's github", () => {
			const input = new Intern('mike', '3', 'mike@gmail.com', 'Arkansas State');

			expect('Arkansas State').toEqual(input.getSchool());
		});
	})

	describe('getRole', () => {
		it("should get the intern's role", () => {
			const input = new Intern('mike', '3', 'mike@gmail.com', 'Arkansas State');

			expect('Intern').toEqual(input.getRole());
		});
	})

});