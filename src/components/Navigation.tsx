import logo from "../data/images/avatar/tata.png";

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
                    <a href="index">
                        <img src={logo} alt="Logo" /><br />
                        Tower of Fantasy Index
                    </a>
                </div>
                <hr />
                <ul>
                    <li>
                        <a className="active" href="simulacra">Simulacra</a>
                    </li>
                    <li>
                        <a href="matrices">Matrices</a>
                    </li>
                    <li>
                        <a href="relics">Relics</a>
                    </li>
                    <li>
                        <a href="food">Food</a>
                    </li>
                    <li>
                        <a href="mounts">Mounts</a>
                    </li>
                    <li>
                        <a href="guides">Guides</a>
                    </li>
                    <li>
                        <a href="https://static-web.ghzs.com/cspage_pro/huantaMap.html#/" target="_blank" rel="noreferrer noopener">Interactive Map</a>
                    </li>
                    <li>
                        <a href="damagecalculator">Damage Calculator</a>
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
                </ul>
                <span className="nav-footer">&copy; Tower of Fantasy Index.<br /> All rights reserved.</span>
            </div>
        </nav>
    );
}

export default Navigation;