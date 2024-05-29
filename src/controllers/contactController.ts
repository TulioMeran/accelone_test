import {Request, Response} from 'express'
import { contacts } from '../constants/data'
import { v4 as uuidv4} from 'uuid'
import { BodyRequest } from '../types/contact'
import { validateFieldsInContact } from '../utils/validator'
import { findContactInList } from '../utils/helper'

var datos = contacts;

const getAllContacts = (req:Request, res: Response) => {
    res.status(200).json({data: datos})
}
const getContactById = (req: Request, res: Response) => {

    const selectedContact = findContactInList(req.params.id,datos);

    if (selectedContact.length > 0){
        res.status(200).json({data: selectedContact[0]})
        
    }

    res.status(404).send()
}

const postContact = (req: Request, res: Response) => {
    const {firstName,lastName,age,cellphone} = req.body;

    const bodyRequest: BodyRequest = {
        firstName,
        lastName,
        age,
        cellphone
    }

    const invalidFields = validateFieldsInContact(bodyRequest);

    if (invalidFields.length > 0) {
        res.status(400).json({message: `These fields are required: ${invalidFields.join(" , ")}`})
        return
    }

    datos.push({id: uuidv4(), 
        firstName,
        lastName,
        age,
        cellphone
    })


    res.status(201).json({data: datos[datos.length-1]})

}

const putContact = (req: Request, res: Response) => {
    const id = req.params.id
    const {firstName,lastName,age,cellphone} = req.body;

    const selectedContact = findContactInList(id,datos);

    if (selectedContact.length === 0){
        res.status(404).send()
        return
    }

    const bodyRequest: BodyRequest = {
        firstName,
        lastName,
        age,
        cellphone
    }

    const invalidFields = validateFieldsInContact(bodyRequest);

    if (invalidFields.length > 0) {
        res.status(400).json({message: `These fields are required: ${invalidFields.join(" , ")}`})
        return
    }

    datos.map((contact)=> {
        if(contact.id === id){
            contact.firstName = bodyRequest.firstName!;
            contact.lastName = bodyRequest.lastName!;
            contact.age = bodyRequest.age!;
            contact.cellphone = bodyRequest.cellphone!;
        }
    })

    res.status(200).json({data: datos.filter(c=>c.id === id)[0]})

}

const deleteContact = (req: Request, res: Response) => {
    const id = req.params.id

    const selectedContact = findContactInList(id,datos)

    if (selectedContact.length === 0){
        res.status(404).send()
        return
    }

    datos = datos.filter(c=>c.id !== id)

    res.status(204).json();
}


export { getAllContacts, getContactById, postContact,putContact,deleteContact}