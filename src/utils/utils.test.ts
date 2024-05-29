import { contacts } from '../constants/data'
import { BodyRequest } from '../types/contact'
import {findContactInList} from './helper'
import {validateFieldsInContact} from './validator'

describe("[utils.ts] file test cases", () => {

    describe("[helper.ts] test cases", () => {

        it("Should return one element", () => {
            const contactFromList = contacts
            const selectedContacts = findContactInList(contactFromList[0].id, contacts)
            expect(selectedContacts.length).toBeGreaterThan(0)
        })

        it("Should return no element", () => {
            const selectedContacts = findContactInList("0", contacts)
            expect(selectedContacts.length).toBe(0)
        })

    })

    describe("[validator.ts] test cases", () => {
        it("Should return empty list", () => {
            const bodyRequest: BodyRequest = {
                firstName: "Tulio",
                lastName: "Meran",
                age: 20,
                cellphone: "8294462986"
            }

            const result = validateFieldsInContact(bodyRequest)
            expect(result.length).toBe(0)
        })

        it("Should return some invalid fields", () => {
            const bodyRequest: BodyRequest = {
                firstName: undefined,
                lastName: "Meran",
                age: 20,
                cellphone: undefined
            }

            const result = validateFieldsInContact(bodyRequest)
            expect(result.length).toBeGreaterThan(0)
        })
    })

})