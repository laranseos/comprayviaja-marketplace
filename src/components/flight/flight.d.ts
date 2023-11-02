interface IFlightProps {
  id?: number;
  airline?: string;
  img?: string;
  category?: string;
  dxb?: string;
  departureTime?: string;
  stop?: string;
  stopTime?: string;
  cdg?: string;
  arriveTime?: string;
  price?: number | undefined;
  priceTag?: string;
}
[];

interface IAllFiltersProps {
  id?: number;
  type?: string;
  img?: string;
  title?: string;
}
type IData = IBaseProps;

interface IFlightProductBoxProps {
  data: IBaseProps[];
  view?: string;
  cardToShow: number;
  grid: IGridFilterProps;
}

interface ITravelAddonsProps {
  title: string;
  details: string;
  price: number;
}

interface IAddonsMealProps {
  label: string;
  description: string;
  price: number;
}

interface IBaggageProps {
  label: string;
  price: number;
}

interface ITopFilterProps {
  value?: IHotelProps | ITravelProps | IFlightProps | ICabProps | undefined;
  setShowFilter:(val:boolean)=>void
  showFilter:boolean
}

interface IFilterConfig {
  id: string;
  title: string;
  component: JSX.Element;
}
