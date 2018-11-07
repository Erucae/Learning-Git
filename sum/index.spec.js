import sum from './index';

describe('sum::', () => {
  /** @test {sum} */
  it('should return sum of arguments if they are numbers', () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 3)).toBe(5);
  });

  /** @test {sum} */
  it('should throw error if at least one of arguments is not a number', () => {
    expect(() => sum('1', 2)).toThrow();
    expect(() => sum('1')).toThrow();
    expect(() => sum(1)).toThrow();
  });

  /** @test {sum} */
  it('should throw error if one of arguments is Infinity', () => {
    expect(() => sum(Infinity, 2)).toThrow();
    expect(() => sum(-Infinity, 2)).toThrow();
  });

  /** @test {sum} */
  it('should throw error if one of arguments is NaN', () => {
    expect(() => sum(NaN, 2)).toThrow();
  });
});
