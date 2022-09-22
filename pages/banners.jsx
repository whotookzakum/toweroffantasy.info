import { useState } from 'react';
import Link from 'next/link';
import { CHARACTERS } from '../data/en-US/characters/characterList';
import { setPageTitle } from '../components/Layout';
import Head from 'next/head';
import Ads from '../components/Ads';

function BannerList({ data }) {
    const listItems = data.map(({name, element, uri, banner}) =>
        <tr key={name + banner.week} style={{ color: `var(--color-${element})` }}>
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

// Return all characters that are in a banner
export function getBannerCharacters(version) {
    return (
        CHARACTERS.filter(character => {
            if (character.banners && character.banners[version]) {
                return character
            }
        })
    );
}

// Return all banners for a game version
export function getTotalBanners(version) {
    const bannerCharacters = getBannerCharacters(version);
    const totalBanners = bannerCharacters.flatMap(({ name, weapon, uri, banners }) => {
        const element = weapon.element;
        const result = banners[version].map(banner => {
            return { name, element, uri, banner }
        });
        return result;
    });
    return totalBanners;
}

// Return all banners for a game version sorted by banner number
export function getSortedBanners(version) {
    const bannerList = getTotalBanners(version);
    const sortedList = bannerList.sort((a, b) => -(a.banner.bannerNo - b.banner.bannerNo));
    return sortedList;
}

// Return number of characters added to standard banner
export function getStandardAdditions(version) {
    return getSortedBanners(version).filter(({banner}) => 
        banner.standardAfterwards).length;
}

function BannerSchedule() {

    const [isExpanded, setHeight] = useState({ china: false, global: false });

    return (
        <>
            <Head>
                <title>{setPageTitle('Banner Schedule')}</title>
                <meta name="description" content="Limited Banner start and end dates for Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/static/images/art/${CHARACTERS[0].imgSrc}`} alt={CHARACTERS[0].name + " Artwork"} />
            <h1>Limited Banner Schedule</h1>
            <p>Click any character's name to go straight to their Simulacrum page.</p>

            <Ads unit="lb1" />

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
                        <BannerList data={getSortedBanners("glob")} />
                    </table>
                </div>

                <Ads unit="lb3" />
                <Ads unit="mpu1" />

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
                        <BannerList data={getSortedBanners("cn")} />
                    </table>
                </div>
            </div>

            <Ads unit="mpu2" />
        </>
    )
}

export default BannerSchedule;