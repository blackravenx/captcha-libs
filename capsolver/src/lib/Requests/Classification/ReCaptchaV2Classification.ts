import {
  BaseTask, type BaseParams, _IsTaskType
} from "../_BaseTaskRequest";

type ReCaptchaClassificationParams = Omit<BaseParams, "_endpoint" | "type"> & {
  image: string;
  question: string;
  websiteKey?: string;
  websiteURL?: string;
};

/**
 * @classdesc ReCaptcha Images Recognize
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html}
 */
export class ReCaptchaV2Classification extends BaseTask implements ReCaptchaClassificationParams, _IsTaskType {
  readonly _isReCaptchaV2Classification = true;

  /**
   * Create ReCaptchaV2Classification
   * {@link https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html}
   * @param {Object} params - ReCaptchaClassificationParams
   * @param {string} [params.question] - please refer to the following list of questions.
   * @param {string} [params.image] - base64 image string
   * @param {string=} [params.websiteKey] - Website key to improve accuracy
   * @param {string=} [params.websiteURL] - 	Page source url to improve accuracy
   */
  constructor({
    websiteKey, question, websiteURL, image
  }: ReCaptchaClassificationParams) {
    super({ type: "ReCaptchaV2Classification" });
    this.image = image;
    this.websiteKey = websiteKey;
    this.websiteURL = websiteURL;
    this.question = question;
  }

  /**
   * @type {string} question - please refer to the following list of questions.
   * {@link https://docs.capsolver.com/guide/recognition/ReCaptchaClassification.html}
   */
  question: string;

  /**
   * @type {string} image - base64 image string
   */
  image: string;

  /**
   * @type {string=} websiteKey - Website key to improve accuracy
   */
  websiteKey?: string;

  /**
   * @type {string=} websiteURL - 	Page source url to improve accuracy
   */
  websiteURL?: string;
}
