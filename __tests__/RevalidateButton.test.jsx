import React from "react";
import { render, fireEvent } from "@testing-library/react";
import RevalidateButton from "../app/components/RevalidateButton";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn().mockReturnValue("/example-path"),
}));

jest.mock("next/cache", () => ({
  revalidatePath: jest.fn(),
}));

describe("RevalidateButton component", () => {
  test("renders correctly", () => {
    const { getByText } = render(<RevalidateButton exercise="exercise" />);
    expect(getByText("REVALIDATE BY TAG")).toBeInTheDocument();
    expect(getByText("REVALIDATE BY PATH")).toBeInTheDocument();
  });

  test("revalidateByTag button click calls revalidatePath with correct parameters", () => {
    const { getByText } = render(<RevalidateButton exercise="exercise" />);
    fireEvent.click(getByText("REVALIDATE BY TAG"));
    expect(revalidatePath).toHaveBeenCalledWith("/example-path");
  });

  test("revalidateByPath button click calls revalidatePath with correct parameters", () => {
    const { getByText } = render(<RevalidateButton exercise="exercise" />);
    fireEvent.click(getByText("REVALIDATE BY PATH"));
    expect(revalidatePath).toHaveBeenCalledWith("/example-path");
  });
});
