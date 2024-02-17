import { ReCaptchaV2TaskProxyLess } from "./src/lib/Requests";
import { CapSolver } from "./src/lib/capsolver";

export * from "./src/lib/Requests/Classification";
export * from "./src/lib/Requests/Token";

export { CapSolver };

(async() => {

  const capsolver = new CapSolver({ clientKey: "CAP-207EF70B18643D1AE925CE66BB19294A" });

  const req = new ReCaptchaV2TaskProxyLess({
    isInvisible: true,
    websiteKey: "6Le-wvkSAAAAAPBMRTvw0Q4Muexq9bi0DJwx_mJ-",
    websiteURL: "https://www.google.com/recaptcha/api2/demo"
  });

  const solution = await capsolver.solve(req);

  console.log({ solution });
})();