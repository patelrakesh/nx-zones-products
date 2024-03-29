import '@testing-library/jest-dom'
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TanstackProductListing from "../app/components/TanstackProductListing";

// Mock the useQuery hook
jest.mock("@tanstack/react-query", () => ({
  useQuery: jest.fn(),
}));

describe("TanstackProductListing", () => {
  beforeEach(() => {
    // Reset the mocked implementation before each test
    jest.clearAllMocks();
  });

  test("renders loading state when data is pending", async () => {
    // Mock useQuery to return pending state
    const useQueryMock = jest.fn(() => ({
      isPending: true,
    }));
    require("@tanstack/react-query").useQuery.mockImplementation(useQueryMock);

    // Render the component
    render(<TanstackProductListing params={{ exercise: "test" }} />);

    // Assert that loading text is rendered
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("renders error message when there is an error", async () => {
    // Mock useQuery to return error state
    const useQueryMock = jest.fn(() => ({
      error: new Error("Test error"),
    }));
    require("@tanstack/react-query").useQuery.mockImplementation(useQueryMock);

    // Render the component
    render(<TanstackProductListing params={{ exercise: "test" }} />);

    // Assert that error message is rendered
    expect(screen.getByText("Something went wrong...")).toBeInTheDocument();
  });

  test("renders products when data is fetched successfully", async () => {
    // Define mock products data
    const mockProducts = [
      { id: 1, name: "Product 1", price: 10 },
      { id: 2, name: "Product 2", price: 20 },
    ];

    // Mock useQuery to return successful data
    const useQueryMock = jest.fn(() => ({
      data: { products: mockProducts },
      refetch: jest.fn(),
    }));
    require("@tanstack/react-query").useQuery.mockImplementation(useQueryMock);

    // Render the component
    render(<TanstackProductListing params={{ exercise: "test" }} />);

    // Assert that product cards are rendered
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("Product 2")).toBeInTheDocument();
    });
  });

  test("clicking on CachedProducts component triggers refetch function", async () => {
    // Mock refetch function
    const refetchMock = jest.fn();

    // Mock useQuery to return successful data
    const useQueryMock = jest.fn(() => ({
      data: { products: [] },
      refetch: refetchMock,
    }));
    require("@tanstack/react-query").useQuery.mockImplementation(useQueryMock);

    // Render the component
    render(<TanstackProductListing params={{ exercise: "test" }} />);

    // Click on CachedProducts component
    userEvent.click(screen.getByTestId("cached-products-button"));

    // Assert that refetch function is called
    await waitFor(() => {
      expect(refetchMock).toHaveBeenCalledTimes(1);
    });
  });
});
