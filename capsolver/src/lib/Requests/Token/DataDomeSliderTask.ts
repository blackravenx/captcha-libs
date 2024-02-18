import type {
  ProxyCredentials, ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import { BaseTask } from "../_BaseTaskRequest";

type _DataDomeSliderTaskParams = Partial<ProxyCredentials> & {
  captchaUrl: string;
  proxy?: string;
  userAgent: string;
};

type DataDomeSliderTaskParams = ProxyRequiredTaskParams<_DataDomeSliderTaskParams>;

/**
 * @classdesc DataDome: solving DataDome captcha
 * @class
 * @extends {BaseTask}
 * {@link https://docs.capsolver.com/guide/antibots/datadome.html}
 */
export class DataDomeSliderTask extends BaseTask implements _IsTaskType, _DataDomeSliderTaskParams {

  /**
  * @type {boolean} _isDataDomeSliderTask - Only used for correct method overloading intellisense
  */
  readonly _isDataDomeSliderTask: _IsTaskType["_isDataDomeSliderTask"] = true;

  /**
   * Create DataDome: solving DataDome captcha
   * {@link https://docs.capsolver.com/guide/antibots/dataDome.html}
   * @param {object} params -	DataDomeSliderTaskParams
   * @param {string} [params.captchaUrl] - If the url contains t=bv that means that your ip must be banned, t should be t=fe
   * @param {string} [params.userAgent] - You need to keep your userAgent consistent with the one used to request the captchaUrl. Currently, we only support two fixed userAgents.
   * @param {string} [params.proxy] - proxy
   * @param {string} [params.proxyAddress] - proxyAddress
   * @param {string} [params.proxyLogin] - proxyLogin
   * @param {string} [params.proxyPassword] - proxyPassword
   * @param {string} [params.proxyPort] - proxyPort
   * @param {string} [params.proxyType] - proxyType
   */
  constructor({
    captchaUrl, userAgent, proxy, proxyType, proxyAddress, proxyLogin, proxyPassword, proxyPort
  }: DataDomeSliderTaskParams) {
    super({ type: "DataDomeSliderTask" });
    this.captchaUrl = captchaUrl;
    this.userAgent = userAgent;
    this.proxy = proxy;
    this.proxyAddress = proxyAddress;
    this.proxyLogin = proxyLogin;
    this.proxyPort = proxyPort;
    this.proxyType = proxyType;
    this.proxyPassword = proxyPassword;
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
  proxy?: string;
  proxyAddress?: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort?: number;
  proxyType?: ProxyCredentials["proxyType"];
}