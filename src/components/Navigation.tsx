import logo from "../data/images/avatar/tata.png";
import { NavLink, Link, Outlet } from "react-router-dom";
import { useState } from "react";

function Navigation() {

    const [togglerState, setTogglerState] = useState(false);

    return (
        <nav className="sidenav">
            <input type="checkbox" id="nav-toggler" checked={togglerState} />
            <label htmlFor="nav-toggler" onClick={() => setTogglerState(!togglerState)}>
                <i className="toggler-lines"></i>
            </label>
            <div className="nav-backdrop" onClick={() => setTogglerState(!togglerState)}></div>
            <div className="nav-body">
                <div className="navbar-brand">
                    <Link to="/" onClick={() => setTogglerState(!togglerState)}>
                        <img src={logo} alt="Logo" /><br />
                        Tower of Fantasy Index
                    </Link>
                </div>
                <hr />
                <ul>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/simulacra">Simulacra</NavLink>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/matrices">Matrices</NavLink>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/relics">Relics</NavLink>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/food">Food</NavLink>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/mounts">Mounts</NavLink>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/guides">Guides</NavLink>
                    </li>
                    <li>
                        <a href="https://static-web.ghzs.com/cspage_pro/huantaMap.html#/" target="_blank" rel="noreferrer noopener">Interactive Map</a>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)}>
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