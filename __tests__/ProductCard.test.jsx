import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductCard from '../app/components/ProductCard';

describe('ProductCard component', () => {
  it('renders product cards correctly', () => {
    const products = [
      {
        id: 1,
        title: 'Product 1',
        brand: 'Brand A',
        rating: 4.5,
        price: '$10',
        images: ['image1.jpg', 'image2.jpg'],
      },
      {
        id: 2,
        title: 'Product 2',
        brand: 'Brand B',
        rating: 3.8,
        price: '$15',
        images: ['image3.jpg'],
      },
    ];

    render(<ProductCard products={products} />);

    // Check if product titles are rendered
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Product 2')).toBeInTheDocument();

    // Check if brand names are rendered
    expect(screen.getByText('Brand A')).toBeInTheDocument();
    expect(screen.getByText('Brand B')).toBeInTheDocument();

    // Check if ratings are rendered
    expect(screen.getByText('Rating: 4.5')).toBeInTheDocument();
    expect(screen.getByText('Rating: 3.8')).toBeInTheDocument();

    // Check if prices are rendered
    expect(screen.getByText('Price: $10')).toBeInTheDocument();
    expect(screen.getByText('Price: $15')).toBeInTheDocument();

    // Check if images are rendered
    const productImages = screen.getAllByAltText(/Product/);
    expect(productImages.length).toBe(3); // 2 images for the first product and 1 image for the second product
  });

  it('renders no product cards when products array is empty', () => {
    const { container } = render(<ProductCard products={[]} />);
    const productCards = container.querySelectorAll('.bg-white');
    expect(productCards.length).toBe(0);
  });
});
