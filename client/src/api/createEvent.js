import Axios from "axios";

const createEvent = async(newEvent) =>{

  try{
    const result = await Axios.post("http://localhost:3001/api/createEvent", {
      firstName: newEvent.firstName,
      lastName: newEvent.lastName,
      email: newEvent.email,
      eventDate: newEvent.eventDate,
    })
    console.log(result)
    return result

  }catch(err){
    console.log(err)
    return err
  }
}

export default createEvent;
