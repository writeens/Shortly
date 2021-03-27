/* eslint-disable no-undef */
describe('Opening Landing Page', () => {
  it('Shows Get Started Button in Get Started Layer', () => {
    cy.visit('http://localhost:3000');

    cy.get('[data-cy=getStartedButton]').contains('Get Started');
  });
});

export {};
