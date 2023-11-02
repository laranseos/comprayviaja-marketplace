export const menuItems = [
  { title: "Home", link: "#" },
  { title: "Hotel", link: "#" },
  { title: "Tour", link: "#" },
  { title: "Flight", link: "#" },
  { title: "Cab", link: "#" },
  { title: "Restaurant", link: "#" },
  { title: "Pages", link: "#" },
];

export const settingsOptions = [
  { value: "USD", label: "USD" },
  { value: "EUR", label: "EUR" },
  { value: "INR", label: "INR" },
  { value: "AUD", label: "AUD" },
];

export const languageOptions = [
  { value: "en", label: "ENG" },
  { value: "fr", label: "FRE" },
  { value: "es", label: "SPA" },
  { value: "ar", label: "ARB" },
];

interface ISpecialBox {
  title: string;
  price: string;
  rating: number;
}

export const skeletonData: ISpecialBox[] = [
  {
    title: "",
    price: "",
    rating: 0,
  },
  {
    title: "",
    price: "",
    rating: 0,
  },
  {
    title: "",
    price: "",
    rating: 0,
  },
  {
    title: "",
    price: "",
    rating: 0,
  },
];
