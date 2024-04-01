'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="container">
      <h3 className="text-center">Something went wrong!</h3>
      <p className="text-center">
        This is the custom error page for the examples app. To make changes to
        this page, edit <code>app/error.tsx</code>.
      </p>
      <pre>{error.stack}</pre>
      <p className="text-center">
        <button onClick={() => reset()}>
          Click here - Attempt to recover by trying to re-render
        </button>
      </p>
    </div>
  );
}
