
import Navigation from './Navigation';

export function setPageTitle(title) { return title + ' | Tower of Fantasy Index' };

export default function Layout({ children }) {
    return (
        <div className="wrapper">
            <Navigation />
            <div className="left-gutter"/>
            <div className="middle">
                <main>{children}</main>
            </div>
            <div className="right-gutter"/>
        </div>
    );
}