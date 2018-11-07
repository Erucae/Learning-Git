import turnMeBaby from './index';

describe('turnMeBaby::', () => {
  /** @test {turnMeBaby} */
  it('should reverse string', function () {
    expect(turnMeBaby('hello')).toEqual('olleh');
    expect(turnMeBaby('Some very long text')).toEqual('txet gnol yrev emoS');
    expect(turnMeBaby('')).toEqual('');
  });

  /** @test {turnMeBaby} */
  it('should throw error if passed not a string', function () {
    expect(turnMeBaby(1)).toEqual(new Error('this is not a string'));
  });
});
