// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addRecord', (user) => {
    
    cy.fixture(user)
    .then((user) => {

        cy.get('#name')
        .should('be.visible')
        .type(user.name)
        .should('have.value', user.name)

        cy.get('#email')
        .should('be.visible')
        .type(user.email)
        .should('have.value', user.email)

        cy.get('#company')
        .should('be.visible')
        .type(user.company)
        .should('have.value', user.company)

        cy.get('#website')
        .should('be.visible')
        .type(user.website)
        .should('have.value', user.website)

        cy.get('#phone')
        .should('be.visible')
        .type(user.phone)
        .should('have.value', user.phone)

        cy.get('#inquiry')
        .should('be.visible')
        .type("Como faço para realizar uma ação?")
        .should('have.value', user.inquiry)


        cy.contains('button','Submit')
        .click()
        
    })
    
})

