import logo from "../data/images/avatar/tata.png";
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav className="sidenav">
            <input type="checkbox" id="nav-toggler" />
            <label htmlFor="nav-toggler">
                <i className="toggler-lines"></i>
            </label>
            <div className="nav-backdrop"></div>
            <div className="nav-body">
                <div className="navbar-brand">
                    <Link to="">
                        <img src={logo} alt="Logo" /><br />
                        Tower of Fantasy Index
                    </Link>
                </div>
                <hr />
                <ul>
                    <li>
                        <Link to="/simulacra">Simulacra</Link>
                    </li>
                    <li>
                        <Link to="matrices">Matrices</Link>
                    </li>
                    <li>
                        <Link to="/relics">Relics</Link>
                    </li>
                    <li>
                        <Link to="/food">Food</Link>
                    </li>
                    <li>
                        <Link to="/mounts">Mounts</Link>
                    </li>
                    <li>
                        <Link to="/guides">Guides</Link>
                    </li>
                    <li>
                        <a href="https://static-web.ghzs.com/cspage_pro/huantaMap.html#/" target="_blank" rel="noreferrer noopener">Interactive Map</a>
                    </li>
                    <li>
                        <Link to="/damagecalculator">Damage Calculator</Link>
                    </li>
                </ul>
                <hr />
                <ul className="nav-socials">
                    <li>
                        <a href="https://discord.gg/qhDevpbJ4N" target="_blank" rel="noreferrer noopener">Discord</a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/r/TowerofFantasy/" target="_blank" rel="noreferrer noopener">Reddit</a>
                    </li>
                    <li>
                        <a href="https://twitter.com/_Aida_Cafe" target="_blank" rel="noreferrer noopener">Twitter</a>
                    </li>
                </ul>
                <span className="nav-footer">&copy; Tower of Fantasy Index.<br /> All rights reserved.</span>
            </div>
        </nav>
    );
}

export default Navigation;