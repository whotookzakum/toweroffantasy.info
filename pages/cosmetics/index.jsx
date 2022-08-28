import { ModalMenu } from "../../components/Modal";
import { OUTFITS, MIA_OUTFITS } from "../../data/en-US/cosmetics/cosmetics";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { useState } from "react";

function Mounts() {

    const [gender, setGender] = useState("F");

    function handleChange(e) {
        e.target.checked ? setGender("M") : setGender("F");
    }

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
                    List of all cosmetics outfits and accessories and how to obtain them.
                </p>
            </header>
            
            <section>
                <h2>Outfits</h2>
                <input type="checkbox" onChange={(e) => handleChange(e)} />
                <ModalMenu list={OUTFITS} gender={gender} />
            </section>

            <section>
                <h2>Mi-a Outfits</h2>
                <ModalMenu list={MIA_OUTFITS} />
            </section>
        </>
    );
}

export default Mounts;