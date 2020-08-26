import { Animation, Frame } from "./types";
import {
  hasFrame,
  getExistingFrame,
  getFirstFrameTime,
  getLastFrameTime,
  getPrevFrameTime,
  getNextFrameTime,
  getElementsIds,
  generateNexPositionCalc,
} from "./animationsUtils";
import { intersection } from "lodash";
export * from "./types";

export const getFrame = (time: number, animation: Animation): Frame => {
  if (hasFrame(time, animation)) {
    return getExistingFrame(time, animation);
  }
  if (getFirstFrameTime(animation) > time) {
    return new Frame(time, []);
  }
  if (getLastFrameTime(animation) < time) {
    return getExistingFrame(getLastFrameTime(animation), animation);
  }
  const prevTime = getPrevFrameTime(time, animation);
  const nextTime = getNextFrameTime(time, animation);

  const prevFrame = getExistingFrame(prevTime, animation);

  const nextFrame = getExistingFrame(nextTime, animation);

  const ids = intersection(
    getElementsIds(prevFrame),
    getElementsIds(nextFrame)
  );

  const ratio = (time - prevTime) / (nextTime - prevTime);

  const calculatePosition = generateNexPositionCalc(ratio);

  const prevFrameElementsExisitingInNextFrame = prevFrame.elements.filter(
    (element) => ids.includes(element.id)
  );

  const prevFrameElementsNotExisitingInNextFrame = prevFrame.elements.filter(
    (element) => !ids.includes(element.id)
  );

  const elements = [
    ...prevFrameElementsNotExisitingInNextFrame,
    ...prevFrameElementsExisitingInNextFrame.map((element) => ({
      ...element,
      position: calculatePosition(
        element.position,
        nextFrame.elements.find((nextElement) => element.id === nextElement.id)!
          .position
      ),
    })),
  ];

  return new Frame(time, elements);
};
