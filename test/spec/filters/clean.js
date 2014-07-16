'use strict';

describe('Test Clean Custom Filter', function () {

  var $filter;

  beforeEach(function () {
    module('seeker');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should remove <b></b> html tags', function () {
    // Arrange.
    var result,
        input='abc<b>abc</b>';

    // Act.
    result = $filter('clean')(input);

    // Assert.
    expect(result).toEqual('abcabc');
  });

  it('should remove multiple <b></b> html tags', function () {
    // Arrange.
    var result,
        input='abc<b>abc</b><b>abc</b><b>123</b>';

    // Act.
    result = $filter('clean')(input);

    // Assert.
    expect(result).toEqual('abcabcabc123');
  });

});
