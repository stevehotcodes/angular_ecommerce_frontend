describe('Cart Functionlity',()=>{
    it('should add an item to a cart ', ()=>{
        cy.loginWithValidCredentials();
        cy.get('[data-cy="recommended-products-container"]').should('be.visible');
        cy.addItemToCart();
    

    })
})