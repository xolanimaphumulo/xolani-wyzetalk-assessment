import request from "supertest";
import app from "../../src/index"; // Your Express app

describe("Game Controller", () => {
  test("POST /api/createGame should return 200", async () => {
    const response = await request(app).post("/api/createGame").send();
    expect(response.status).toBe(200);
  }, 1000);

  test("GET /api/leaderboard should return 200", async () => {
    const response = await request(app).get("/api/leaderboard").send();
    expect(response.status).toBe(200);
  }, 1000);
});
