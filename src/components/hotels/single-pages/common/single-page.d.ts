interface ISinglePageSectionProps {
  detail?: boolean;
  side: string;
  tab?: boolean;
  thumbnail?: boolean;
}

interface IWeatherDataProps {
  id: number;
  svg: JSX.Element;
  temp: string;
  date: string;
}