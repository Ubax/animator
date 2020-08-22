export class Position2D{
  constructor(public x: number, public y: number){}
}

export class VisualElement{
  constructor(public id: string, public position: Position2D){}
}

export class Frame {
  constructor(public time: number, public elements: VisualElement[]){}
}

export class Animation{
  constructor(public frames: Record<number, Frame>){}
}