import sumElements from './index';

describe('sumElements::', () => {
  /** @test {sumElements} */
  it('should return sum of the array elements', () => {
    expect(sumElements([1, 2])).toBe(3);
    expect(sumElements([1, '2'])).toBe(3);
  });

  /** @test {sumElements} */
  it('should convert string to number if it possible and return sum', () => {
    expect(sumElements(['1px', 2, 'm12'])).toBe(3);
    expect(sumElements(['0.5', 2,])).toBe(2.5);
    expect(sumElements(['1e1', '0xf',])).toBe(25);
  });

  /** @test {sumElements} */
  it('should ignore -Infinity/Infinity', () => {
    expect(sumElements([Infinity, 1, 2])).toBe(3);
  });

  /** @test {sumElements} */
  it('should ignore NaN', () => {
    expect(sumElements([NaN, 3, -1])).toBe(2);
  });
});
