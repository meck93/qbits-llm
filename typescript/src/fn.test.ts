import { sum } from "./fn";

describe("sum", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(2, 3)).toBe(5);
    expect(sum(-1, 5)).toBe(4);
    expect(sum(0, 0)).toBe(0);
  });

  it("TODO: replace with copilot docs", () => {
    expect(sum(2, 2)).toBe(3); // TODO: fix this
  });

  // TODO: generate more tests
});
