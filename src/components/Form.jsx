import React, { useState } from "react";
import axios from "axios";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="flex items-center justify-center">
      <form className="grid border-2 border-gray-400 shadow-lg my-8 p-2 rounded-lg">
        <label htmlFor="fName" className="text-lg my-1">
          First name
        </label>
        <input
          type="text"
          placeholder="Joe"
          className="border-1 border-gray-700"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="lName" className="text-lg my-1">
          Last name
        </label>
        <input
          type="text"
          placeholder="Smith"
          className="border-1 border-gray-700"
          onChange={(e) => setLastName(e.target.value)}
        />
        <label htmlFor="email" className="text-lg my-1">
          Email
        </label>
        <input
          type="text"
          placeholder="example@example.com"
          className="border-1 border-gray-700"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>
    </div>
  );
}
