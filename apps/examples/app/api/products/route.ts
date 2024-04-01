import 'server-only';

import productsData from '@examples/mock-data/products.json';
/*
 * The endpoint of this API is below
 * <BASE_URL>/ngd/examples/api/products
 * <BASE_URL>/ngd/examples/api/products?random=true
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const random = searchParams.get('random');
  const limit = Number(searchParams.get('limit')) || null;

  let output: any;
  if (random) {
    output = productsData.products
      .map(value => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
  } else {
    output = productsData.products;
  }

  if (limit) {
    output = output.slice(0, limit);
  }

  return Response.json({ products: output });
}
