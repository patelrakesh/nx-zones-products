import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page';
import { LandingLinks } from '../app/utils/constant';

// describe('Page component', () => {
//   test('renders exercise page title and links', () => {
//     const { getByTestId, getByText } = render(<Page />);

//     const pageTitle = getByTestId('pageTitle');
//     expect(pageTitle.textContent).toBe('Exercises');

//     // Check if each link from LandingLinks renders correctly
//     LandingLinks.forEach((link) => {
//       const linkElement = getByText(link.text);
//       // expect(linkElement).toBeInTheDocument();
//       expect(linkElement.href).toContain(`/productlist/${link.route}`);
//     });
//   });
// });
describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)
 
    const heading = screen.getByTestId('pageTitle')
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('Exercises');

    // Check if each link from LandingLinks renders correctly
    LandingLinks.forEach((link) => {
      const linkElement = screen.getByText(link.text);
      expect(linkElement).toBeInTheDocument();
      expect(linkElement.href).toContain(`/productlist/${link.route}`);
    });
  })
})