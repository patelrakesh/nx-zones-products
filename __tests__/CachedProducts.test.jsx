import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import CachedProducts from '../app/components/CachedProducts';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

describe('CachedProducts component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders link when pathname is "exercise-4"', () => {
    const mockUsePathname = jest.fn().mockReturnValue('exercise-4');
    require('next/navigation').usePathname = mockUsePathname;

    const { getByText } = render(<CachedProducts handleClick={() => {}} />);

    const linkElement = getByText('Click here to check Tanstack behaviour in Cached products page');
    expect(linkElement).toBeInTheDocument();
  });

  test('renders button when pathname is "cached-products"', () => {
    const mockUsePathname = jest.fn().mockReturnValue('cached-products');
    require('next/navigation').usePathname = mockUsePathname;

    const { getByText } = render(<CachedProducts handleClick={() => {}} />);

    const buttonElement = getByText('Click to fetch fresh data');
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls handleClick when button is clicked', () => {
    const mockUsePathname = jest.fn().mockReturnValue('cached-products');
    require('next/navigation').usePathname = mockUsePathname;

    const mockHandleClick = jest.fn();

    const { getByText } = render(<CachedProducts handleClick={mockHandleClick} />);

    const buttonElement = getByText('Click to fetch fresh data');
    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalled();
  });
});
