import { ModalMenu } from "../../../components/Modal";
import { OUTFITS } from "../../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../../components/Layout";
import Head from 'next/head';
import { useState } from "react";
import { GenderToggler } from "../../../components/GenderToggler";
import { useEffect } from "react";
import Ads from "../../../components/Ads";
import BackButton from "../../../components/BackButton";

function Outfits() {
    const initialState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("outfitGender")) : "F";
    const [gender, setGender] = useState(initialState);

    useEffect(() => {
        localStorage.setItem("outfitGender", JSON.stringify(gender));
    });

    return (
        <>
            <Head>
                <title>{setPageTitle('Outfits')}</title>
                <meta name="description" content="List of all cosmetic outfits and how to obtain them in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <BackButton/>
            <header>
                <h1>Outfits</h1>
                <p>
                    List of all available cosmetic outfits and how to obtain them. Most outfits require purchase or spending dark crystals on gachapon.
                </p>
            </header>

            <Ads unit="lb1" />

            <section>
                <div className="modal-section-header">
                    <h2>Outfit List</h2>
                    <GenderToggler section="outfits-gender" gender={gender} setGender={setGender} />
                </div>
                <ModalMenu list={OUTFITS} gender={gender} />
            </section>

            <Ads unit="lb3" />
            <Ads unit="mpu1" />
            <BackButton/>
        </>
    );
}

export default Outfits;