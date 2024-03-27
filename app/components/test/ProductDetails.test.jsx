import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ProductDetails from "./ProductDetails";

describe("ProductDetails", () => {
  const product = {
    id: 1,
    title: "Product 1",
    thumbnail: "product1.jpg",
    brand: "Brand 1",
    rating: 4.5,
    price: 10,
  };

  test("renders product details with provided product", () => {
    render(<ProductDetails product={product} />);

    expect(screen.getByText(product.title)).toBeInTheDocument();
    expect(screen.getByText(`Brand: ${product.brand}`)).toBeInTheDocument();
    expect(screen.getByText(`Rating: ${product.rating}`)).toBeInTheDocument();
    expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
  });

  test("adds product to cart when 'ADD TO CART' button is clicked", () => {
    const addToCartMock = jest.fn();
    render(<ProductDetails product={product} addToCart={addToCartMock} />);

    fireEvent.click(screen.getByText("ADD TO CART"));

    expect(addToCartMock).toHaveBeenCalledWith(product);
  });
});
