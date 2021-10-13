import Axios from "axios";
import createEvent from "./createEvent";

jest.mock("Axios");

describe("create event", () => {

    const newEvent = {
        firstName: "Adam",
        lastName: "Kowalski",
        email: "adam@kowalski.pl",
        eventDate: "05/11/2021",
      };

  describe("when API call is successful", () => {
    test("should return status 201", async () => {

      const apiResponse = { data: "Created", status: 201 };
      Axios.post.mockResolvedValueOnce(apiResponse);

      const result = await createEvent(newEvent);

      expect(Axios.post).toHaveBeenCalledWith("http://localhost:3001/api/createEvent", newEvent)
      expect(result).toEqual(apiResponse);

    });
  });

  describe("when API call fails", () => {
    test("should return error", async() => {
      
        const errorMessage = "Network Error"
        Axios.post.mockRejectedValueOnce(new Error(errorMessage))

        const result = await createEvent(newEvent);

        expect(Axios.post).toHaveBeenCalledWith("http://localhost:3001/api/createEvent", newEvent)
        expect(result).toBeInstanceOf(Error);

    });
  });
});
