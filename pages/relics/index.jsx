import { ModalMenu } from "../../components/Modal/Modal";
import { RELICS } from "../../data/en-US/relics/relicList";
import { removeSpace } from "../../utils/stringHelper";
import Layout, { setPageTitle } from "../../components/Layout";
import Head from 'next/head';

function Relics() {
    return (
        <Layout>
            <Head>
                <title>{setPageTitle('Relics')}</title>
                <meta name="description" content="Information about all the Relics in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/images/relics/alternatedestiny.png`} alt="Alternate Destiny" />
            <header>
                <h1>Relics</h1>
                <p>
                    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Relics</h2>
                <ModalMenu list={RELICS} filter="rarity" target="SSR" />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Relics</h2>
                <ModalMenu list={RELICS} filter="rarity" target="SR" />
            </section>
        </Layout>
    );
}

export default Relics;