interface IRestaurantProps {
  id?: number;
  img?: string;
  item?: string;
  place?: string;
  time?: string;
  cost?: string;
  label?: string;
  rate?: string;
  price?: number | undefined;
  category?: string;
  cuisines?: string;
  popular?: string;
  sliderImg?: string[{ img: string }];
}
interface IClassicMenuProps {
  name: string;
  description: string;
  price: number;
  label: string;
  customized: boolean;
}
[];

interface IListItemsProps {
  items: IClassicMenuProps[];
  navId: string;
  title: string;
}

interface NavLink {
  label: string;
  href: string;
  sublinks?: NavLink[];
}

interface NavSectionProps {
  links: NavLink[];
}

interface CartItemProps {
  items: CartItemDetails[];
  showMenu?:boolean
  setShowMenu?:(val:boolean)=>void
}

interface CartItemDetails {
  name: string;
  price: number;
  quantity: number;
}

interface ISinglePageProps {
  cartItem?: string;
  side: string;
}

interface ITabDescriptionProps {
  tabsData: ITabsDataProps[];
  class1: string;
}
