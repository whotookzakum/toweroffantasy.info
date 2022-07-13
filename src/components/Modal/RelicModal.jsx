import ReactMarkdown from "react-markdown";
import Meta from "components/Meta";
import CNTag from "components/CNTag";

export function RelicModal({ item }) {
    let rarityColor = { color: "var(--color-tier-s)" };
    if (item.rarity === "SR") rarityColor = { color: "var(--color-tier-a)" };
    else if (item.rarity === "R") rarityColor = { color: "var(--color-tier-b)" };
    const advancements = Object.entries(item.advancement).map(([star, effect]) => {
        return (
            <tr>
                <th>{star.split("star").pop()} ★</th>
                <td><ReactMarkdown>{effect}</ReactMarkdown></td>
            </tr>
        )
    });

    return (
        <>
					<Meta
						title={item.name}
						description={`${item.name} effects and advancements in Tower of Fantasy Global and Chinese versions.`}
					>
						<meta property="og:image" content={`https://toweroffantasy.info/images/relics/${item.imgSrc}`} />
						<meta name="twitter:card" content="summary_large_image" />
					</Meta>
            <div className="modal-body">
                {item.chinaOnly && <CNTag name={item.name} />}

                <section className="relic-effects w-75ch">
                    <h3>Relic Effect</h3>
                    <ReactMarkdown>{item.description}</ReactMarkdown>
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
        </>
    )
}