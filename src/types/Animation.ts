import { Frame, VisualElement } from ".";

export default class Animation<ElementType extends VisualElement> {
  constructor(public frames: Record<number, Frame<ElementType>>) {}
}
