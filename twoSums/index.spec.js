import twoSums from './index';

describe('twoSums::', () => {
  /** @test {twoSums} */
  it('should return values of elements which sum equals "base" parameter', function () {
    expect(twoSums([1, 2], 3)).toEqual([1, 2]);
  });

  /** @test {twoSums} */
  it('should return values for not ordered elements', function () {
    expect(twoSums([3, 6, 9, 1], 7)).toEqual([6, 1]);
  });

  /** @test {twoSums} */
  it('should return only first elements which sum equals "base" parameter', function () {
    expect(twoSums([12, 3, 7, 8], 15)).toEqual([12, 3]);
  });

  /** @test {twoSums} */
  it('should correct work if "0" existed in the array', function () {
    expect(twoSums([0, 1], 1)).toEqual([0, 1]);
  });

  /** @test {twoSums} */
  it('should correct work with negative values', function () {
    expect(twoSums([-9, 4], -5)).toEqual([-9, 4]);
  });
});

