import { notFound, redirect } from 'next/navigation';
import { FC, isValidElement } from 'react';
import SomethingWentWrong from './FallbackUI/SomethingWentWrong';
import TryAgain from './FallbackUI/TryAgain';

// Define the props expected by the APIErrorBoundary component
type CustomErrorBoundaryProps = {
  children: React.ReactNode; // The content that this boundary wraps
  error: any; // The error object that triggered this boundary
  fallback?: React.ReactNode; // Optional fallback content to display in case of an error
};

// Define the CustomErrorBoundary functional component using React's FunctionComponent type
const CustomErrorBoundary: FC<CustomErrorBoundaryProps> = ({
  children,
  error,
  fallback,
}) => {
  // TODO: change errorCode according to actual API signature
  // fetching api error codes for 200 with errorCode or non 200 status
  const errorCode =
    error?.status === 200 ? error?.responseData?.errorCode : error?.status;

  const errorCodeMappers: any = {
    500: SomethingWentWrong,
    400: SomethingWentWrong,
    401: () => redirect('/'), // TODO: need to revalidate before redirect
    404: () => notFound(), // it will same works for redirect(path)
    OK_WITH_ERROR: TryAgain,
  };

  const fallbackToRender = isValidElement(fallback) ? fallback : null;

  const ErrorComponent: any =
    fallbackToRender || errorCodeMappers[errorCode] || errorCodeMappers['500'];

  // If there's an error, return the fallback content if provided
  return error ? <ErrorComponent /> : children;
};

export default CustomErrorBoundary;
