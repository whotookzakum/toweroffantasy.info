import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import { getOutfitData, getAllOutfitIds } from "../../../lib/cosmetics";
import CNTag from "../../../components/CNTag";
import { Modal } from "../../../components/Modal";
import { useState, useEffect } from "react";
import Ads from "../../../components/Ads";

export async function getStaticProps({ params }) {
    const outfit = await getOutfitData(params.id);
    return {
        props: {
            outfit,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllOutfitIds();
    return {
        paths,
        fallback: false,
    };
}

export default function OutfitModal({ outfit }) {
    const [gender, setGender] = useState(null);
    useEffect(() => {
        const cachedGender = localStorage.getItem("outfitGender")
        if (cachedGender) {
            setGender(cachedGender)
        }
        else {
            localStorage.setItem("outfitGender", "F");
            setGender("F")
        }
    }, []);

    return (
        <>
            <Head>
                <title>{setPageTitle(outfit.name)}</title>
                <meta name="description" content={`Information about the outfit ${outfit.name} in Tower of Fantasy.`} />
            </Head>

            <Modal item={outfit} gender={gender}>
                <div className="modal-body outfits">
                    {outfit.chinaOnly && <CNTag name={outfit.name} />}

                    <Ads unit="lb1" />

                    <section className="w-75ch">
                        <h3 className="anchor">How to get {outfit.name}</h3>
                        {outfit.source}
                    </section>

                    <Ads unit="lb3" />
                    <Ads unit="mpu1" />

                </div>
            </Modal>
        </>
    )
}
