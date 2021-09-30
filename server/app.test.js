const request = require("supertest");
const app = require("./app");

describe("post /api/createEvent", () => {
  test("test with correct data", async () => {
    const response = await request(app).post("/api/createEvent").send({
      firstName: "First Name",
      lastName: "Last Name",
      email: "example@example.com",
      eventDate: "dd/mm/YYYY",
    });
    expect(response.statusCode).toBe(201);
  });
  describe("test with missing data", () => {});
});
