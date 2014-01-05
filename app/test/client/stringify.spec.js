var stringify = require('../../client/stringify');


describe('stringify', function() {
  it('should serialize string', function() {
    expect(stringify('aaa')).toBe("'aaa'");
  });


  it('should serialize across iframes', function() {
    var div = document.createElement('div');
    expect(__karma__.stringify(div)).toBe('<div></div>');

    expect(__karma__.stringify([1, 2])).toBe('[1, 2]');
  });
});
