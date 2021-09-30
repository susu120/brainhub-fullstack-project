const request = require("supertest");
const db = require("./db");
const app = require("./app");

describe("post /api/createEvent", () => {

  test("test with correct data", async () => {
    const response = await request(app).post("/api/createEvent").send({
      firstName: "First Name",
      lastName: "Last Name",
      email: "example@example.com",
      eventDate: "dd/mm/YYYY",
    });
    expect(response.status).toBe(201);
  });
   
    test("test with missing data", async () => {
      const response = await request(app).post("/api/createEvent").send({});
      expect(response.status).toBe(400);
    });


  describe("tests with incorrect data", () => {

    test("test with incorrect first name", async () => {
      const response = await request(app).post("/api/createEvent").send({      
      firstName: "",
      lastName: "Last Name",
      email: "example@example.com",
      eventDate: "dd/mm/YYYY",});
      expect(response.status).toBe(400);
    });

    test("test with incorrect last name", async () => {
      const response = await request(app).post("/api/createEvent").send({      
      firstName: "First Name",
      lastName: "",
      email: "example@example.com",
      eventDate: "dd/mm/YYYY",});
      expect(response.status).toBe(400);
    });

    test("test with incorrect email", async () => {
      const response = await request(app).post("/api/createEvent").send({      
      firstName: "First Name",
      lastName: "Last Name",
      email: "example@example",
      eventDate: "dd/mm/YYYY",});
      expect(response.status).toBe(400);
    });
  });
});


