import "@testing-library/react";
import { eventSchema } from "../validation/EventValidation";

describe("Testing validation", () => {
    
    const firstName = "Joe"
    const lastName = "Smith"
    const email = "test@test.com"
    const incorecctEmail = "test@test."
    const eventDate = "12/03/2021"
    const missingData = ""

    test("test with correct data", async () => {
      const validationResult = await eventSchema.isValid(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          eventDate: eventDate,
        },
      );
      expect(validationResult).toBeTruthy()
    });
    test("test with missing first name", async () => {
      const validationResult = await eventSchema.isValid(
        {
          firstName: missingData,
          lastName: lastName,
          email: email,
          eventDate: eventDate,
        },
      );
      expect(validationResult).toBeFalsy()
    });
    test("test with missing last name", async () => {
      const validationResult = await eventSchema.isValid(
        {
          firstName: firstName,
          lastName: missingData,
          email: email,
          eventDate: eventDate,
        },
      );
      expect(validationResult).toBeFalsy()
    });
    test("test with missing email", async () => {
      const validationResult = await eventSchema.isValid(
        {
          firstName: firstName,
          lastName: lastName,
          email: missingData,
          eventDate: eventDate,
        },
      );
      expect(validationResult).toBeFalsy()
    });
    test("test with missing email", async () => {
        const validationResult = await eventSchema.isValid(
          {
            firstName: firstName,
            lastName: lastName,
            email: incorecctEmail,
            eventDate: eventDate,
          },
        );
        expect(validationResult).toBeFalsy()
      });
    test("test with missing event date", async () => {
      const validationResult = await eventSchema.isValid(
        {
          firstName: firstName,
          lastName: lastName,
          email: email,
          eventDate: missingData,
        },
      );
      expect(validationResult).toBeFalsy()
    });
  });