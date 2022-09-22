import { ModalMenu } from "../../components/Modal";
import { RELICS } from "../../data/en-US/relics/relicList";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import Ads from "../../components/Ads";

function Relics() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Relics')}</title>
                <meta name="description" content="Information about all the Relics in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/static/images/relics/alternatedestiny.webp`} alt="Alternate Destiny" />
            <header>
                <h1>Relics</h1>
                <p>
                    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
                </p>
            </header>

            <Ads unit="lb1" />
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Relics</h2>
                <ModalMenu list={RELICS} filter="rarity" target="SSR" />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Relics</h2>
                <ModalMenu list={RELICS} filter="rarity" target="SR" />
            </section>

            <Ads unit="mpu3" />
        </>
    );
}

export default Relics;