export interface Contact {
    id: string
    firstName: string
    lastName: string
    age: number
    cellphone: string
}

export interface BodyRequest {
    firstName: string | undefined
    lastName: string | undefined
    age: number | undefined
    cellphone: string | undefined
}