const add = (a, b) => a + b;
const generateString = (name = 'Anonymous') => `Hello ${name}`

// Two arguments: test description, code to run
test('Should add two numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);   // https://jestjs.io/docs/en/expect
});

test('Should return greeting', () => {
  const result = generateString('Dan');
  expect(result).toBe("Hello Dan");
});

test('Should return Anonymous greeting', () => {
  const result = generateString();
  expect(result).toBe("Hello Anonymous");
});