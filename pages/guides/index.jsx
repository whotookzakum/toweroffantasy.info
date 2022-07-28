import { ModalMenu } from "../../components/Modal";
import { GUIDES } from "../../data/en-US/guides/guideList";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';

export default function Guides() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Guides')}</title>
                <meta name="description" content="Guides for Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-1.png" alt="Background Image" />
            <header>
                <h1>Guides</h1>
                <p>
                    Here you can learn about the game's systems, find helpful resources, and reference data that has been gathered.<br />
                    Information might apply to only to a specific version.
                </p>
            </header>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="guides-section-title">General</h2>
                {/* <p>Guides that provide general information about the game.</p> */}
                <ModalMenu list={GUIDES} filter="type" target="general" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="guides-section-title">Game Systems</h2>
                {/* <p>These guides explain core game mechanics.</p> */}
                <ModalMenu list={GUIDES} filter="type" target="systems" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="guides-section-title">Strategy</h2>
                {/* <p>Contains information for minmaxing and optimizations on a specific topic. </p> */}
                <ModalMenu list={GUIDES} filter="type" target="strategy" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="guides-section-title">Technical</h2>
                {/* <p>For information outside of gameplay.</p> */}
                <ModalMenu list={GUIDES} filter="type" target="technical" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="guides-section-title">Referential</h2>
                {/* <p>Data that is mainly meant for reference purposes.</p> */}
                <ModalMenu list={GUIDES} filter="type" target="referential" />
            </section>
        </>
    );
}