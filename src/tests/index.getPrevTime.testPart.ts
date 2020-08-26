import { getPrevFrameTime } from "../animationsUtils";
import { Animation, Frame } from "../types";

export default () => {
  test("Prev frame time 1", () => {
    const animation = new Animation({
      1: new Frame(1, []),
      3: new Frame(3, []),
      5: new Frame(5, []),
    });
    expect(getPrevFrameTime(2, animation)).toBe(1);
  });

  test("Prev frame time 2", () => {
    const animation = new Animation({
      1: new Frame(1, []),
      3: new Frame(3, []),
      5: new Frame(5, []),
    });
    expect(getPrevFrameTime(3, animation)).toBe(1);
  });

  test("Prev frame time 3", () => {
    const animation = new Animation({
      1: new Frame(1, []),
      3: new Frame(3, []),
      5: new Frame(5, []),
    });
    expect(getPrevFrameTime(7, animation)).toBe(5);
  });

  test("Prev frame time big 1", () => {
    const animation = new Animation({
      1: new Frame(1, []),
      3: new Frame(3, []),
      5: new Frame(5, []),
      10: new Frame(10, []),
      12: new Frame(12, []),
      14: new Frame(14, []),
    });
    expect(getPrevFrameTime(7, animation)).toBe(5);
  });

  test("Prev frame time big 2", () => {
    const animation = new Animation({
      1: new Frame(1, []),
      3: new Frame(3, []),
      5: new Frame(5, []),
      10: new Frame(10, []),
      12: new Frame(12, []),
      14: new Frame(14, []),
    });
    expect(getPrevFrameTime(11, animation)).toBe(10);
  });
};
