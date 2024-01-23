import { FunCaptchaClassificationSolution } from "./FunCaptchaClassificationSolution";
import { AwsWafClassificationSolution } from "./AwsWafClassificationSolution";
import { HCaptchaClassificationSolution } from "./HCaptchaClassificationSolution";
import { ImageToTextSolution } from "./ImageToTextSolution";
import { ReCaptchaV2ClassificationSolution } from "./ReCaptchaV2ClassificationSolution";

export type ClassificationSolutions = AwsWafClassificationSolution & FunCaptchaClassificationSolution & HCaptchaClassificationSolution & ImageToTextSolution & ReCaptchaV2ClassificationSolution;

export {
  AwsWafClassificationSolution,
  FunCaptchaClassificationSolution,
  HCaptchaClassificationSolution,
  ImageToTextSolution,
  ReCaptchaV2ClassificationSolution
};
