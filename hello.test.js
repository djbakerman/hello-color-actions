const hello = require("./hello");
describe("My hello", () => {
  test("works", () => {
    expect(hello.hello()).toEqual("Hello World from my home in Leesburg, VA! I'ts cold out!");
  });
});
