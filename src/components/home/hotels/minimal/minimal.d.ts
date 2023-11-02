interface ITopCitiesProps {
  id: number;
  img: string;
  name: string;
  title: string;
}

interface ITopDealsProps {
  id: number;
  img: string;
  title: string;
  location: string;
  price: number;
  discount: number;
}

interface IBlogProps {
  id: number;
  img: string;
  date: string;
  month: string;
  location: string;
  title: string;
  desc: string;
}

interface IStartProps {
  svg: JSX.Element;
  title: string;
  desc: string;
}
