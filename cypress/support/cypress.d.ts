declare namespace Cypress{
    interface Chainable{
        loginWithValidCredentials():Chainable<void>;
        addItemToCart():Chainable<void>
    }
}