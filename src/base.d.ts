interface sliderImg { img: string }

interface IBaseProps {
  filter(arg0: (product: IBaseProps) => boolean): unknown;
  id?: number;
  img?: string;
  offer?: boolean;
  label?: string;
  category?: string;
  district?: string;
  facility?: string;
  language?: string;
  rate: string; 
  flights: string[];
  travel: string; 
  trip: string;
  price?: number;
  iconImg?: [{ id: number; img: string; title: string }];
  title?: string;
  btn?: string;
  deliverTime?:dtring |string
  offerBox?: string;
  hotelImg?: [{ id: number; img: string; title: string }];
  place?: string;
  type?: string;
  sliderImg?: sliderImg[];
  multipleImg?: [{id:number, img: string }];
  desc?: string;
  video?: string;
  span?: string | undefined;
  plane?: string;
  include: string;
  star?: string;
  airline?: string;
  dxb?: string;
  departureTime?: string;
  stop?: string;
  stopTime?: string;
  cdg?: string;
  arriveTime?: string;
  priceTag?: string;
  gridImg?: string;
  name?: string;
  cabType?: string;
  capacity?: number;
  luggage?: string;
  option?: string[];
  fare?: string;
  item?: string;
  time?: string;
  cost?: string;
  cuisines?: string;
  popular?: string;
}
