import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    watch: false,
    coverage:{
      provider:"v8",
      reporter:["json","json-summary"]
    }
  }
});