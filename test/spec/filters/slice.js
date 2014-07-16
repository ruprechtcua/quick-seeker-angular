'use strict';

describe('Test Slice Custom filter', function () {

  var $filter;

  beforeEach(function () {
    module('seeker');

    inject(function (_$filter_) {
      $filter = _$filter_;
    });
  });

  it('should slice an array correctly from index 0', function () {
    // Arrange.
    var result,
        arr = ['a','b','c','d','e'];

    // Act.
    result = $filter('slice')(arr, 0, 3);

    // Assert.
    expect(result).toEqual(['a','b','c']);
  });

  it('should slice an array correctly from in between', function () {
    // Arrange.
    var result,
        arr = ['a','b','c','d','e'];

    // Act.
    result = $filter('slice')(arr, 1, 3);

    // Assert.
    expect(result).toEqual(['b','c']);
  });

  it('should return undefined object if array is underfined', function () {
    // Arrange.
    var result,
        arr;

    // Act.
    result = $filter('slice')(arr, 1, 3);

    // Assert.
    expect(result).toEqual(undefined);
  });
});
