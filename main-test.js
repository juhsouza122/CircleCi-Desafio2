const add = require('../main');

test('esta somando', () => {
    expect(add(2, 3)).toBe(5);
})