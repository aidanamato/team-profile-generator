const Employee = require('../lib/Employee');

test('returns and employee object', () => {
  const employee = new Employee('John', 1234, 'john@company.com');

  expect(employee.name).toBe('John');
  expect(employee.id).toBe(1234);
  expect(employee.email).toBe('john@company.com');
});

test("returns employee's name", () => {
  const employee = new Employee('John', 1234, 'john@company.com');

  expect(employee.getName()).toBe('John');
});

test("returns employee's id", () => {
  const employee = new Employee('John', 1234, 'john@company.com');

  expect(employee.getId()).toBe(1234);
});

test("returns employee's email", () => {
  const employee = new Employee('John', 1234, 'john@company.com');

  expect(employee.getEmail()).toBe('john@company.com');
});

test("returns employee's role", () => {
  const employee = new Employee('John', 1234, 'john@company.com');

  expect(employee.getRole()).toBe('Employee');
});