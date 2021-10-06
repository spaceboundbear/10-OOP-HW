const Employee = require('../lib/Employee');

test('initiate employee', () => {
  const e = new Employee();
  expect(typeof e).toBe('object');
});

test('set name via constructor', () => {
  const name = 'jim';
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test('set id via constructor', () => {
  const testValue = 1;
  const e = new Employee('test', testValue);
  expect(e.id).toBe(testValue);
});

test('set email via constructor', () => {
  const testValue = 'new@employee.com';
  const e = new Employee('test', 1, testValue);
  expect(e.email).toBe(testValue);
});

test('get name via getName()', () => {
  const testValue = 'jim';
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test('get id via getId()', () => {
  const testValue = 1;
  const e = new Employee('test', testValue);
  expect(e.getId()).toBe(testValue);
});

test('get email via getEmail()', () => {
  const testValue = 'new@employee.com';
  const e = new Employee('test', 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = 'Employee';
  const e = new Employee('jim', 1, 'new@employee.com');
  expect(e.getRole()).toBe(testValue);
});
