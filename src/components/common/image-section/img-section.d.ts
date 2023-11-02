interface IImageSectionProps {
  id: number;
  img: string;
  title: string;
}

interface ISliderImageProps {
  imageSectionData: IImageSectionProps[];
  classSlide: string;
}

interface InitialIndex {
  image: string;
  index: number;
  isOpen: boolean;
}

interface IImageSection {
  imagesection1: IImageSectionProps[];
  imagesection2: IImageSectionProps[];
  imagesection3: IImageSectionProps[];
}
