export interface BoundingBoxTaskSolution {
  bounding_boxes: BoundingBox[];
}

interface BoundingBox {
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;
}