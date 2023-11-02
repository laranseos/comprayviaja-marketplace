import { useSearchParams } from "next/navigation";

export function useMinMaxPriceFromURL() {
  const searchParams = useSearchParams();
  const MIN = searchParams.get("min") ? parseInt(searchParams.get("min")!, 10) : null;
  const MAX = searchParams.get("max") ? parseInt(searchParams.get("max")!, 10) : null;

  return {
    minPrice: MIN,
    maxPrice: MAX,
  };
}
