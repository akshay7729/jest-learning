const reverseString = require("./reverseString");

// check if function exists

test("Check if reverse string exists", () => {
  expect(reverseString).toBeDefined();
});

test("string reverses", () => {
  expect(reverseString("hello")).toEqual("olleh");
});
