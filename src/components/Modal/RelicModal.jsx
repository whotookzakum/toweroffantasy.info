import ReactMarkdown from "react-markdown";
import { removeSpace } from "../../utils/stringHelper";
import CNTag from "../CNTag";

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
            <header>
                <div className="header-img-wrapper relics">
                    <img src={`/images/relics/${removeSpace(item.name)}.png`} alt="" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2><i style={rarityColor}>{item.rarity}</i> Relic</h2>
                </div>
            </header>

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