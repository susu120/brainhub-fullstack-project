import React from "react";
import Axios from "axios";

export default function SubmitEventButton({
  firstName,
  lastName,
  email,
  eventDate,
}) {
  const createEvent = () => {
    Axios.post("http://localhost:3001/api/createEvent", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      eventDate: eventDate,
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const submitEvent = (e) => {
    e.preventDefault();
    createEvent();
  };

  return (
    <div className="flex items-center justify-center">
      <button
        onClick={submitEvent}
        className="mt-6 px-8 py-1 bg-purple-600 rounded-lg text-white text-lg font-bold"
      >
        Submit
      </button>
    </div>
  );
}
