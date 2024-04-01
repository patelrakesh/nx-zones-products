import { render } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import productData from '../../../mock-data/products.json';
import Page from './page';

jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockUseQuery = useQuery as jest.Mock;
const mockUseRouter = useRouter as jest.Mock;

describe('csr-api-data-cache => page.tsx', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render loading when data is not fetched', async () => {
    mockUseQuery.mockImplementation(() => {
      return {
        isFetching: true,
        data: undefined,
      };
    });
    const { getByText } = render(<Page />);
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  it('renders product listing when data is fetched', () => {
    mockUseRouter.mockImplementation(() => {
      return {
        back: jest.fn(),
      };
    });
    mockUseQuery.mockImplementation(() => {
      return {
        isFetching: false,
        data: {
          products: productData?.products,
        },
      };
    });
    const { getByText } = render(<Page />);

    expect(getByText('API State Management with tanstack')).toBeInTheDocument();
    expect(getByText('iPhone 9')).toBeInTheDocument();
    expect(getByText('iPhone X')).toBeInTheDocument();
  });
});
