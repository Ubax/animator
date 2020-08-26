import { VisualElement } from ".";

export default class Frame<ElementType extends VisualElement> {
  constructor(public time: number, public elements: ElementType[]) {}
}
