import { render } from '@testing-library/react';

import AddToCart from './index';

describe('AddToCart', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddToCart />);
    expect(baseElement).toBeTruthy();
  });
});
