describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8080')
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#passwordinput').clear('');
    cy.get('#message').type('testttttttttttttttt');
    cy.get('#passwordinput').type('testttttttttttttttt');
    cy.get('#sendbutton').click();
    cy.wait(100);
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('testttttttttttttttt');
    cy.get('#passworddecrypt').type('testttttttttttttttt');

    cy.get('#passwordform > .btn').click();
        /* Vérifie que le contenu est bien égal à "testttttttttttttttt" */
    cy.get('#prettyprint').should("have.text", "testttttttttttttttt");

    cy.get('img').click();
    /* ==== End Cypress Studio ==== */
  })
})