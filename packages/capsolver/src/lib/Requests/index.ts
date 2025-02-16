import type {
  AwsWafClassification,
  FunCaptchaClassification,
  HCaptchaClassification,
  ImageToTextTask,
  ReCaptchaV2Classification,
  VisionEngine
} from "./Classification";

import type {
  AntiAkamaiPowTask, AntiAkamaiBMPTask, AntiAkamaiSensorTask, AntiAkamaiWebTask, AntiAwsWafTask, AntiAwsWafTaskProxyLess, AntiCloudflareChallengeTask, AntiCloudflareTurnstileTask, AntiCyberSiAraTask, AntiCyberSiAraTaskProxyLess, AntiImpervaTask, AntiImpervaTaskProxyLess, DataDomeSliderTask, FunCaptchaTaskProxyLess, FunCaptchaTask, GeeTestTask, GeeTestTaskProxyLess, GeeTestV3Task, GeeTestV3TaskProxyLess, GeeTestV4Task, GeeTestV4TaskProxyLess, HCaptchaTask, HCaptchaTaskProxyLess, MtCaptchaTask, MtCaptchaTaskProxyLess, ReCaptchaV2EnterpriseTask, ReCaptchaV2EnterpriseTaskProxyLess, ReCaptchaV2Task, ReCaptchaV2TaskProxyLess, ReCaptchaV3EnterpriseTask, ReCaptchaV3EnterpriseTaskProxyLess, ReCaptchaV3M1TaskProxyLess, ReCaptchaV3Task, ReCaptchaV3TaskProxyLess,
  AntiTurnstileTaskProxyLess
} from "./Token";

export type Requests = AntiAkamaiBMPTask | AntiAkamaiPowTask | AntiAkamaiSensorTask | AntiAkamaiWebTask | AntiAwsWafTask | AntiAwsWafTaskProxyLess | AntiCloudflareChallengeTask | AntiCloudflareTurnstileTask | AntiCyberSiAraTask | AntiCyberSiAraTaskProxyLess | AntiImpervaTask | AntiImpervaTaskProxyLess | AntiTurnstileTaskProxyLess | AwsWafClassification | DataDomeSliderTask | FunCaptchaClassification | FunCaptchaTask | FunCaptchaTaskProxyLess | GeeTestTask | GeeTestTaskProxyLess | GeeTestV3Task | GeeTestV3TaskProxyLess | GeeTestV4Task | GeeTestV4TaskProxyLess | HCaptchaClassification | HCaptchaTask | HCaptchaTaskProxyLess | ImageToTextTask | MtCaptchaTask | MtCaptchaTaskProxyLess | ReCaptchaV2Classification | ReCaptchaV2EnterpriseTask | ReCaptchaV2EnterpriseTaskProxyLess | ReCaptchaV2Task | ReCaptchaV2TaskProxyLess | ReCaptchaV3EnterpriseTask | ReCaptchaV3EnterpriseTaskProxyLess | ReCaptchaV3M1TaskProxyLess | ReCaptchaV3Task | ReCaptchaV3TaskProxyLess | VisionEngine;

export * from "./Classification";

export * from "./Token";
