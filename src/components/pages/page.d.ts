interface GalleryData {
  id: number;
  img: string;
  title: string;
}

interface InitialIndex {
  image: string;
  index: number;
  isOpen: boolean;
}

interface IMasonryProps {
  id: number;
  img: string;
  category?: string;
}

interface ICreativeProps {
  value: IBaseProps[]|any;
  grid?: IGridFilterProps | undefined;
}

interface IPopularPostProps {
  image: string;
  date: string;
  hits: number;
}

interface IBlogsSidebarProps {
  slideData: IBlogProps[];
  size?: number;
  view?: string;
}

interface IBlogContentProps {
  sectionClass?:boolean
  value: IBlogProps[];
  side: string;
  size?: number;
  view?: string;
  mix?: boolean;
}

interface IAddressProps {
  colClass: string;
}
interface IFactProps {
  icon: string;
  counter: number;
  label: string;
}
interface IAboutUsContentProps {
  side: string;
}
interface IAboutUsContentProps {
  side: string;
}

interface IImageProps {
  src: string;
  title: string;
  subTitle: string;
}

interface ILoginPageProps {
  title: string;
}

interface ICardModalProps {
  modal?: boolean;
  setModal: Function;
}

interface IBookingProps {
  id: string;
  date: string;
  type: string;
  destination: string;
  amount: number;
  orderDate: string;
  status: string;
  icon: string;
}

interface ICardDetailProps {
  card: ICardProps;
  key?: number;
}

interface ICardProps {
  type: string;
  number: string;
  validThru: string;
  name: string;
  imgSrc: string;
}

interface IImageContentProps {
  classTitle: string;
}
interface IButtonProps {
  href?: string;
  className?: string;
  label?: string;
  role?: string;
  type?: string;
  value?: string;
}

interface IButtonCardProps {
  data: IButtonProps[];
  title: string;
  colClass: string;
}
