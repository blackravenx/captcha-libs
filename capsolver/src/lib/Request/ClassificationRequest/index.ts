import type { FunCaptchaClassification } from "./FunCaptchaClassification";
import type { AwsWafClassification } from "./AwsWafClassification";
import type { HCaptchaClassification } from "./HCaptchaClassification";
import type { ImageToTextTask } from "./ImageToTextTask";
import type { ReCaptchaV2Classification } from "./ReCaptchaV2Classification";

export type ClassificationRequests = AwsWafClassification & FunCaptchaClassification & HCaptchaClassification & ImageToTextTask & ReCaptchaV2Classification;

export {
  AwsWafClassification,
  FunCaptchaClassification,
  HCaptchaClassification,
  ImageToTextTask,
  ReCaptchaV2Classification
};