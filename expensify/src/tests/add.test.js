const add  = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`;

test('Should add Two Numbers', () => {
  const result = add(3, 4);
  expect(result).toBe(7);
}); 

test('Should Greet', () => {
  const name = generateGreeting('alex');
  expect(name).toBe('Hello alex!');
});