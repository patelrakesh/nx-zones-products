import Link from "next/link";
import { usePathname } from 'next/navigation'

const CachedProducts = ({ handleClick }: { handleClick: () => void }) => {
 const router = usePathname()
  const pathSegments = router.split('/');
  const exerciseName = pathSegments[pathSegments.length - 1];
  return (
    <>
      {exerciseName === "exercise-4" && (
        <Link href="/productlist/cached-products" 
          className="text-blue-500 underline hover:no-underline"
        >Click here to check Tanstack behaviour in Cached products page</Link>
      )}
      {exerciseName === "cached-products" && (
        <button type="button" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Click to fetch fresh data</button>
      )}
    </>
  );
};

export default CachedProducts;
