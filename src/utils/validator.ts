import { BodyRequest } from "../types/contact";
//Function to validate when the body request is invalid or have any required fields as undefined
const validateFieldsInContact = (contact: BodyRequest) : string[]  =>  {

    const invalidFields = []

    if (!contact.firstName){
        invalidFields.push("firstName")
    }

    if (!contact.lastName){
        invalidFields.push("lastName")
    }

    if (!contact.age){
        invalidFields.push("age")
    }

    if (!contact.cellphone){
        invalidFields.push("cellphone")
    }

    return invalidFields
}

export {validateFieldsInContact}