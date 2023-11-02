interface IGridViewProps {
  latestFilter?:boolean
  size?: number;
  gridType?: string;
  side?: string;
  value?: IHotelProps[] | ITravelProps[] | IFlightProps[] | ICabProps[];
  schedule?: boolean;
  mapModal?: boolean;
  grid4Img?: boolean;
  setMapModal?: Function;
  children?: ReactNode;
  type?: string;
  filter?: boolean;
  topFilter?: boolean;
  view?: string;
  trip?: string;
  round?: string;
  gridOption?: boolean;
  gridSelect?: boolean;
}

interface IHotelProps {
  reduce(arg0: (res: any, obj: any) => any): unknown;
  id?: number;
  img?: string;
  offer?: boolean;
  label?: string;
  category?: string;
  district?: IFacilityProps;
  facility?: IFacilityProps;
  language?: IFacilityProps;
  rate?: IRatingProps;
  price?: number | undefined;
  iconImg?: [{ id: number; img: string; title: string }];
  title?: string;
  btn?: string;
  offerBox?: string;
  place?: string;
  type?: string;
  sliderImg?: [{ img: string }];
  multipleImg?: [{ img: string }];
  desc?: string;
  video?: string;
}

interface IHotelDataProps {
  hotel_filter: IHotelProps[];
}
