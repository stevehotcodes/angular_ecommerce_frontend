Cypress.Commands.add('addItemToCart',()=>{
    cy.get('[data-cy="product-card"]').should('be.visible');
    cy.get('[data-cy="price-and-add-wrapper"]' ).should('be.visible');
    cy.get('[data-cy="add-to-cart-btn"]').first().should("contains.text","Add to Cart").click();
})

Cypress.Commands.add('viewItemInCart',()=>{

    cy.get('[data-cy="header"]').should('be.visible');
    cy.get('[data-cy="header-actions"]').should('be.visible');
    cy.get('[data-cy="cart-icon"]').should('be.visible').click()
    // cy.get('[data-cy="selected-products-in-cart"]').should('not.exist')
    
    cy.get('body').then(($body)=>{
        if($body.find('[data-cy="empty-cart-message"]').length>0){
            cy.fixture('cartData').then((data)=>{
                cy.get('[data-cy="empty-cart-message"]').should('be.visible');
                cy.get('[data-cy="empty-cart-image"]').should('contains.attr','src',data.emptyCartImage)
                cy.log('The cart is empty')
            })
        
        }
        else{
            cy.get('[data-cy="selected-products-in-cart"]').should('exist')
             .and('have.length.greaterThan',0);
            cy.get('[data-cy="cart-summary-details"]').should('exist');
            cy.get('[data-cy="cart-summary-title"]').should('contain.text','Cart Summary');
            cy.get('[data-cy="checkout-button"]').should('contains.text','Checkout').click();
            
        }







    })
})

