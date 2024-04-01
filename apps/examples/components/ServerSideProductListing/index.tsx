import 'server-only';

import { ProductList } from '@verizon-nextgen/shared/ui';
import { getProductsList } from '../../services/products';

const ServerSideProductListing = async () => {
  const res: any = await getProductsList();

  return (
    <div className="container">
      <ProductList products={res.products} />
    </div>
  );
};

export default ServerSideProductListing;
