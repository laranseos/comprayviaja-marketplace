interface ITourBannerProps {
  id: number;
  img: string;
}

interface INewOfferProps {
  id: number;
  img: string;
  badge: string;
  price: number;
  discount: number;
  title: string;
  desc: string;
  offers: string;
  person: string;
}

interface IPackageProps {
  id: number;
  img: string;
  title: string;
  badge: string;
  desc: string;
  price: number;
  disc: number;
  couponCode: string;
  class?: undefined;
}

interface IServiceProps {
  id: number;
  title: string;
  tour: string;
}

interface ITestimonialProps {
  id: number;
  img: string;
  desc: string;
  name: string;
}

interface IPropsPackage {
  id: number;
  img: string;
  title: string;
  badge: string;
  desc: string;
  price: string;
  disc: string;
  couponCode: string;
  class?: undefined;
}
[];
