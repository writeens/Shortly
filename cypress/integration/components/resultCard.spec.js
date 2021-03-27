/* eslint-disable no-undef */
context('Action', () => {
  it('Upon submission of link, an accurate copy of this component is generated', () => {
    cy.visit('http://localhost:3000');
    cy.get('#input').type('https://rvysion.com').should('have.value', 'https://rvysion.com');
    cy.get('#inputButton').click();
    cy.wait(15000);
    cy.get('[data-cy=result]').should('be.visible');
    cy.get('[data-cy=resultOriginalLink]').should('contain', 'https://rvysion.com');
    cy.get('[data-cy=resultFinalLink]').should(($final) => {
      const finalLink = $final.text();
      expect(finalLink).to.not.equal('');
    });
    cy.get('[data-cy=resultButton]').should('contain', 'Copy');
  });
  it('User clicks copy, Button Text and Color Changes', () => {
    cy.visit('http://localhost:3000');
    cy.get('#input').type('https://rvysion.com').should('have.value', 'https://rvysion.com');
    cy.get('#inputButton').click();
    cy.wait(15000);
    cy.get('[data-cy=resultButton]').click();
    cy.get('[data-cy=resultButton]').should('contain', 'Copied!');
    cy.get('[data-cy=resultButton]').should('have.css', 'background-color', 'rgb(59, 48, 84)');
  });
});
