import { Animation, Frame, Position2D, VisualElement } from "../types";
import { getFrame } from "../";

const testFrame = (gottenFrame: Frame, expectedFrame: Frame) => {
  expect(gottenFrame.time).toBe(expectedFrame.time);
  expect(Array.isArray(gottenFrame.elements)).toBe(true);
  expect(gottenFrame.elements.length).toBe(expectedFrame.elements.length);
  expect(gottenFrame.elements).toEqual(expectedFrame.elements);
};

const animation = new Animation({
  1: new Frame(1, [new VisualElement("0x", new Position2D(0, 0))]),
  3: new Frame(1, [new VisualElement("0x", new Position2D(2, 2))]),
  5: new Frame(1, [
    new VisualElement("0x", new Position2D(2, 2)),
    new VisualElement("1x2", new Position2D(1, 1)),
  ]),
  7: new Frame(1, [
    new VisualElement("0x", new Position2D(4, 0)),
    new VisualElement("1x2", new Position2D(0, 11)),
  ]),
  8: new Frame(1, [
    new VisualElement("0x", new Position2D(0, 0)),
    new VisualElement("1x2", new Position2D(0, 0)),
  ]),
  11: new Frame(1, [
    new VisualElement("0x", new Position2D(3, 6)),
    new VisualElement("1x2", new Position2D(9, 15)),
  ]),
});

export default () => {
  test("Exisiting frame", () => {
    const time = 1;

    testFrame(getFrame(time, animation), animation.frames[time]);
  });

  test("Not exisiting frame before any", () => {
    const time = 0;
    testFrame(getFrame(time, animation), new Frame(time, []));
  });

  test("Not exisiting frame after all", () => {
    const maxTime = 11
    const time = maxTime + 1;
    testFrame(getFrame(time, animation), animation.frames[maxTime]);
  });

  test("Frame between", () => {
    const time = 2;

    const frame = new Frame(time, [
      new VisualElement("0x", new Position2D(1, 1)),
    ]);

    testFrame(getFrame(time, animation), frame);
  });

  test("Frame between multiple objects", () => {
    const time = 6;

    const frame = new Frame(time, [
      new VisualElement("0x", new Position2D(3, 1)),
      new VisualElement("1x2", new Position2D(0.5, 6)),
    ]);

    testFrame(getFrame(time, animation), frame);
  });

  test("Frame between multiple objects 1/3", () => {
    const time = 9;

    const frame = new Frame(time, [
      new VisualElement("0x", new Position2D(1, 2)),
      new VisualElement("1x2", new Position2D(3, 5)),
    ]);

    testFrame(getFrame(time, animation), frame);
  });


  test("Object in next and not prev", () => {
    const time = 4;

    const frame = new Frame(time, [
      new VisualElement("0x", new Position2D(2, 2)),
    ]);

    testFrame(getFrame(time, animation), frame);
  });
};
