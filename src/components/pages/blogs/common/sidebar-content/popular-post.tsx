import { PopularPost } from "@/constant/constant";
import { popularPosts } from "@/data/pages/blogs";
import { FC } from "react";

const PopularPostPage: FC = () => {
  return (
    <div className="blog-wrapper">
      <div className="sidebar-title">
        <h5>{PopularPost}</h5>
      </div>
      <div className="sidebar-content">
        <ul className="blog-post">
          {popularPosts.map((post: IPopularPostProps, index: number) => (
            <li key={index}>
              <div className="media">
                <img className="img-fluid" src={post.image} alt="Generic placeholder image" />
                <div className="media-body align-self-center">
                  <div>
                    <h6>{post.date}</h6>
                    <p>{post.hits} hits</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopularPostPage;
