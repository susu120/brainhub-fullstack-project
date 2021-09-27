import React from "react";
import axios from "axios";

export default function SubmitEventButton({
  firstName,
  lastName,
  email,
  eventDate,
}) {
  const submitEvent = (e) => {
    e.preventDefault();
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(eventDate);
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
