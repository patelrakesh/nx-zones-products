import React, { Suspense } from "react";
import "./productlist.css";
import { Product } from "../../types/interfaces";
import { NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import { revalidatePath } from "next/cache";
import ProductListComp from "@/app/components/ProductList";
import LoadingComp from "@/app/components/loadingComp";

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  const revalidateByPath = () => {
    revalidatePath(`/productlist/${exercise}`);
  };

  const dateTime = new Date();

  function findExerciseByRoute(route: string) {
    return links.find((exercise: NavLinkText) => exercise.route === route);
  }
  const exercise2Data = findExerciseByRoute(exercise);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 mt-5 text-center">
        {exercise2Data?.text}
      </h2>
      {exercise === "exercise2" && (
        <>
          <div className="flex justify-end">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-16">
              REVALIDATE BY TAG
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              REVALIDATE BY PATH
            </button>
          </div>
          <h4
            className="text-center mb-3
          "
          >
            {dateTime.toLocaleString()}
          </h4>
        </>
      )}
      {exercise === "exercise3" ? (
        <Suspense fallback={<LoadingComp />}>
          <ProductListComp exercise={exercise} />
        </Suspense>
      ) : (
        <ProductListComp exercise={exercise} />
      )}
    </div>
  );
};

export default ProductList;
