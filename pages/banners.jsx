import { useState } from 'react';
import Link from 'next/link';
import { CHARACTERS } from '../data/en-US/characters/characterList';
import { setPageTitle } from '../components/Layout';
import Head from 'next/head';

function BannerList({ data }) {
    const listItems = data.map(({name, element, uri, banner}) =>
        <tr style={{ color: `var(--color-${element})` }}>
            <th>
                <Link href={`/simulacra/${uri}`}><a>{name}</a></Link>
                <br />
                <i>{banner.subtext}</i>
            </th>
            <td>{banner.start}<br />{banner.end}</td>
            <td>{banner.duration}</td>
            <td>{banner.week}</td>
        </tr>
    );
    return <tbody>{listItems}</tbody>
}


export function getBannerCharacters(version) {
    return (
        CHARACTERS.filter(character => {
            if (character.banners && character.banners[version]) {
                return character
            }
        })
    );
}

export function getAllBanners(version) {
    const bannerCharacters = getBannerCharacters(version);
    const allBanners = bannerCharacters.flatMap(({ name, weapon, uri, banners }) => {
        const element = weapon.element;
        const result = banners[version].map(banner => {
            return { name, element, uri, banner }
        });
        return result;
    });
    allBanners.sort((a, b) => -(a.banner.bannerNo - b.banner.bannerNo));
    return allBanners;
}


function BannerSchedule() {

    const [isExpanded, setHeight] = useState({ china: false, global: false });

    return (
        <>
            <Head>
                <title>{setPageTitle('Banner Schedule')}</title>
                <meta name="description" content="Limited Banner start and end dates for Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/images/art/${CHARACTERS[0].imgSrc}`} alt={CHARACTERS[0].name + " Artwork"} />
            <h1>Limited Banner Schedule</h1>
            <p>Click any character's name to go straight to their Simulacrum page.</p>
            <div className="banners-wrapper">
                <div className={isExpanded.global ? "expanded banners hide-scrollbar" : "banners hide-scrollbar"}>
                    <h2>Global 
                        <button 
                            className="btn-expand" 
                            onClick={() => 
                                setHeight({ ...isExpanded, global: !isExpanded.global })}>
                            Expand
                        </button>
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Banner</th>
                                <th>Duration </th>
                                <th>Days</th>
                                <th>Week #</th>
                            </tr>
                        </thead>
                        <BannerList data={getAllBanners("glob")} />
                    </table>
                </div>
                <div className={isExpanded.china ? "expanded banners hide-scrollbar" : "banners hide-scrollbar"}>
                    <h2>China
                        <button 
                            className="btn-expand" 
                            onClick={() => 
                                setHeight({ ...isExpanded, china: !isExpanded.china })}>
                            Expand
                        </button>
                    </h2>
                    <table>
                        <thead>
                            <tr>
                                <th><abbr title="China Exclusive" /> Banner</th>
                                <th>Duration </th>
                                <th>Days</th>
                                <th>Week #</th>
                            </tr>
                        </thead>
                        <BannerList data={getAllBanners("cn")} />
                    </table>
                </div>
            </div>
        </>
    )
}

export default BannerSchedule;