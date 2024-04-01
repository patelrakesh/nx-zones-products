import { CustomErrorBoundary, customFetch } from '@verizon-nextgen/shared/ui';

const Page = async () => {
  let error;

  const data1 = await customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error-not-found-page`
  ).catch(err => (error = err));

  return (
    <>
      <CustomErrorBoundary error={error}>
        <h4>API 1 Res</h4>
      </CustomErrorBoundary>
    </>
  );
};

export default Page;
