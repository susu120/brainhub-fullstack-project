const eventValidation = require("../validation/eventValidation");
const Joi = require("joi");

test("test with correct data", async() => {
    const event = {
        firstName: "Joes",
        lastName: "Smith",
        email: "test@test.com",
        eventDate: "asdas",
    }
    try{
        let validationBool
        const result = await eventValidation.validateAsync(event);
        if(typeof result === object){validationBool = false}
        console.log(validationBool)

    }catch(err){
        let validationBool
        if(err instanceof Joi.ValidationError) {validationBool = true}
        console.log(validationBool)
    }    
    // if(!result instanceof Joi.ValidationError) {resultBool = true} else {resultBool = false}
    // expect(resultBool).toBe(true)
  
})
