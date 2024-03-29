"use client";
import { useRouter } from "next/navigation";
import React from "react";

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      data-testid="backButton"
      onClick={() => {
        router.back();
      }}
      className="cursor-pointer font-bold"
    >
      {`< Back`}
    </button>
  );
};

export default BackButton;
