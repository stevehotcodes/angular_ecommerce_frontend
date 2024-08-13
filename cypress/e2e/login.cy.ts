describe('Login Functionality', ()=>{
  

    it('should visit the login page', ()=>{
        cy.wait(2000)
        cy.visit('/signin')
        cy.url().should('includes', 'signin')
        cy.wait(2000)
        cy.get('h2').contains('Sign in').should('be.visible')
        cy.wait(2000)
        cy.get("div.form-input label").should('contain.text', 'Email')
        cy.wait(2000)
        cy.get("div.form-input input").should('have.attr', 'placeholder', "email@example.com")
        cy.get("button").should('contain.text', 'Sign in')
        cy.wait(2000)
        cy.get("div").should("contains.text", "New customer")
        cy.wait(2000)
        cy.get("div a").should("contains.text","Sign up")
        cy.wait(2000)
      
    })

    it('should validate the inputs',()=>{
        cy.visit('/signin')
        cy.url().should('includes', 'signin')
        cy.wait(3000)
        cy.get('h2').contains('Sign in').should('be.visible')
        cy.wait(3000)
        cy.get("div.form-input label").should('contain.text', 'Email')
        cy.wait(3000)
        cy.get("div.form-input input").should('have.attr', 'placeholder', "email@example.com")
        cy.wait(5000)
        cy.get("[data-cy=signin-email-input]").type('admin@app.com')
        cy.get("button").should('contain.text', 'Sign in')
        cy.wait(3000)
        cy.get("div").should("contains.text", "New customer")
        cy.wait(3000)
        cy.get("div a").should("contains.text","Sign up")
        cy.wait(3000)
        

    })
})