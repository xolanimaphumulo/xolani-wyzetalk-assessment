import request from "supertest";
import app from "../../src/index"; // Your Express app

describe("Player Controller", () => {
  test("POST /api/createPlayer should return 200", async () => {
    const response = await request(app).post("/api/createPlayer").send({
      fullName: "John Doe",
      email: "maphumuloxolani090@gmail.com",
    });
    expect(response.status).toBe(200);
  });

  test("POST /api/createPlayer should return 400 - Missing Email", async () => {
    const response = await request(app).post("/api/createPlayer").send({
      name: "John Doe",
    });
    expect(response.status).toBe(400);
  });

  // Add more test cases as needed
});
