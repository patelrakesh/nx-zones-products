import React from 'react';
import { render } from '@testing-library/react';
import Page from '../app/page';
import { LandingLinks } from '../app/utils/constant';

describe('Page component', () => {
  test('renders exercise page title and links', () => {
    const { getByTestId, getByText } = render(<Page />);

    const pageTitle = getByTestId('pageTitle');
    expect(pageTitle.textContent).toBe('Exercises');

    // Check if each link from LandingLinks renders correctly
    LandingLinks.forEach((link) => {
      const linkElement = getByText(link.text);
      // expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain(`/productlist/${link.route}`);
    });
  });
});
