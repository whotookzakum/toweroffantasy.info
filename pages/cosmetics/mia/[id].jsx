import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import { getMiaOutfitData, getAllMiaOutfitIds } from "../../../lib/cosmetics";
import CNTag from "../../../components/CNTag";
import { Modal } from "../../../components/Modal";
import Ads from "../../../components/Ads";

export async function getStaticProps({ params }) {
    const outfit = await getMiaOutfitData(params.id);
    return {
        props: {
            outfit,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllMiaOutfitIds();
    return {
        paths,
        fallback: false,
    };
}

export default function MiaOutfitModal({ outfit }) {

    return (
        <>
            <Head>
                <title>{setPageTitle(outfit.name)}</title>
                <meta name="description" content={`Information about the Mi-a outfit ${outfit.name} in Tower of Fantasy.`} />
            </Head>

            <Modal item={outfit}>
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
