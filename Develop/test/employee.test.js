const Employee = require('../lib/employee.js');

describe('employee', () => {
	describe('getName', () => {
		it("should get the employee's name", () => {
			const input = new Employee('Bob', '2', 'kill@yahoo.com',);

			expect('Bob').toEqual(input.getName());
		});
	})

	describe('getId', () => {
		it("should get the employee's id", () => {
			const input = new Employee('tom', '2', 'kill@yahoo.com');

			expect('2').toEqual(input.getId());
		});
	})

	describe('getEmail', () => {
		it("should get the employee's email", () => {
			const input = new Employee('Bob', '2', 'kill@yahoo.com');

			expect('kill@yahoo.com').toEqual(input.getEmail());
		});
	})

	

	
});