import '../scss/styles.scss';
import Navigation from './Navigation';
import Home from "../routes/home";
import Simulacra from '../routes/simulacra';
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
                            <Page title="Home">
                                <Home />
                            </Page>
                        }
                    />
                    <Route
                        path="simulacra"
                        element={
                            <Page title="Simulacra">
                                <Simulacra />
                            </Page>
                        }
                    />
                    <Route
                        path="simulacra/:itemName"
                        element={
                            <Page title={getCharacterWithSpaces(location)} >
                                <Modal />
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