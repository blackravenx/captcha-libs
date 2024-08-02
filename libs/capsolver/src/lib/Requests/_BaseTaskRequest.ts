const _TaskTypes = [
  "HCaptchaClassification",
  "ImageToTextTask",
  "ReCaptchaV2EnterpriseTask",
  "ReCaptchaV2EnterpriseTaskProxyLess",
  "ReCaptchaV2Task",
  "ReCaptchaV2TaskProxyLess",
  "ReCaptchaV3EnterpriseTask",
  "ReCaptchaV3EnterpriseTaskProxyLess",
  "ReCaptchaV3M1TaskProxyLess",
  "ReCaptchaV3Task",
  "ReCaptchaV3TaskProxyLess",
  "FunCaptchaClassification",
  "ImageToTextTask",
  "HCaptchaClassification",
  "ReCaptchaV2Classification",
  "AwsWafClassification",
  "MtCaptchaTask",
  "MtCaptchaTaskProxyLess",
  "DataDomeSliderTask",
  "AntiAwsWafTask",
  "AntiAwsWafTaskProxyLess",
  "AntiCyberSiAraTask",
  "AntiCyberSiAraTaskProxyLess",
  "AntiImpervaTask",
  "AntiImpervaTaskProxyLess",
  "AntiCloudflareTask",
  "AntiAkamaiBMPTask",
  "AntiAkamaiWebTask",
  "HCaptchaTask",
  "HCaptchaTaskProxyLess",
  "FunCaptchaTaskProxyLess",
  "FunCaptchaTask",
  "GeeTestTask",
  "GeeTestTaskProxyLess",
  "VisionEngine",
  "AntiTurnstileTaskProxyLess"
] as const;

export type TaskTypes = typeof _TaskTypes[number];

export interface BaseParams {
  _endpoint?: string;
  type: TaskTypes;
}

type ProxyTypes = "http" | "https" | "socks5";

export interface ProxyCredentials {
  proxyAddress: string;
  proxyLogin?: string;
  proxyPassword?: string;
  proxyPort: number;
  proxyType: ProxyTypes;
}

export type ProxylessTaskParams<T> = Omit<T, keyof ProxyCredentials | "proxy">;

export type ProxyRequiredTaskParams<T> = ProxyCredentials & T & { proxy?: never } | T & { [PC in keyof ProxyCredentials]?: never } & { proxy: string };

/**
 * @type {_IsTaskType} _IsTaskType - Only used for correct method overloading intellisense
 */
export type _IsTaskType = { readonly [type in TaskTypes as `_is${type}`]?: boolean };

/**
 * @classdesc BaseTask for Capsolver tasks
 * @class
 */
export abstract class BaseTask {

  /**
   * @type {TaskTypes} type - task type
   */
  protected type: TaskTypes;

  /**
   * @type {string} _endpoint - special endpoint for task request
   */
  readonly _endpoint: string = "createTask";

  constructor(params: BaseParams) {
    const {
      type, _endpoint = "createTask"
    } = params || { _endpoint: "createTask" };

    this.type = type;
    this._endpoint = _endpoint;
  }
}