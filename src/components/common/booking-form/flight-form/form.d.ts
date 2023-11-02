interface LocationOptionProps {
  isRoundTrip: boolean;
  onOptionChange: (isRoundTrip: boolean) => void;
}

interface IQuantityInputProps<T extends number | number[]> {
  quantities?: T;
  handleQuantityChange?: (index: number, value: T extends number[] ? number : T) => void;
  index?: number;
  setOpen?: Function;
  open?: boolean;
}

interface ISelectCityProps {
  cityData: ICityProps[];
  value: string;
}

interface ICityProps {
  id: number;
  place: string;
  airport: string;
  button: string;
}
