import { NewTopics } from "@/constant/constant";
import { news } from "@/data/footerData";
import Image from "next/image";
import Link from 'next/link';

const Updates: React.FC = () => {
  return (
    <div className="col-xl-3 col-md-6">
      <div className="footer-title">
        <h5>{NewTopics}</h5>
      </div>
      <div className="footer-content">
        <div className="footer-blog">
          {news.map((news: IFooterProps,index) => (
            <div className="media" key={index}>
              <div className="img-part">
                <Link href="/pages/blog-pages/creative-left-sidebar">
                  <Image src={news.img} className="img-fluid" alt="" width={96} height={96} />
                </Link>
              </div>
              <div className="media-body">
              <Link href="/pages/blog-pages/creative-left-sidebar"><h5>{news.title}</h5></Link>
                <p>{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Updates;
