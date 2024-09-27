describe('Checkout Functionality',()=>{

    beforeEach(()=>{
        cy.loginWithValidCredentials();
    })
    it('should make render the checkout page correctly',()=>{
        
        cy.viewItemInCart();
        // cy.makeCheckOutAction();  

        
    })

    it('should make an order',()=>{
        cy.addItemToCart()
        cy.viewItemInCart();
        cy.get('[data-cy="billing-details"]').should('exist')
            .and('contains.html','h3','Billing Details')
            .and('contains.html', 'div', 'Address')
            .and('contains.html','div', 'Country')
        cy.makeOrderAction();


    })
})

