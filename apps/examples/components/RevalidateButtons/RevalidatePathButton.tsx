'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Button, customFetch } from '@verizon-nextgen/shared/ui';

function RevalidatePathButton() {
  const router = useRouter();

  const pathname = usePathname();
  const handleClick = async () => {
    await customFetch(`/ngd/examples/api/revalidate-path?path=${pathname}`);
    console.log(pathname, 'pathname');
    router.refresh();
  };
  return (
    <div className="text-center">
      <Button onClick={handleClick} style="mt-5">
        Revalidate by Path
      </Button>
    </div>
  );
}
export default RevalidatePathButton;
