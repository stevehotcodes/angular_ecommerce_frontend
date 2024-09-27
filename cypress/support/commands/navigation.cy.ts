Cypress.Commands.add('returnToHomePage',()=>{
    cy.get('[data-cy="header-logo"]').should('contains.text','Grabia').click();
})

Cypress.Commands.add('makeOrderAction',()=>{
    cy.get('[data-cy="make-order-button"]').should('contains.text','Make Order').click();  
})

    //  cy.get('[data-cy="make-order-button"]').should('contains.text','Make Order');

Cypress.Commands.add('makeCheckOutAction',()=>{
    cy.get('[data-cy="checkout-button"]').should('contains.text','Checkout').click();
})