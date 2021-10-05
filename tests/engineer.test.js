const Engineer = require('../lib/Engineer');

test('getRole should return Engineer', () => {
  const val = 'Engineer';
  const t = new Engineer('test', 1, 'new@engineer.com', 'UTSA');
  expect(t.getRole()).toBe(val);
});

test('set github username via constructor', () => {
  const val = 'githubName';
  const t = new Engineer('test', 1, 'new@engineer.com', val);
  expect(t.getGithub()).toBe(val);
});

test('getGithub() should return username', () => {
  const val = 'githubName';
  const t = new Engineer('test', 1, 'new@engineer.com', val);
  expect(t.getGithub()).toBe(val);
});
