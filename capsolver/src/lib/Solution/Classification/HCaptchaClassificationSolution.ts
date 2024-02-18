export interface HCaptchaClassificationSolution {
  box: Array<number>;
  imageSize: Array<number>;
  objects: Array<boolean>;
  tags: Array<string>;
}
