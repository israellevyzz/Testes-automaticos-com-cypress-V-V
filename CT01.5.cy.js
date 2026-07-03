describe('CT01.5 - Adicionar produto ao carrinho e finalizar a compra', () => {

  it('Deve adicionar Samsung Galaxy S6 ao carrinho e concluir a compra', () => {

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

    cy.contains('Place Order').click();

    cy.get('#name').type('Israel Levy');
    cy.get('#country').type('Brasil');
    cy.get('#city').type('Russas');
    cy.get('#card').type('4111111111111111');
    cy.get('#month').type('06');
    cy.get('#year').type('2026');

    cy.contains('Purchase').click();

    cy.get('.sweet-alert')
      .should('be.visible')
      .and('contain', 'Thank you for your purchase!');

    cy.get('.sweet-alert')
      .should('contain', 'Amount: 360 USD');

    cy.get('.sweet-alert')
      .should('contain', 'Card Number: 4111111111111111');

    cy.get('.sweet-alert')
      .should('contain', 'Name: Israel Levy');

  });

});