const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
  const intern = new Intern('Richard', 1236, 'richard@company.com', 'University of Central Florida');

  expect(intern.name).toBe('Richard');
  expect(intern.id).toBe(1236)
  expect(intern.email).toBe('richard@company.com');
  expect(intern.school).toBe('University of Central Florida');
});