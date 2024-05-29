import { Contact } from "../types/contact";
import { v4 as uuidv4} from 'uuid'

//Data to be use in the app
//UUID is use to generate ids
export const contacts: Contact[] = [
    {
     id: uuidv4(),
     firstName: "Rafael",
     lastName: "Meran",
     age: 28,
     cellphone: "829-446-2986"
    }
] 