import React, { Suspense } from "react";
import { NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import RevalidateButton from "../../components/RevalidateButton";
import ProductListComp from "@/app/components/ProductList";
import Loading from "./loading";
import BackButton from "@/app/components/BackButton";

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;

  function findExerciseByRoute(route: string) {
    return links.find((exercise: NavLinkText) => exercise.route === route);
  }
  const exerciseText = findExerciseByRoute(exercise);

  return (
    <div className="container mx-auto">
      <BackButton/>
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 mt-5 text-center">
        {exerciseText?.text}
      </h2>
      {exercise === "exercise2" && <RevalidateButton />}
      {exercise === "exercise3" ? (
        <Suspense fallback={<Loading />}>
          <ProductListComp exercise={exercise} />
        </Suspense>
      ) : (
        <ProductListComp exercise={exercise} />
      )}
    </div>
  );
};

export default ProductList;
