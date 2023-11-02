interface IModalProps {
  modal: boolean;
  setMapModal: Function | any;
  children?: ReactNode;
  value?: Hotel[];
  type?: string;
  
}

interface IHotelFilterProps {
  id: number;
  name: string;
  price: number;
  img: string;
}
