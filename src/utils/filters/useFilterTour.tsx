import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterProductsProps {
  value: IBaseProps[];
}

const useFilterTour = ({ value }: IFilterProductsProps) => {
  const [showProduct, setShowProduct] = useState<IBaseProps[]>(value);
  const { rateStatus, priceStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const { flightStatus, travelStatus, tripDurationStatus } = useSelector((state: RootState) => state.tourFilterReducer);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as unknown as URLSearchParams;

  useEffect(() => {
    const filteredProducts = value?.filter((product: IBaseProps) => {
      const filteredRate = rateStatus.length === 0 ||  product.rate === undefined || rateStatus.includes(product.rate);
      const filteredPrice =
        product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
      //tour
      const filterFlight = flightStatus.length === 0 || product.flights !== undefined || flightStatus.includes(product.flights) || flightStatus.includes("all");
      const filterTravel = travelStatus.length === 0 || travelStatus.includes(product.travel) || travelStatus.includes("all");
      const filterTrip = tripDurationStatus.length === 0 || tripDurationStatus.includes(product.trip) || tripDurationStatus.includes("all");
      return filteredRate && filteredPrice && filterFlight && filterTravel && filterTrip;
    });
    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);

    ["rate", "price", "trip", "flights", "travel"].forEach((name) => params.delete(name));

    rateStatus.forEach((rate: string) => {
      params.append("rate", rate);
    });

    if (!isNaN(priceStatus.min) && !isNaN(priceStatus.max)) {
      params.set("min", `${priceStatus.min}`);
      params.set("max", `${priceStatus.max}`);
    }

    flightStatus.forEach((flights: string) => {
      params.append("flights", flights);
    });

    travelStatus.forEach((travel: string) => {
      params.append("travel", travel);
    });

    tripDurationStatus.forEach((trip: string) => {
      params.append("trip", trip);
    });

    router.push(pathname + "?" + params.toString());
  }, [rateStatus, priceStatus, value, router, tripDurationStatus, travelStatus, flightStatus, pathname]);

  // useEffect(() => {
  //   const params = [
  //     { name: "rate", action: "rateStatus" },
  //     { name: "price", action: "priceStatus" },
  //     { name: "flights", action: "flightStatus" },
  //     { name: "travel", action: "travelStatus" },
  //     { name: "trip", action: "tripDurationStatus" },
  //   ];

  //   for (const param of params) {
  //     const values = searchParams.getAll(param.name);
  //     if (values.length > 0) {
  //       if (param.name === "price") {
  //         const [min, max] = values[0].split(":").map(Number);
  //         dispatch({ type: param.action, payload: { min, max } });
  //       } else {
  //         dispatch({ type: param.action, payload: values });
  //       }
  //     }
  //   }
  // }, [searchParams, dispatch]);

  return showProduct;
};

export default useFilterTour;
