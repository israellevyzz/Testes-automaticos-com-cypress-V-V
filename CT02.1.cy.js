describe('T002 - Filtrar produtos pela categoria Phones', () => {

  it('Deve exibir apenas produtos da categoria Phones', () => {

    // Acessa o sistema
    cy.visit('https://www.demoblaze.com');

    // Seleciona a categoria Phones
    cy.contains('Phones').click();

    // Verifica produtos esperados
    cy.contains('Samsung galaxy s6')
      .should('be.visible');

    cy.contains('Nokia lumia 1520')
      .should('be.visible');

    // Verifica que produtos de outras categorias não aparecem
    cy.contains('Sony vaio i5')
      .should('not.exist');

    cy.contains('Apple monitor 24')
      .should('not.exist');

  });

});