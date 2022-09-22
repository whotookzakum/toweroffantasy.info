import Navigation from './Navigation';
import { useEffect } from 'react';
import Ads from './Ads';

export function setPageTitle(title) { return title + ' | Tower of Fantasy Index' };

export default function Layout({ children }) {

    useEffect(() => {
        if (window && window.reloadAdSlots) {
            window.reloadAdSlots();
        }
    })

    return (
        <div className="wrapper">
            <Navigation />
            <div className="left-gutter"/>
            <div className="middle">
                <main>{children}</main>
            </div>
            <div className="right-gutter"/>
            <Ads unit="player" />
            <Ads unit="lb2" />
        </div>
    );
}