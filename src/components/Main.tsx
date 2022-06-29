import '../scss/styles.scss';
import Navigation from './Navigation';
import Home from "../routes/home";
import Simulacra from '../routes/simulacra';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Modal } from './Modal';

export default function Main() {
    return (
        <div className="wrapper">
            <Navigation />
            <div className="left-gutter"></div>

            <div className="middle">
                <Routes>
                    <Route index element={<Home />} />
                    <Route path="simulacra" element={<Simulacra />} />
                    <Route path="simulacra/*" element={<Modal/>} />
                </Routes>
            </div>
            <Outlet/>
            <div className="right-gutter"></div>
        </div>
    );
}