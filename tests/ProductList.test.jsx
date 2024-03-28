import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import ProductListComp from '../app/components/ProductList';
import fetchData from '../app/utils/fetchData';

// Mocking the fetchProducts function
jest.mock('../app/utils/fetchData', () => {
  const mockFetchProducts = jest.fn();
  return {
    __esModule: true,
    default: jest.fn(),
    fetchProducts: mockFetchProducts ,
  };
});

describe('ProductListComp', () => {
  it.only('renders product list correctly', async () => {
    const mockProducts = [
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
    ];

    // Mocking the return value of fetchProducts function
    await fetchData.mockResolvedValue({ products: mockProducts });

    await render(<ProductListComp />);

    // Wait for products to be loaded
    await waitFor(() => {
      const productElements = screen.getAllByRole('listitem');
      expect(productElements.length).toBe(2); // Assuming there are two products in the mock data
    });

    // Check if product details are rendered correctly
    // expect(screen.getByText('Product 1')).toBeInTheDocument();
    // expect(screen.getByText('Brand: Brand 1')).toBeInTheDocument();
    // expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
    // expect(screen.getByText('Price: 20.99')).toBeInTheDocument();

    // expect(screen.getByText('Product 2')).toBeInTheDocument();
    // expect(screen.getByText('Brand: Brand 2')).toBeInTheDocument();
    // expect(screen.getByText('Rating: 3.8')).toBeInTheDocument();
    // expect(screen.getByText('Price: 15.49')).toBeInTheDocument();
  });

  it('handles error when fetching products fails', async () => {
    // Mocking the fetchProducts function to throw an error
    ProductListComp.fetchProducts.mockRejectedValue(new Error('Failed to fetch data'));

    render(<ProductListComp exercise="exercise1" />);

    // Wait for error message to be displayed
    await waitFor(() => {
      expect(screen.getByText('Failed to fetch data')).toBeInTheDocument();
    });
  });
});
