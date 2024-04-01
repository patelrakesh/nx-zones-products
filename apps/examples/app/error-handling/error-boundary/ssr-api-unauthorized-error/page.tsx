import { CustomErrorBoundary, customFetch } from '@verizon-nextgen/shared/ui';

const Page = async () => {
  let error;

  await customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/UNAUTHORIZED`
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
