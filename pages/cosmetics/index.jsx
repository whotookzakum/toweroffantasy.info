import { ModalMenu } from "../../components/Modal";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import Ads from "../../components/Ads";

export const COSMETICS = [
    {
        name: "Outfits",
        uri: "outfits",
        imgSrc: "outfits/F_academyera.webp",
    },
    {
        name: "Accessories",
        uri: "accessories",
        imgSrc: "accessories/disguise-sunglasses.webp",
    },
    {
        name: "Headwear",
        uri: "headwear",
        imgSrc: "headwear/illusory-crown.webp",
    },
    {
        name: "Mi-a Outfits",
        uri: "mia",
        imgSrc: "mia/koimia.webp",
    },
    {
        name: "Avatars",
        uri: "avatars",
        imgSrc: "avatars/travel-shirli.webp",
    },
    {
        name: "Avatar Frames",
        uri: "avatar-frames",
        imgSrc: "avatar-frames/gaze-mirroria.webp",
    },
    {
        name: "Chat Bubbles",
        uri: "chat-bubbles",
        imgSrc: "chat-bubbles/glimpse.webp",
    },
]

function Cosmetics() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Cosmetics')}</title>
                <meta name="description" content="List of all cosmetic items in Tower of Fantasy Global and Chinese versions. How to obtain all outfits, accessories, headwear, Mi-a outfits, avatars, avatar frames, and chat bubbles." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <header>
                <h1>Cosmetics</h1>
                <p>
                    List of all cosmetic outfits, accessories, headwear, Mi-a outfits, avatars, avatar frames, chat bubbles and how to obtain them.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <h2>Cosmetic Items</h2>
                <ModalMenu list={COSMETICS} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
        </>
    );
}

export default Cosmetics;