import type { _IsTaskType } from "./_BaseTaskRequest";

import { BaseTask } from "./_BaseTaskRequest";

interface ReCaptchaClassificationParams {
  "image": string;
  "question": string;
}

/**
 * @classdesc reCAPTCHA image grid recognition (picture only, no token)
 * @class
 * @extends {BaseTask}
 * @see {@link https://solvecha.com/docs}
 */
export class ReCaptchaV2Classification extends BaseTask implements ReCaptchaClassificationParams, _IsTaskType {

  /**
   * @type {boolean} _isReCaptchaV2Classification - Only used for correct method overloading intellisense
   */
  readonly _isReCaptchaV2Classification: _IsTaskType["_isReCaptchaV2Classification"] = true;

  /**
   * Create ReCaptchaV2Classification
   * @param {Object} params - ReCaptchaClassificationParams
   * @param {string} [params.question] - reCAPTCHA object code such as /m/04_sv, or the instruction as words
   * @param {string} [params.image] - base64 image string
   */
  constructor ({ question, image }: ReCaptchaClassificationParams) {
    super({ "type": "ReCaptchaV2Classification" });

    this.image = image;

    this.question = question;
  }

  /**
   * @type {string} question - reCAPTCHA object code such as /m/04_sv, or the instruction as words
   */
  question: string;

  /**
   * @type {string} image - base64 image string
   */
  image: string;
}
