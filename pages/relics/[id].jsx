import Layout, { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getRelicData, getAllRelicIds } from "../../lib/relics";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import rehypeRaw from "rehype-raw";

export async function getStaticProps({ params }) {
    const relic = await getRelicData(params.id);
    return {
        props: {
            relic,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllRelicIds();
    return {
        paths,
        fallback: false,
    };
}

export default function RelicPage({ relic }) {
    const advancements = Object.entries(relic.advancement).map(([star, effect]) => {
        return (
            <tr>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown rehypePlugins={[rehypeRaw]}>{effect}</ReactMarkdown></td>
            </tr>
        )
    });

    return (
        <Layout>
            <Head>
                <title>{setPageTitle(relic.name)}</title>
            </Head>

            <Modal item={relic}>
                <div className="modal-body">
                    {relic.chinaOnly && <CNTag name={relic.name} />}

                    <section className="relic-effects w-75ch">
                        <h3>Relic Effect</h3>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{relic.description}</ReactMarkdown>
                    </section>

                    <section className="advancements w-75ch">
                        <h3>Advancements</h3>
                        <table className="modal-table">
                            <thead>
                                <tr>
                                    <th><h6>Stars</h6></th>
                                    <th><h6>Effect</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                {advancements}
                            </tbody>
                        </table>
                    </section>
                </div>
            </Modal>
        </Layout>
    )
}
