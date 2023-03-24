/// <reference types="cypress" />
const user = require('../fixtures/user.json')



describe('Prova técnica de Automação de teste PagBrasil', () => {
      
  beforeEach(() => {
    cy.visit(Cypress.config('baseUrl'))
  
  })
  
  it('Realizar a submissão do formulário para dúvidas', () => {
    
    cy.addRecord('user.json')
  
    cy.intercept('POST','**/formulario').as('formulario')
     
    cy.wait('@formulario')

    cy.get('@formulario'.should('statusCode', 200))


  })



})





    
    
    