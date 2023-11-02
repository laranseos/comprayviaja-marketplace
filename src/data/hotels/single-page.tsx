import { SunCloudSvg, SunSvg, CloudSvg, RainSvg } from "@/data/svg/weather";

export const imagesection1 = [
  {
    id: 1,
    img: "/assets/images/hotel/room/11.jpg",
    title: "view all images",
  },
  {
    id: 2,
    img: "/assets/images/hotel/room/10.jpg",
    title: "view all images",
  },
  {
    id: 3,
    img: "/assets/images/hotel/room/9.jpg",
    title: "view all images",
  },
  {
    id: 4,
    img: "/assets/images/hotel/room/12.jpg",
    title: "view all images",
  },
];

export const imagesection2 = [
  {
    id: 1,
    img: "/assets/images/hotel/room/4.jpg",
    title: "room images",
  },
  {
    id: 2,
    img: "/assets/images/hotel/room/5.jpg",
    title: "room images",
  },
  {
    id: 3,
    img: "/assets/images/hotel/room/6.jpg",
    title: "room images",
  },
  {
    id: 4,
    img: "/assets/images/hotel/room/7.jpg",
    title: "room images",
  },
  {
    id: 5,
    img: "/assets/images/hotel/room/8.jpg",
    title: "room images",
  },
];

export const imagesection3 = [
  {
    id: 1,
    img: "/assets/images/hotel/room/13.jpg",
    title: "poll images",
  },
  {
    id: 2,
    img: "/assets/images/hotel/room/14.jpg",
    title: "poll images",
  },
  {
    id: 3,
    img: "/assets/images/hotel/room/15.jpg",
    title: "poll images",
  },
];

export const tabsTitleData = [
  {
    id: "1",
    title: "about",
  },
  {
    id: "2",
    title: "rooms",
  },
  {
    id: "3",
    title: "facility",
  },
  {
    id: "4",
    title: "location",
  },
  {
    id: "5",
    title: "reviews",
  },
  {
    id: "6",
    title: "policies",
  },
];

export const roomData = [
  {
    id: 1,
    title: "Deluxe Room",
    img: "/assets/images/hotel/room/4.jpg",
    amenities: [
      {
        iconImg: "/assets/images/icon/tour/bed.png",
        iconName: "king/twin",
      },
      {
        iconImg: "/assets/images/icon/hotel/shower.png",
        iconName: "Shower",
      },
      {
        iconImg: "/assets/images/icon/hotel/television.png",
        iconName: "LCD TV",
      },
      {
        iconImg: "/assets/images/icon/hotel/couch.png",
        iconName: "couch",
      },
    ],
    inclusion: [
      {
        name: "Wi-Fi",
      },
      {
        name: "Breakfast",
      },
      {
        name: "non refundable",
      },
    ],
    discount: 1250,
    price: 1000,
  },
  {
    id: 2,
    title: "Suite Room",
    img: "/assets/images/hotel/room/5.jpg",
    amenities: [
      {
        iconImg: "/assets/images/icon/tour/bed.png",
        iconName: "king/twin",
      },
      {
        iconImg: "/assets/images/icon/hotel/pool.png",
        iconName: "Pool view",
      },
      {
        iconImg: "/assets/images/icon/hotel/shower.png",
        iconName: "Shower",
      },
      {
        iconImg: "/assets/images/icon/hotel/television.png",
        iconName: "LCD TV",
      },
    ],
    inclusion: [
      {
        name: "Wi-Fi",
      },
      {
        name: "Breakfast",
      },
      {
        name: "free cancellation",
      },
    ],
    discount: 1350,
    price: 1100,
  },
  {
    id: 3,
    title: "Royal Room",
    img: "/assets/images/hotel/room/6.jpg",
    amenities: [
      {
        iconImg: "/assets/images/icon/tour/bed.png",
        iconName: "king/twin",
      },
      {
        iconImg: "/assets/images/icon/hotel/pool.png",
        iconName: "Pool view",
      },
      {
        iconImg: "/assets/images/icon/hotel/shower.png",
        iconName: "Shower",
      },
      {
        iconImg: "/assets/images/icon/hotel/television.png",
        iconName: "LCD TV",
      },
      {
        iconImg: "/assets/images/icon/hotel/couch.png",
        iconName: "couch",
      },
    ],
    inclusion: [
      {
        name: "Wi-Fi",
      },
      {
        name: "Breakfast",
      },
      {
        name: "Dinner & lunch",
      },
    ],
    discount: 1950,
    price: 1800,
  },
];

export const facilityData = [
  {
    id: 1,
    title: "basic facility",
    img: "/assets/images/icon/hotel/verified.png",
    children: [
      {
        name: "Free Wi-Fi",
      },
      {
        name: "Room Service",
      },
      {
        name: "Elevator Lift",
      },
      {
        name: "Laundry Service",
      },
      {
        name: "Power Backup",
      },
      {
        name: "Free Parking",
      },
    ],
  },
  {
    id: 2,
    title: "payment mode",
    img: "/assets/images/icon/hotel/credit-card.png",
    children: [
      {
        name: "visa card",
      },
      {
        name: "master card",
      },
      {
        name: "American express",
      },
      {
        name: "debit card",
      },
      {
        name: "cash",
      },
      {
        name: "online banking",
      },
    ],
  },
  {
    id: 3,
    title: "security",
    img: "/assets/images/icon/hotel/cctv.png",
    children: [
      {
        name: "Security Guard",
      },
      {
        name: "CCTV",
      },
      {
        name: "emergency exit",
      },
      {
        name: "doctor on call",
      },
    ],
  },
  {
    id: 4,
    title: "food & drinks",
    img: "/assets/images/icon/hotel/tray.png",
    children: [
      {
        name: "restaurant",
      },
      {
        name: "bar",
      },
    ],
  },
  {
    id: 5,
    title: "activities",
    img: "/assets/images/icon/hotel/barbell.png",
    children: [
      {
        name: "gym",
      },
      {
        name: "game zone",
      },
      {
        name: "swimming pool",
      },
    ],
  },
];

export const reviewData = [
  {
    id: 1,
    range: "The stay in the hotel was excellent",
    title: "by xyz, jun 18, 2023",
    desc: "Our stay at sea view was pleasant. We stayed here for a day and the view from the room was brilliant. Rooms were clean hygienic and big. foods were amazing. rooms were neat and clean.staff is very courteous and cooperative.great place to stay. Good atmosphere, Staff was amazing..well education..mannered. Room was spacious and cleaned more then an expected.",
  },
  {
    id: 2,
    range: "Awesome Stay..value for money",
    title: "by xyz, jun 18, 2023",
    desc: "Our stay at sea view was pleasant. We stayed here for a day and the view from the room was brilliant. Rooms were clean hygienic and big. foods were amazing. rooms were neat and clean.staff is very courteous and cooperative.great place to stay. Good atmosphere, Staff was amazing..well education..mannered. Room was spacious and cleaned more then an expected.",
  },
  {
    id: 3,
    range: "Best getaway destination with family",
    title: "by xyz, jun 18, 2023",
    desc: "Our stay at sea view was pleasant. We stayed here for a day and the view from the room was brilliant. Rooms were clean hygienic and big. foods were amazing. rooms were neat and clean.staff is very courteous and cooperative.great place to stay. Good atmosphere, Staff was amazing..well education..mannered. Room was spacious and cleaned more then an expected.",
  },
];

export const weatherData = [
  {
    id: 1,
    svg: <SunSvg />,
    temp: "27",
    date: "09 Sep",
  },

  {
    id: 1,
    svg: <SunCloudSvg />,
    temp: "27",
    date: "09 Sep",
  },
  {
    id: 1,
    svg: <CloudSvg />,
    temp: "27",
    date: "09 Sep",
  },
  {
    id: 1,
    svg: <RainSvg />,
    temp: "27",
    date: "09 Sep",
  },
];

export const socialIconData = [
  {
    id: 1,
    iconClass: "fab fa-facebook-f",
    link: "https://www.facebook.com/",
  },
  {
    id: 2,
    iconClass: "fab fa-instagram",
    link: "https://www.instagram.com/",
  },
  {
    id: 3,
    iconClass: "fab fa-twitter",
    link: "https://twitter.com/",
  },
  {
    id: 4,
    iconClass: "fab fa-google",
    link: "https://accounts.google.com/",
  },
];

export const bannerImageData = [
  {
    id: 1,
    img: "/assets/images/single-hotel/slider/2.jpg",
  },
  {
    id: 2,
    img: "/assets/images/single-hotel/slider/1.jpg",
  },
  {
    id: 3,
    img: "/assets/images/single-hotel/slider/3.jpg",
  },
  {
    id: 4,
    img: "/assets/images/single-hotel/slider/4.jpg",
  },
  {
    id: 1,
    img: "/assets/images/single-hotel/slider/5.jpg",
  },
];

export const thumbnailImgData = [
  {
    id: 1,
    img: "/assets/images/single-hotel/slider/6.jpg",
  },
  {
    id: 2,
    img: "/assets/images/single-hotel/slider/7.jpg",
  },
  {
    id: 3,
    img: "/assets/images/single-hotel/slider/8.jpg",
  },
  {
    id: 4,
    img: "/assets/images/single-hotel/slider/9.jpg",
  },
  {
    id: 5,
    img: "/assets/images/single-hotel/slider/10.jpg",
  },
  {
    id: 6,
    img: "/assets/images/single-hotel/slider/11.jpg",
  },
  {
    id: 7,
    img: "/assets/images/single-hotel/slider/12.jpg",
  },
  {
    id: 8,
    img: "/assets/images/single-hotel/slider/13.jpg",
  },
];

export const imageBoxData = [
  {
    id: 1,
    bigImg: "/assets/images/single-hotel/slider/10.jpg",
    smallImg: [
      {
        img1: "/assets/images/single-hotel/slider/11.jpg",
        img2: "/assets/images/single-hotel/slider/6.jpg",
      },
      {
        img1: "/assets/images/single-hotel/slider/7.jpg",
        img2: "/assets/images/single-hotel/slider/8.jpg",
      },
    ],
  },
];


