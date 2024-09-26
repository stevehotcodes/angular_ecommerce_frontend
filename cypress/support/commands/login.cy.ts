/// <reference types="cypress" />

Cypress.Commands.add('loginWithValidCredentials',()=>{
    cy.visit('/signin')
    cy.url().should('includes', 'signin')
        
    cy.get('h2').contains('Sign in').should('be.visible')
    cy.wait(3000)

    cy.fixture('loginData').then((data)=>{
    cy.get("div.form-input input").should('have.attr', 'placeholder', "email@example.com")
    cy.get('[data-cy="signin-email-input"]').type(data.email)
    cy.get('[data-cy="signin-password-input"]').type(data.password)
    
   })
    cy.get("button").should('contain.text', 'Sign in').click()     
    
});