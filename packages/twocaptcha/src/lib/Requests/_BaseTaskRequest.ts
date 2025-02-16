const _TaskTypes = [
  "ImageToTextTask",
  "TextCaptchaTask",
  "RotateTask",
  "CoordinatesTask",
  "GridTask",
  "DrawAroundTask",
  "BoundingBoxTask",
  "AudioTask",
  "RecaptchaV2TaskProxyless",
  "RecaptchaV2Task",
  "RecaptchaV2EnterpriseTask",
  "RecaptchaV2EnterpriseTaskProxyless",
  "RecaptchaV3TaskProxyless",
  "HCaptchaTask",
  "HCaptchaTaskProxyless",
  "FunCaptchaTask",
  "FunCaptchaTaskProxyless",
  "GeeTestTask",
  "GeeTestTaskProxyless",
  "TurnstileTask",
  "TurnstileTaskProxyless",
  "CapyTask",
  "CapyTaskProxyless",
  "KeyCaptchaTask",
  "KeyCaptchaTaskProxyless",
  "LeminTask",
  "LeminTaskProxyless",
  "AmazonTask",
  "AmazonTaskProxyless",
  "AntiCyberSiAraTask",
  "AntiCyberSiAraTaskProxyless",
  "MtCaptchaTask",
  "MtCaptchaTaskProxyless",
  "CutCaptchaTask",
  "CutCaptchaTaskProxyless",
  "DataDomeSliderTask",
  "FriendlyCaptchaTask",
  "FriendlyCaptchaTaskProxyless",
  "TencentTask",
  "TencentTaskProxyless",
  "AtbCaptchaTask",
  "AtbCaptchaTaskProxyless"
] as const;

export type TaskTypes = typeof _TaskTypes[number];

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
// @classdesc BaseTask for Capsolver tasks
// @class
//
export abstract class BaseTask {

  /**
  * @type {TaskTypes} type - task type
  */
  protected type: TaskTypes;

  constructor ({ type }: BaseParams) {
    this.type = type;
  }
}
