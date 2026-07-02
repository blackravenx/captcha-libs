const _TaskTypes = [
  "ImageToTextTask",
  "RecaptchaV2TaskProxyless",
  "RecaptchaV2Task",
  "RecaptchaV2EnterpriseTask",
  "RecaptchaV2EnterpriseTaskProxyless",
  "RecaptchaV3TaskProxyless",
  "TurnstileTask",
  "TurnstileTaskProxyless"
] as const;

export type TaskTypes = typeof _TaskTypes[number];

/**
 * @type {WireMethods} WireMethods - CaptchaAI in.php `method` param values
 * @see {@link https://docs.captchaai.com}
 */
export type WireMethods = "base64" | "turnstile" | "userrecaptcha";

export interface BaseParams { "type": TaskTypes }

export type ProxyTypes = "http" | "socks4" | "socks5";

export type ProxyCredentials = {
  "proxyAddress": string;
  "proxyLogin"?: string;
  "proxyPassword"?: string;
  "proxyPort": number;
  "proxyType": ProxyTypes;
};

export type ProxyRequiredTaskParams<T> = ProxyCredentials & T;

export type ProxylessTaskParams<T> = Omit<T, keyof ProxyCredentials>;

/**
 * @type {_IsTaskType} _IsTaskType - Only used for correct method overloading intellisense
 */
export type _IsTaskType = { readonly [type in TaskTypes as `_is${type}`]?: boolean };

//
// @classdesc BaseTask for CaptchaAI tasks
// @class
//
export abstract class BaseTask {

  /**
  * @type {TaskTypes} type - task type
  */
  protected type: TaskTypes;

  /**
  * @type {WireMethods} method - CaptchaAI in.php `method` param value
  */
  protected method: WireMethods;

  constructor ({ type }: BaseParams, method: WireMethods) {
    this.type = type;

    this.method = method;
  }
}
