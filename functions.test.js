const functions = require("./functions");

beforeEach(() => {
  jest.useFakeTimers();
  jest.setTimeout(100000);
});

afterEach(() => {
  jest.clearAllTimers();
});

test("Adds 2 + 2 equal 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("is null", () => {
  expect(functions.isNull()).toBeNull();
});

test("to be falsy", () => {
  expect(functions.checkValue(null)).toBeFalsy();
});

// user should be cheeseburger
test("User should be cheeseburger", () => {
  expect(functions.createUser()).toEqual({
    name: "Cheesburger",
    age: 4,
  });
});

// less than and greater than
// toBeLessThanOrEqual
test("Should be under 1600", () => {
  const load1 = 800;
  const load2 = 600;
  expect(load1 + load2).toBeLessThan(1600);
});

// regex
test("There is no i in team", () => {
  expect("team").not.toMatch(/I/i);
});

//arrays
test("Admin should be in username", () => {
  usernames = ["john", "karen", "admin"];
  expect(usernames).toContain("admin");
});

// working with async data

// promise
test("User fetched name should be Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

// async
test("User fetched name should be Leanne Graham with async", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toEqual("Leanne Graham");
});
