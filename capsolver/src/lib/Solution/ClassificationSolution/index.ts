import type { AwsWafClassificationSolution } from "./AwsWafClassificationSolution";
import type { FunCaptchaClassificationSolution } from "./FunCaptchaClassificationSolution";
import type { HCaptchaClassificationSolution } from "./HCaptchaClassificationSolution";
import type { ImageToTextSolution } from "./ImageToTextSolution";
import type { ReCaptchaV2ClassificationSolution } from "./ReCaptchaV2ClassificationSolution";

export type ClassificationSolutions = AwsWafClassificationSolution & FunCaptchaClassificationSolution & HCaptchaClassificationSolution & ImageToTextSolution & ReCaptchaV2ClassificationSolution;
