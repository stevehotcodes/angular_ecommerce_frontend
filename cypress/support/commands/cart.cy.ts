Cypress.Commands.add('addItemToCart',()=>{
    cy.get('[data-cy="product-card"]').should('be.visible');
    cy.get('[data-cy="price-and-add-wrapper"]' ).should('be.visible');
    cy.get('[data-cy="add-to-cart-btn"]').first().should("contains.text","Add to Cart").click();
})