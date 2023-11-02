interface IFooterProps {
  id: number;
  img: string;
  title: string;
  description: string;
}

interface ITopPlaceProps {
  id: number;
  image: string;
  place: string;
}

interface IFooterComponentProps {
  place?: boolean;
  copyright?: boolean;
  footerClass?:string
}
