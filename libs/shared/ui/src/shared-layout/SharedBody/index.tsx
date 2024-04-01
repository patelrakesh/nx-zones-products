'use server';

import { FC } from 'react';

type SharedBodyProps = {
  children?: React.ReactNode;
};

const SharedBody: FC<SharedBodyProps> = async ({ children }) => {
  return <body>{children}</body>;
};

export default SharedBody;
