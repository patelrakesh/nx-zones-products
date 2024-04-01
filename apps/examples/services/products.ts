import { customFetch, nextCacheOption } from '@verizon-nextgen/shared/ui';

export const getProductsList = (cacheOption = null) => {
  return customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/products`,
    'GET',
    {
      cacheOption: cacheOption,
    }
  );
};

export const getFeaturedProductsList = (cacheOption: any = null) => {
  return customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/products?limit=8`,
    'GET',
    {
      cacheOption: cacheOption,
    }
  );
};

export const getProductById = (id: number, cacheOption = null) => {
  return customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/products/${id}`,
    'GET',
    {
      cacheOption: cacheOption,
    }
  );
};

export const getRandomProductsList = (
  cacheOption = nextCacheOption.NEXT_NO_CACHE_OPTION
) => {
  return customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/products?random=true`,
    'GET',
    {
      cacheOption: cacheOption,
    }
  );
};

export const getRandomProductById = (
  id: number,
  cacheOption = nextCacheOption.NEXT_NO_CACHE_OPTION
) => {
  return customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/products/${id}?random=true`,
    'GET',
    {
      cacheOption: cacheOption,
    }
  );
};
