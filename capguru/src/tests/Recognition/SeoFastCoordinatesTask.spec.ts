import { SeoFastCoordinatesTask } from "../../lib/Request/Recognition/SeoFastCoordinatesTask";

describe("SeoFastCoordinatesTask Test", () => {
  it("To be equal to object", () => {
    const task = new SeoFastCoordinatesTask({
      body: "image",
      textinstructions: "custom1222,Отметьте изображения со бантиками"
    });

    expect(task).toEqual({
      body: "image",
      click: "oth",
      isMultipleCoordinates: true,
      method: "base64",
      textinstructions: "custom1222,Отметьте изображения со бантиками"
    });
  });
});
