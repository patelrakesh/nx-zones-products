import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./ProductList";

describe("ProductList", () => {
  const products = [
    {
      id: 1,
      title: "Product 1",
      thumbnail: "product1.jpg",
      brand: "Brand 1",
      price: 10,
    },
    {
      id: 2,
      title: "Product 2",
      thumbnail: "product2.jpg",
      brand: "Brand 2",
      price: 20,
    },
  ];

  test("renders product cards with provided products", () => {
    render(<ProductList products={products} />);

    expect(screen.getByText("Deal Of The Week")).toBeInTheDocument();

    expect(screen.getAllByRole("listitem")).toHaveLength(products.length);

    products.forEach((product) => {
      expect(screen.getByText(product.title)).toBeInTheDocument();
      expect(screen.getByText(`Brand: ${product.brand}`)).toBeInTheDocument();
      expect(screen.getByText(`Price: $${product.price}`)).toBeInTheDocument();
    });
  });
});
