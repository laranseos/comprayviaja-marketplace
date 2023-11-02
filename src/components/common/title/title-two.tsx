
interface ITitleTwoProps {
    title: string;
    titleClass: string;
}

const TitleTwo: React.FC<ITitleTwoProps> = ({ title, titleClass }) => {
    return (
        <div className={titleClass}>
            <h2 className="pt-0">{title}</h2>
        </div>
    )
}

export default TitleTwo;