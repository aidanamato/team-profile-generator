const Manager = require('../lib/Manager');

test('creates a manager object', () => {
  const manager = new Manager('Karen', 1234, 'karen@mail.com', 2);
  console.log(manager);

  expect(manager.name).toBe('Karen');
  expect(manager.id).toBe(1234);
  expect(manager.email).toBe('karen@mail.com');
  expect(manager.officeNumber).toBe(2);
});