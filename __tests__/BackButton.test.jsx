import '@testing-library/jest-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import BackButton from '../app/components/BackButton'
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('BackButton Component', () => {
  test('should render the BackButton component', () => {
    useRouter.mockReturnValue({
      back: jest.fn(),
    });

    render(<BackButton />);
    const backButton = screen.getByTestId('backButton');
    expect(backButton).toBeInTheDocument();
  });

  it('should call router.back when the button is clicked', () => {
    const mockBack = jest.fn();
    useRouter.mockReturnValue({
      back: mockBack,
    });

    render(<BackButton />);
    const backButton = screen.getByTestId('backButton');

    fireEvent.click(backButton);

    expect(mockBack).toHaveBeenCalled();
  });
});