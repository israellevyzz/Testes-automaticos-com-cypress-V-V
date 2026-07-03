describe('T009 - Remover produto do carrinho', () => {

  it('Deve remover Samsung Galaxy S6 do carrinho', () => {

    // Acessa o sistema
    cy.visit('https://www.demoblaze.com');

    // Adiciona o produto ao carrinho
    cy.contains('Samsung galaxy s6').click();

    cy.contains('Add to cart').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.equal('Product added');
    });

    // Vai para o carrinho
    cy.get('#cartur').click();

    // Verifica se o produto está no carrinho
    cy.contains('Samsung galaxy s6')
      .should('be.visible');

    // Remove o produto
    cy.contains('Delete').click();

    // Aguarda atualização da tabela
    cy.wait(2000);

    // Verifica se o produto foi removido
    cy.contains('Samsung galaxy s6')
      .should('not.exist');

  });

});