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
  type: TaskTypes;
}

export type ProxylessTaskParams<T> = Omit<T, "proxy">;

export type ProxyRequiredTaskParams<T> = T & { proxy: string };

/**
 * @classdesc BaseTask for Capsolver tasks
 * @class
 */
export abstract class BaseTask {
  protected type: TaskTypes;
  constructor({ type }: BaseParams) {
    this.type = type;
  }
}