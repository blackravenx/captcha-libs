import type { AudioTask, BoundingBoxTask, CoordinatesTask, DrawAroundTask, GridTask, ImageToTextTask, RotateTask, TextCaptchaTask } from "./Recognition";

import type {
  AmazonTask, AmazonTaskProxyless, AntiCyberSiAraTask, AntiCyberSiAraTaskProxyless, CapyTask, CapyTaskProxyless, CutCaptchaTask, CutCaptchaTaskProxyless, DataDomeSliderTask, FriendlyCaptchaTask, FriendlyCaptchaTaskProxyless, FunCaptchaTask, FunCaptchaTaskProxyless, GeeTestTask, GeeTestTaskProxyless, GeeTestV3Task, GeeTestV3TaskProxyless, GeeTestV4Task, GeeTestV4TaskProxyless, HCaptchaTask, HCaptchaTaskProxyless, KeyCaptchaTask, KeyCaptchaTaskProxyless, LeminTask, LeminTaskProxyless, MtCaptchaTask, MtCaptchaTaskProxyless, RecaptchaV2EnterpriseTask, RecaptchaV2EnterpriseTaskProxyless, RecaptchaV2Task, RecaptchaV2TaskProxyless, RecaptchaV3TaskProxyless, TurnstileTask, TurnstileTaskProxyless,
  TencentTask, TencentTaskProxyless, AtbCaptchaTask, AtbCaptchaTaskProxyless
} from "./Token";

export type Requests = AmazonTask | AmazonTaskProxyless | AntiCyberSiAraTask | AntiCyberSiAraTaskProxyless | AtbCaptchaTask | AtbCaptchaTaskProxyless | AudioTask | BoundingBoxTask | CapyTask | CapyTaskProxyless | CoordinatesTask | CutCaptchaTask | CutCaptchaTaskProxyless | DataDomeSliderTask | DrawAroundTask | FriendlyCaptchaTask | FriendlyCaptchaTaskProxyless | FunCaptchaTask | FunCaptchaTaskProxyless | GeeTestTask | GeeTestTaskProxyless | GeeTestV3Task | GeeTestV3TaskProxyless | GeeTestV4Task | GeeTestV4TaskProxyless | GridTask | HCaptchaTask | HCaptchaTaskProxyless | ImageToTextTask | KeyCaptchaTask | KeyCaptchaTaskProxyless | LeminTask | LeminTaskProxyless | MtCaptchaTask | MtCaptchaTaskProxyless | RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless | RecaptchaV3TaskProxyless | RotateTask | TencentTask | TencentTaskProxyless | TextCaptchaTask | TurnstileTask | TurnstileTaskProxyless;

export * from "./Token";

export * from "./Recognition";
