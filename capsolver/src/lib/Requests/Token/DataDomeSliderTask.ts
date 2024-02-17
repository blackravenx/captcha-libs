import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type DataDomeSliderTaskParams = Omit<BaseTask, "_endpoint" | "type"> & ProxyRequiredTaskParams<{
  captchaUrl: string;
  userAgent: string;
}>;

/**
 * @classdesc DataDome: solving DataDome captcha
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/datadome.html}
 */
export class DataDomeSliderTask extends BaseTask implements DataDomeSliderTaskParams, _IsTaskType {

  /**
 * @type {boolean} _isDataDomeSliderTask - Only used for correct method overloading intellisense
 */
  readonly _isDataDomeSliderTask = true;

  /**
   * Create DataDome: solving DataDome captcha
   * {@link https://docs.capsolver.com/guide/antibots/dataDome.html}
   * @param {object} params -	DataDomeSliderTaskParams
   * @param {string} [params.captchaUrl] - If the url contains t=bv that means that your ip must be banned, t should be t=fe
   * @param {string} [params.userAgent] - You need to keep your userAgent consistent with the one used to request the captchaUrl. Currently, we only support two fixed userAgents.
   * @param {string} [params.proxy] - proxy
   */
  constructor({
    captchaUrl, userAgent, proxy
  }: DataDomeSliderTaskParams) {
    super({ type: "DataDomeSliderTask" });
    this.captchaUrl = captchaUrl;
    this.userAgent = userAgent;
    this.proxy = proxy;
  }

  /**
   * @type {string} captchaUrl - If the url contains t=bv that means that your ip must be banned, t should be t=fe
   */
  captchaUrl: string;

  /**
   * @type {string} userAgent - You need to keep your userAgent consistent with the one used to request the captchaUrl. Currently, we only support two fixed userAgents.
   */
  userAgent: string;

  /**
   * @type {string} proxy - proxy
   */
  proxy: string;
}