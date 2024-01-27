import { AntiAkamaiSensorTask } from "../../../lib/Request/TokenRequest/AntiAkamaiSensorTask";

describe("AntiAkamaiSensorTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiSensorTask({
      count: 25,
      country: "some-country",
      deviceId: "ID-XXX",
      deviceName: "some-deviceName",
      metadata: { key: "some-metadata-value" },
      packageName: "some-package",
      version: "some-version"
    });

    expect(task).toEqual({
      _endpoint: "akamaibmp/invoke",
      count: 25,
      country: "some-country",
      deviceId: "ID-XXX",
      deviceName: "some-deviceName",
      metadata: { key: "some-metadata-value" },
      packageName: "some-package",
      type: "AntiAkamaiBMPTask",
      version: "some-version"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiAkamaiSensorTask({
      packageName: "some-package",
      version: "some-version"
    });

    expect(task).toEqual({
      _endpoint: "akamaibmp/invoke",
      count: undefined,
      country: undefined,
      deviceId: undefined,
      deviceName: undefined,
      metadata: undefined,
      packageName: "some-package",
      type: "AntiAkamaiBMPTask",
      version: "some-version"
    });
  });
});
