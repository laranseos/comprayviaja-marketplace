export const options = [
  { id: "exampleRadios1", value: "option1", label: "Adyen" },
  { id: "exampleRadios2", value: "option2", label: "Airtel Money" },
  { id: "exampleRadios3", value: "option2", label: "AlliedWallet" },
  { id: "exampleRadios4", value: "option2", label: "Apple Pay" },
  { id: "exampleRadios5", value: "option2", label: "Brinks" },
  { id: "exampleRadios6", value: "option2", label: "CardFree" },
];

export const netBankingOptions = [
  { id: "Radios1", value: "option1", label: "Industrial & Commercial Bank" },
  { id: "Radios2", value: "option2", label: "Construction Bank Corp." },
  { id: "Radios3", value: "option2", label: "Agricultural Bank" },
  { id: "Radios4", value: "option2", label: "HSBC Holdings" },
  { id: "Radios5", value: "option2", label: "Bank of America" },
  { id: "Radios6", value: "option2", label: "JPMorgan Chase & Co." },
];

export const hotelData = {
  imageSrc: '/assets/images/hotel/room/1.jpg',
  name: 'sea view hotel',
  location: 'Mina Road, Bur Dubai, Dubai',
};

export const bookingData = {
  checkIn: {
    date: 'tue, 18 sep 2023',
    time: '2.00 pm',
  },
  checkOut: {
    date: 'fri, 21 sep 2023',
    time: '12.00 pm',
  },
  guestCount: 2,
  roomCount: 1,
  nightCount: 3,
};

export const paymentData = {
  basePrice: 2510,
  promoDiscount: -250,
  taxServiceFees: 150,
};

interface ITab {
  id: number;
  title: string;
  href: string;
}

export const tabsData: ITab[] = [
  { id: 1, title: "about", href: "#about" },
  { id: 2, title: "rooms", href: "#rooms" },
  { id: 3, title: "facility", href: "#facility" },
  { id: 4, title: "location", href: "#location" },
  { id: 5, title: "reviews", href: "#review" },
  { id: 6, title: "policies", href: "#policy" },
];
