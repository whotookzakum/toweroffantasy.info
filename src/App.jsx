import './scss/styles.scss';
import Navigation from './components/Navigation';
import Home from "./routes/home";
import Simulacra from './routes/simulacra';
import Matrices from './routes/matrices';
import Relics from './routes/relics';
import Food from './routes/food';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Modal } from './components/Modal/Modal';
import { getItemNameWithSpaces, getItemByName } from './utils/stringHelper';
import Page from './components/Page';
import { useEffect } from 'react';
import { CHARACTERS } from './data/en-US/characters/characterList';
import { RELICS } from './data/en-US/relics/relicList';
import Mounts from './routes/mounts';
import { MOUNTS } from './data/en-US/mounts/mountList';
import Guides, { GuideArticle } from './routes/guides';
import { MATRICES } from './data/en-US/matrices/matrixList';
import BannerSchedule from './routes/banners';
import { GUIDES } from './data/en-US/guides/guideList';
import { CHANGELOG } from './data/en-US/changelog';


function ScrollToTopOnMount() {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    return null;
  }

export default function Main() {
    const pageTitle = useLocation().pathname.split("/").pop();
    const changelogContent = CHANGELOG.map(update => <tr><th>{update.date}</th><td>{update.text}</td></tr>);

    return (
        <div className="wrapper">
            <Navigation />
            <div className="left-gutter"></div>

            <div className="middle">
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Page title="Home" description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!">
                                <Home />
                            </Page>
                        }
                    />
                    <Route
                        path="/changelog"
                        element={
                            <Page title="Home" description="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!">
                                <h1>Changelog</h1>
                                <table className="changelog w-75ch">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Changes</th>
                                        </tr>
                                    </thead>
                                    <tbody>{changelogContent}</tbody>
                                </table>
                            </Page>
                        }
                    />
                    <Route
                        path="/banners"
                        element={
                            <Page 
                                title="Banner Schedule" description="Limited Banner start and end dates for Tower of Fantasy Global and Chinese versions.">
                                <BannerSchedule />
                            </Page>
                        }
                    />
                    <Route
                        path="/simulacra"
                        element={
                            <Page 
                                title="Simulacra" description="Information about all the characters and their weapons in Tower of Fantasy Global and Chinese versions.">
                                <Simulacra />
                            </Page>
                        }
                    />
                    <Route
                        path="/simulacra/:itemName"
                        element={
                            <Page title={getItemNameWithSpaces(pageTitle, CHARACTERS)} description={`${getItemNameWithSpaces(pageTitle, CHARACTERS)}'s character and weapon info from Tower of Fantasy Global and Chinese versions.`}>
                                <ScrollToTopOnMount/>
                                <Modal list={CHARACTERS} />
                            </Page>
                        }
                    />
                    <Route
                        path="/matrices"
                        element={
                            <Page 
                                title="Matrices" description="Information about all the Matrix set effects in Tower of Fantasy Global and Chinese versions.">
                                <Matrices />
                            </Page>
                        }
                    />
                    <Route
                        path="/matrices/:itemName"
                        element={
                            <Page title={`${getItemNameWithSpaces(pageTitle, MATRICES)} Matrix`} description={`${getItemNameWithSpaces(pageTitle, MATRICES)}'s Matrix set info from Tower of Fantasy Global and Chinese versions.`}>
                                <ScrollToTopOnMount/>
                                <Modal list={MATRICES} />
                            </Page>
                        }
                    />
                    <Route
                        path="/relics"
                        element={
                            <Page 
                                title="Relics" description="Information about all the Relics in Tower of Fantasy Global and Chinese versions.">
                                <Relics />
                            </Page>
                        }
                    />
                    <Route
                        path="/relics/:itemName"
                        element={
                            <Page title={`${getItemNameWithSpaces(pageTitle, RELICS)}`} description={`${getItemNameWithSpaces(pageTitle, RELICS)} effects and advancements in Tower of Fantasy Global and Chinese versions.`}>
                                <ScrollToTopOnMount/>
                                <Modal list={RELICS} />
                            </Page>
                        }
                    />
                    <Route
                        path="/food"
                        element={
                            <Page title="Food" description="Recipes for craftable food in Tower of Fantasy Global and Chinese versions.">
                                <Food />
                            </Page>
                        }
                    />
                    <Route
                        path="/mounts"
                        element={
                            <Page title="Mounts" description="How to obtain all the mounts in Tower of Fantasy Global and Chinese versions.">
                                <Mounts />
                            </Page>
                        }
                    />
                    <Route
                        path="/mounts/:itemName"
                        element={
                            <Page title={`${getItemNameWithSpaces(pageTitle, MOUNTS)}`} description={`How to obtain the mount ${getItemNameWithSpaces(pageTitle, MOUNTS)} in Tower of Fantasy Global and Chinese versions.`}>
                                <ScrollToTopOnMount/>
                                <Modal list={MOUNTS} />
                            </Page>
                        }
                    />
                    
                    <Route
                        path="/guides"
                        element={
                            <Page title="Guides" description="Guides for Tower of Fantasy Global and Chinese versions.">
                                <Guides />
                            </Page>
                        }
                    />
                    <Route
                        path="/guides/:itemName"
                        element={
                            <Page title={`${getItemNameWithSpaces(pageTitle, GUIDES)}`} description={`${getItemNameWithSpaces(pageTitle, GUIDES)} - a guide for Tower of Fantasy Global and Chinese versions.`} >
                                <ScrollToTopOnMount/>
                                <GuideArticle guide={getItemByName(pageTitle, GUIDES)} />
                            </Page>
                        }
                    />
                    <Route 
                        path="*" 
                        element={
                            <Page>
                                <h1>Error 404: Page not found.</h1>
                                <p>
                                    The page you are looking for could not be found. It may have moved to a different URL due to localization changes.<br/>
                                    Check to make sure the URL is correct or try going back. 
                                </p>
                                <img src="/images/404.png" alt="Error 404" style={{display: "block", margin: "auto"}} />
                            </Page>
                        } 
                    />
                </Routes>
            </div>
            <div className="right-gutter"></div>
        </div>
    );
}