import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import gridWallPages from './../../../../fixtures/gridwall-pages.json';
import viewPort from './../../../../fixtures/viewport.json';

const { siteUrl } = Cypress.env();

interface PageType {
  alias: string;
  contentTitle: string;
  url: string;
  label: string;
}

interface ViewPortType {
  desktop: ViewportParamsType;
  mobile: ViewportParamsType;
}

interface ViewportParamsType {
  width: number;
  height: number;
}

Given(
  `the user is on the {string} page, on {string}`,
  function (page: string, devicePreset: string) {
    const pageObj = (gridWallPages as Array<PageType>).find(
      pageObj => pageObj.alias === page
    );

    const { width, height } = (viewPort as ViewPortType)[
      devicePreset as keyof typeof viewPort
    ];

    if (pageObj) {
      cy.viewport(width, height).visit(`${siteUrl}${pageObj.url}`, {
        failOnStatusCode: false,
      });
    }
  }
);

When('the page is srolled to the top', () => {
  cy.scrollTo(0, 0);
});

Then(`different filter tabs are visible`, () => {
  cy.get('#tabFilterWrapper')
    .find('ul[role=tablist]')
    .children('li[role=presentation]')
    .should('have.length.above', 3);
});
