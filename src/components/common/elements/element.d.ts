interface IListProductBoxProps {
  data: IBaseProps;
  view?: string;
  type?: string;
}

interface IProductBoxProps {
  data:IBaseProps | ITravelProps;
  view?: string;
  type?: string;
}

export interface IExtendedProps {
  data: IBaseProps;
  grid?: IGridFilterProps;
  view?: string;
}

interface RestaurantProductsProps {
  data: IRestaurantProps; 
  view?: string;
}

interface IThumbnailSliderProps {
  images: iImgDataProps[]|undefined;
  videoData?: string;
  view?: string;
}

interface iImgDataProps {
  id?: number;
  img: string | undefined;
}
[];
export interface IImageSliderProps {
  images: iImgDataProps[] | undefined;
}

interface IHomeImgProps {
  id: number;
  img: string;
  title: string;
}
