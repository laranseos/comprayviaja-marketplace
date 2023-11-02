import GoogleMapComponent from "@/components/common/map/google-map";
import { FC } from "react";

const BreadcrumbsContent: FC = () => {
  return (
    <section className="breadcrumb-section pt-0">
      <div className="contact-map h-100 mt-0">
        <GoogleMapComponent />
      </div>
    </section>
  );
};

export default BreadcrumbsContent;
