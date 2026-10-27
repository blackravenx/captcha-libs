import type { ImageToTextTask } from "./ImageToTextTask";

import type { ReCaptchaV2Classification } from "./ReCaptchaV2Classification";

export type Requests = ImageToTextTask | ReCaptchaV2Classification;

export * from "./ImageToTextTask";

export * from "./ReCaptchaV2Classification";
