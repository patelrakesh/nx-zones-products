import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import { useQuery } from "@tanstack/react-query";
import TanstackProductListing from "../app/components/TanstackProductListing";

jest.mock("@tanstack/react-query", () => ({
    useQuery: jest.fn(),
  }));
  
  describe("TanstackProductListing", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    test("renders loading state", async () => {
      const useQueryMock = jest.fn(() => ({ isPending: true }));
      useQuery.mockImplementation(useQueryMock);
  
      render(<TanstackProductListing params={{ exercise: "test" }} />);
  
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });
  
    test("renders error message", async () => {
      const useQueryMock = jest.fn(() => ({ error: new Error("Test error") }));
      useQuery.mockImplementation(useQueryMock);
  
      render(<TanstackProductListing params={{ exercise: "test" }} />);
  
      expect(screen.getByText("Something went wrong...")).toBeInTheDocument();
    });
  
    test("renders product list", async () => {
      const mockProducts = [{ id: 1, name: "Product A" }, { id: 2, name: "Product B" }];
      const useQueryMock = jest.fn(() => ({ data: { products: mockProducts } }));
      useQuery.mockImplementation(useQueryMock);
  
      render(<TanstackProductListing params={{ exercise: "test" }} />);
  
      await waitFor(() => {
        expect(screen.getByText("Product A")).toBeInTheDocument();
        expect(screen.getByText("Product B")).toBeInTheDocument();
      });
    });
  
    test("calls refetch function when CachedProducts is clicked", async () => {
      const refetchMock = jest.fn();
      const useQueryMock = jest.fn(() => ({ refetch: refetchMock }));
      useQuery.mockImplementation(useQueryMock);
  
      render(<TanstackProductListing params={{ exercise: "test" }} />);
  
      const cachedProductsButton = screen.getByText("Cached Products");
      cachedProductsButton.click();
  
      expect(refetchMock).toHaveBeenCalledTimes(1);
    });

    test("calls Tanstack Query Cached Products title", async () => {
        const refetchMock = jest.fn();
        const useQueryMock = jest.fn(() => ({ refetch: refetchMock }));
        useQuery.mockImplementation(useQueryMock);
    
        render(<TanstackProductListing params={{ exercise: "cached-products" }} />);
    
        const cachedProductsButton = screen.getByText("Tanstack Query Cached Products");
        expect(cachedProductsButton).toBeInTheDocument();
      });
  });
