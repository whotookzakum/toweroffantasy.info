import { Helmet } from "react-helmet";
import BannerSchedule from "../routes/banners";
import Food from "../routes/food";
import Guides from "../routes/guides";
import Home from "../routes/home";
import Matrices from "../routes/matrices";
import Mounts from "../routes/mounts";
import Relics from "../routes/relics";
import Simulacra from "../routes/simulacra";

const ROUTES = [
    {
        title: 'Home',
        path: '/',
        desc: 'Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!',
        content: <Home />
    },
    {
        title: 'Changelog',
        path: '/changelog',
        desc: 'Latest updates to the Tower of Fantasy Index.',
        // content: <Changelog />
    },
    {
        title: 'Banner Schedule',
        path: '/banners',
        desc: 'Limited Banner start and end dates for Tower of Fantasy Global and Chinese versions.',
        content: <BannerSchedule />
    },
    {
        title: 'Simulacra',
        path: '/simulacra',
        desc: 'Information about all the characters and their weapons in Tower of Fantasy Global and Chinese versions.',
        content: <Simulacra />
    },
    {
        title: 'Matrices',
        path: '/matrices',
        desc: 'Information about all the Matrix set effects in Tower of Fantasy Global and Chinese versions.',
        content: <Matrices />
    },
    {
        title: 'Relics',
        path: '/relics',
        desc: 'Information about all the Relics in Tower of Fantasy Global and Chinese versions.',
        content: <Relics />
    },
    {
        title: 'Food',
        path: '/food',
        desc: 'Recipes for craftable food in Tower of Fantasy Global and Chinese versions.',
        content: <Food />
    },
    {
        title: 'Mounts',
        path: '/mounts',
        desc: 'How to obtain all the mounts in Tower of Fantasy Global and Chinese versions.',
        content: <Mounts />
    },
    {
        title: 'Guides',
        path: '/guides',
        desc: 'Guides for Tower of Fantasy Global and Chinese versions.',
        content: <Guides />
    },
    {
        title: '404 Error',
        path: '*',
        desc: '404 Error: page not found.',
        content:
            <>
                <h1>Error 404: Page not found.</h1>
                <p>
                    The page you are looking for could not be found. It may have moved to a different URL due to localization changes.<br />
                    Check to make sure the URL is correct or try going back.
                </p>
                <img src="/images/404.png" alt="Error 404" style={{ display: "block", margin: "auto" }} />
            </>
    },
]

function Page(props) {
    return (
        <>
            <Helmet>
                <title>{props.title ? props.title + " | Tower of Fantasy Index" : "404 Not Found"}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            <main>{props.children}</main>
        </>
    );
}

export default Page;