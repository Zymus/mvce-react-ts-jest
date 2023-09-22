var helloWorld = require('./helloWorld');

test("helloWorld", function () {
  var value = helloWorld();
  expect(value).toBe("helloWorld");
});
