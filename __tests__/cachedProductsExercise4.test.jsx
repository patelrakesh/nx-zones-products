import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import ProductList from "../app/productlist/cached-products/page";

describe("ProductList", () => {
  test("renders TanstackProductListing with correct props", () => {
    const params = { exercise: "cached-products" };

    const { getByTestId } = render(<ProductList params="cached-products" />);

    const tanstackProductListing = getByTestId("tanstack-product-listing");

    expect(tanstackProductListing).toBeInTheDocument();
    expect(tanstackProductListing).toHaveAttribute("params", JSON.stringify(params));
  });
});
