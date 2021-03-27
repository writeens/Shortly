/* eslint-disable no-undef */
context('Content', () => {
  it('Has accurate copy', () => {
    cy.visit('http://localhost:3000');
    cy.get('#asHeader').should('contain', 'Advanced Statistics');
    cy.get('#asText').should('contain', 'Track how your links are performing across the web with our advanced statistics dashboard.');
  });
});
