import { Foo } from './a';

describe('my tests', () => {
  it('should work', () => {
    expect(true).toBe(true);
    new Foo().boo();
  });
});