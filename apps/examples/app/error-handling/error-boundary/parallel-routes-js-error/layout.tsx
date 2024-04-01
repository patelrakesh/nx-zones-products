'use server';

import { DocHeading } from '@verizon-nextgen/shared/ui';

const Layout = ({ children, section1, section2 }: any) => {
  return (
    <>
      <div>{children}</div>
      <DocHeading>Section 1</DocHeading>
      <div>{section1}</div>
      <DocHeading>Section 2</DocHeading>
      <div>{section2}</div>
    </>
  );
};

export default Layout;
