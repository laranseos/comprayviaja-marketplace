"use client";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

const useFilterHotel = ({ value }: IFilterProductsProps) => {
  const [showProduct, setShowProduct] = useState<IBaseProps[]>(value);
  const { districtStatus, facilityStatus, hostLangStatus, rateStatus, priceStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const dispatch = useDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as unknown as URLSearchParams;

  useEffect(() => {
    const filteredProducts = value?.filter((product: IBaseProps) => {
      const filteredPrice = product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
      const filteredDistrict = districtStatus.length === 0 || (product.district !== undefined && districtStatus.includes(product.district));
      const filteredFacility = facilityStatus.length === 0 || product.facility === undefined || facilityStatus.includes(product.facility);
      const filteredHostLang = hostLangStatus.length === 0 || product.language === undefined || hostLangStatus.some((lang: string) => lang === product.language);
      const filteredRate = rateStatus.length === 0 || product.rate === undefined || rateStatus.includes(product.rate);

      return filteredDistrict && filteredFacility && filteredHostLang && filteredRate && filteredPrice;
    });
    setShowProduct(filteredProducts);

    const params = new URLSearchParams(searchParams);

    ["district", "facility", "language", "rate", "price"].forEach((name) => params.delete(name));

    districtStatus.forEach((district: string) => {
      params.append("district", district);
    });

    facilityStatus.forEach((facility: string) => {
      params.append("facility", facility);
    });

    hostLangStatus.forEach((lang: string) => {
      params.append("language", lang);
    });

    rateStatus.forEach((rate: string) => {
      params.append("rate", rate);
    });

    if (!isNaN(priceStatus.min) && !isNaN(priceStatus.max)) {
      params.set("min", `${priceStatus.min}`);
      params.set("max", `${priceStatus.max}`);
    }

    router.push(pathname + "?" + params.toString());
  }, [districtStatus, facilityStatus, hostLangStatus, rateStatus, priceStatus, value, router, pathname]);
  

  useEffect(() => {
    const params = [
      { name: "district", action: "districtStatus" },
      { name: "facility", action: "facilityStatus" },
      { name: "language", action: "hostLangStatus" },
      { name: "rate", action: "rateStatus" },
      { name: "price", action: "priceStatus" },
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

export default useFilterHotel;
