"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { revalidate } from "../utils/fetchData";

const RevalidateButton = () => {
  const router = useRouter();

  const dateTime = new Date();
  
  return (
    <>
      <div className="flex justify-end">
        <button
          data-testid='revadidate-by-tag'
          onClick={()=>revalidate("revalidateTag", router)}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16"
        >
          REVALIDATE BY TAG
        </button>
        <button
        data-testid='revadidate-by-path'
          onClick={()=>revalidate("revalidatePath", router)}
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
