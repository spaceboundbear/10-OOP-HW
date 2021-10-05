const Intern = require('../lib/intern');

test('set school via constructor', () => {
  const val = 'UTSA';
  const t = new Intern('test', 1, 'new@intern.com', val);
  expect(t.school).toBe(val);
});

test('getRole should return Intern', () => {
  const val = 'Intern';
  const t = new Intern('test', 1, 'new@intern.com', 'UTSA');
  expect(t.getRole()).toBe(val);
});

test('get school via getSchool()', () => {
  const val = 'UTSA';
  const t = new Intern('test', 1, 'new@intern.com', 'UTSA');
  expect(t.getSchool()).toBe(val);
});
