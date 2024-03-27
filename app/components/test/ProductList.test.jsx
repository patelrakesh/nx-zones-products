import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "../../productlist/[exercise]/page";

jest.mock("./fetchProducts");

test("renders the component correctly with data", async () => {
  const mockData = {
    products: [
      {
        id: 1,
        title: "Product 1",
        brand: "Brand A",
        rating: 4.5,
        price: 100,
        thumbnail: "https://example.com/image.jpg",
      },
    ],
  };

  fetchProducts.mockResolvedValue(mockData);

  render(<ProductList params={{ exercise: "test" }} />);

  expect(screen.getByText("Static and dynamic rendering")).toBeInTheDocument();
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Brand A")).toBeInTheDocument();
});

test("handles errors gracefully", async () => {
  const mockError = new Error("Failed to fetch data");
  fetchProducts.mockRejectedValue(mockError);

  render(<ProductList params={{ exercise: "test" }} />);

  expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
});

test("renders an empty list when no products are available", async () => {
  fetchProducts.mockResolvedValue({ products: [] });

  render(<ProductList params={{ exercise: "test" }} />);

  expect(screen.getByText("No products found")).toBeInTheDocument();
});

test("handles loading state", async () => {
  fetchProducts.mockImplementation(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ products: [] });
      }, 1000);
    });
  });

  render(<ProductList params={{ exercise: "test" }} />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  await screen.findByText("No products found");
});
