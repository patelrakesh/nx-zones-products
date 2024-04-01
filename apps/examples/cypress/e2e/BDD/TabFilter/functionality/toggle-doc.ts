import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

const baseUrl = Cypress.config('baseUrl');

Given(`the user is on the {string}`, function () {
  cy.visit(`${baseUrl}/ngd/examples/nextjs-introduction`);
});

When('the user click on the link {string}', (linkContent: string) => {
  cy.get('body').find('ul>li a').contains(linkContent).click();
});

Then(`page should redirect to {string}`, pageURL => {
  cy.location().should(loc => {
    expect(loc.pathname).to.eq(pageURL);
  });
});
