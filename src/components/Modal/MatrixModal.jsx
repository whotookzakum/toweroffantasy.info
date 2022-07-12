import ReactMarkdown from "react-markdown";
import CNTag from "../CNTag";

export function MatrixModal({ item }) {
    const matrix = item.matrix;

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
            <div className="modal-body">
                {item.chinaOnly && <CNTag name={item.name} />}
                {setEffects}
            </div>
        </>
    )
}