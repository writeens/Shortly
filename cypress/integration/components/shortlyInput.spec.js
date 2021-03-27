/* eslint-disable no-undef */
context('Content', () => {
  it('Has accurate copy', () => {
    cy.visit('http://localhost:3000');
    cy.get('#input').should('have.value', '');
    cy.get('#inputButton').should('contain', 'Shorten It');
  });
});

context('Action', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Prevent user from submitting empty input', () => {
    cy.get('#inputButton').click();
    cy.get('#inputErrorMessage').should('contain', 'Please add a link');
  });
  it('Prevent user from submitting invalid url', () => {
    cy.get('#input').type('hello').should('have.value', 'hello');
    cy.get('#inputButton').click();
    cy.get('#inputErrorMessage').should('contain', 'Please enter a valid link');
  });
  it('If error, hide error once user starts typing', () => {
    cy.get('#input').type('hello').should('have.value', 'hello');
    cy.get('#inputButton').click();
    cy.get('#inputErrorMessage').should('contain', 'Please enter a valid link');
    cy.get('#input').type('mon').should('have.value', 'hellomon');
  });
  it('Make submission', () => {
    cy.get('#input').type('https://rvysion.com').should('have.value', 'https://rvysion.com');
    cy.get('#inputButton').click();
    cy.get('#inputButton').should('contain', 'Please Wait');
    cy.wait(15000);
    cy.get('#inputButton').should('contain', 'Shorten It');
  });
});
