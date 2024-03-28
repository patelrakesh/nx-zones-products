import React, { Suspense } from "react";
import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
  QueryClient,
} from "@tanstack/react-query";
import "./productlist.css";
import { Product, Data, NavLinkText } from "../../types/interfaces";
import { links } from "@/app/utils/constant";
import { fetchExerciseData, fetchExercise4Data } from "@/app/utils/fetchData";
import { revalidatePath } from "next/cache";

import Revalidation from "../../examples/Revalidation";
import CachedProducts from "@/app/examples/CachedProducts";
import RevalidateButton from "../../components/RevalidateButton";
import ProductListComp from "@/app/components/ProductList";
import Loading from "./loading";

const ProductList = async ({ params }: { params: { exercise: string } }) => {
  const exercise: string = params.exercise;
  console.log("console_exercise", exercise);

  function findExerciseByRoute(route: string) {
    return links.find((exercise: NavLinkText) => exercise.route === route);
  }
  const exerciseText = findExerciseByRoute(exercise);

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight mb-8 mt-5 text-center">
        {exerciseText?.text}
      </h2>
      {exercise === "exercise2" && <RevalidateButton exercise={exercise} />}
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
