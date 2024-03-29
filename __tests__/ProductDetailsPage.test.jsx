import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import PDP, { generateStaticParams } from '../app/products/[id]/page';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    params: { exercise: 'exercise1', id: '1' },
  }),
}));

jest.mock('@/app/components/ProductDetails', () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="product-details">Mock ProductDetails</div>),
}));

describe('PDP component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders component with BackButton and product details', async () => {
    render(<PDP params={{ exercise: 'exercise1', id: '1' }} />);
    expect(screen.getByTestId('back-button')).toBeInTheDocument();
    expect(screen.getByText('Product Details of Product Id : 1')).toBeInTheDocument();
    expect(await screen.findByTestId('product-details')).toBeInTheDocument();
  });

  test('generateStaticParams returns correct static params', async () => {
    const staticParams = await generateStaticParams();
    expect(staticParams).toEqual([{ id: '1' }, { id: '2' }]);
  });
});
