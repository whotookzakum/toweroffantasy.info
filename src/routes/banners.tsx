import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CNBanners, Banners } from "../data/en-US/bannerSchedule";
import { removeSpace } from "../utils/stringHelper";

type Banner = {
    name: string;
    element: string;
    subtext: string;
    start: string;
    end: string;
    duration: string;
    week: string;
};

type BannerListProps = {
    data: Banner[];
};

function BannerList({ data }: BannerListProps) {
    const listItems = data.map(banner =>
        <tr style={{ color: `var(--color-${banner.element})` }}>
            <th>
                <Link to={`/simulacra/${removeSpace(banner.name)}`}>{banner.name}</Link>
                <br />
                <i>{banner.subtext}</i>
            </th>
            <td>{banner.start}<br />{banner.end}</td>
            <td>{banner.duration}</td>
            <td>{banner.week}</td>
        </tr>
    );
    return (<tbody>{listItems}</tbody>);
}


function BannerSchedule() {

    const [isExpanded, setHeight] = useState({ china: false, global: false });

    return (
        <>
            <h1>Limited Banner Schedule</h1>
            <p>Click any character's name to go straight to their Simulacrum page.</p>
            <div className="banners-wrapper">
                <div className={isExpanded.global ? "expanded banners" : "banners"}>
                    <h2>Global 
                        <button 
                            className="btn-expand" 
                            onClick={() => 
                                setHeight({ ...isExpanded, global: !isExpanded.global })}>
                            Expand
                        </button>
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Banner</th>
                                <th>Duration </th>
                                <th>Days</th>
                                <th>Week #</th>
                            </tr>
                        </thead>
                        <BannerList data={Banners} />
                    </table>
                </div>
                <div className={isExpanded.china ? "expanded banners" : "banners"}>
                    <h2>China
                        <button 
                            className="btn-expand" 
                            onClick={() => 
                                setHeight({ ...isExpanded, china: !isExpanded.china })}>
                            Expand
                        </button>
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th><abbr title="China Exclusive" /> Banner</th>
                                <th>Duration </th>
                                <th>Days</th>
                                <th>Week #</th>
                            </tr>
                        </thead>
                        <BannerList data={CNBanners} />
                    </table>
                </div>
            </div>
        </>
    )
}

export default BannerSchedule;