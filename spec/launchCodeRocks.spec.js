const launchOutput = require('../launchCodeRocks.js');
const assert = require('assert');

describe("launchOutput", function(){
  
  it ('should return \'Launch\' when passed a number divisible only by 2', function () {
    let expected = 'Launch!';
    let actual = launchOutput(2);
    assert.strictEqual(actual, expected);
  })

  it ('should return \'Code!\' when passed a number divisible only by 3', function () {
    let expected = 'Code!';
    let actual = launchOutput(3);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'Rocks!\' when passed a number divisible only by 5', function () {
    let expected = 'Rocks!';
    let actual = launchOutput(5);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'LaunchCode!\' when passed a number divisible only by 2 and 3', function () {
    let expected = 'LaunchCode!';
    let actual = launchOutput(6);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'Code Rocks!\' when passed a number divisible only by 3 and 5', function () {
    let expected = 'Code Rocks!';
    let actual = launchOutput(15);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'Launch Rocks!\' when passed a number divisible only by 2 and 5', function () {
    let expected = 'Launch Rocks!';
    let actual = launchOutput(10);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'LaunchCode Rocks!\' when passed a number divisible only by 2, 3, and 5', function () {
    let expected = 'LaunchCode Rocks!';
    let actual = launchOutput(30);
    assert.strictEqual(actual, expected);
  });

  it ('should return \'Rutabagas! That) Does\'t work.\' when passed a number that is not divisible only by 2, 3, and 5', function () {
    let expected = 'Rutabagas! That doesn\'t work!';
    let actual = launchOutput(7);
    assert.strictEqual(actual, expected);
  });
  //testing code here...

});