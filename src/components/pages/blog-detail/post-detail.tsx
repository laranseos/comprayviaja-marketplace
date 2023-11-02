import { FC } from "react";
import Link from "next/link";

const PostDetail:FC = () => {
  return (
    <div className="title-part">
      <ul className="post-detail">
        <li>25 January 2023</li>
        <li>Posted By : Admin Admin</li>
        <li>
          <i className="fa fa-heart"></i> 5 Hits
        </li>
        <li>
          <i className="fa fa-comments"></i> 10 Comment
        </li>
      </ul>
      <Link href="/pages/blog-pages/left-sidebar"><h3>Five tips to plan your travels for a long weekend</h3></Link>
    </div>
  );
};

export default PostDetail;
