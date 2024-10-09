import { expect, request } from "@playwright/test";

/**
 * Engine Server Helper
 */
export class EngineServerHelper {
  private readonly url = process.env.E2E_ENGINE_URL || "http://localhost:3001";
  private readonly token = process.env.E2E_ENGINE_TOKEN;

  /**
   * Request
   */
  private async request<TResult>(
    path: string,
    options?: RequestInit
  ): Promise<TResult> {
    try {
      const context = await request.newContext({
        baseURL: this.url,
      });

      const response = await context.fetch(`${this.url}${path}`, {
        ...options,
        headers: {
          Authorization: `Bearer ${this.token}`,
        },
      });

      return (await response.json()) as TResult;
    } catch (error) {
      console.error("Request Error", error);
      throw error;
    }
  }

  /**
   * Check Health
   */
  public async checkHealth() {
    const result = await this.request<{ message: "string" }>("/health");

    return expect(result).toEqual({
      message: "pong",
    });
  }

  /**
   * Check dashboard access
   */
  public async checkDashboardAccess(id: string) {
    const result = await this.request<{ uid: "string" }>(
      `/grafana/dashboards/uid/${id}`
    );

    return expect(result.uid).toEqual(id);
  }
}
