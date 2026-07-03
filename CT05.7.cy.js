describe('CT05.7 - Visualizar detalhes do produto utilizando a imagem', () => {

  it('Deve acessar a página de detalhes ao clicar na imagem do Samsung Galaxy S6', () => {

    cy.visit('https://www.demoblaze.com');

    cy.contains('Samsung galaxy s6')
      .parents('.card')
      .find('img')
      .click();

    cy.get('.name').should('contain', 'Samsung galaxy s6');

    cy.get('.price-container')
      .should('contain', '$360');

    cy.get('#more-information')
      .should('be.visible');

    cy.contains('Add to cart')
      .should('be.visible');

  });

});