import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import RevalidateButton from "../app/components/RevalidateButton";
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

describe('RevalidateButton component', () => {
  let useRouterMock;

  beforeEach(() => {
    useRouterMock = {
      refresh: jest.fn(),
    };
    useRouter.mockReturnValue(useRouterMock);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders a revadidate-by-tag button', () => {
    render(<RevalidateButton />)
 
    const heading = screen.getByTestId('revadidate-by-tag')
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('REVALIDATE BY TAG');

  })
  test('renders a revadidate-by-path button', () => {
    render(<RevalidateButton />)
 
    const heading = screen.getByTestId('revadidate-by-path')
    expect(heading).toBeInTheDocument();
    expect(heading.textContent).toBe('REVALIDATE BY PATH');

  })

  test('should trigger revalidateByPath function on click', async () => {
    render(<RevalidateButton />);
    const revalidateByPathButton = screen.getByText('REVALIDATE BY PATH');
    expect(revalidateByPathButton).toBeInTheDocument();
    fireEvent.click(revalidateByPathButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        'https://nx-zones-products-three.vercel.app/api/revalidatePath?path=/productlist/exercise2'
      );
    });
    
    expect(useRouterMock.refresh).toHaveBeenCalled();
  });

  test('should trigger revalidateByTag function on click', async () => {
    render(<RevalidateButton />);
    const revalidateByTagButton = screen.getByText('REVALIDATE BY TAG');
    expect(revalidateByTagButton).toBeInTheDocument();
    fireEvent.click(revalidateByTagButton);

    await waitFor(() => {
      expect(fetch).toHaveBeenCalledWith(
        'https://nx-zones-products-three.vercel.app/api/revalidatePath?path=/productlist/exercise2'
      );
    });
    
    expect(useRouterMock.refresh).toHaveBeenCalled();
  });
});