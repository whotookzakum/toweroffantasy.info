import { ModalMenu } from "../../components/Modal";
import { OUTFITS, MIA_OUTFITS } from "../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { useState } from "react";
import { GenderToggler } from "../../components/GenderToggler";
import { useEffect } from "react";

function Cosmetics() {
    
    const initialState = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem("outfitGender")) : "F";
    const [gender, setGender] = useState(initialState);
    useEffect(() => {
        localStorage.setItem("outfitGender", JSON.stringify(gender));
    });

    

    return (
        <>
            <Head>
                <title>{setPageTitle('Cosmetics')}</title>
                <meta name="description" content="List of all cosmetic outfits and accessories in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <header>
                <h1>Cosmetics</h1>
                <p>
                    List of all cosmetic outfits, accessories, and Mi-a outfits and how to obtain them. Most outfits require purchase or spending dark crystals on gachapon.
                </p>
            </header>

            <section>
                <div className="modal-section-header">
                    <h2>Outfits</h2>
                    <GenderToggler section="outfits-gender" gender={gender} setGender={setGender} />
                </div>
                <ModalMenu list={OUTFITS} gender={gender} />
            </section>

            <section>
                <h2>Mi-a Outfits</h2>
                <ModalMenu list={MIA_OUTFITS} />
            </section>
        </>
    );
}

export default Cosmetics;