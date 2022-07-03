import '../scss/styles.scss';
import Navigation from './Navigation';
import Home from "../routes/home";
import Simulacra from '../routes/simulacra';
import Matrices from '../routes/matrices';
import Relics from '../routes/relics';
import Food from '../routes/food';
import { Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Modal } from './Modal';
import { CHARACTERS, getCharacterWithSpaces } from '../data/en-US/characterList';
import Page from './Page';
import { useEffect } from 'react';
import { removeSpace } from '../utils/stringHelper';


export default function Main() {
    const pageTitle = useLocation().pathname.split("/").pop();

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
                        path="simulacra"
                        element={
                            <Page 
                                title="Simulacra" description="Information about all the characters and their weapons in Tower of Fantasy Global and Chinese versions.">
                                <Simulacra />
                            </Page>
                        }
                    />
                    <Route
                        path="simulacra/:itemName"
                        element={
                            <Page title={getCharacterWithSpaces(pageTitle)} description={`${getCharacterWithSpaces(pageTitle)}'s character and weapon info from Tower of Fantasy Global and Chinese versions.`}>
                                <Modal type="simulacra" />
                            </Page>
                        }
                    />
                    <Route
                        path="matrices"
                        element={
                            <Page 
                                title="Matrices" description="Information about all the Matrix set effects in Tower of Fantasy Global and Chinese versions.">
                                <Matrices />
                            </Page>
                        }
                    />
                    <Route
                        path="matrices/:itemName"
                        element={
                            <Page title={`${getCharacterWithSpaces(pageTitle)} Matrix`} description={`${getCharacterWithSpaces(pageTitle)}'s Matrix set info from Tower of Fantasy Global and Chinese versions.`}>
                                <Modal type="matrices" />
                            </Page>
                        }
                    />
                    <Route
                        path="relics"
                        element={
                            <Page 
                                title="Relics" description="Information about all the Relics in Tower of Fantasy Global and Chinese versions.">
                                <Relics />
                            </Page>
                        }
                    />
                    <Route
                        path="relics/:itemName"
                        element={
                            <Page title={`${getCharacterWithSpaces(pageTitle)}`} description={`${getCharacterWithSpaces(pageTitle)} effects and advancements in Tower of Fantasy Global and Chinese versions.`}>
                                <Modal type="relics" />
                            </Page>
                        }
                    />
                    <Route
                        path="food"
                        element={
                            <Page title="Food" description="Recipes for craftable food in Tower of Fantasy Global and Chinese versions.">
                                <Food />
                            </Page>
                        }
                    />
                    <Route path="*" element={<Page><p>404!</p></Page>} />
                </Routes>
            </div>
            <div className="right-gutter"></div>
        </div>
    );
}