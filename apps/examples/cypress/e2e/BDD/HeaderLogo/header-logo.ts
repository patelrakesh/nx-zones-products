import { Given, Then } from '@badeball/cypress-cucumber-preprocessor';

const { siteUrl } = Cypress.env();

Given(`We're on the vzw.com website`, () => {
  cy.visit(`${siteUrl}`);
});

Then(`the logo should be present within an anchor tag`, () => {
  cy.get('a[title="Verizon Home Page"]').should('exist');
});
