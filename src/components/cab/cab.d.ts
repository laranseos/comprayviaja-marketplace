interface ICabProps {
  id?: number;
  img?: string;
  gridImg?: string;
  name?: string;
  rate?: string;
  cabType?: string;
  capacity?: number;
  luggage?: string;
  option?: string[];
  price?: number | undefined;
  sliderImg?: [{ img: string }];
  category?: string;
  fare?: string;
}

interface IBannerCabProps {
  title: string;
}
