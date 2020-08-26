import { Animation, Frame } from "../types";
import { hasFrame } from "../animationsUtils";

export default () => {
  test("Frame exists", () => {
    const frames = {
      0: new Frame(0, []),
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(0, animation)).toBe(true);
  });
  test("Frame doesnot exists", () => {
    const frames = {
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(0, animation)).toBe(false);
  });

  test("Frame exists with real time", () => {
    const frames = {
      0.25: new Frame(0.25, []),
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(0.25, animation)).toBe(true);
  });

  test("Frame doesnot exists real time", () => {
    const frames = {
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(1.99, animation)).toBe(false);
  });

  test("Frame doesnot exists negative time", () => {
    const frames = {
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(-1, animation)).toBe(false);
  });

  test("Frame doesnot exists big time", () => {
    const frames = {
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    expect(hasFrame(10000, animation)).toBe(false);
  });
};
