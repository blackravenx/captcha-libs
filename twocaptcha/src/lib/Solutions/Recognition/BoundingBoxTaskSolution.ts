interface BoundingBox {
  xMax: number;
  xMin: number;
  yMax: number;
  yMin: number;
}

/**
 * {@link https://2captcha.com/api-docs/bounding-box}
 */
export interface BoundingBoxTaskSolution {
  bounding_boxes: BoundingBox[];
}