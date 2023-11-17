/// <reference types="cypress" />

import * as data from "../fixtures/result.json"
// import { returnColumnHeader } from "../support/app"

describe("database testing",()=> {
    it ("test data from json",()=> {
        cy.visit("https://www.google.com/")
        cy.get(`[aria-label="Search"]`).click().type(data.row1.email)
        // returnColumnHeader()
        
    })
})