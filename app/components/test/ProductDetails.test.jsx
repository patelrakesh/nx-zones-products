import React from "react";
import { render, waitFor } from "@testing-library/react";
import ProductDetails from "./ProductDetails";

jest.mock("../types/interfaces", () => ({
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
    const { getByText, getByAltText } = render(
      <ProductDetails exercise="exercise1" id="1" />
    );

    await waitFor(() => {
      expect(getByText("Product Title")).toBeInTheDocument();
      expect(getByText("Product Brand")).toBeInTheDocument();
      expect(getByText("Rating: 4.5")).toBeInTheDocument();
      expect(getByText("Price: $100")).toBeInTheDocument();
      expect(getByAltText("Product Title")).toBeInTheDocument();
    });
  });

  test("renders product details with random parameter for exercise2", async () => {
    const { getByText, getByAltText } = render(
      <ProductDetails exercise="exercise2" id="1" />
    );

    await waitFor(() => {
      expect(getByText("Product Title")).toBeInTheDocument();
      expect(getByText("Product Brand")).toBeInTheDocument();
      expect(getByText("Rating: 4.5")).toBeInTheDocument();
      expect(getByText("Price: $100")).toBeInTheDocument();
      expect(getByAltText("Product Title")).toBeInTheDocument();
    });
  });
});
