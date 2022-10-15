import { ModalMenu } from "../../../components/Modal";
import { MIA_OUTFITS } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";
import BackButton from "../../../components/BackButton";

function MiaOutfits() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Mi-a Outfits')}</title>
                <meta name="description" content="List of all Mi-a outfits and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <BackButton/>
            <header>
                <h1>Mi-a Outfits</h1>
                <p>
                    Mi-a can join you as a cosmetic companion NPC, and her outfit can be customized to the options below.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Mi-a Outfit List</h2>
                <ModalMenu list={MIA_OUTFITS} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
            <BackButton/>
        </>
    );
}

export default MiaOutfits;