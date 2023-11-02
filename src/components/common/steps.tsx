import Img from "@/utils/BackgroundImageRatio";

interface IStepsProps {
  stepsData: {
    id: number;
    img: string;
    title: string;
  }[];
  titleClass?: string;
}

const Steps: React.FC<IStepsProps> = ({ stepsData, titleClass }) => {
  return (
    <div className={`step-bg ${titleClass && titleClass}`}>
      <div className="row">
        {stepsData.map((data: IBookingData,index) => (
          <div className="col-md-3" key={index}>
            <div className="step-box">
              <div className="tourImg bg-size ">
                <Img src={data.img} className=" filter-none" alt="" />
                <h4>{data.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
