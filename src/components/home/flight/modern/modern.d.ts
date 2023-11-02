interface IAirDetailProps {
  id: number;
  title: string;
  offer: string;
}

interface ITopProps {
  id: number;
  image: string;
  title: string;
  discount: string;
}

interface IDestinationProps {
  id: number;
  img: string;
  country: string;
  place: string;
  from: number;
}

interface IFlightBoxProps {
  flightData: ITopDestinationProps[];
}

interface ITopDestinationProps {
  img: string;
  name: string;
  childern: {
    country: string;
    price: number;
    airline: string;
  }[];
}

interface ISubscribeDataProps {
  id: number;
  svg: JSX.Element;
  title: string;
  contact: string;
}
