import { ModalMenu } from "../../components/Modal";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { EXPLORATION } from "../../data/en-US/exploration/exploration";
import Link from "next/link";

function Exploration() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Exploration')}</title>
                <meta name="description" content="How to solve exploration puzzles in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-2.webp" alt="Background Image" />

            <header>
                <h1>Exploration</h1>
                <p>
                    Learn how to solve various exploration puzzles. Puzzles are sorted by where they first appear—they may reappear in later regions. Some items are listed for information and are not necessarily puzzles.
                </p>
                <p>
                    For more details on the exploration system, check the <Link href="guides/systems/exploration">Exploration guide</Link> (coming soon).
                </p>
            </header>

            <h2>Aesperia</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="aesperia" />

            <h2>Vera Desert</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="vera" />

            <h2>Mirror City</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="mirroria" />

            <h2>Vera Desert Dark Zone</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="dark zone" />

            <h2>Vera Desert Gray Zone</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="gray zone" />

            <h2>Vera Disorderly Abyss</h2>
            <ModalMenu list={EXPLORATION} filter="location" target="disorderly abyss" />
        </>
    );
}

export default Exploration;