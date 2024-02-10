import { LinkvertiseCoordinatesTask } from "../../lib/Request/Recognition/LinkvertiseCoordinatesTask";

describe("LinkvertiseCoordinatesTask Test", () => {
  it("To be equal to object", () => {
    const task = new LinkvertiseCoordinatesTask({
      body: "image",
      textinstructions: "custom1221,Please click on the globe"
    });

    expect(task).toEqual({
      body: "image",
      click: "oth",
      isMultipleCoordinates: true,
      method: "base64",
      textinstructions: "custom1221,Please click on the globe"
    });
  });
});
