describe('Tests automatisés pour CharleBin', () => {
  beforeEach(() => {});    // Charge la page avant chaque test

  it('Vérifie le formulaire de déchiffrement', () => {
    cy.visit('http://localhost:8080'); // Remplacez par l'URL réelle

    });

  /* ==== Test Created with Cypress Studio ==== */
  it('cypress', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('http://localhost:8080');
    cy.get('#message').click();
    cy.get('#message').click();
    cy.get('#passwordinput').clear('t');
    cy.get('#passwordinput').type('test');
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('t');
    cy.get('#passworddecrypt').type('test');
    cy.get('#passwordform > .btn').click();
    /* ==== End Cypress Studio ==== */
  });
});
