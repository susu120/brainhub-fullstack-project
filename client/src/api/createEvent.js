import Axios from "axios";

const createEvent = (newEvent) => {
  Axios.post("http://localhost:3001/api/createEvent", {
    firstName: newEvent.firstName,
    lastName: newEvent.lastName,
    email: newEvent.email,
    eventDate: newEvent.eventDate,
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => console.log(err));
};

export default createEvent;
