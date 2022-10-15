import { ModalMenu } from "../../../components/Modal";
import { HEADWEAR } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";
import BackButton from "../../../components/BackButton";

function Headwear() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Headwear')}</title>
                <meta name="description" content="List of all cosmetic headwear items and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <BackButton/>
            <header>
                <h1>Headwear</h1>
                <p>
                    Headwear are cosmetic pieces used to customize the appearance of your character. Many of these names may be inaccurate as the game doesn't provide an easy way to see the names of most pieces. As a result, these links may change often as more information is made available.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Headwear List</h2>
                <ModalMenu list={HEADWEAR} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
            <BackButton/>
        </>
    );
}

export default Headwear;