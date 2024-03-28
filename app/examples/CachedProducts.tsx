import Link from "next/link";
import { usePathname } from 'next/navigation'
import { useQueryClient } from "@tanstack/react-query";

const CachedProducts = (refetch?:any) => {
 const queryClient = useQueryClient();
 const router = usePathname()
  const pathSegments = router.split('/');
  const exerciseName = pathSegments[pathSegments.length - 1];

 const handleReload = (event:any)=>{
  event.preventDefault();
  // refetch()
    // queryClient.invalidateQueries({ queryKey: ["products"] });
    // handleClick("testing")
  } 
  return (
    <>
      {exerciseName === "exercise-4" && (
        <Link href="/productlist/cached-products" 
          className="text-blue-500 underline hover:no-underline"
        >Click here to check Tanstack behaviour in Cached products page</Link>
      )}
      {exerciseName === "cached-products" && (
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) => handleReload(e)}>Click to fetch fresh data</button>
      )}
    </>
  );
};

export default CachedProducts;
