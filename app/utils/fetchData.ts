import { allProd, allProdRandom } from "./api";

const fetchProducts = async (api: string | URL | Request, options?: any) => {
  const response = await fetch(api, options);
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export const fetchExercise4Data = async () => {
  const data = await fetchProducts(allProdRandom);
  return data;
};

export const fetchExerciseData = async (exercise: string) => {
  let api: string | URL | Request = "";
  let options;
  switch (exercise) {
    case "exercise1":
      api = allProd;
      break;
    case "exercise2":
      api = allProdRandom;
      options = { next: { revalidate: 120, tags: ["product"] } };
      break;
    case "exercise3":
      api = allProd;
      break;
    default:
      throw new Error(`Invalid exercise type: ${exercise}`);
  }
  const data = await fetchProducts(api, options);
  return data;
};
