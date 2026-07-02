import type { ImageToTextTask } from "./Recognition";

import type { RecaptchaV2EnterpriseTask, RecaptchaV2EnterpriseTaskProxyless, RecaptchaV2Task, RecaptchaV2TaskProxyless, RecaptchaV3TaskProxyless, TurnstileTask, TurnstileTaskProxyless } from "./Token";

export type Requests = ImageToTextTask | RecaptchaV2EnterpriseTask | RecaptchaV2EnterpriseTaskProxyless | RecaptchaV2Task | RecaptchaV2TaskProxyless | RecaptchaV3TaskProxyless | TurnstileTask | TurnstileTaskProxyless;

export * from "./Token";

export * from "./Recognition";
