import { defineConfig } from "vitest/config";

import preset from "../../vitest.config";

export default defineConfig({
  ...preset,
  "test": {
    ...preset.test,
    "coverage": { "reportsDirectory": "./coverage" }
  }
});
