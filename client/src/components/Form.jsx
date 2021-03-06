import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import createEvent from "../api/createEvent";
import { eventSchema } from "../validation/EventValidation";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const emailRegex = /\S+@\S+\.\S+/;

  const newEvent = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    eventDate: eventDate,
  };

  const submitEvent = async (e) => {
    e.preventDefault();
    try {
        await eventSchema.validate(newEvent, {
        abortEarly: false,
      });
      createEvent(newEvent);
    } catch (err) {
      console.log(err.errors);
    }
  };
  const input = (name, placeholder, setter) => {
    return (
      <input
        type="text"
        name={name}
        data-testid="input"
        placeholder={placeholder}
        className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        onChange={(e) => setter(e.target.value)}
      />
    );
  };

  return (
    <div className="flex items-center justify-center">
      <form
        data-testid="form"
        className="grid border-2 border-gray-400 shadow-lg my-8 p-5 rounded-lg"
      >
        <label htmlFor="fName" className="text-lg my-1 font-bold">
          First name
        </label>
        {input("firstName", "Joe", setFirstName)}
        {firstName.length === 0 ? <p className="text-red-600 text-center">First Name is required</p> : null}

        <label htmlFor="lName" className="text-lg my-1 font-bold">
          Last name
        </label>
        {input("lastName", "Smith", setLastName)}
        {lastName.length === 0 ? <p className="text-red-600 text-center">Last Name is required</p> : null}

        <label htmlFor="email" className="text-lg my-1 font-bold">
          Email
        </label>
        {input("email", "test@test.com", setEmail)}
        {!emailRegex.test(email) ? <p className="text-red-600 text-center">Valid email is required</p> : null}

        <label htmlFor="email" className="text-lg my-1 font-bold">
          Event Date
        </label>
        <div data-testid="datePicker">
          <DatePicker
            className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={eventDate}
            dateFormat="dd/MM/yyyy"
            onChange={(date) => setEventDate(date)}
          />
        </div>

        {eventDate === null ? <p className="text-red-600 text-center">Event Date is required</p> : null}
        <div className="flex items-center justify-center">
          <button
            data-testid="button"
            onClick={submitEvent}
            className="mt-6 px-8 py-1 bg-purple-600 rounded-lg text-white text-lg font-bold"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
