import request from 'supertest'
import app from '../src/app'
import { describe } from 'node:test'

describe("[app.ts] file test cases", () => {

    describe("GET ALL endpoint test cases", () => {
        it("Should return status code 200", async ()=> {
            const response = await request(app).get("/api/v1/contacts")
            expect(response.statusCode).toBe(200)
        })

        it("Should return at least one result", async ()=> {
            const response = await request(app).get("/api/v1/contacts")
    
            expect(response.body.data.length).toBeGreaterThan(0)
        })

    })

    describe("GET by ID endpoint test cases", () => {

        it("Should return status code 404 for not existing id", async () => {
            const response = await request(app).get("/api/v1/contacts/id_test")
            expect(response.statusCode).toBe(404)
        })

    })

    describe("POST endpoint test cases", () => {
        it("Should return invalidate fields message", async () => {
            const response = await request(app).post("/api/v1/contacts").send({})
            expect(response.body.message).toContain("These fields are required")
        })

        it("Should return status code 400 for invalidate fields message", async () => {
            const response = await request(app).post("/api/v1/contacts").send({})
            expect(response.statusCode).toBe(400)
        })

        it("Should return status code 201", async () => {
            const response = await request(app).post("/api/v1/contacts").send({firstName:"Juan", lastName: "Mendez", age: 25, cellphone:"2312312332"})
            expect(response.statusCode).toBe(201)
        })


    })

})