interface Coordinate {
  x: number;
  y: number;
}

/**
 * {@link https://2captcha.com/api-docs/draw-around}
 */
export interface DrawAroundTaskSolution {
  canvas: Coordinate[][];
}