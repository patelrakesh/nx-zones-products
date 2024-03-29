import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import ProductListComp from '../app/components/ProductList';
import { fetchExerciseData } from '../app/utils/fetchData';

jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    refresh: jest.fn(),
  }),
}));

jest.mock('../app/utils/fetchData', () => ({
  fetchExerciseData: jest.fn(),
}));

describe('ProductListComp', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders product list correctly', async () => {
    // Mock data to be returned by fetchExerciseData
    const mockData = {
      products: [
        {
          id: 1,
          title: 'Product 1',
          brand: 'Brand 1',
          thumbnail: 'thumbnail-url-1',
          rating: 4.5,
          price: 20.99,
        },
        {
          id: 2,
          title: 'Product 2',
          brand: 'Brand 2',
          thumbnail: 'thumbnail-url-2',
          rating: 3.8,
          price: 15.49,
        },
      ],
    };

    // Mocking fetchExerciseData to return mock data
    fetchExerciseData.mockResolvedValue(mockData);

    render(<ProductListComp exercise="exercise1" />);

    // Wait for products to be loaded
    await waitFor(() => {
      const productElements = screen.getAllByTestId('product-card');
      expect(productElements.length).toBe(2); // Assuming there are two products in the mock data
    });

    // Check if ProductCard component is rendered with correct props
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Brand: Brand 1')).toBeInTheDocument();
    expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
    expect(screen.getByText('Price: 20.99')).toBeInTheDocument();

    expect(screen.getByText('Product 2')).toBeInTheDocument();
    expect(screen.getByText('Brand: Brand 2')).toBeInTheDocument();
    expect(screen.getByText('Rating: 3.8')).toBeInTheDocument();
    expect(screen.getByText('Price: 15.49')).toBeInTheDocument();

    // Check that fetchExerciseData is called with the correct exercise
    expect(fetchExerciseData).toHaveBeenCalledWith('exercise1');
  });
});
