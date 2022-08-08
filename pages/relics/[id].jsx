import { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getRelicData, getAllRelicIds } from "../../lib/relics";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import rehypeRaw from "rehype-raw";
import _ from "lodash";
import { VersionToggler } from "../../components/VersionToggler";

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

export default function RelicPage({ relic, version, setVersion }) {
    const cnData = _.cloneDeep(relic);
    const chinaData = _.merge(cnData, cnData.cnData);
    const dataVersion = (version === "global" && !relic.chinaOnly) ? relic : chinaData;

    const advancements = Object.entries(dataVersion.advancement).map(([star, effect]) => {
        return (
            <tr key={star}>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown rehypePlugins={[rehypeRaw]}>{effect}</ReactMarkdown></td>
            </tr>
        )
    });

    return (
        <>
            <Head>
                <title>{setPageTitle(dataVersion.name)}</title>
                <meta name="description" content={`Information about the relic ${relic.name} in Tower of Fantasy.`} />
            </Head>

            <Modal item={relic}>
                <div className="modal-body">
                    {dataVersion.chinaOnly && <CNTag name={dataVersion.name} />}

                    <section className="relic-effects w-75ch">
                        <h3>Relic Effect</h3>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{dataVersion.description}</ReactMarkdown>
                    </section>

                    <section className="advancements w-75ch">
                        <div className="modal-section-header">
                            <h3>Advancements</h3>
                            {!dataVersion.chinaOnly &&
                                <VersionToggler section="relic-advancements" version={version} setVersion={setVersion} />}
                        </div>
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
                        {dataVersion.videoSrc &&
                            <>
                                <h2>Preview</h2>
                                <iframe src={dataVersion.videoSrc} allow="fullscreen" modestbranding={1} />
                                <p>
                                    The relic shown in the video is <strong className="yellow">{dataVersion.starsInVideo}★</strong>.
                                </p>
                            </>
                        }
                    </section>
                </div>
            </Modal>
        </>
    )
}
