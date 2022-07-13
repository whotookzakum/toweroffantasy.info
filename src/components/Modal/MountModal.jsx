import ReactMarkdown from "react-markdown";
import { removeSpace } from "utils/stringHelper";
import Meta from "components/Meta";
import CNTag from "components/CNTag";

export function MountModal({ item }) {
    const parts = Object.entries(item.parts).map(([key, value]) => {
        const partNum = key.split("part").pop();
        return (
            <div className="spotlight mount-part">
                <div className="flex">
                    <img className="mount-part-img" src={`/images/mounts/${removeSpace(item.name)}-${partNum}.png`} alt={`${item.name} Part ${partNum}`} />
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
					<Meta
						title={item.name}
						description={`How to obtain the mount ${item.name} in Tower of Fantasy Global and Chinese versions.`}
					>
						<meta property="og:image" content={`https://toweroffantasy.info/images/mounts/${item.imgSrc}`} />
						<meta name="twitter:card" content="summary_large_image" />
					</Meta>
            <div className="modal-body mounts">
                {item.chinaOnly && <CNTag name={item.name} />}
                <section className="w-75ch">
                    <h2>Parts</h2>
                    {parts}
                </section>
            </div>
        </>
    )
}