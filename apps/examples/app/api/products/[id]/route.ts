import 'server-only';

import productsData from '@examples/mock-data/products.json';
/*
 * The endpoint of this API is below
 * <BASE_URL>/ngd/examples/api/products/{id}
 * <BASE_URL>/ngd/examples/api/products/{id}?random=true
 */
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const random = searchParams.get('random');

  let product;
  if (random) {
    const index = Math.floor(Math.random() * productsData.products.length);
    product = productsData.products[index];
  } else {
    product = productsData.products.find(
      product => product.id === Number(params.id)
    );
  }

  return Response.json(product);
}
