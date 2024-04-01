'use server';

import { FC } from 'react';

type SharedHeadProps = {
  children?: React.ReactNode;
};

const SharedHead: FC<SharedHeadProps> = async ({ children }) => {
  return (
    <head>
      {/* <link
        rel="stylesheet"
        href="https://bootswatch.com/5/lux/bootstrap.min.css"
      /> */}
      <link
        href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/base-min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/purecss@3.0.0/build/grids-responsive-min.css"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        rel="stylesheet"
      />
      {children}
    </head>
  );
};

export default SharedHead;
