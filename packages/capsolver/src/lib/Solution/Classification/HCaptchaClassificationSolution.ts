/**
 * @see {@link https://docs.capsolver.com/guide/recognition/HCaptchaClassification.html#example-response}
 */
export interface HCaptchaClassificationSolution {
  "box": Array<number>;
  "imageSize": Array<number>;
  "objects": Array<boolean>;
  "tags": Array<string>;
}
