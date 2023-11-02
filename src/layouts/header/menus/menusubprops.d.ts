interface ILink {
  title: string;
  path: string;
}

interface ISubMenu {
  title?: string;
  path?: string;
  links?: ILink[];
  children?: ISubMenu[];
}

interface IMeghaMenuProps {
  isOpen: any; setIsOpen: any
  item: {
    title?: string;
    children?: ISubMenu[];
  };
}

interface IDropdownMenuProps {
  isOpen: any; setIsOpen: any
  level: number;
  item: {
    type?: string;
    path?: string;
    title?: "home" |"title" |string;
    // title?:
    // "home"
    // | "hotel"
    // | "title"
    // | "tour"
    // | "flight"
    // | "cab"
    // | "restaurant"
    // | "pages"
    // | "Tour Demo"
    // | "Cab Demo"
    // | "Flight Demo"
    // | "Classic"
    // | "Minimal"
    // | "Vector"
    // | "Modern"
    // | "Trending"
    // | "Classic"
    // | "Vector Demo"
    // | "Map Demo"
    // | "Minimal"
    // | "Left Sidebar"
    // | "restaurant Demo"
    // | "Mix Demo"
    // | "hotel"
    // | "Listing"
    // | "Grid View"
    // | "2 Grid"
    // | "3 Grid"
    // | "4 Grid"
    // | "Sidebar"
    // | "Left Sidebar"
    // | "No Sidebar"
    // | "Right Sidebar"
    // | "map"
    // | "Google Map"
    // | "Leaflet Map"
    // | "Pigeon Map"
    // | "map modal"
    // | "onclick map"
    // | "Left side map"
    // | "List View"
    // | "Map"
    // | "Slider"
    // | "Multiple Image"
    // | "Video"
    // | "Hotel with slider"
    // | "Simple page"
    // | "Classic"
    // | "360 View"
    // | "without top"
    // | "left sidebar"
    // | "info tab"
    // | "image slider"
    // | "thumbnail image"
    // | "image box"
    // | "theme breadcrumbs"
    // | "booking"
    // | "Booking page"
    // | "checkout"
    // | "booking success"
    // | "booking failed"
    // | "tour"
    // | "Listing"
    // | "Grid View"
    // | "Sidebar"
    // | "no sidebar"
    // | "List View"
    // | "slider"
    // | "multiple image"
    // | "video"
    // | "with slider"
    // | "tab"
    // | "full page detail"
    // | "slider"
    // | "360 view"
    // | "full page slider"
    // | "classic design"
    // | "video"
    // | "left sidebar"
    // | "Booking"
    // | "Booking page"
    // | "checkout"
    // | "booking failed"
    // | "booking success"
    // | "flight"
    // | "Listing"
    // | "left sidebar"
    // | "right sidebar"
    // | "top filter"
    // | "round trip"
    // | "not found"
    // | "Booking"
    // | "Book now"
    // | "booking add-ons"
    // | "booking payment"
    // | "booking success"
    // | "booking failed"
    // | "cab"
    // | "listing"
    // | "list view"
    // | "left sidebar"
    // | "right sidebar"
    // | "grid view"
    // | "sidebar"
    // | "left sidebar"
    // | "right sidebar"
    // | "with map"
    // | "not found"
    // | "booking"
    // | "Booking"
    // | "booking payment"
    // | "booking success"
    // | "booking failed"
    // | "single detail"
    // | "restaurant"
    // | "Listing"
    // | "Grid View"
    // | "Sidebar"
    // | "Left Sidebar"
    // | "Right Sidebar"
    // | "No Sidebar"
    // | "map modal"
    // | "onclick map"
    // | "Left side map"
    // | "full width"
    // | "full width"
    // | "not found"
    // | "single page"
    // | "classic"
    // | "360 view"
    // | "image slider"
    // | "left cart"
    // | "booking"
    // | "checkout"
    // | "order failed"
    // | "order success"
    children?: IMenuChildProps[];
  };
}

interface IMenuChildProps {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  children?: IMenuChildProps[];
}
