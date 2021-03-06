import { ModalMenu } from "../../components/Modal";
import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';

function Mounts() {
    return (
        <>
            <Head>
                <title>{setPageTitle('Exploration')}</title>
                <meta name="description" content="How to solve exploration puzzles in Tower of Fantasy Global and Chinese versions." />
            </Head>

            <img className="bg-img" src="/static/images/bg-2.png" alt="Background Image" />
            <header>
                <h1>Exploration</h1>
                <p>
                    Coming soon.
                </p>
            </header>
        </>
    );
}

export default Mounts;