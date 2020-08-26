import { Animation, Frame, Position2D } from "./types";

export const hasFrame = (time: number, animation: Animation): boolean =>
  !!animation.frames[time];

export const getFirstFrameTime = (animaton: Animation): number =>
  Math.min(...Object.keys(animaton.frames).map((key) => parseFloat(key)));

export const getLastFrameTime = (animaton: Animation): number =>
  Math.max(...Object.keys(animaton.frames).map((key) => parseFloat(key)));

export const getExistingFrame = (time: number, animation: Animation): Frame =>
  animation.frames[time];

export const getNextFrameTime = (
  time: number,
  animation: Animation
): number => {
  const sortedTimes = Object.keys(animation.frames)
    .map((key) => parseFloat(key))
    .sort((a, b) => a - b);
  const nextTime = sortedTimes.find((frameTime) => time < frameTime);
  if (nextTime === undefined) {
    throw new Error("There is no next frame");
  }
  return nextTime;
};

export const getPrevFrameTime = (
  time: number,
  animation: Animation
): number => {
  const sortedTimes = Object.keys(animation.frames)
    .map((key) => parseFloat(key))
    .sort((a, b) => a - b)
    .reverse();
  const prevTime = sortedTimes.find((frameTime) => time > frameTime);
  if (prevTime === undefined) {
    throw new Error("There is no previous frame");
  }
  return prevTime;
};

export const getElementsIds = (frame: Frame): string[] =>
  frame.elements.map((element) => element.id);

export const generateNexPositionCalc = (ratio: number) => {
  const calculateNextValue = (prevValue: number, nextValue: number): number =>
    prevValue + (nextValue - prevValue) * ratio;

  return (prevPosition: Position2D, nextPosition: Position2D): Position2D =>
    new Position2D(
      calculateNextValue(prevPosition.x, nextPosition.x),
      calculateNextValue(prevPosition.y, nextPosition.y)
    );
};
