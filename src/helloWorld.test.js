const helloWorld = require('./helloWorld');

test("helloWorld", () => {
    let value = helloWorld();
    expect(value).toBe("helloWorld");
});
