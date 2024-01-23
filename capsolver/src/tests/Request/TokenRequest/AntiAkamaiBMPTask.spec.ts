import { AntiAkamaiBMPTask } from "../../../lib/Request/TokenRequest/AntiAkamaiBMPTask";

describe("AntiAkamaiBMPTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiBMPTask({
      count: 25,
      deviceId: "ID-XXX",
      packageName: "some-package",
      pow: "some-pow-data",
      version: "some-version"
    });

    expect(task).toEqual({
      count: 25,
      deviceId: "ID-XXX",
      packageName: "some-package",
      pow: "some-pow-data",
      type: "AntiAkamaiBMPTask",
      version: "some-version"
    });
  });
  it("To be equal to object without optional params", () => {
    const task = new AntiAkamaiBMPTask({ packageName: "some-package" });

    expect(task).toEqual({
      count: undefined,
      deviceId: undefined,
      packageName: "some-package",
      pow: undefined,
      type: "AntiAkamaiBMPTask",
      version: undefined
    });
  });
});
