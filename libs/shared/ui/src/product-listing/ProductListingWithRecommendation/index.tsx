import ProductList from '../ProductList';
import RecommendedProducts from '../RecommendedProducts';
import { productsType } from './type';

const ProductListingWithRecommendation = ({ productData }: productsType) => {
  return (
    <div className="pure-g">
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">
        <h2 className="text-center">Product List</h2>
        <ProductList products={productData} column={2} />
      </div>
      <div className="pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
        <h2 className="text-center">Recommended Products</h2>
        <RecommendedProducts recommendedItem={productData} />
      </div>
    </div>
  );
};

export default ProductListingWithRecommendation;
