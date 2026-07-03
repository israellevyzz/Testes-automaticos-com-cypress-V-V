describe('T007 - Realizar logout', () => {

  it('Deve encerrar a sessão do usuário corretamente', () => {

    cy.visit('https://www.demoblaze.com');

  cy.get('#login2').click();

cy.get('#loginusername', { timeout: 10000 })
  .should('be.visible')
  .clear()
  .type('123');

cy.get('#loginusername')
  .should('have.value', '123');

cy.get('#loginpassword')
  .should('be.visible')
  .clear()
  .type('123');

cy.get('button[onclick="logIn()"]').click();

    cy.contains('Welcome', { timeout: 10000 })
      .should('be.visible');

    cy.get('#logout2').click();

    cy.get('#nameofuser')
      .should('not.be.visible');

    cy.get('#login2')
      .should('be.visible');

    cy.get('#signin2')
      .should('be.visible');

  });

});