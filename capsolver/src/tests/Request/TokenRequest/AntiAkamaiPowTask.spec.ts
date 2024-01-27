import { AntiAkamaiPowTask } from "../../../lib/Request/TokenRequest/AntiAkamaiPowTask";

describe("AntiAkamaiPowTask", () => {
  it("To be equal to object", () => {
    const task = new AntiAkamaiPowTask({
      deviceId: "some-deviceId",
      pow: "some-pow-data"
    });

    expect(task).toEqual({
      _endpoint: "akamaibmp/invoke",
      deviceId: "some-deviceId",
      pow: "some-pow-data",
      type: "AntiAkamaiBMPTask"
    });
  });
});
