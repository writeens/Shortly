/* eslint-disable no-undef */
context('Viewport', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('On Desktop Navbar Toggle should be hidden', () => {
    cy.wait(200);
    cy.viewport('macbook-15');

    cy.get('#navbarToggle').should('not.be.visible');
  });

  it('On Mobile Navbar Toggle should be visible', () => {
    cy.wait(200);
    cy.viewport('iphone-xr');

    cy.get('#navbarToggle').should('be.visible');
  });
});

context('Toggle Button', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('On Mobile, clicking toggle controls menu accordingly', () => {
    cy.wait(200);
    cy.viewport('iphone-xr');

    cy.get('#navbarToggle').click();

    cy.get('#navbarMenu').should('be.visible');

    cy.get('#navbarToggle').click();

    cy.get('#navbarMenu').should('not.be.visible');
  });
});

context('Content', () => {
  it('Is made up of 5 links', () => {
    cy.viewport('macbook-15');

    cy.get('#navbarLeftMenu').children().should('have.length', 3);

    cy.get('#navbarRightMenu').children().should('have.length', 2);
  });

  it('Has the right names for the links', () => {
    const rightLinks = cy.get('#navbarLeftMenu').children();
    cy.wrap(rightLinks[0]).contains('Features');
    cy.wrap(rightLinks[0]).contains('Pricing');
    cy.wrap(rightLinks[0]).contains('Resources');
    const leftLinks = cy.get('#navbarRightMenu').children();
    cy.wrap(leftLinks[0]).contains('Login');
    cy.wrap(leftLinks[0]).contains('Sign Up');
  });
});

export {};
