import {
  BackButton,
  DocHeading,
  DocParagraph,
  CustomErrorBoundary,
  customFetch,
} from '@verizon-nextgen/shared/ui';

const Page = async () => {
  let error, error2;
  await customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/OK_WITH_ERROR`
  ).catch(err => (error = err));

  await customFetch(
    `${process.env.NEXT_PUBLIC_PRODUCTS_API_BASE_URL}/error/INTERNAL_SERVER_ERROR`
  ).catch(err => (error2 = err));

  return (
    <>
      <BackButton />
      <DocHeading>Server Side API Error Examples</DocHeading>
      <DocParagraph>
        On this page, we have two sections, each with its own API. The first API
        is responding with an error but showing a 200 success code. The second
        API is responding with a 500 Server Error. The error boundary has caught
        all the errors and is displaying the UI accordingly.
      </DocParagraph>

      <DocHeading subHeading>Section 1</DocHeading>
      <CustomErrorBoundary error={error}>
        <h4>API 1 Res</h4>
      </CustomErrorBoundary>

      <DocHeading subHeading>Section 2</DocHeading>
      <CustomErrorBoundary error={error2}>
        <h4>API 2 Res</h4>
      </CustomErrorBoundary>
    </>
  );
};

export default Page;
