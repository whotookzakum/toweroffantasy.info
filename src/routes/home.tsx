import { CNBanners, Banners } from "../data/en-US/bannerSchedule";
import { Link } from "react-router-dom";
import { removeSpace } from "../utils/stringHelper";


function Home() {
    const getUniqueCount = (banners: any) => new Set(banners.map((item: any) => item.name)).size;
    const getStandardAdditions = (banners:any) => banners.filter((banner:any) => banner.subtext.includes("Standard afterwards")).length;
        
    return (
        <>
            <img className="bg-img" src={require("../data/images/bg-1.png")} />
            <h1>Welcome to the Tower of Fantasy Index.</h1>
            <p>
                This site will mainly follow the <strong className="yellow">Global version</strong> of Tower of Fantasy.<br />
                Content that is exclusive to the Chinese version will be indicated with <abbr title="China Exclusive" />
            </p>
            <p>
                For corrections, suggestions, and bug reports, use <strong className="turquoise">#guide-makers-hub</strong> on <a href="https://discord.gg/qhDevpbJ4N" title="Join Aida Cafe!">Discord</a>, or contact <strong className="turquoise">Zakum#3080</strong> directly.
            </p>

            <blockquote className="banner-count" style={{ borderColor: "#e72e37"}}>
                China has had&nbsp;
                <strong>{CNBanners.length}</strong> Banners,&nbsp;
                <strong>{getUniqueCount(CNBanners)}</strong> Unique, with&nbsp;
                <strong>{getStandardAdditions(CNBanners)}</strong> additions to the Standard Banner.<br/>
                The newest character is <Link to={`/simulacra/${removeSpace(CNBanners[0].name)}`}>{CNBanners[0].name}</Link>
            </blockquote>
            
            <hr />

            <div className="credits">
                <h4>Created by</h4>
                <span>Pyrosu, Zakum</span>

                <h4>Original contents by</h4>
                <span>Pyrosu, BakuBaku, Sera Naoki</span>

                <h4>Special Thanks</h4>
                <ul>
                    <li>Sova</li>
                    <li>Afrodiy</li>
                    <li>HungryBunny</li>
                    <li>Cytus</li>
                    <li>realEmperor</li>
                    <li>Stitch</li>
                    <li>Abyss</li>
                    <li>tiny</li>
                    <li>Gateoo</li>
                </ul>
                
                <p><i>Tower of Fantasy is a trademark of Hotta Studios and Perfect World Games.</i></p>
            </div>
        </>
    );
}

export default Home;