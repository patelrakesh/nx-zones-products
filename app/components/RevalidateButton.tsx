"use client";
import React from "react";
import { revalidatePath } from "next/cache";
import { usePathname } from "next/navigation";

const RevalidateButton = ({ exercise }: { exercise: string }) => {
  const dateTime = new Date();
  const pathname = usePathname();

  const revalidateByPath = () => {
    revalidatePath(pathname);
  };

  const revalidateByTag = () => {
    // revalidatePath(pathname, 'page');
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          onClick={revalidateByTag}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16"
        >
          REVALIDATE BY TAG
        </button>
        <button
          onClick={revalidateByPath}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          REVALIDATE BY PATH
        </button>
      </div>
      <h4 className="text-center">{dateTime.toLocaleString()}</h4>
    </>
  );
};

export default RevalidateButton;
