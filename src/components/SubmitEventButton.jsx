import React from "react";
import axios from "axios";

export default function SubmitEventButton() {
  return (
    <div className="flex items-center justify-center">
      <button className="mt-6 px-8 py-1 bg-purple-600 rounded-lg text-white text-lg">
        Submit
      </button>
    </div>
  );
}
