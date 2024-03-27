import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "../productlist/[exercise]/page";

jest.mock("./fetchProducts"); // Mock the fetchProducts function

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
      // ... more mock products
    ],
  };

  fetchProducts.mockResolvedValue(mockData); // Set the mock return value

  render(<ProductList params={{ exercise: "test" }} />);

  // Assertions
  expect(screen.getByText("Static and dynamic rendering")).toBeInTheDocument();
  expect(screen.getByText("Product 1")).toBeInTheDocument();
  expect(screen.getByText("Brand A")).toBeInTheDocument();
  // ... more assertions for other product details
});

test("handles errors gracefully", async () => {
    const mockError = new Error("Failed to fetch data");
    fetchProducts.mockRejectedValue(mockError);
  
    render(<ProductList params={{ exercise: "test" }} />);
  
    // Assertions
    expect(screen.getByText("Failed to fetch data")).toBeInTheDocument();
  });

  test("renders an empty list when no products are available", async () => {
    fetchProducts.mockResolvedValue({ products: [] });
  
    render(<ProductList params={{ exercise: "test" }} />);
  
    // Assertions
    expect(screen.getByText("No products found")).toBeInTheDocument();
  });

  test("handles loading state", async () => {
    fetchProducts.mockImplementation(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ products: [] });
        }, 1000); // Simulate a delay
      });
    });
  
    render(<ProductList params={{ exercise: "test" }} />);
  
    // Assertions
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  
    // Wait for the data to load
    await screen.findByText("No products found");
  });