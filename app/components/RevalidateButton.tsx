"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RevalidateButton = () => {
  const router = useRouter();

  const dateTime = new Date();

  const path = "/productlist/exercise2";
  const tag = "product";

  const revalidateByPath = async () => {
    await fetch(
      `https://nx-zones-products-three.vercel.app/api/revalidatePath?path=${path}`
    );
    router.refresh();
  };

  const revalidateByTag = async () => {
    await fetch(
      `https://nx-zones-products-three.vercel.app/api/revalidateTag?tag=${tag}`
    );
    router.refresh();
  };

  return (
    <>
      <div className="flex justify-end">
        <button
          data-testid='revadidate-by-tag'
          onClick={revalidateByTag}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16"
        >
          REVALIDATE BY TAG
        </button>
        <button
        data-testid='revadidate-by-path'
          onClick={revalidateByPath}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          REVALIDATE BY PATH
        </button>
      </div>
      <p className="text-center">{dateTime.toLocaleString()}</p>
    </>
  );
};

export default RevalidateButton;
