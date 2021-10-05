const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('office number via constructor', () => {
  const testValue = 123 - 456 - 789;
  const e = new Manager('test', 1, 'test@test.com', testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = 'Manager';
  const e = new Manager('test', 1, 'test@test.com', 123456789);
  expect(e.getRole()).toBe(testValue);
});

test('office number via getOffice()', () => {
  const testValue = 123 - 456 - 789;
  const e = new Manager('test', 1, 'test@test.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
