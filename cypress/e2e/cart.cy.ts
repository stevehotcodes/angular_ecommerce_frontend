describe('Cart Functionlity',()=>{
    it('should add an item to a cart ', ()=>{
        cy.loginWithValidCredentials();
        cy.get('[data-cy="recommended-products-container"]').should('be.visible');
        cy.addItemToCart();
    });

    it('should view the contents of the cart',()=>{
        cy.loginWithValidCredentials();
        cy.wait(4000)
        cy.viewItemInCart();
    
    });
    it('should an remove an item from the cart',()=>{
        cy.loginWithValidCredentials();
        cy.wait(4000)
        cy.viewItemInCart();
        cy.get('[data-cy="cart-actions"]').should('be.visible');
        cy.get('[data-cy="remove-cart-item-icon"]').first().should('be.visible').click();
        cy.get('[data-cy="header-logo"]').should('contains.text','Grabia').click()
    })

    it('should checkout the content of the cart',()=>{
        cy.loginWithValidCredentials();
        cy.viewItemInCart();
        cy.get('[data-cy="cart-summary-details"]').should('be.visible');
        cy.get('[data-cy="cart-summary-title"]').should('contain.text','Cart Summary');
        cy.get('[data-cy="checkout-button"]').should('contains.text','Checkout').click();
    })
})