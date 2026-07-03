describe('CT01.2 - Adicionar produto ao carrinho', () => {

  it('Deve adicionar Samsung Galaxy S6 ao carrinho', () => {

    cy.visit('https://www.demoblaze.com');

    cy.contains('Samsung galaxy s6').click();

    cy.contains('Add to cart').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Product added');
    });

    cy.get('#cartur').click();

    cy.contains('Samsung galaxy s6').should('be.visible');

   cy.get('#totalp')
  .should('contain', '360');

  });

});