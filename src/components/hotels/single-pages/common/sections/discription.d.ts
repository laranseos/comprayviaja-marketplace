interface IRoomsDataProps {
  id: number;
  title: string;
  img: string;
  amenities: {
    iconImg: string;
    iconName: string;
  }[];
  inclusion: {
    name: string;
  }[];
  discount: number;
  price: number;
}

interface IFacilityDataProps {
  id: number;
  title: string;
  img: string;
  children: {
    name: string;
  }[];
}
[];

interface IRoomProps {
  tab?: boolean;
}

interface IReviewProps {
  id: number;
  range: string;
  title: string;
  desc: string;
}