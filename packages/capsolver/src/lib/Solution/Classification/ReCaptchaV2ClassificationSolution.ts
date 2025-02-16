/**
 * @see {@link https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html#response-example}
 */
interface MultiSolution {
  "objects": number[];
  "size": number;
  "type": string;
}

/**
 * @see {@link https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html#response-example}
 */
interface SingleSolution {
  "hasObject": boolean;
  "size": number;
  "type": string;
}

export type ReCaptchaV2ClassificationSolution = MultiSolution | SingleSolution;
