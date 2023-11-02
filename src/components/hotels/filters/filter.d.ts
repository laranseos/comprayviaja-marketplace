interface IFacilityProps {
  id: number;
  type: string;
  meta?: string;
}
[];

interface IPriceFilterProps {
  id: string;
  min: number;
  max: number;
}

interface IRatingProps {
  id?: number;
  rang?: string;
  rate?: string;
}

interface IPriceProps {
  value: any;
  price: number;
}

interface IPrice {
  min: number | undefined;
  max: number | undefined;
}

interface IFiltersProps {
  value: IHotelProps[] | ITravelProps[] | IFlightProps[] | ICabProps[] | IRestaurantProps[] | undefined;
  latestFilter?: boolean;
  filterStyle?: string;
  popular?: boolean;
  type: string | undefined;
  showFilter?:boolean
  setShowFilter?:(val:boolean)=>void
}
