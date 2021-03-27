/* eslint-disable no-undef */
context('Viewport', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('On Desktop, Get Started Layer should be visible', () => {
    cy.wait(200);
    cy.viewport('macbook-15');

    cy.get('#gsHeader').should('be.visible');
    cy.get('#gsBody').should('be.visible');
    cy.get('#gsLink').should('be.visible');
  });

  it('On Mobile, Get Started Layer should be visible', () => {
    cy.wait(200);
    cy.viewport('iphone-xr');

    cy.get('#gsHeader').should('be.visible');
    cy.get('#gsBody').should('be.visible');
    cy.get('#gsLink').should('be.visible');
  });
});
context('Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Has accurate copy', () => {
    cy.get('#gsHeader').contains('More than just shorter links');
    cy.get('#gsBody').contains('Build your brands recognition and get detailed insights into how your links are performing');
    cy.get('#gsLink').contains('Get Started');
  });
});
