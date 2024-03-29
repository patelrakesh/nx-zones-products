import '@testing-library/jest-dom';
import { render, fireEvent } from "@testing-library/react";
import RevalidateButton from "../app/components/RevalidateButton";

jest.mock('next/router', () => ({
  useRouter: () => ({
    refresh: jest.fn(),
  }),
}));

describe('RevalidateButton component', () => {
  it('should trigger revalidateByPath function on click', async () => {
    const { getByText } = render(<RevalidateButton />);
    const revalidateByPathButton = getByText('REVALIDATE BY PATH');

    fireEvent.click(revalidateByPathButton);

    // Wait for revalidate function to be called
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/api/revalidatePath?path=/productlist/exercise2'
      );
    });

    expect(window.location.reload).toHaveBeenCalled();
  });

  it('should trigger revalidateByTag function on click', async () => {
    const { getByText } = render(<RevalidateButton />);
    const revalidateByTagButton = getByText('REVALIDATE BY TAG');

    fireEvent.click(revalidateByTagButton);

    // Wait for revalidate function to be called
    await waitFor(() => {
      expect(window.fetch).toHaveBeenCalledWith(
        'http://localhost:3000/api/revalidateTag?tag=product'
      );
    });

    expect(window.location.reload).toHaveBeenCalled();
  });
});
