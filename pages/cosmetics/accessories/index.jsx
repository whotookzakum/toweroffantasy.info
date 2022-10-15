import { ModalMenu } from "../../../components/Modal";
import { ACCESSORIES } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";
import BackButton from "../../../components/BackButton";

function Accessories() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Accessories')}</title>
                <meta name="description" content="List of all cosmetic accessories and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <BackButton/>
            <header>
                <h1>Accessories</h1>
                <p>
                    Accessories are cosmetic items used to customize the appearance, typically the face, of your character.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Accessory List</h2>
                <ModalMenu list={ACCESSORIES} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
            <BackButton/>
        </>
    );
}

export default Accessories;