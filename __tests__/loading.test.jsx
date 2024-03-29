import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loading from '../app/productlist/[exercise]/loading';
describe('Loading component', () => {
    test('renders loading message correctly', () => {
      render(<Loading />);
      const loadingMessage = screen.getByText('Please wait, page is being rendered........');
      expect(loadingMessage).toBeInTheDocument();
    });
  
    test('renders loading component with correct styles', () => {
      const { container } = render(<Loading />);
      const loadingDiv = container.firstChild;
      
      expect(loadingDiv).toHaveClass('h-96');
      expect(loadingDiv).toHaveClass('flex');
      expect(loadingDiv).toHaveClass('justify-center');
      expect(loadingDiv).toHaveClass('items-center');
    });
  });