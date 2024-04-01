'use client'; // Error components must be Client Components

import { BackButton } from '@verizon-nextgen/shared/ui';
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
    <>
      <BackButton />
      <p>Main error.tsx file:</p>
      <pre>{error.stack}</pre>
    </>
  );
}
