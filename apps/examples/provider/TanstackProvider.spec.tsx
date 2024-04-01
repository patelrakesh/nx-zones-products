import { render } from '@testing-library/react';
import { TanstackProvider } from './index';

const component = (
  <TanstackProvider>
    <div>Child Component</div>
  </TanstackProvider>
);

describe('TanstackProvider.tsx', () => {
  it('should renders children', () => {
    const { getByText } = render(component);
    expect(getByText('Child Component')).toBeInTheDocument();
  });
});
