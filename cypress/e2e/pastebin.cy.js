describe('Tests automatisés pour CharleBin', () => {
  beforeEach(() => {
    // Charge la page avant chaque test
    cy.visit('http://localhost:8080/'); // Remplacez par l'URL réelle
  });

  it('Vérifie le formulaire de déchiffrement', () => {
    // Vérifie que le formulaire de mot de passe est visible
    cy.get('#passwordmodal').should('be.visible');
    cy.get('#passworddecrypt')
      .type('monmotdepasse') // Remplacez par un mot de passe de test
      .should('have.value', 'monmotdepasse');
    cy.get('#passwordform').submit();

    // Vérifie que le formulaire disparaît après soumission
    cy.get('#passwordmodal').should('not.exist');

    // Vérifie que le message est déchiffré après soumission (si applicable)
    cy.get('#message').should('not.be.empty');
  });

  it('Vérifie l\'ouverture et la fermeture du modal QR Code', () => {
    // Affiche le modal QR Code
    cy.get('#qrcodelink').click();
    cy.get('#qrcodemodal').should('be.visible');

    // Ferme le modal
    cy.get('#qrcodemodal .btn-primary').click();
    cy.get('#qrcodemodal').should('not.be.visible');
  });

  it('Teste la sélection d\'expiration dans le menu déroulant', () => {
    // Ouvre le menu déroulant des options d'expiration
    cy.get('#pasteExpiration').click(); // Assure-toi que le menu est bien ouvert
    cy.get('#pasteExpiration').select('10min');
    cy.get('#pasteExpiration').should('have.value', '10min');

    cy.get('#pasteExpiration').select('1day');
    cy.get('#pasteExpiration').should('have.value', '1day');
  });

  it('Active et désactive les options avancées', () => {
    // Active "Effacer après lecture"
    cy.get('#burnafterreading').check().should('be.checked');

    // Désactive "Effacer après lecture"
    cy.get('#burnafterreading').uncheck().should('not.be.checked');

    // Active "Autoriser la discussion"
    cy.get('#opendiscussion').check().should('be.checked');

    // Désactive "Autoriser la discussion"
    cy.get('#opendiscussion').uncheck().should('not.be.checked');
  });

  it('Soumet un texte avec mot de passe et formatage', () => {
    // Saisit un mot de passe
    cy.get('#passwordinput').type('motdepassefort');

    // Sélectionne un format
    cy.get('#pasteFormatter').select('markdown');
    cy.get('#pasteFormatter').should('have.value', 'markdown');

    // Saisit du texte
    cy.get('#pasteText').type('Ceci est un texte avec format Markdown.');

    // Envoie le texte
    cy.get('#sendbutton').click();

    // Vérifie que le texte a été envoyé avec succès
    cy.get('#pastesuccess').should('be.visible');
    cy.get('#pastelink').should('not.be.empty');

    // Vérifie si le lien paste redirige correctement
    cy.get('#pastelink').click();
    cy.url().should('include', '/paste/');
  });

  /* ==== Test Created with Cypress Studio ==== */
  it('cypress', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.get('#message').click();
    cy.get('#passwordinput').clear('t');
    cy.get('#passwordinput').type('t{enter}');
    cy.get('#sendbutton').click();
    cy.get('#pasteurl').click();
    cy.get('#passworddecrypt').clear('t');
    cy.get('#passworddecrypt').type('t');
    cy.get('#passwordform > .btn').click();
    cy.get('img').click();
    /* ==== End Cypress Studio ==== */
  });
});
