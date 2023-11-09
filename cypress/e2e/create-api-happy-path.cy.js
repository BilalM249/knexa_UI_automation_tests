describe('Login Test', () => {

  beforeEach(() => {
    
    cy.viewport(1366, 768)

  })


  it('API Creation flow', () => {

    cy.visit('https://app.fastn.ai') // i visit fastn

    cy.get('#username').click() // i click on username

    cy.get('#username').type('automation@fastn.ai') // i enter username

    cy.get('#password').click() // i click on password

    cy.get('#password').type('123123') // i enter password

    cy.url().should('include', 'app.fastn.ai') // url validation

    cy.get('#username').should('have.value', 'automation@fastn.ai') // username field validation

    cy.get('#password').should('have.value', '123123') // password field validation

    cy.get('#kc-login').click() // i click on continue button

    cy.get('button[aria-label="Skip"]').click() // i skip the tutorial

    cy.contains('dontdelete').click() // i click on my project

    cy.get('li#build-api button[type="button"]').click() // i click on build API button

    cy.generateRandomNumber().then((randomNumber) => { // i generate a random number and enter it as the API name
      cy.get('#name-input').type(randomNumber);
      cy.get('#name-input').should('have.value', randomNumber);
    });

    cy.contains('shopify_get_product').click(); // I select my output model

  })

})
