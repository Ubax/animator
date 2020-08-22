import { Animation, Frame } from "./types";

export const hasFrame = (time: number, animation: Animation): boolean =>
  !!animation.frames[time];

export const getExistingFrame = (time: number, animation: Animation): Frame => animation.frames[time]
