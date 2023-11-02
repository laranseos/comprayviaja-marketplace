interface ITabProps {
  callbackActive: Function;
  data: ITabsDataProps[] | undefined;
}
interface ITabsDataProps {
  id: string;
  title: string;
}

interface IBannerImgprops {
  bannerImg: string;
  animation?: boolean;
}

interface ISinglePageProps {
  tab?: boolean;
  side?: string;
}

interface ITabContentComponentProps {
  data: ITravelProps[];
}
