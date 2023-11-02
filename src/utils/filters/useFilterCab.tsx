import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const useFilterCab = ({ value }: IFilterProductsProps) => {
  const [showProduct, setShowProduct] = useState<IBaseProps[]>(value);
  const { priceStatus, rateStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const { cabTypeStatus, cabOptionStatus, capacityStatus } = useSelector((state: RootState) => state.cabFilterReducer);

  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as unknown as URLSearchParams;

  useEffect(() => {
    const filteredProducts = value?.filter((product: IBaseProps) => {
      const filteredPrice = product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
      const filteredRate = rateStatus.length === 0 || (product.rate !== undefined && rateStatus.includes(product.rate));
      const filterCabType = cabTypeStatus.length === 0 || (product.cabType !== undefined && cabTypeStatus.includes(product.cabType));
      const filterCabOption = cabOptionStatus.length === 0 || !Array.isArray(product.option) || cabOptionStatus.some((option) => product.option?.includes(option));

      const filteredRanges =
        capacityStatus.length === 0 ||
        capacityStatus.some((range) => {
          const [minCapacity, maxCapacity] = range.split("-").map(Number);
          return product.capacity !== undefined && product.capacity >= minCapacity && product.capacity <= maxCapacity;
        });

      return filteredPrice && filteredRate && filterCabType && filterCabOption && filteredRanges;
    });

    setShowProduct(filteredProducts || value);

    const params = new URLSearchParams();

    cabTypeStatus.forEach((cabType: string) => {
      params.append("cabType", cabType);
    });

    cabOptionStatus.forEach((option: string) => {
      params.append("option", option);
    });

    capacityStatus.forEach((capacity: string) => {
      params.append("capacity", capacity);
    });

    if (!isNaN(priceStatus.min) && !isNaN(priceStatus.max)) {
      params.set("min", `${priceStatus.min}`);
      params.set("max", `${priceStatus.max}`);
    }
    rateStatus.forEach((rate: string) => {
      params.append("rate", rate);
    });

    router.push(pathname + "?" + decodeURIComponent(params.toString()));
  }, [priceStatus, value, router, pathname, rateStatus, cabOptionStatus, cabTypeStatus, capacityStatus]);

  useEffect(() => {
    const params = [
      { name: "price", action: "priceStatus" },
      { name: "rate", action: "rateStatus" },
      { name: "capacity", action: "capacityStatus" },
      { name: "cabType", action: "cabTypeStatus" },
      { name: "option", action: "cabOptionStatus" },
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

export default useFilterCab;
