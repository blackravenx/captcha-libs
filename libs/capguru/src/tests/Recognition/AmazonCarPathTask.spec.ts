import { AmazonCarPathTask } from "../../lib/Request/Recognition/AmazonCarPathTask";

describe("AmazonCarPathTask Test", () => {
  it("To be equal to object", () => {
    const task = new AmazonCarPathTask({ body: "image" });

    expect(task).toEqual({
      body: "image",
      click: "oth",
      isSingleCoordinate: true,
      method: "base64",
      textinstructions: "Amazon,Place a dot at the end of the car's path"
    });
  });
});
