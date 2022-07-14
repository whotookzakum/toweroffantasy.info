import Layout, { setPageTitle } from "../components/Layout";
import Link from 'next/link';
import { CHANGELOG } from '../data/en-US/changelog';
import Head from "next/head";
import { getBannerCharacters, getAllBanners } from "./banners";
import { CHARACTERS } from "../data/en-US/characters/characterList";


function getStandardAdditions(version) {
    return getAllBanners(version).filter(({banner}) => 
        banner.subtext && banner.subtext.includes("Standard afterwards")).length;
}

export default function Index() {
    return(
        <Layout>
            <Head>
                <title>{setPageTitle('Home')}</title>
                <meta name="description" content="Online resource for Tower of Fantasy Global and Chinese versions. Guides, Characters, Weapons, and more!" />
            </Head>

            <img className="bg-img" src="/images/bg-1.png" />
            <h1>Welcome to the Tower of Fantasy Index.</h1>
            
            <p>
                This site will mainly follow the <strong className="yellow">Global version</strong> of Tower of Fantasy.<br />
                Content that is exclusive to the Chinese version will be indicated with <abbr title="China Exclusive" />
            </p>

            <h3>Last update was on {CHANGELOG[0].date}. <Link href="/changelog"><a>See all changes</a></Link>.</h3>
            
            <blockquote className="banner-count">
                Global has had&nbsp;
                <strong>0</strong> Banners,&nbsp;
                <strong>0</strong> Unique, with&nbsp;
                <strong>0</strong> additions to the Standard Banner.<br/>
                The newest character is nobody :(
            </blockquote>

            <blockquote className="banner-count" style={{ borderColor: "#e72e37"}}>
                China has had&nbsp;
                <strong>{getAllBanners("cn").length}</strong> Banners,&nbsp;
                <strong>{getBannerCharacters("cn").length}</strong> Unique, with&nbsp;
                <strong>{getStandardAdditions("cn")}</strong> additions to the Standard Banner.<br/>
                The newest character is <Link href={`/simulacra/${CHARACTERS[0].uri}`}><a>{CHARACTERS[0].name}</a></Link>.
            </blockquote>

            <p>
                For corrections, suggestions, and bug reports, use <strong className="turquoise">#guide-makers-hub</strong> on <a href="https://discord.gg/aidacafe" title="Join Aida Cafe!">Discord</a>, or contact <strong className="turquoise">Zakum#3080</strong> directly.
            </p>

            <hr />

            <div className="credits">
                <h4>Created by</h4>
                <span>Pyrosu, Zakum</span>

                <h4>Original contents by</h4>
                <span>Pyrosu, BakuBaku, Sera Naoki</span>

                <h4>Special Thanks</h4>
                <ul>
                    <li>Sova</li>
                    <li>Afrodiy</li>
                    <li>HungryBunny</li>
                    <li>Cytus</li>
                    <li>realEmperor</li>
                    <li>Stitch</li>
                    <li>Abyss</li>
                    <li>tiny</li>
                    <li>Gateoo</li>
                </ul>
                
                <p><i>Tower of Fantasy is a trademark of Hotta Studios and Perfect World Games.</i></p>
            </div>
        </Layout>
    )
}