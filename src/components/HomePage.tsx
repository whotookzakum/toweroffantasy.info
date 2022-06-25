import { useState } from 'react';
import { CNBanners } from "../data/en-US/bannerSchedule";

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
    const listItems = data.map( banner =>
        <tr style={{ color: `var(--color-${banner.element})` }}>
            <th>{banner.name}<br /><i>{banner.subtext}</i></th>
            <td>{banner.start}<br />{banner.end}</td>
            <td>{banner.duration}</td>
            <td>{banner.week}</td>
        </tr>
    );
    return (<tbody>{listItems}</tbody>);
}



function HomePage() {

    const [isExpanded, setHeight] = useState(false);

    const handleToggle = () => {
        setHeight(!isExpanded);
    }

    return (
        <main>
            <h1>Welcome to the Tower of Fantasy Index.</h1>
            <p>
                This site will mainly follow the <strong>Global version</strong> of Tower of Fantasy.<br />

                Content that is exclusive to the Chinese version will be indicated with <abbr title="China Exclusive"/>
            </p>
            <p>
                For corrections, suggestions, and bug reports, use <code>#guide-makers-hub</code> on <a href="https://discord.gg/qhDevpbJ4N" title="Join Aida Cafe!">Discord</a>, or contact <code>Zakum#3080</code> directly.
            </p>

            
            <div className="flex">
                <div id="banners" className={isExpanded ? "expanded" : ""}>
                <h3>Limited Banner Schedule 
                <button className="btn-expand" onClick={handleToggle}>Expand</button>
            </h3>
                    <table>
                        <thead>
                            <tr>
                                <th><abbr title="China Exclusive"/> Banner</th>
                                <th>Duration </th>
                                <th>Days</th>
                                <th>Week #</th>
                            </tr>
                        </thead>
                        <BannerList data={CNBanners} />
                    </table>

                </div>
            </div>

            <hr />

            <div className="credits">
                <h4>Created by</h4>
                <span>Pyrosu#6969, Zakum#3080</span>

                <h4>Original contents by</h4>
                <span>Pyrosu#6969, BakuBaku#1314, Sera Naoki#7502</span>

                <h4>Special Thanks</h4>
                <ul>
                    <li>Sova#0618</li>
                    <li>Afrodiy#9769</li>
                    <li>Hungibungi#1676</li>
                    <li>Cytus#4151</li>
                    <li>real_Emperor#0001</li>
                    <li>Stitch#8913</li>
                    <li>Unconsidered#5010</li>
                    <li>tiny#6592</li>
                    <li>Gateoo#6666</li>
                </ul>

                <i>Tower of Fantasy is a trademark of Hotta Studios and Perfect World Games.</i>
            </div>

            

        </main >
    );
}

export default HomePage;