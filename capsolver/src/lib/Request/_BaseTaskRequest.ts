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
  "GeeTestTask",
  "GeeTestTaskProxyLess"
] as const;

export type TaskTypes = typeof _TaskTypes[keyof typeof _TaskTypes];

export interface BaseParams {
  _endpoint?: string;
  type: TaskTypes;
}

export type ProxylessTaskParams<T> = Omit<T, "proxy">;

export type ProxyRequiredTaskParams<T> = T & { proxy: string };

/**
 * @classdesc BaseTask for Capsolver tasks
 * @class
 */
export class BaseTask {

  /**
   * @type {TaskTypes} type - task type
   */
  protected type: TaskTypes;

  /**
   * @type {string} _endpoint - special endpoint for task request
   */
  public _endpoint = "createTask";

  constructor(params: BaseParams) {
    const {
      type, _endpoint = "createTask"
    } = params || { _endpoint: "createTask" };

    this.type = type;
    this._endpoint = _endpoint;
  }
}