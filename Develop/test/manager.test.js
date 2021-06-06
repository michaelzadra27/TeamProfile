const Manager = require('../lib/manager.js');

describe('manager', () => {
	describe('officeNumber', () => {
		it("should get the manager's role", () => {
			const input = new Manager('todd', '1', 'todd@yahoo.com', '8675309');

			expect('8675309').toEqual(input.getOfficeNumber());
		});
	})

	describe('getRole', () => {
		it("should get the manager's role", () => {
			const input = new Manager('todd', '1', 'todd@yahoo.com', '8675309');

			expect('Manager').toEqual(input.getRole());
		});
	})

});