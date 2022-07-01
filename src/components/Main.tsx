import '../scss/styles.scss';
import Navigation from './Navigation';
import Home from "../routes/home";
import Simulacra from '../routes/simulacra';
import Food from '../routes/food';
import { Outlet, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { Modal } from './Modal';
import { CHARACTERS, getCharacterWithSpaces } from '../data/en-US/characterList';
import Page from './Page';
import { useEffect } from 'react';
import { removeSpace } from '../utils/stringHelper';


export default function Main() {
    const location = useLocation().pathname.split("/").pop();

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
                            <Page title={getCharacterWithSpaces(location)} description={`${getCharacterWithSpaces(location)}'s character and weapon info from Tower of Fantasy Global and Chinese versions.`}>
                                <Modal />
                            </Page>
                        }
                    />
                    <Route
                        path="food"
                        element={
                            <Page title="Food" description="Recipes for craftable food in  Tower of Fantasy Global and Chinese versions.">
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