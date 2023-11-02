interface IHolidayProps {
  id: number;
  titleImg: string;
  place: string;
  package: {
    img: string;
    title: string;
    city?: string;
    label?: string;
    price: number;
    disc: number;
  }[];
}

interface IExploreProps {
  id: number;
  img: string;
  title: string;
  desc: string;
}
