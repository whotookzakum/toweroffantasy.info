import '../scss/styles.scss';
import HomePage from "./HomePage";
import Navigation from './Navigation';
import bgImg from "../data/images/weila_lihui.png"

function Main() {
    return(
        <div className="wrapper">
            <Navigation/>
            <div className="left-gutter"></div>

            <img id="page-bg-img" className="bg-img" src={bgImg} />

            <div className="middle">
                <HomePage/>
            </div>

            <div className="right-gutter"></div>
        </div>
    );
}

export default Main;