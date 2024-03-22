import request from "supertest";
import app from "../../src/index"; // Your Express app

describe("Player Game Move Controller", () => {
  test("POST /api/submitMove should return 200", async () => {
    const gameResponse = await request(app).post("/api/createGame").send();
    const playerResponse = await request(app).post("/api/createPlayer").send({
      fullName: "John Doe",
      email: "xolani@gmail.com",
    });

    const response = await request(app)
      .post("/api/submitMove")
      .send({
        playerId: playerResponse.body.data._id,
        gameId: gameResponse.body.data._id,
        move: ["D4", "D4"],
      });
    expect(response.status).toBe(200);
  });

  // Add more test cases as needed
});
