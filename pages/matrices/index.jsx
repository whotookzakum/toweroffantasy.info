import { ModalMenu } from "../../components/Modal/Modal";
import { MATRICES } from "../../data/en-US/matrices/matrixList";
import { removeSpace } from "../../utils/stringHelper";
import Layout, { setPageTitle } from "../../components/Layout";
import Head from 'next/head';

function Matrices() {
    return (
        <Layout>
            <Head>
                <title>{setPageTitle('Matrices')}</title>
                <meta name="description" content="Information about all the Matrix set effects in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/images/art/${removeSpace(MATRICES[0].name)}.png`} alt={MATRICES[0].name + " Artwork"} />
            <header>
                <h1>Matrices</h1>
                <p>
                    Matrices (aka Chips) are weapon attachments that provide stat boosts and special effects.<br/>
                    There are 4 slots on each weapon; Emotion, Mind, Belief, and Memory. Each of these slots gives slightly different passive stats.<br/>
                    Matrices can be strengthened similar to weapons, with each star unlocking higher values for the set effect.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="SSR" />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="SR" />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-b)"}}>R</span> Matrices</h2>
                <ModalMenu list={MATRICES} filter="rarity" target="R" />
            </section>

        </Layout>
    );
}

export default Matrices;