import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import ProductList from '../app/productlist/[exercise]/page';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    params: { exercise: 'exercise2' },
  }),
}));

jest.mock('@/app/components/ProductList', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ProductList component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component with BackButton and exercise title', () => {
    render(<ProductList params={{ exercise: 'exercise2' }} />);

    expect(screen.getByTestId('back-button')).toBeInTheDocument();

    expect(screen.getByText('Exercise 2')).toBeInTheDocument();
  });

  test('renders RevalidateButton if exercise is "exercise2"', () => {
    render(<ProductList params={{ exercise: 'exercise2' }} />);

    expect(screen.getByText('REVALIDATE BY TAG')).toBeInTheDocument();
    expect(screen.getByText('REVALIDATE BY PATH')).toBeInTheDocument();
  });

  test('renders ProductListComp without suspense if exercise is not "exercise3"', () => {
    render(<ProductList params={{ exercise: 'exercise2' }} />);

    expect(screen.queryByTestId('loading')).not.toBeInTheDocument();
    expect(screen.queryByTestId('product-card')).toBeInTheDocument();
  });

  test('renders ProductListComp with Suspense if exercise is "exercise3"', () => {
    render(<ProductList params={{ exercise: 'exercise3' }} />);

    expect(screen.getByTestId('loading')).toBeInTheDocument();
    expect(screen.queryByTestId('product-card')).not.toBeInTheDocument();
  });
});
