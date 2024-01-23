import type { ClassificationRequests } from "./ClassificationRequest";
import type { TokenRequests } from "./TokenRequest";

export type requests = ClassificationRequests & TokenRequests;

export * from "./TokenRequest";
export * from "./ClassificationRequest";