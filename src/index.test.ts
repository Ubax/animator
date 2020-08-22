import hasFrameTests from "./index.hasFrame.testPart";
import getExistingFrameTests from "./index.getExisitingFrame.testPart";

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

describe("Has frame", hasFrameTests);
describe("Get existing frame", getExistingFrameTests);
