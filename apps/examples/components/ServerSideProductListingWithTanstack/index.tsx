'use sever';

import Link from 'next/link';
import { ProductList } from '@verizon-nextgen/shared/ui';
import { products } from './type';

const ServerSideProductListingWithTanstack: React.FC<products> = ({
  initialData,
}) => {
  return (
    <>
      <h4 className="text-center">Pattern 5– SSR with tanstack</h4>
      <Link href="/tanstack/plp-ssr/no-api-call">
        <p className="text-center">
          Pattern 5.1- Navigate on other page to check no API call on client
        </p>
      </Link>
      <ProductList products={initialData} />
    </>
  );
};

export default ServerSideProductListingWithTanstack;
