interface Coordinate {
  "x": number;
  "y": number;
}

/**
 * @see {@link https://2captcha.com/api-docs/coordinates}
 */
export interface CoordinatesTaskSolution { "coordinates": Coordinate[] }
