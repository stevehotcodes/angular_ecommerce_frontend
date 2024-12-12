declare namespace Cypress{
    interface Chainable{
        loginWithValidCredentials():Chainable<void>;
        addItemToCart():Chainable<void>;
        viewItemInCart():Chainable<void>;
        returnToHomePage():Chainable<void>;
        makeOrderAction():Chainable<void>;
        makeCheckOutAction():Chainable<void>;
    }

}