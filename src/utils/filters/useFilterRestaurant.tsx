import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux-toolkit/store";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterProductsProps {
  value: IBaseProps[];
}

const useFilterRestaurant = ({ value }: IFilterProductsProps) => {
  const [showProducts, setShowProducts] = useState<IBaseProps[]>(value);
  const { priceStatus, rateStatus } = useSelector((state: RootState) => state.hotelFilterReducer);
  const { deliverTimeStatus, cuisinesStatus, popularStatus } = useSelector((state: RootState) => state.restaurantFilerReducer);

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams() as unknown as URLSearchParams;



  useEffect(() => {
    const filteredProducts = value?.filter((product: IBaseProps) => {
      const filteredPrice =
        product.price !== undefined && product.price >= priceStatus.min && product.price <= priceStatus.max;
      const filteredDelivery =
        deliverTimeStatus.length === 0 || product.deliverTime === undefined || deliverTimeStatus.includes(product.deliverTime);
      const filteredPopular =
        popularStatus.length === 0 || product.popular === undefined || popularStatus.includes(product.popular);
      const filteredCuisines =
        cuisinesStatus.length === 0 || product.cuisines === undefined || cuisinesStatus.includes(product.cuisines);

      const filteredRate = rateStatus.length === 0 || product.rate === undefined || rateStatus.includes(product.rate);

      return filteredPrice && filteredRate && filteredCuisines && filteredDelivery && filteredPopular;
    });

    setShowProducts(filteredProducts);
  }, [priceStatus,  rateStatus, popularStatus, deliverTimeStatus, cuisinesStatus,value, router, pathname]);

  useEffect(() => {
    const params = new URLSearchParams(searchParams);

    deliverTimeStatus.forEach((deliverTime: string) => {
      params.append("deliverTime", deliverTime);
    });

    popularStatus.forEach((popular: string) => {
      params.append("popular", popular);
    });

    cuisinesStatus.forEach((cuisine: string) => {
      params.append("cuisines", cuisine);
    });

    if (!isNaN(priceStatus.min) && !isNaN(priceStatus.max)) {
      params.set("price", `${priceStatus.min}:${priceStatus.max}`);
    }

    rateStatus.forEach((rate: string) => {
      params.append("rate", rate);
    });

    router.push(pathname + "?" + params.toString());
  }, [priceStatus, rateStatus, popularStatus, deliverTimeStatus, cuisinesStatus, value, router, pathname]);

  return showProducts;
};

export default useFilterRestaurant;
