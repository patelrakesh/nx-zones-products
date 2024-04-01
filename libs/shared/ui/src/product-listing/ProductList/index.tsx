import ProductTile from '../ProductTile';
import ProductLoader from '../ProductLoader';

const ProductList = ({
  products,
  showSkeletonLoader,
  dynamic,
  column = 3,
}: any) => {
  return (
    <div className="pure-g">
      {products?.map((item: any, i: number) => {
        return (
          <div
            key={i}
            className={`pure-u-1 pure-u-sm-1 pure-u-md-1-2 pure-u-lg-1-${column}`}
          >
            {showSkeletonLoader ? (
              <ProductLoader />
            ) : (
              <ProductTile item={item} dynamic={dynamic} />
            )}
          </div>
        );
      })}
    </div>
  );
};
export default ProductList;
