import { AntiCloudflareTask } from "../../../lib/Requests/Token/AntiCloudflareTask";

import { expect, it, describe } from "vitest";

describe("AntiCloudflareTask", () => {
  it("To be equal to object", () => {
    const task = new AntiCloudflareTask({
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "https://some-url.com",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
      "html": "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title>..."
    });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiCloudflareTask": true,
      "proxy": undefined,
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "AntiCloudflareTask",
      "websiteURL": "https://some-url.com",
      "userAgent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36",
      "html": "<!DOCTYPE html><html lang=\"en-US\"><head><title>Just a moment...</title>..."
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new AntiCloudflareTask({ "websiteURL": "https://some-url.com" });

    expect(task).toEqual({
      "_endpoint": "createTask",
      "_isAntiCloudflareTask": true,
      "proxy": undefined,
      "type": "AntiCloudflareTask",
      "websiteURL": "https://some-url.com"
    });
  });
});
