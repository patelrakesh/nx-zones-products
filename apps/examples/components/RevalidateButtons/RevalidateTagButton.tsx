'use client';

import { useRouter } from 'next/navigation';
import { Button, customFetch } from '@verizon-nextgen/shared/ui';

function RevalidateTagButton() {
  const router = useRouter();
  const handleClick = async () => {
    await customFetch('/ngd/examples/api/revalidate-tag?tag=products');
    router.refresh();
  };
  return (
    <div className="text-center">
      <Button onClick={handleClick} style="mt-5">
        Revalidate by Tag
      </Button>
    </div>
  );
}
export default RevalidateTagButton;
