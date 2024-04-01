import { render } from '@testing-library/react';

import IndexPage from './page';

describe('IndexPage', () => {
  it('should render successfully', async () => {
    const jsx = await IndexPage();
    const { baseElement } = render(jsx);
    expect(baseElement).toBeTruthy();
  });
});
