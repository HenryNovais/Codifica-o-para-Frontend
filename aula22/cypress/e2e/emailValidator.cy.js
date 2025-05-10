
describe('Interação com o Formulário', () => {
 
  it('deve mostrar mensagem de e-mail válido', () => {
    cy.visit('index.html');
    cy.get('#email').type('teste@exemplo.com');
    cy.get('button').click();
    cy.get('#message').should('have.text', 'E-mail válido!');
  });

  it('deve mostrar mensagem de e-mail inválido', () => {
    cy.visit('index.html');
    cy.get('#email').type('invalidemail');
    cy.get('button').click();
    cy.get('#message').should('have.text', 'E-mail inválido!');
  });
});
