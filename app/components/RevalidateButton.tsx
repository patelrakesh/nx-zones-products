"use client";
import React from "react";
import { useRouter } from "next/navigation";

const RevalidateButton = () => {
  const router = useRouter();

  const dateTime = new Date();

  const path = "/productlist/exercise2";
  const tag = "product";

  const revalidateByPath = async () => {
    const res = await fetch(
      `http://localhost:3000/api/revalidatePath?path=${path}`
    );
    const data = await res.json();
    router.refresh();
  };

  const revalidateByTag = async () => {
    const res = await fetch(
      `http://localhost:3000/api/revalidateTag?tag=${tag}`
    );
    const data = await res.json();
    router.refresh();
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
      <p className="text-center">{dateTime.toLocaleString()}</p>
    </>
  );
};

export default RevalidateButton;
