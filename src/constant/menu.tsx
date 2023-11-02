const MENUITEMS: IMenuItemProps[] = [
  {
    title: "home",
    type: "link",
    megaMenu: false,
    path: "/home/hotels/classic",
    children: [
      // {
      //   title: "Hotel Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/hotels/classic", title: "Classic", type: "link" },
      //     { path: "/home/hotels/minimal", title: "Minimal", type: "link" },
      //     { path: "/home/hotels/vector", title: "Vector", type: "link" },
      //   ],
      // },
      // {
      //   title: "Tour Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/tour/modern", title: "Modern", type: "link" },
      //     { path: "/home/tour/trending", title: "Trending", type: "link" },
      //     { path: "/home/tour/vector", title: "Vector Demo", type: "link" },
      //   ],
      // },
      // {
      //   title: "Cab Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/cab/modern", title: "Modern", type: "link" },
      //     { path: "/home/cab/classic", title: "Classic", type: "link" },
      //     { path: "/home/cab/mapDemo", title: "Map Demo", type: "link" },
      //   ],
      // },
      // {
      //   title: "Flight Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/flight/modern", title: "Modern", type: "link" },
      //     { path: "/home/flight/minimal", title: "Minimal", type: "link" },
      //     {
      //       path: "/home/flight/left-sidebar",
      //       title: "Left Sidebar",
      //       type: "link",
      //     },
      //   ],
      // },
      // {
      //   title: "restaurant Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/restaurant/classic", title: "Classic", type: "link" },
      //     { path: "/home/restaurant/minimal", title: "Minimal", type: "link" },
      //   ],
      // },
      // {
      //   title: "Mix Demo",
      //   type: "sub",
      //   children: [
      //     { path: "/home/mix-demo/classic", title: "Classic", type: "link" },
      //     { path: "/home/mix-demo/minimal", title: "Minimal", type: "link" },
      //   ],
      // },
    ],
  },
  {
    title: "hotels",
    type: "link",
    megaMenu: false,
    path: "/hotel/listing/map/google-map",
    // children: [
    //   {
    //     title: "Listing",
    //     type: "sub",
    //     children: [
    //       {
    //         title: "Grid View",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/grid-view/2-grid",
    //             title: "2 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/grid-view/3-grid",
    //             title: "3 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/grid-view/4-grid",
    //             title: "4 Grid",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Sidebar",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/sidebar/left-sidebar",
    //             title: "Left Sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/sidebar/right-sidebar",
    //             title: "Right Sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/sidebar/no-sidebar",
    //             title: "No Sidebar",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/map/google-map",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/map/leaflet-map",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/map/pigeon-map",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "map modal",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/map-model/google-map-modal",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/map-model/leaflet-map-modal",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/map-model/pigeon-map-modal",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "onclick map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/on-click-map/google-map-click",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/on-click-map/leaflet-map-click",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/on-click-map/pigeon-map-click",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Left side map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/left-side-map/left-google-map",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/left-side-map/left-leaflet-map",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/left-side-map/left-pigeon-map",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "List View",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/hotel/listing/list-view",
    //             title: "List view",
    //             type: "link",
    //           },
    //           {
    //             title: "Map",
    //             type: "sub",
    //             children: [
    //               {
    //                 path: "/hotel/listing/list-view/map/google-map",
    //                 title: "Google Map",
    //                 type: "link",
    //               },
    //               {
    //                 path: "/hotel/listing/list-view/map/leaflet-map",
    //                 title: "Leaflet Map",
    //                 type: "link",
    //               },
    //               {
    //                 path: "/hotel/listing/list-view/map/pigeon-map",
    //                 title: "Pigeon Map",
    //                 type: "link",
    //               },
    //             ],
    //           },
    //           {
    //             path: "/hotel/listing/list-view/slider",
    //             title: "Slider",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/list-view/multiple-image",
    //             title: "Multiple Image",
    //             type: "link",
    //           },
    //           {
    //             path: "/hotel/listing/list-view/video",
    //             title: "Video",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Hotel with slider",
    //         type: "link",
    //         path: "/hotel/listing/list-view/hotel-slider",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Single page",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/hotel/single-page/classic",
    //         title: "Classic",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/360-view",
    //         title: "360 View",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/without-top",
    //         title: "without top",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/left-sidebar",
    //         title: "left sidebar",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/info-tab",
    //         title: "info tab",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/image-slider",
    //         title: "image slider",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/thumbnail-image",
    //         title: "thumbnail image",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/image-box",
    //         title: "image box",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/single-page/theme-breadcrumbs",
    //         title: "theme breadcrumb",
    //         type: "link",
    //       },
    //     ],
    //   },
    //   {
    //     title: "booking",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/hotel/booking/booking-page",
    //         title: "Booking page",
    //         type: "link",
    //       },
    //       { path: "/hotel/booking/checkout", title: "checkout", type: "link" },
    //       {
    //         path: "/hotel/booking/booking-fail",
    //         title: "booking failed",
    //         type: "link",
    //       },
    //       {
    //         path: "/hotel/booking/booking-success",
    //         title: "booking success",
    //         type: "link",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    title: "tours",
    type: "link",
    megaMenu: false,
    path: "/tour/single-page/tabs",
    // children: [
    //   {
    //     title: "Listing",
    //     type: "sub",
    //     children: [
    //       {
    //         title: "Grid View",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/tour/listing/grid-view/grid-2",
    //             title: "2 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/grid-view/grid-3",
    //             title: "3 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/grid-view/grid-4",
    //             title: "4 Grid",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Sidebar",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/tour/listing/sidebar/left-sidebar",
    //             title: "left sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/sidebar/right-sidebar",
    //             title: "right sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/sidebar/no-sidebar",
    //             title: "no sidebar",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "List View",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/tour/listing/list-view",
    //             title: "List view",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/list-view/slider",
    //             title: "slider",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/list-view/multiple-image",
    //             title: "multiple image",
    //             type: "link",
    //           },
    //           {
    //             path: "/tour/listing/list-view/video",
    //             title: "video",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         path: "/tour/listing/with-slider",
    //         title: "with slider",
    //         type: "link",
    //       },
    //       { path: "/tour/listing/minimal", title: "minimal", type: "link" },
    //       { path: "/tour/listing/classic", title: "Classic", type: "link" },
    //     ],
    //   },
    //   {
    //     title: "Single Page",
    //     type: "sub",
    //     children: [
    //       { path: "/tour/single-page/tabs", title: "tab", type: "link" },
    //       {
    //         path: "/tour/single-page/full-page-detail",
    //         title: "full page detail",
    //         type: "link",
    //       },
    //       { path: "/tour/single-page/slider", title: "slider", type: "link" },
    //       {
    //         path: "/tour/single-page/360-view",
    //         title: "360 view",
    //         type: "link",
    //       },
    //       {
    //         path: "/tour/single-page/full-page-slider",
    //         title: "full page slider",
    //         type: "link",
    //       },
    //       {
    //         path: "/tour/single-page/classic-design",
    //         title: "classic design",
    //         type: "link",
    //       },
    //       { path: "/tour/single-page/video", title: "video", type: "link" },
    //       {
    //         path: "/tour/single-page/left-sidebar",
    //         title: "left sidebar",
    //         type: "link",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Booking",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/tour/booking/booking-page",
    //         title: "Booking page",
    //         type: "link",
    //       },
    //       { path: "/tour/booking/checkout", title: "checkout", type: "link" },
    //       {
    //         path: "/tour/booking/booking-fail",
    //         title: "booking failed",
    //         type: "link",
    //       },
    //       {
    //         path: "/tour/booking/booking-success",
    //         title: "booking success",
    //         type: "link",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    title: "flights",
    type: "link",
    megaMenu: false,
    path: "/flight/listing/top-filter",
    // children: [
    //   {
    //     title: "Listing",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/flight/listing/left-sidebar",
    //         title: "left sidebar",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/listing/right-sidebar",
    //         title: "right sidebar",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/listing/top-filter",
    //         title: "top filter",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/listing/round-trip",
    //         title: "round trip",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/listing/not-found",
    //         title: "not found",
    //         type: "link",
    //       },
    //     ],
    //   },
    //   {
    //     title: "Booking",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/flight/booking/booking-now",
    //         title: "Book now",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/booking/add-ons",
    //         title: "booking add-ons",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/booking/payment",
    //         title: "booking payment",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/booking/success",
    //         title: "booking success",
    //         type: "link",
    //       },
    //       {
    //         path: "/flight/booking/failed",
    //         title: "booking failed",
    //         type: "link",
    //       },
    //     ],
    //   },
    // ],
  },
  {
    title: "cab",
    type: "link",
    megaMenu: false,
    path:"/cab/listing/slider",
    // children: [
    //   {
    //     title: "listing",
    //     type: "sub",
    //     children: [
    //       {
    //         title: "list view",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/cab/listing/list-view/left-sidebar",
    //             title: "left sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/list-view/right-sidebar",
    //             title: "right sidebar",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "grid view",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/cab/listing/grid-view/grid-3",
    //             title: "Grid 3",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/grid-view/grid-4",
    //             title: "Grid 4",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "sidebar",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/cab/listing/sidebar/left-sidebar",
    //             title: "left sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/sidebar/right-sidebar",
    //             title: "right sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/sidebar/no-sidebar",
    //             title: "no sidebar",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "with map",
    //         type: "link",
    //         children: [
    //           {
    //             path: "/cab/listing/with-map/google-map",
    //             title: "google map",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/with-map/leaflet-map",
    //             title: "leaflet map",
    //             type: "link",
    //           },
    //           {
    //             path: "/cab/listing/with-map/pigeon-map",
    //             title: "pigeon map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       { path: "/cab/listing/slider", title: "sidebar", type: "link" },
    //       { path: "/cab/listing/not-found", title: "not found", type: "link" },
    //     ],
    //   },
    //   {
    //     title: "booking",
    //     type: "sub",
    //     children: [
    //       { path: "/cab/booking", title: "Booking", type: "link" },
    //       {
    //         path: "/cab/booking/booking-payment",
    //         title: "booking payment",
    //         type: "link",
    //       },
    //       {
    //         path: "/cab/booking/booking-success",
    //         title: "booking success",
    //         type: "link",
    //       },
    //       {
    //         path: "/cab/booking/booking-failed",
    //         title: "booking failed",
    //         type: "link",
    //       },
    //     ],
    //   },
    //   {
    //     title: "single detail",
    //     type: "link",
    //     path: "/cab/single-detail",
    //   },
    // ],
  },
  {
    title: "restaurants",
    type: "link",
    megaMenu: false,
    path: "/restaurant/listing/map-modal/google-map-modal",
    /* The above code is defining a data structure for a navigation menu in a TypeScript React
    application. The menu has three main sections: "Listing", "single page", and "booking". Each
    section has sub-sections with their own links. The links represent different pages or views in
    the application. */
    // children: [
    //   {
    //     title: "Listing",
    //     type: "sub",
    //     children: [
    //       {
    //         title: "Grid View",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/grid-view/grid-2",
    //             title: "2 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/grid-view/grid-3",
    //             title: "3 Grid",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/grid-view/grid-4",
    //             title: "4 Grid",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Sidebar",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/sidebar/left-sidebar",
    //             title: "Left Sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/sidebar/right-sidebar",
    //             title: "Right Sidebar",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/sidebar/no-sidebar",
    //             title: "No Sidebar",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/map/google-map",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/map/leaflet-map",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/map/pigeon-map",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "map modal",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/map-modal/google-map-modal",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/map-modal/leaflet-map-modal",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/map-modal/pigeon-map-modal",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "onclick map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/on-click-map/google-map-click",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/on-click-map/leaflet-map-click",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/on-click-map/pigeon-map-click",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "Left side map",
    //         type: "sub",
    //         children: [
    //           {
    //             path: "/restaurant/listing/left-side-map/google-map",
    //             title: "Google Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/left-side-map/leaflet-map",
    //             title: "Leaflet Map",
    //             type: "link",
    //           },
    //           {
    //             path: "/restaurant/listing/left-side-map/pigeon-map",
    //             title: "Pigeon Map",
    //             type: "link",
    //           },
    //         ],
    //       },
    //       {
    //         title: "full width",
    //         type: "link",
    //         path: "/restaurant/listing/full-width",
    //       },
    //       {
    //         title: "image slider",
    //         type: "link",
    //         path: "/restaurant/listing/image-slider",
    //       },
    //       {
    //         title: "not found",
    //         type: "link",
    //         path: "/restaurant/listing/not-found",
    //       },
    //     ],
    //   },
    //   {
    //     title: "single page",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/restaurant/single-page/classic",
    //         title: "classic",
    //         type: "link",
    //       },
    //       {
    //         path: "/restaurant/single-page/360-view",
    //         title: "360 view",
    //         type: "link",
    //       },
    //       {
    //         path: "/restaurant/single-page/image-slider",
    //         title: "image slider",
    //         type: "link",
    //       },
    //       {
    //         path: "/restaurant/single-page/left-cart",
    //         title: "left cart",
    //         type: "link",
    //       },
    //     ],
    //   },
    //   {
    //     title: "booking",
    //     type: "sub",
    //     children: [
    //       {
    //         path: "/restaurant/booking/checkout",
    //         title: "checkout",
    //         type: "link",
    //       },
    //       {
    //         path: "/restaurant/booking/order-failed",
    //         title: "order failed",
    //         type: "link",
    //       },
    //       {
    //         path: "/restaurant/booking/order-success",
    //         title: "order success",
    //         type: "link",
    //       },
    //     ],
    //   },
    // ],
  },
  // {
  //   title: "pages",
  //   type: "sub",
  //   megaMenu: true,
  //   children: [
  //     {
  //       type: "sub",
  //       children: [
  //         {
  //           title: "portfolio",
  //           children: [
  //             {path: "/pages/portfolio/grid-2",title: "2 grid",type: "link",},
  //             {path: "/pages/portfolio/grid-3",title: "3 grid",type: "link",},
  //             {path: "/pages/portfolio/grid-4",title: "4 grid",type: "link",},
  //             {path: "/pages/portfolio/grid-2-title",title: "2 grid title",type: "link",},
  //             {path: "/pages/portfolio/grid-3-title",title: "3 grid title",type: "link",},
  //             {path: "/pages/portfolio/grid-4-title",title: "4 grid title",type: "link",},
  //             {path: "/pages/portfolio/masonry-3",title: "3 masonry",type: "link",},
  //             {path: "/pages/portfolio/masonry-4",title: "4 masonry",type: "link",},
  //             {path: "/pages/portfolio/parallax",title: "parallax",type: "link",},
  //             {path: "/pages/portfolio/center-slides",title: "central sliders",type: "link",},
  //             {path: "/pages/portfolio/creative-1",title: "creative 1",type: "link",},
  //             {path: "/pages/portfolio/creative-2",title: "creative 2",type: "link",},
  //             {path: "/pages/portfolio/creative-3",title: "creative 3",type: "link",},
  //             {path: "/pages/portfolio/creative-4",title: "creative 4",type: "link",},
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       type: "sub",
  //       children: [
  //         {
  //           title: "blog page",
  //           children: [
  //             {path: "/pages/blog-pages/left-sidebar",title: "left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/right-sidebar",title: "right sidebar",type: "link",},
  //             {path: "/pages/blog-pages/no-sidebar",title: "no sidebar",type: "link",},
  //             {path: "/pages/blog-pages/creative-left-sidebar",title: "creative left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/creative-right-sidebar",title: "creative right sidebar",type: "link",},
  //             {path: "/pages/blog-pages/creative-no-sidebar",title: "creative no sidebar",type: "link",},
  //             {path: "/pages/blog-pages/list-left-sidebar",title: "list left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/list-right-sidebar",title: "list right sidebar",type: "link",},
  //             {path: "/pages/blog-pages/list-no-sidebar",title: "list no sidebar",type: "link",},
  //             {path: "/pages/blog-pages/masonry-left-sidebar",title: "masonry left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/masonry-right-sidebar",title: "masonry right sidebar",type: "link",},
  //             {path: "/pages/blog-pages/masonry-no-sidebar",title: "masonry no sidebar",type: "link",},
  //             {path: "/pages/blog-pages/mix-list-left-sidebar",title: "mix list left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/mix-list-right-sidebar",title: "mix list right sidebar",type: "link",},
  //             {path: "/pages/blog-pages/mix-grid-left-sidebar",title: "mix grid left sidebar",type: "link",},
  //             {path: "/pages/blog-pages/mix-grid-right-sidebar",title: "mix grid right sidebar",type: "link",},
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       type: "sub",
  //       children: [
  //         {
  //           title: "blog detail page",
  //           children: [
  //             {
  //               path: "/pages/blog-detail/left-sidebar",
  //               title: "left sidebar",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/blog-detail/right-sidebar",
  //               title: "right sidebar",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/blog-detail/no-sidebar",
  //               title: "no sidebar",
  //               type: "link",
  //             },

  //             {
  //               path: "/pages/blog-detail/detail-with-gallery",
  //               title: "detail with gallery",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/blog-detail/detail-with-video",
  //               title: "detail with video",
  //               type: "link",
  //             },
  //           ],
  //         },
  //         {
  //           title: "elements- filter",
  //           children: [
  //             {
  //               path: "/pages/elements-filter/sidebar",
  //               title: "sidebar",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-filter/popup",
  //               title: "popup",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-filter/slide-down",
  //               title: "slide down",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-filter/top-filter",
  //               title: "top filter",
  //               type: "link",
  //             },
  //           ],
  //         },
  //         {
  //           title: "elements-breadcrumb",
  //           children: [
  //             {
  //               path: "/pages/elements-breadcrumbs/basic",
  //               title: "basic",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-breadcrumbs/image-with-effect",
  //               title: "image with effect",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-breadcrumbs/right-content",
  //               title: "right content",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-breadcrumbs/only-image",
  //               title: "only image",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-breadcrumbs/with-searchbar",
  //               title: "with searchbar",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/elements-breadcrumbs/bird-flying",
  //               title: "bird fly",
  //               type: "link",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       type: "sub",
  //       children: [
  //         {
  //           title: "other pages",
  //           children: [
  //             {
  //               path: "/pages/other-pages/about-us-1",
  //               title: "about us 1",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/about-us-2",
  //               title: "about us 2",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/contact-us-1",
  //               title: "contact us 1",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/contact-us-2",
  //               title: "contact us 2",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/contact-us-3",
  //               title: "contact us 3",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/coming-soon-1",
  //               title: "coming soon 1",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/coming-soon-2",
  //               title: "coming soon 2",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/coming-soon-3",
  //               title: "coming soon 3",
  //               type: "link",
  //             },
  //             { path: "/pages/other-pages/404", title: "404", type: "link" },
  //             { path: "/pages/other-pages/faq", title: "faq", type: "link" },
  //             {
  //               path: "/pages/other-pages/login",
  //               title: "login",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/register",
  //               title: "register",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/other-pages/user-dashboard",
  //               title: "user details",
  //               type: "link",
  //             },
  //           ],
  //         }
  //       ],
  //     },
  //     {
  //       type: "sub",
  //       children: [
  //         {
  //           title: "element page",
  //           children: [
  //             {
  //               path: "/pages/element-pages/image-ratio",
  //               title: "image ratio",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/about",
  //               title: "about",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/app",
  //               title: "application",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/blog",
  //               title: "blog",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/button",
  //               title: "button",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/category",
  //               title: "category",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/date-time-picker",
  //               title: "date & time picker",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/full-banner",
  //               title: "full banner",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/gallery",
  //               title: "gallery",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/other-element",
  //               title: "other element",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/service",
  //               title: "service",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/subscribes",
  //               title: "subscribe",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/testimonial",
  //               title: "testimonial",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/title",
  //               title: "title",
  //               type: "link",
  //             },
  //             {
  //               path: "/pages/element-pages/video",
  //               title: "video",
  //               type: "link",
  //             },
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
];

export default MENUITEMS;

export const RightNavMenuItem: IRightNavMenuItem[] = [
  {
    title: "currency",
    type: [
      {
        id: 1,
        currency: "USD",
        name: "USD",
        symbol: "$",
        value: 1,
      },
      {
        id: 2,
        currency: "EUR",
        name: "EUR",
        symbol: "€",
        value: 0.997,
      },
      {
        id: 3,
        currency: "INR",
        name: "INR",
        symbol: "₹",
        value: 79.9,
      },
      {
        id: 4,
        currency: "AUD",
        name: "AUD",
        symbol: "$",
        value: 79.9,
      },
    ],
  },
  {
    title: "language",
    option: [
      { id: 1, lang: "en", language: "ENG" },
      { id: 2, lang: "fr", language: "FRE" },
      { id: 3, lang: "es", language: "SPA" },
      { id: 4, lang: "ar", language: "ARB" },
    ],
  },
  { title: "user" },
  {title:"setting"}
];


export const currencyDropDownData =  {
  title: "currency",
  type: [
    {
      id: 1,
      currency: "USD",
      name: "USD",
      symbol: "$",
      value: 1,
    },
    {
      id: 2,
      currency: "EUR",
      name: "EUR",
      symbol: "€",
      value: 0.997,
    },
    {
      id: 3,
      currency: "INR",
      name: "INR",
      symbol: "₹",
      value: 79.9,
    },
    {
      id: 4,
      currency: "AUD",
      name: "AUD",
      symbol: "$",
      value: 79.9,
    },
  ],
}

export const languageDropDownData = {
  title: "language",
  option: [
    { id: 1, lang: "en", language: "ENG" },
    { id: 2, lang: "fr", language: "FRE" },
    { id: 3, lang: "es", language: "SPA" },
    { id: 4, lang: "ar", language: "ARB" },
  ],
}