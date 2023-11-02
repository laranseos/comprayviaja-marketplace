interface IMenuItemProps {
  path?: string;
  title: string;
  type: string;
  megaMenu?: boolean;
  children?: IMenuChildProps[];
}

interface IMenuChildProps {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: IMenuChildProps[];
}

interface IMenuListProps {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: IMenuChildProps[];
}

interface IPropsMenuList {
  menuItems: IMenuListProps[];
  level: number;
}

interface IRightNavMenuItem {
  title: string;
  option?: {
    id: number;
    lang: string;
    language: string;
  }[];
  type?: {
    id: number;
    currency: string;
    name: string;
    symbol: string;
    value: number;
  }[];
}

interface ILanguageProps {
  value: IRightNavMenuItem;
}

interface ILanguageProps {
  value: {
    option: {
      lang: string;
      language: string;
    }[];
  };
}
interface ICurrencyProps {
  value: {
    type?: {
      id: number;
      currency: string;
      name: string;
      symbol: string;
      value: number;
    }[];
  };
}
