import logo from "../data/images/avatar/tata.png";
import { NavLink, Link, Outlet } from "react-router-dom";

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
                    <Link to="/">
                        <img src={logo} alt="Logo" /><br />
                        Tower of Fantasy Index
                    </Link>
                </div>
                <hr />
                <ul>
                    <li>
                        <NavLink to="/simulacra">Simulacra</NavLink>
                    </li>
                    <li>
                        <NavLink to="matrices">Matrices</NavLink>
                    </li>
                    <li>
                        <NavLink to="/relics">Relics</NavLink>
                    </li>
                    <li>
                        <NavLink to="/food">Food</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mounts">Mounts</NavLink>
                    </li>
                    <li>
                        <NavLink to="/guides">Guides</NavLink>
                    </li>
                    <li>
                        <a href="https://static-web.ghzs.com/cspage_pro/huantaMap.html#/" target="_blank" rel="noreferrer noopener">Interactive Map</a>
                    </li>
                    <li>
                        <NavLink to="/damagecalculator">Damage Calculator</NavLink>
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
            <Outlet/>
        </nav>
    );
}

export default Navigation;