import { useQuery, UseQueryOptions } from "@tanstack/react-query"
import { Product, Data } from "../types/interfaces";
import { allProd, allProdRandom } from "./api";

const fetchProducts = async (api:string | URL | Request) => {
    const response = await fetch(api);
   
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    console.log("console_res",response)
    return response.json();
};

export const fetchExercise1Data = async () => {
    // Fetch data for Exercise 1
  };
  
  export const fetchExercise2Data = async () => {
    // Fetch data for Exercise 2
  };
  
  export const fetchExercise3Data = async () => {
    // Fetch data for Exercise 3
  };
  
  export const fetchExercise4Data = () => {
    const { isPending, error, data } = useQuery<Data, Error>({
        queryKey: ["products"],
        queryFn: () =>fetchProducts(allProdRandom),
        suspense: true,
        // staleTime: 5 * 1000,
      } as UseQueryOptions<Data, Error> )
      return { isPending, error, data }
  };