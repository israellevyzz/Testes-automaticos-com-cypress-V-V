describe('CT05.8 - Retornar à página inicial após visualizar os detalhes do produto', () => {

  it('Deve retornar à página inicial ao clicar em Home', () => {


        cy.visit('https://www.demoblaze.com/index.html');

        // Seleciona a categoria Laptops
        cy.contains('a', 'Laptops').click();

        // Seleciona especificamente o produto MacBook Pro
        cy.contains('#tbodyid .hrefch', 'MacBook Pro')
            .should('be.visible')
            .click();

        // Verifica se abriu a página de detalhes
        cy.url().should('include', 'prod.html');

        // Nome do produto
        cy.get('.name')
            .should('contain.text', 'MacBook Pro');

        // Preço
        cy.get('.price-container')
            .should('contain.text', '$1100');

        // Descrição
        cy.get('#more-information')
            .should('be.visible');

        // Botão Add to cart
        cy.contains('a', 'Add to cart')
            .should('be.visible');

    cy.contains('Home').click();

    cy.url().should('include', 'index.html');

    cy.contains('Samsung galaxy s6').should('be.visible');
    cy.contains('Laptops').should('be.visible');
    cy.contains('Monitors').should('be.visible');

  });

});