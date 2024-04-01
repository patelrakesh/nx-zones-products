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

When('the user clicks on the filter named {string}', (filter: string) => {
  cy.get('#tabFilterWrapper')
    .find('ul>li button>span')
    .contains(filter)
    .click();
});

Then(`page should display Apple products`, () => {
  cy.location().should(loc => {
    expect(loc.pathname).to.eq('/smartphones/apple/');
  });
});
