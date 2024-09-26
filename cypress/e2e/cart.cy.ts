describe('Cart Functionlity',()=>{
    it('should add an item to a cart ', ()=>{
        cy.loginWithValidCredentials();
        cy.get('[data-cy="recommended-products-container"]').should('be.visible');
        cy.addItemToCart();
    });

    it('should view the contents of the cart',()=>{
        cy.loginWithValidCredentials();
        cy.get('[data-cy="header"]').should('be.visible');
        cy.get('[data-cy="header-actions"]').should('be.visible');
        cy.get('[data-cy="cart-icon"]').should('be.visible').click()
    });
})