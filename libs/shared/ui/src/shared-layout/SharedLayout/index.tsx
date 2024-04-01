'use server';

import { FC } from 'react';
import '../../css/global.css';

type SharedLayoutProps = {
  children: any;
};

const SharedLayout: FC<SharedLayoutProps> = async ({ children }) => {
  return <html lang="en">{children}</html>;
};

export default SharedLayout;
