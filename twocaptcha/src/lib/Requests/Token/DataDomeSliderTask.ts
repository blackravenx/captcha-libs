import type {
  ProxyRequiredTaskParams, _IsTaskType
} from "../_BaseTaskRequest";
import type { DataDomeSliderTaskBaseParams } from "./Base/_DataDomeSliderTaskBase";
import { DataDomeSliderTaskBase } from "./Base/_DataDomeSliderTaskBase";

type DataDomeSliderTaskParams = ProxyRequiredTaskParams<DataDomeSliderTaskBaseParams>;

/**
 * Token-based method for automated solving of DataDome.
 * @extends {DataDomeSliderTaskBase}
 * {@link https://2captcha.com/api-docs/datadome-slider-captcha}
 */
export class DataDomeSliderTask extends DataDomeSliderTaskBase implements _IsTaskType {

  /**
  * @type {boolean} _isDataDomeSliderTask - Only used for correct method overloading intellisense
  */
  readonly _isDataDomeSliderTask: _IsTaskType["_isDataDomeSliderTask"] = true;

  /**
  * Create DataDomeSliderTask
  * {@link https://2captcha.com/api-docs/datadome-slider-captcha}
  * @param {Object} params - DataDomeSliderTaskParams
  * @param {string} [params.websiteURL] - The full URL of target web page where the captcha is loaded. We do not open the page, not a problem if it is available only for authenticated users
  * @param {string} [params.captchaUrl] - The value of the src parameter for the iframe element containing the captcha on the page.
  * @param {string} [params.userAgent] - User-Agent of your browser will be used to load the captcha. Use only modern browser's User-Agents. It is important to use the supported User-Agent values. @see https://2captcha.com/api-docs/datadome-slider-captcha
  * @param {string} [params.proxyAddress] -	Proxy IP address or hostname
  * @param {string} [params.proxyLogin] - Login for basic authentication on the proxy
  * @param {string} [params.proxyPassword] - Password for basic authentication on the proxy
  * @param {string} [params.proxyType] - Type of your proxy: HTTP, HTTPS, SOCKS4, SOCKS5
  * @param {string} [params.proxyPort] - Proxy port
  */
  constructor(params: DataDomeSliderTaskParams) {
    super(params, "DataDomeSliderTask");
  }
}