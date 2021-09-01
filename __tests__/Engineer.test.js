const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
  const engineer = new Engineer('Steve', 1235, 'steve@company.com', 'steve');

  expect(engineer.name).toBe('Steve');
  expect(engineer.id).toBe(1235);
  expect(engineer.email).toBe('steve@company.com');
  expect(engineer.github).toBe('steve');
});