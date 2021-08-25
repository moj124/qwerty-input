import { isInputStrong } from "./isInputStrong";

test("isInputStrong determines of the string is a strong password", () => {
  expect(isInputStrong("hello")).toBe(false);
  expect(isInputStrong("hll")).toBe(false);
  expect(isInputStrong("HELLO")).toBe(false);
  expect(isInputStrong("RhYtHm")).toBe(false);
  expect(isInputStrong("aQasdsadsadsa#@")).toBe(true);
  expect(isInputStrong("aQaQa#@")).toBe(true);
});
