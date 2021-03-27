/* eslint-disable no-undef */
context('Content', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });
  it('Features section has the right name for the links', () => {
    cy.viewport('macbook-15');

    cy.get('#footerFeatures0').should('contain', 'Link Shortening');
    cy.get('#footerFeatures1').should('contain', 'Branded Links');
    cy.get('#footerFeatures2').should('contain', 'Analytics');
  });

  it('Resources section has the right name for the links', () => {
    cy.viewport('macbook-15');

    cy.get('#footerResources0').should('contain', 'Blog');
    cy.get('#footerResources1').should('contain', 'Developers');
    cy.get('#footerResources2').should('contain', 'Support');
  });

  it('Company section has the right name for the links', () => {
    cy.viewport('macbook-15');

    cy.get('#footerCompany0').should('contain', 'About');
    cy.get('#footerCompany1').should('contain', 'Our Team');
    cy.get('#footerCompany2').should('contain', 'Careers');
    cy.get('#footerCompany3').should('contain', 'Contact');
  });
});
