"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => {
        router.back();
      }}
      className="cursor-pointer font-bold"
    >
      {`< Back`}
    </div>
  );
};

export default BackButton;
