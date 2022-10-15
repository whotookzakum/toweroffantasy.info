import { ModalMenu } from "../../../components/Modal";
import { AVATARS } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";

function Avatars() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Avatars')}</title>
                <meta name="description" content="List of all avatars and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <header>
                <h1>Avatars</h1>
                <p>
                    Avatars are images you can use to customize your personal page when someone views your data, and they appear when you send chat messages. Simulacrum Avatars can be acquired by raising the Awakening points of a Simulacrum that you own to 200.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Avatar List</h2>
                <ModalMenu list={AVATARS} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
        </>
    );
}

export default Avatars;