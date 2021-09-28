import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import createEvent from "../api/createEvent";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [eventDate, setEventDate] = useState(new Date());

  const newEvent = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    eventDate: eventDate,
  };

  const submitEvent = (e) => {
    e.preventDefault();
    //console.log(newEvent);
    createEvent(newEvent);
  };

  return (
    <div className="flex items-center justify-center">
      <form className="grid border-2 border-gray-400 shadow-lg my-8 p-5 rounded-lg">
        <label htmlFor="fName" className="text-lg my-1 font-bold">
          First name
        </label>
        <input
          type="text"
          placeholder="Joe"
          className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lName" className="text-lg my-1 font-bold">
          Last name
        </label>
        <input
          type="text"
          placeholder="Smith"
          className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email" className="text-lg my-1 font-bold">
          Email
        </label>
        <input
          type="text"
          placeholder="example@example.com"
          className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="email" className="text-lg my-1 font-bold">
          Event Date
        </label>
        <DatePicker
          className="text-center shadow appearance-none border rounded w-full py-2 px-8 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          selected={eventDate}
          dateFormat="dd/MM/yyyy"
          onChange={(date) => setEventDate(date)}
        />
        <div className="flex items-center justify-center">
          <button
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
