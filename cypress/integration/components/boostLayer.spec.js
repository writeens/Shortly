/* eslint-disable no-undef */
context('Content', () => {
  it('Has accurate copy', () => {
    cy.visit('http://localhost:3000');
    cy.get('#boostText').should('contain', 'Boost your links today');
    cy.get('#boostButton').should('contain', 'Get Started');
  });
});
