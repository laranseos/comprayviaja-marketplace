interface ISearchBoxProps {
  classRound?: string;
}


interface IAboutClassicProps {
  id: number;
  img: string;
  title: string;
}
[];

interface IGalleryProps {
  id: number;
  src: string;
  title: string;
  btn: string;
}

interface IBannerProps {
  id: number;
  img: string;
  title: string;
  subTitle: string;
  description: string;
  btn: string;
}

interface IInstagramProps {
  id: number;
  src: string;
}

interface IReviewCommonProps {
  id: number;
  src: string;
  name: string;
  description: string;
}

interface IRoomSuitsProps {
  id: number;
  img: string;
  price: number;
  per: string;
  title: string;
  shortDescription?: string;
  description?: string;
  btn: string;
  responsiveDesc: string;
  shortDescriptionSpan?: string;
  icon: string;
}

interface ISpecialRoomsProps {
  id: number;
  src: string;
  title: string;
  oldPrice: number;
  newPrice: number;
  description: string;
  package: string;
}

interface IServiceClassicProps {
  id: number;
  src: string;
  title: string;
  description: string;
}
