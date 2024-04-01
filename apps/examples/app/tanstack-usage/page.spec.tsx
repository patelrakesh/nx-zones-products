import { render } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import Index from './page'; // Assuming the file is named index.js

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockUseRouter = useRouter as jest.Mock;
mockUseRouter.mockImplementation(() => {
  return {
    back: jest.fn(),
  };
});

describe('tanstack-usage => page.tsx', () => {
  it('Renders the page structure and content', async () => {
    const { getByText, getByRole, getAllByRole } = render(await Index());
    const allLinks = getAllByRole('link', { name: /See working example/i });

    // Main heading
    expect(
      getByRole('heading', { name: /API State Management with Tanstack/i })
    ).toBeInTheDocument();

    // DocHeadings with and without subheadings
    expect(getByText(/What is Tanstack query/i)).toBeInTheDocument();
    expect(getByText(/When to use Tanstack\?/i)).toBeInTheDocument();

    // Sample DocParagraph content
    expect(
      getByText(
        /It is data fetching, caching and API state management library/i
      )
    ).toBeInTheDocument();

    // Find the link with the desired ID
    const csrApiDataCacheLink = allLinks.find(link => link.id === 'example1');
    const onDemandDataRefetchLink = allLinks.find(
      link => link.id === 'example2'
    );
    const storeClientSideData = allLinks.find(link => link.id === 'example3');

    // Ensure it exists
    expect(csrApiDataCacheLink).toBeInTheDocument();
    expect(onDemandDataRefetchLink).toBeInTheDocument();
    expect(storeClientSideData).toBeInTheDocument();

    // Now perform assertions on the specific link
    expect(csrApiDataCacheLink).toHaveAttribute(
      'href',
      '/tanstack-usage/csr-api-data-cache'
    );
    expect(onDemandDataRefetchLink).toHaveAttribute(
      'href',
      '/tanstack-usage/csr-api-data-cache/recommended-products'
    );
    expect(storeClientSideData).toHaveAttribute(
      'href',
      '/tanstack-usage/client-state'
    );
  });
});
