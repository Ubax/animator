import hasFrameTests from "./index.hasFrame.testPart";
import getExistingFrameTests from "./index.getExisitingFrame.testPart";
import getFrameTests from "./index.getFrame.testPart";
import getNextTimeTests from "./index.getNextTime.testPart";
import getPrevTimeTests from "./index.getPrevTime.testPart";
import { Position2D } from "../types";
import { generateNexPositionCalc } from "../animationsUtils";

test("1 + 1 = 2", () => {
  expect(1 + 1).toBe(2);
});

describe("Has frame", hasFrameTests);
describe("Get existing frame", getExistingFrameTests);
describe("Get frame", getFrameTests);
describe("Get next frame", getNextTimeTests);
describe("Get prev frame", getPrevTimeTests);

describe("Calculate position", () => {
  test("Test calculation same delta", () => {
    const startPosition = new Position2D(1, 1);
    const endPosition = new Position2D(3, 3);
    const ratio = 1 / 2;

    const calculator = generateNexPositionCalc(ratio);

    expect(calculator(startPosition, endPosition)).toEqual({ x: 2, y: 2 });
  });

  test("Test calculation different delta", () => {
    const startPosition = new Position2D(1, 1);
    const endPosition = new Position2D(6, 11);
    const ratio = 1 / 5;

    const calculator = generateNexPositionCalc(ratio);

    expect(calculator(startPosition, endPosition)).toEqual({ x: 2, y: 3 });
  });
});
