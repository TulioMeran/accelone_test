import { Contact } from "../types/contact"
//Function to find contact by id in the list pass by the data parameter
const findContactInList = (id: string, data: Contact[]) : Contact[] => {
    const selectedContact = data.filter(c=>c.id === id);
    return selectedContact
}

export {findContactInList}