import { Animation, Frame } from "./types";
import { getExistingFrame } from "./index";

export default () => {
  test("Frame exists 1", () => {
    const frames = {
      0: new Frame(0, []),
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    const time = 0;

    expect(getExistingFrame(time, animation).time).toBe(time);
    expect(Array.isArray(getExistingFrame(time, animation).elements)).toBe(true);
    expect(getExistingFrame(time, animation).elements.length).toBe(0);
  });

  test("Frame exists 1", () => {
    const frames = {
      0: new Frame(0, []),
      1: new Frame(1, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    const time = 1;

    expect(getExistingFrame(time, animation).time).toBe(time);
    expect(Array.isArray(getExistingFrame(time, animation).elements)).toBe(true);
    expect(getExistingFrame(time, animation).elements.length).toBe(0);
  });

  test("Frame exists 1.25", () => {
    const frames = {
      0: new Frame(0, []),
      1.25: new Frame(1.25, []),
      2: new Frame(2, []),
    };
    const animation = new Animation(frames);
    const time = 1.25;

    expect(getExistingFrame(time, animation).time).toBe(time);
    expect(Array.isArray(getExistingFrame(time, animation).elements)).toBe(true);
    expect(getExistingFrame(time, animation).elements.length).toBe(0);
  });
};
