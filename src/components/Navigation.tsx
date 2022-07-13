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
            <div className="nav-body hide-scrollbar">
                <div className="navbar-brand">
                    <Link to="/" onClick={() => setTogglerState(!togglerState)}>
                        <img src="/images/avatar/tata.png" alt="" /><br />
                        Tower of Fantasy Index
                    </Link>
                </div>
                <hr />
                <ul>
                    <li onClick={() => setTogglerState(!togglerState)}>
                        <NavLink to="/banners">Banner Schedule</NavLink>
                    </li>
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
                        <a href="https://static-web.ghzs.com/cspage_pro/huantaMap.html#/" target="_blank" rel="noreferrer noopener">Interactive Map <LinkIcon/></a>
                    </li>
                    <li onClick={() => setTogglerState(!togglerState)} style={{display: "none"}}>
                        <NavLink to="/damagecalculator">Damage Calculator</NavLink>
                    </li>
                </ul>
                <hr />
                <ul className="nav-socials">
                    <li>
                        <a href="https://discord.gg/aidacafe" target="_blank" rel="noreferrer noopener"><DiscordIcon /></a>
                    </li>
                    <li>
                        <a href="https://www.reddit.com/r/TowerofFantasy/" target="_blank" rel="noreferrer noopener"><RedditIcon /></a>
                    </li>
                    <li>
                        <a href="https://twitter.com/_Aida_Cafe" target="_blank" rel="noreferrer noopener"><TwitterIcon /></a>
                    </li>
                </ul>
                <span className="nav-footer">&copy; Tower of Fantasy Index.<br /> All rights reserved.</span>
            </div>
            <Outlet />
        </nav>
    );
}

function DiscordIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#439eac" viewBox="0 0 16 16">
            <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" />
        </svg>
    )
}

function RedditIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#439eac" viewBox="0 0 16 16">
            <path d="M6.167 8a.831.831 0 0 0-.83.83c0 .459.372.84.83.831a.831.831 0 0 0 0-1.661zm1.843 3.647c.315 0 1.403-.038 1.976-.611a.232.232 0 0 0 0-.306.213.213 0 0 0-.306 0c-.353.363-1.126.487-1.67.487-.545 0-1.308-.124-1.671-.487a.213.213 0 0 0-.306 0 .213.213 0 0 0 0 .306c.564.563 1.652.61 1.977.61zm.992-2.807c0 .458.373.83.831.83.458 0 .83-.381.83-.83a.831.831 0 0 0-1.66 0z" />
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.828-1.165c-.315 0-.602.124-.812.325-.801-.573-1.9-.945-3.121-.993l.534-2.501 1.738.372a.83.83 0 1 0 .83-.869.83.83 0 0 0-.744.468l-1.938-.41a.203.203 0 0 0-.153.028.186.186 0 0 0-.086.134l-.592 2.788c-1.24.038-2.358.41-3.17.992-.21-.2-.496-.324-.81-.324a1.163 1.163 0 0 0-.478 2.224c-.02.115-.029.23-.029.353 0 1.795 2.091 3.256 4.669 3.256 2.577 0 4.668-1.451 4.668-3.256 0-.114-.01-.238-.029-.353.401-.181.688-.592.688-1.069 0-.65-.525-1.165-1.165-1.165z" />
        </svg>
    )
}

function TwitterIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#439eac" viewBox="0 0 16 16">
            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
        </svg>
    )
}

function LinkIcon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z" />
            <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z" />
        </svg>
    )
}

export default Navigation;