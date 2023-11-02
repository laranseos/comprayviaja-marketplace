import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import AppClassic from "@/components/home/cab/classic/app-classic";
import SpecialOffer from "@/components/home/tour/modern/special-offer";

const App: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light" loader="no" logo="dark">
      <AppClassic />
      <SpecialOffer />
    </CustomLayout>
  );
};

export default App;
