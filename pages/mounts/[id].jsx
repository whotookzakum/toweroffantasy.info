import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getMountData, getAllMountIds } from "../../lib/mounts";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import { removeSpace } from '../../utils/stringHelper';

export async function getStaticProps({ params }) {
    const mount = await getMountData(params.id);
    return {
        props: {
            mount,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllMountIds();
    return {
        paths,
        fallback: false,
    };
}

export default function MountModal({ mount }) {
    const parts = Object.entries(mount.parts).map(([key, value]) => {
        const partNum = key.split("part").pop();
        return (
            <div className="spotlight mount-part">
                <div className="flex">
                    <img className="mount-part-img" src={`/images/mounts/${removeSpace(mount.name)}-${partNum}.png`} alt={`${mount.name} Part ${partNum}`} />
                    <div className="mount-part-text" >
                        <ReactMarkdown>{value.source}</ReactMarkdown>
                        {value.map &&
                            <details>
                                <summary>Map</summary>
                                <img src={`/images/mounts/${value.map}`} alt="Map of Elites" />
                            </details>
                        }
                        {value.video &&
                            <details>
                                <summary>Video</summary>
                                <iframe src={value.video} allow="fullscreen" modestbranding={1} />
                            </details>
                        }
                        {value.guide &&
                            <a href={value.guide} target="_blank" rel="noreferrer noopener">Link to Guide</a>
                        }
                    </div>
                </div>
            </div>
        )
    })
    return (
        <>
            <Head>
                <title>{setPageTitle(mount.name)}</title>
            </Head>

            <Modal item={mount}>
                <div className="modal-body mounts">
                    {mount.chinaOnly && <CNTag name={mount.name} />}
                    <section className="w-75ch">
                        <h2>Parts</h2>
                        {parts}
                    </section>
                </div>
            </Modal>
        </>
    )
}
