"use client";

import VideoModal from "@/components/common/model/video-model";
import { useState } from "react";

const TopVideo: React.FC = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <>
      <img src="/assets/images/portfolio/13.jpg" alt="" className="img-fluid" />
      <a href="#" data-bs-toggle="modal" data-bs-target="#video" className="video" onClick={toggle}>
        <i className="fas fa-play"></i>
      </a>
      <VideoModal modal={modal} toggle={toggle} />
    </>
  );
};

export default TopVideo;
