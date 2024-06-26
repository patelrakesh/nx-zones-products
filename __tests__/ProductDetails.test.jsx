import '@testing-library/jest-dom';
import { render, waitFor, screen } from "@testing-library/react";
import ProductDetails from "../app/components/ProductDetails";

jest.mock("../app/types/interfaces", () => ({
  Product: jest.fn(),
}));

jest.mock("node-fetch", () =>
  jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 1,
          title: "Product Title",
          brand: "Product Brand",
          rating: 4.5,
          price: 100,
          thumbnail: "product-thumbnail-url",
        }),
    })
  )
);

describe("ProductDetails component", () => {
  test("renders product details correctly", async () => {
    render(
      <ProductDetails exercise="exercise1" id="1" />
    );

    await waitFor(() => {
      expect(screen.getByText("Product Title")).toBeInTheDocument();
      expect(screen.getByText("Product Brand")).toBeInTheDocument();
      expect(screen.getByText("Rating: 4.5")).toBeInTheDocument();
      expect(screen.getByText("Price: $100")).toBeInTheDocument();
      expect(screen.getByAltText("Product Title")).toBeInTheDocument();
    });
  });

  test("renders product details with random parameter for exercise2", async () => {
    render(
      <ProductDetails exercise="exercise2" id="1" />
    );

    await waitFor(() => {
      expect(screen.getByText("Product Title")).toBeInTheDocument();
      expect(screen.getByText("Product Brand")).toBeInTheDocument();
      expect(screen.getByText("Rating: 4.5")).toBeInTheDocument();
      expect(screen.getByText("Price: $100")).toBeInTheDocument();
      expect(screen.getByAltText("Product Title")).toBeInTheDocument();
    });
  });
});
