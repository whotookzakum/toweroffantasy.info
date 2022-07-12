import ReactMarkdown from "react-markdown";
import { removeSpace } from "../../utils/stringHelper";
import CNTag from "../CNTag";

export function MatrixModal({ item }) {
    const matrix = item.matrix;
    let rarityColor = { color: "var(--color-tier-s)" };
    if (item.rarity === "SR") rarityColor = { color: "var(--color-tier-a)" };
    else if (item.rarity === "R") rarityColor = { color: "var(--color-tier-b)" };

    const setEffects = Object.entries(matrix).map(([key, value]) => {
        const reqPieces = key.split("set").pop();
        return (
            <section className="matrix-set w-75ch">
                <h3>{reqPieces}-piece Set</h3>
                <ReactMarkdown>{matrix[key]}</ReactMarkdown>
                <details style={{ display: 'none' }}>
                    <summary>Advancements</summary>
                    <div className="details-content">

                        <table className="modal-table">
                            <thead>
                                <tr>
                                    <th><h6>Stars</h6></th>
                                    <th><h6>Effect</h6></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                                <tr>
                                    <th>2 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                                <tr>
                                    <th>3 ★</th>
                                    <td><ReactMarkdown>{matrix[key]}</ReactMarkdown></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </details>
            </section>
        )
    });

    return (
        <>
            <header>
                <div className="header-img-wrapper matrices">
                    <img src={`/images/matrices/${removeSpace(item.name)}.png`} alt="" />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <h2><i style={rarityColor}>{item.rarity}</i> Matrix</h2>
                </div>
            </header>

            <div className="modal-body">
                {item.chinaOnly && <CNTag name={item.name} />}
                {setEffects}
            </div>
        </>
    )
}