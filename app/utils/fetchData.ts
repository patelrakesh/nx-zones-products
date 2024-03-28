import { useQuery, UseQueryOptions, UseQueryResult } from "@tanstack/react-query";
import { Product, Data } from "../types/interfaces";
import { allProd, allProdRandom } from "./api";

const fetchProducts = async (api: string | URL | Request, options?: any) => {
  const response = await fetch(api, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("console_res", api);
  return response.json();
};

export const fetchExercise4Data = async () => {
  const data = await fetchProducts(allProdRandom);
  return data;
};


export const fetchExerciseData = async (exercise: string) => {
  let api: string | URL | Request = ""; // Initialize api here
  let options;
  console.log("console_res_0", exercise);
  switch (exercise) {
    case "exercise1":
      console.log("console_res_1", api);
      api = allProd;
      break;
    case "exercise2":
      console.log("console_res_2", api);
      api = allProdRandom;
      options = { next: { revalidate: 120 } };
      break;
    // case "exercise3":
      // Define API for Exercise 3
      // break;
    default:
      throw new Error(`Invalid exercise type: ${exercise}`);
  }
  const data = await fetchProducts(api,options);
  console.log("console_fetch_res",data)
  return data;
};
