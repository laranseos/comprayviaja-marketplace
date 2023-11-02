import { FC } from "react";
// import "@/public/assets/scss/color1.scss";
import CustomLayout from "@/layouts/layout";
import Error404Content from "@/components/pages/other-pages/404/page";

const Error404: FC = () => {
  return (
    <CustomLayout title="light_header" userBgClass="user user-light">
      <Error404Content />
    </CustomLayout>
  );
};

export default Error404;
