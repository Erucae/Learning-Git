import truncate from './index';

describe('truncate::', () => {
  /** @test {truncate} */
  it('should truncate string', function () {
    expect(truncate('Some long text', 7)).toEqual('Some...');
  });

  /** @test {truncate} */
  it('should not truncate string if it`s empty', function () {
    expect(truncate('')).toEqual('');
  });

  /** @test {truncate} */
  it('should allow to pass replacer', function () {
    expect(truncate('Hello world', 0, '***')).toEqual('Hello wo***');
  });

  /** @test {truncate} */
  it('should not truncate string if second parameter "length" grater than string.length', function () {
    expect(truncate('Some very long text', 20)).toEqual('Some very long text');
  });
});
