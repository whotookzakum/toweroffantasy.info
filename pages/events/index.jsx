import { ModalMenu } from "../../components/Modal";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';


function Cosmetics() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Events')}</title>
                <meta name="description" content="List of all cosmetic outfits and accessories in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-3.webp" alt="Background Image" />
            <header>
                <h1>Events</h1>
                <p>
                    List of all ongoing and past events.
                </p>
            </header>

            <section>
                <h2>Ongoing Events</h2>
                <details>
                    <summary>Event name (12 August 2022 ~ 18 August 2022)</summary>
                    <div className="details-content">
                        
                    </div>
                </details>
            </section>

        </>
    );
}

export default Cosmetics;