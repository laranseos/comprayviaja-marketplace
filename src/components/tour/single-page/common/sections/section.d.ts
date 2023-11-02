interface IReviewSliderProps {
  fullSlide?: boolean;
}
interface IAccommodationsProps {
  data: ITravelProps[];
  fullSlide?: boolean;
}
[];

interface InitialIndex {
  image: string;
  index: number;
  isOpen: boolean;
}

interface IGalleryDataProps {
  id: number;
  img: string;
}

interface IDescriptionProps {
  data: ITravelProps[];
}

interface ISinglePageGalleryProps {
  galleryData: IGalleryDataProps[];
}
