import { DataDomeSliderTask } from "../../../lib/Requests/Token/DataDomeSliderTask";

import { expect, it, describe } from "vitest";

describe("DataDomeSliderTask", () => {
  it("To be equal to object", () => {
    const task = new DataDomeSliderTask({
      "captchaUrl": "some-captchaUrl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isDataDomeSliderTask": true,
      "captchaUrl": "some-captchaUrl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": "some-proxyLogin",
      "proxyPassword": "some-proxyPassword",
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "DataDomeSliderTask",
      "userAgent": "some-userAgent",
      "websiteURL": "some-websiteURL"
    });
  });

  it("To be equal to object without optional params", () => {
    const task = new DataDomeSliderTask({
      "captchaUrl": "some-captchaUrl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "websiteURL": "some-websiteURL"
    });

    expect(task).toEqual({
      "_isDataDomeSliderTask": true,
      "captchaUrl": "some-captchaUrl",
      "proxyAddress": "some-proxyAddress",
      "proxyLogin": undefined,
      "proxyPassword": undefined,
      "proxyPort": 1010,
      "proxyType": "http",
      "type": "DataDomeSliderTask",
      "userAgent": undefined,
      "websiteURL": "some-websiteURL"
    });
  });
});
