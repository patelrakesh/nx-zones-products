import { render, fireEvent } from '@testing-library/react';
import BackButton from './index';
import { useRouter } from 'next/navigation';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));
describe('BackButton', () => {
  it('should render', () => {
    const { baseElement } = render(<BackButton />);

    expect(baseElement).toBeTruthy();
  });

  it('should trigger router back', () => {
    const back = jest.fn();

    (useRouter as jest.Mock).mockImplementation(() => {
      return {
        back,
      };
    });
    const { getByRole } = render(<BackButton />);

    fireEvent.click(getByRole('button'));

    expect(back).toHaveBeenCalled();
  });
});
