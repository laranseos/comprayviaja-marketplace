"use client";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useFilterFlight = ({ value }: IFilterProductsProps) => {
  const [showProduct, setShowProduct] = useState<IBaseProps[]>(value);
  const { priceStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const { stopStatus, departureStatus, arriveStatus, airlineStatus } = useSelector((state: RootState) => state.flightFilterReducer);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as unknown as URLSearchParams;

  const createQueryString = useCallback((params: URLSearchParams, name: string, values: string[]) => {
    params.delete(name);
    values.forEach((value) => {
      params.append(name, value);
    });

    return params.toString();
  }, []);

  useEffect(() => {
    const filteredProducts = value?.filter((product: IBaseProps) => {
      const filteredPrice = product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
      const filterStops = stopStatus.length === 0 || (typeof product.stop === "string" && stopStatus.includes(product.stop));
      const filterAirline = airlineStatus.length === 0 || (typeof product.airline === "string" && (airlineStatus.includes(product.airline) || airlineStatus.includes("all")));
      const filterArrive = arriveStatus.length === 0 || (typeof product.cdg === "string" && arriveStatus.includes(product.cdg));
      const filterDeparture = departureStatus.length === 0 || (typeof product.dxb === "string" && departureStatus.includes(product.dxb));

      return filterStops && filteredPrice && filterDeparture && filterArrive && filterAirline;
    });
    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);

    ["stop", "dxb", "cdg", "price", "airline"].forEach((name) => params.delete(name));

    stopStatus.forEach((stop: string) => {
      params.append("stop", stop);
    });

    departureStatus.forEach((dxb: string) => {
      params.append("dxb", dxb);
    });

    arriveStatus.forEach((cdg: string) => {
      params.append("cdg", cdg);
    });

    if (!isNaN(priceStatus.min) && !isNaN(priceStatus.max)) {
      params.set("min", `${priceStatus.min}`);
      params.set("max", `${priceStatus.max}`);
    }

    airlineStatus.forEach((airline: string) => {
      params.append("airline", airline);
    });

    router.push(pathname + "?" + params.toString());
  }, [priceStatus, value, router, pathname, arriveStatus, departureStatus, airlineStatus, stopStatus, createQueryString]);

  useEffect(() => {
    const params = [
      { name: "price", action: "priceStatus" },
      { name: "airline", action: "airlineStatus" },
      { name: "stop", action: "stopStatus" },
      { name: "dxb", action: "departureStatus" },
      { name: "cdg", action: "arriveStatus" },
    ];

    for (const param of params) {
      const values = searchParams.getAll(param.name);
      if (values.length > 0) {
        if (param.name === "price") {
          const [min, max] = values[0].split(":").map(Number);
          dispatch({ type: param.action, payload: { min, max } });
        } else {
          dispatch({ type: param.action, payload: values });
        }
      }
    }
  }, [searchParams, dispatch]);

  return showProduct;
};

export default useFilterFlight;
