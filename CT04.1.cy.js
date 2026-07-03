// T005 - Teste automatizado: Enviar mensagem ao contato (DemoBlaze)

describe('CT04.1 - Enviar mensagem ao contato', () => {

  it('Deve enviar a mensagem com sucesso usando dados validos', () => {

    cy.visit('https://www.demoblaze.com')

    cy.get('#navbarExample').contains('Contact').click()

    cy.get('#recipient-email').type('enzodosanjos10@gmail.com')

    cy.get('#recipient-name').type('Enzo Andrade dos Anjos')

    cy.get('#message-text').type('Gostaria de tirar duvidas sobre o prazo de entrega dos monitores.')

    cy.on('window:alert', (texto) => {
      expect(texto).to.equal('Thanks for the message!!')
    })

    cy.contains('Send message').click()

  })

})