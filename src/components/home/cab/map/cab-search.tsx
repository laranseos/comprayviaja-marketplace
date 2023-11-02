import { FC } from "react";
import Button from "@/components/common/btn";
import { BookNow } from "@/constant/constant";
import { mapCabsDetail } from "@/data/home/cab/cab-data";
import { RootState } from "@/redux-toolkit/store";
import Image from "next/image";
import { useSelector } from "react-redux";
import Link from 'next/link';

const CabSearch: FC = () => {
  const { symbol, currencyValue } = useSelector((state: RootState) => state.currency);
  return (
    <div className="cab-search-section">
      <div className="row">
        <div className="col-12">
          {mapCabsDetail.map((data: IMapCabsDetailProps,index) => (
            <div className="cab-search-box" key={index}>
              <div className="row">
                <div className="col-3">
                  <div className="cab-img">
                    <Image src={data.img} className="img-fluid" alt="" width={88} height={55} />
                  </div>
                </div>
                <div className="col-5 p-0">
                  <div className="cab_detail">
                    <ul>
                      <li>{data.title}</li>
                      <li>{data.place}</li>
                      <li>
                        {symbol}
                        {(currencyValue * data.price).toFixed(0)}/ per km
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-4 text-end">
                  <Link href="/cab/booking"><Button btnClass="btn btn-solid" name={BookNow} /></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CabSearch;
