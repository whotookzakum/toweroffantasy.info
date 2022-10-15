import { ModalMenu } from "../../../components/Modal";
import { AVATAR_FRAMES } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import Ads from "../../../components/Ads";

function AvatarFrames() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Avatar Frames')}</title>
                <meta name="description" content="List of all avatar frames and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <header>
                <h1>Avatar Frames</h1>
                <p>
                    Avatar Frames are borders on your avatar used to customize your character page and appear when you send chat messages.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Avatar Frame List</h2>
                <ModalMenu list={AVATAR_FRAMES} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
        </>
    );
}

export default AvatarFrames;