describe('CT02.2 - Filtragem por categoria Laptop', () => {
  it('Deve exibir apenas produtos da categoria Laptop', () => {
    
    cy.visit('https://www.demoblaze.com')

    cy.contains('a', 'Laptops').click()

    cy.wait(2000)

    cy.contains('Sony vaio i5').should('be.visible')
    cy.contains('Sony vaio i7').should('be.visible')
    cy.contains('MacBook air').should('be.visible')

    cy.contains('Samsung galaxy s6').should('not.exist')
    cy.contains('Apple monitor 24').should('not.exist')
  })
})