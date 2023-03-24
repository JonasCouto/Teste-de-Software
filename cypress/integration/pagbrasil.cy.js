/// <reference types="cypress" />
const user = require('../fixtures/user.json')


it('Deve retornar status 200 formulario enviado com sucesso', () => {

    cy.fixture('user.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })
    
    cy.get('@response').then((response) => {
        expect(response.status).to.equal(200)
        expect(response.body.sucesso).to.be.true
        expect(response.body).to.not.have.property('erro')
      })

})

  
  it('Deve retornar um erro de validação para nome inválido', () => {

    cy.fixture('nameInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })

    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo nome inválido.')
    })
  })



  it('Deve retornar um erro de validação para email inválido', () => {

    cy.fixture('emailInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })

    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo email inválido.')
    })
  })

  it('Deve retornar um erro de validação para company inválido', () => {

    
    cy.fixture('companyInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })

    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo company inválido.')
    })
  })

  it('Deve retornar um erro de validação para website inválido', () => {


    cy.fixture('websiteInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })

    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo website inválido.')
    })
  })

  it('Deve retornar um erro de validação para phone inválido', () => {

    cy.fixture('phoneInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })


    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo phone inválido.')
    })
  })

  
  it('Deve retornar um erro de validação para inquiry inválido', () => {

    cy.fixture('inquiryInvalido.json')
    .then((user) => {
        cy.request({
            method: 'POST',
            url: 'https://api.pagbrasil/formulario',
            body: {
              nome: user.name,
              email: user.email,
              company: user.company,
              website: user.website,
              phone: user.phone,
              inquiry: user.inquiry
            },
          }).as('response')
    })

    cy.get('@response').then((response) => {
      expect(response.status).to.equal(412)
      expect(response.body.sucesso).to.be.false
      expect(response.body.erro).to.equal('Campo inquiry inválido.')
    })
  })
