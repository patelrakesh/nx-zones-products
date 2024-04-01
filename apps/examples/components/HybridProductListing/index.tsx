// import 'server-only';
'use server';

import { getFeaturedProductsList } from '../../services/products';
import ProductListingClient from '../ProductListingClient';

const HybridProductListing = async () => {
  const res: any = await getFeaturedProductsList();

  return (
    <>
      <ProductListingClient serverItems={res.products} />
    </>
  );
};

export default HybridProductListing;
