interface ITravelProps {
  id?: number;
  img?: string;
  title?: string;
  span?: string | undefined;
  category?: string;
  rate?: string;
  plane?: string;
  include: string;
  offer?: boolean;
  trip?: string;
  star?: string;
  travel?: string;
  flights?: string;
  price?: number | undefined;
  btn?: string;
  label?: string;
  sliderImg?: { img: string }[];
  multipleImg?: { img: string }[];
  video?: string;
  offerBox?: string;
  iconImg?: { id: number; img: string; title: string }[];
}

interface ITripDurationFilterProps {
  tripDurationFilterCallback?: Function | undefined;
}
