const eventValidation = require("../validation/eventValidation");
const Joi = require("joi");

test("test with correct data", () => {
    const event = {
        firstName: "Joe",
        lastName: "Smith",
        email: "test@test.com",
        eventDate: "22/11/2021",
    }
        const result =  eventValidation.validate(event);
        console.log(result.error)
        expect(result.error).not.toBeDefined();
  
})

describe("tests with missing data", () => {
    test("test with missing first name", () => {
        const event = {
            firstName: "",
            lastName: "Smith",
            email: "test@test.com",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    
    })

    test("test with missing last name", () => {
        const event = {
            firstName: "Joe",
            lastName: "",
            email: "test@test.com",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    
    })

    test("test with missing email", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    
    })

    test("test with missing date", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "test@test.com",
            eventDate: "",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    
    })
})

describe("tests with incorrect data", () =>{

    test("test with incorrect email", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "test",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    })

    test("test with incorrect email", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "test@",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    })
    test("test with incorrect email", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "test@test",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    })
    test("test with incorrect email", () => {
        const event = {
            firstName: "Joe",
            lastName: "Smith",
            email: "test@test.",
            eventDate: "22/11/2021",
        }
            const result =  eventValidation.validate(event);
            console.log(result.error)
            expect(result.error).toBeDefined();
    })
})