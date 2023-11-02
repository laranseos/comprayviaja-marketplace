import { FC } from 'react';

interface ISectionBarProps {
    dep: string;
    ari: string;
    date: string;
}
const SectionBar: FC<ISectionBarProps> = ({ dep, ari, date }) => {
    return (
        <div className="selection-bar">
            <div className="destination">
                <span>{dep}</span>
                <span><i className="fas fa-long-arrow-alt-right"></i></span>
                <span>{ari}</span>
            </div>
            <div className="details">
                <span>{date}</span>
            </div>
        </div>
    )
}

export default SectionBar;