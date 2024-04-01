'use server';

import { BackButton } from '@verizon-nextgen/shared/ui';
import Link from 'next/link';

export default async function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className="container">
      <h3 className="text-center">Analytics Integration </h3>
      <hr />
      <BackButton />
      <hr />
      <p>
        - Learn about the usage of Analytics Tagging{' '}
        <Link href="/analytics-tagging">Click here</Link>
      </p>
    </div>
  );
}
