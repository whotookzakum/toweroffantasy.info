import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getMountData, getAllMountIds } from "../../lib/mounts";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import { removeSpace } from '../../utils/stringHelper';
import Link from "next/link";
import rehypeRaw from "rehype-raw";
import Ads from "../../components/Ads";

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
            <div key={key} className="spotlight mount-part">
                <div className="flex">
                    <img className="mount-part-img" src={`/static/images/mounts/${removeSpace(mount.name)}-${partNum}.webp`} alt={`${mount.name} Part ${partNum}`} />
                    <div className="mount-part-text" >
                        <div className="flex">
                            <ReactMarkdown rehypePlugins={[rehypeRaw]}>{value.source}</ReactMarkdown>&nbsp;
                            {value.dropRateKnown ? <Link href="/guides/referential/mount-piece-drop-rates"><a>View drop rate</a></Link> : null}
                        </div>
                        {value.map &&
                            <details>
                                <summary>Map</summary>
                                <img src={`/static/images/mounts/${value.map}`} alt="Map of Elites" />
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
                <meta name="description" content={`Information about the mount ${mount.name} in Tower of Fantasy.`} />
            </Head>

            <Modal item={mount}>
                <div className="modal-body mounts">
                    {mount.chinaOnly && <CNTag name={mount.name} />}

                    <Ads unit="lb1" />

                    <section className="w-75ch">
                        <h3 className="anchor">Parts</h3>
                        {parts}
                    </section>

                    <Ads unit="lb3" />
                    <Ads unit="mpu1" />

                    {mount.videoSrc &&
                        <section className="w-75ch">
                            <h3 className="anchor">Preview</h3>
                            <iframe src={mount.videoSrc} allow="fullscreen" modestbranding={1} />
                        </section>
                    }

                    <Ads unit="mpu2" />
                </div>
            </Modal>
        </>
    )
}
