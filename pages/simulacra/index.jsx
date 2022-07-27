import { ModalMenu } from "../../components/Modal";
import { CHARACTERS } from "../../data/en-US/characters/characterList";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';

function Simulacra() {

    return (
        <>
            <Head>
                <title>{setPageTitle('Simulacra')}</title>
                <meta name="description" content="Information about all the characters and their weapons in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src={`/static/images/art/${CHARACTERS[0].imgSrc}`} alt={CHARACTERS[0].name + " Artwork"} />
            <header>
                <h1>Simulacra</h1>
                <p>
                    Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy.<br />
                    They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Simulacra</h2>
                <ModalMenu list={CHARACTERS} filter="rarity" target="SSR" />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Simulacra</h2>
                <ModalMenu list={CHARACTERS} filter="rarity" target="SR" />
            </section>
        </>
    );
}

export default Simulacra;