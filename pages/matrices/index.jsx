import { ModalMenu } from "../../components/Modal";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import Ads from "../../components/Ads";

function Matrices() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Matrices')}</title>
                <meta name="description" content="Information about all the Matrix set effects in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/static/images/art/${MATRICES[0].imgSrc}`} alt={MATRICES[0].name + " Artwork"} />
            <header>
                <h1>Matrices</h1>
                <p>
                    Matrices (aka Chips) are weapon attachments that provide stat boosts and special effects.<br/>
                    By default the set effect only applies when using the weapon that the matrices are attached to, unless otherwise specified.<br/>
                    There are 4 slots on each weapon; Emotion, Mind, Belief, and Memory. Each of these slots gives slightly different passive stats.<br/>
                    Matrices can be strengthened similar to weapons, with each star unlocking higher values for the set effect.
                </p>
            </header>

            <Ads unit="lb1" />
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="SSR" />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="SR" />
            </section>

            <Ads unit="mpu2" />

            <section>
                <h2><span style={{color: "var(--color-tier-b)"}}>R</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="R" />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-c)"}}>N</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="N" />
            </section>

        </>
    );
}

export default Matrices;