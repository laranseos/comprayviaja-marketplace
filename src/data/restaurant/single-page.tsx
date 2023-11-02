export const tabsTitleData = [
  {
    id: "1",
    title: "order online",
  },
  {
    id: "2",
    title: "overview",
  },
  {
    id: "3",
    title: "gallery",
  },
  {
    id: "4",
    title: "location",
  },
  {
    id: "5",
    title: "book a table",
  },
  {
    id: "6",
    title: "reviews",
  },
];

export const orderLinks = [
  {
    label: "bestseller",
    href: "#bestseller",
  },
  {
    label: "quick bites",
    href: "#bites",
    sublinks: [
      {
        label: "potato chips",
        href: "#chips",
      },
      {
        label: "salad",
        href: "#salad",
      },
      {
        label: "fries",
        href: "#fries",
      },
      {
        label: "cheese sticks",
        href: "#sticks",
      },
      {
        label: "garlic bread",
        href: "#bread",
      },
    ],
  },
  {
    label: "sandwich",
    href: "#sandwich",
  },
  {
    label: "pizza",
    href: "#pizza",
  },
  {
    label: "combo",
    href: "#combo",
  },
  {
    label: "deserts",
    href: "#deserts",
    sublinks: [
      {
        label: "cheesecakes",
        href: "#cheesecakes",
      },
      {
        label: "lime pie",
        href: "#lime",
      },
      {
        label: "cream dream",
        href: "#cream",
      },
      {
        label: "rice pudding",
        href: "#pudding",
      },
    ],
  },
];

export const BestSellerItems: IClassicMenuProps[] = [
  {
    name: "Veg Cheese Quesadillas",
    label: "veg",
    description: "Mexican quesadillas overloaded with exotic vegetables, layered with house special salsa sauce and lots of cheese.",
    price: 10.0,
    customized: true,
  },
  {
    name: "Barbaresca Pasta",
    label: "non-veg",
    description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
    price: 10.0,
    customized: false,
  },
  {
    name: "Sprouts Salad",
    label: "veg",
    description: "Tomato, cucumber, peppers, olives, onion, feta, iceberg lettuce.",
    price: 10.0,
    customized: false,
  },
];

export const cartItemsData = [
  {
    name: "Veg Cheese Quesadillas",
    price: 10.0,
    quantity: 2,
  },
  {
    name: "Barbaresca Pasta",
    price: 10.0,
    quantity: 1,
  },
  {
    name: "Sprouts Salad",
    price: 10.0,
    quantity: 3,
  },
];

export const QuickBitesItems = {
  potatoItems: [
    {
      name: "Veg Cheese Quesadillas",
      label: "veg",
      description: "Mexican quesadillas overloaded with exotic vegetables, layered with house special salsa sauce and lots of cheese.",
      price: 10.0,
      customized: false,
    },
    {
      name: "Barbarossa Pasta",
      label: "non-veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 10.0,
      customized: false,
    },
  ],
  saladItems: [
    {
      name: "Veg Cheese Quesadillas",
      label: "non-veg",
      description: "Mexican quesadillas overloaded with exotic vegetables, layered with house special salsa sauce and lots of cheese.",
      price: 10.0,
      customized: false,
    },
    {
      name: "Barbaresca Pasta",
      label: "non-veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 10.0,
      customized: false,
    },
  ],
  fries: [
    {
      name: "Veg Cheese Quesadillas",
      label: "veg",
      description: "Mexican quesadillas overloaded with exotic vegetables, layered with house special salsa sauce and lots of cheese.",
      price: 10.0,
      customized: false,
    },
    {
      name: "Barbaresca Pasta",
      label: "non-veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 10.0,
      customized: false,
    },
  ],
  cheeseSticks: [
    {
      name: "Veg Cheese Quesadillas",
      label: "veg",
      description: "Mexican quesadillas overloaded with exotic vegetables, layered with house special salsa sauce and lots of cheese.",
      price: 10.0,
      customized: false,
    },
  ],
  garlicBread: [
    {
      name: "Barbaresca Pasta",
      label: "non-veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 10.0,
      customized: false,
    },
  ],
};

export const sandwichItem = [
  {
    name: "Veg chees Sandwich",
    label: "veg",
    description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
    price: 100.0,
    customized: false,
  },
  {
    name: "non Veg Sandwich",
    label: "non-veg",
    description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
    price: 100.0,
    customized: false,
  },
];

export const pizzaItem = [
  {
    name: "Veg chees Pizza",
    label: "veg",
    description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
    price: 200.0,
    customized: false,
  },
  {
    name: "non Veg pizza",
    label: "non-veg",
    description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
    price: 100.0,
    customized: false,
  },
];

export const comboItem = [
  {
    name: "Fast food combo",
    label: "veg",
    description: "Pizza with fries and sandwich",
    price: 250.0,
    customized: true,
  },
  {
    name: "Fast food combo",
    label: "non-veg",
    description: "Pizza with fries and sandwich",
    price: 500.0,
    customized: true,
  },
];

export const desertItems = {
  cheesecake: [
    {
      name: "Vanilla cheesecake",
      label: "veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 400.0,
      customized: false,
    },
    {
      name: "pineapple cheesecake",
      label: "veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 500.0,
      customized: false,
    },
  ],
  limePie: [
    {
      name: "chocolate limePie",
      label: "veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 400.0,
      customized: false,
    },
  ],
  creamDream: [
    {
      name: "Vanilla cream cake",
      label: "veg",
      description: "milky and soft cake",
      price: 100.0,
      customized: false,
    },
    {
      name: "blue-berry cream cake",
      label: "veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 100.0,
      customized: false,
    },
  ],
  ricePudding: [
    {
      name: "Veg Cheese Quesadillas",
      label: "veg",
      description: "milky and soft cake",
      price: 100.0,
      customized: false,
    },
    {
      name: "Barbaresca Pasta",
      label: "veg",
      description: "Spinach ravioli with combination sauce, broccoli, zucchini.",
      price: 100.0,
      customized: false,
    },
  ],
};

export const bannerImageData: IGalleryDataProps[] = [
  {
    id: 1,
    img: "/assets/images/restaurant/environment/1.jpg",
  },
  {
    id: 2,
    img: "/assets/images/restaurant/environment/3.jpg",
  },
  {
    id: 3,
    img: "/assets/images/restaurant/environment/4.jpg",
  },
  {
    id: 4,
    img: "/assets/images/restaurant/environment/5.jpg",
  },
  {
    id: 5,
    img: "/assets/images/restaurant/environment/6.jpg",
  },
  {
    id: 6,
    img: "/assets/images/restaurant/environment/1.jpg",
  },
];
