import { test, expect } from "@grafana/plugin-e2e";
import { EngineServerHelper } from "./utils";

test.describe("General", () => {
  test("Check grafana version", async ({ grafanaVersion }) => {
    console.log("Grafana version: ", grafanaVersion);
    expect(grafanaVersion).toEqual(grafanaVersion);
  });

  test("Check engine health", async () => {
    const engine = new EngineServerHelper();

    await engine.checkHealth();
  });

  test("Check engine has access to grafana dashboard", async () => {
    const engine = new EngineServerHelper();

    await engine.checkDashboardAccess("bd0aabe4-3d2d-4d2e-a34d-d6260b06e10b");
  });
});
