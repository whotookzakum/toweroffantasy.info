import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getExplorationData, getAllExplorationIds } from "../../lib/exploration";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import rehypeRaw from 'rehype-raw';
import Link from "next/link";


export async function getStaticProps({ params }) {
    const exploration = await getExplorationData(params.id);
    return {
        props: {
            exploration,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllExplorationIds();
    return {
        paths,
        fallback: false,
    };
}

export default function MountModal({ exploration }) {
    return (
        <>
            <Head>
                <title>{setPageTitle(exploration.name)}</title>
            </Head>

            <Modal item={exploration}>
                <div className="modal-body exploration">
                    {exploration.chinaOnly && <CNTag name={exploration.name} />}
                    <section className="w-75ch">
                        <h2>How to solve</h2>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                            {exploration.solution}
                        </ReactMarkdown>
                        {exploration.videoSrc &&
                            <iframe src={exploration.videoSrc} allow="fullscreen" modestbranding={1} />
                        }
                    </section>
                </div>
            </Modal>
        </>
    )
}
