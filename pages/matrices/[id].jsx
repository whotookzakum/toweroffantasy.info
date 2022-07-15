import Layout, { setPageTitle } from "../../components/Layout";
import Head from 'next/head';
import { getMatrixData, getAllMatrixIds } from "../../lib/matrices";
import ReactMarkdown from 'react-markdown';
import CNTag from "../../components/CNTag";
import { Modal } from "../../components/Modal";
import rehypeRaw from "rehype-raw";

export async function getStaticProps({ params }) {
    const matrix = await getMatrixData(params.id);
    return {
        props: {
            matrix,
        },
    };
}

export async function getStaticPaths() {
    const paths = getAllMatrixIds();
    return {
        paths,
        fallback: false,
    };
}

export default function MatrixPage({ matrix }) {
    const matrixSet = matrix.matrix;

    const setEffects = Object.entries(matrixSet).map(([key, value]) => {
        const reqPieces = key.split("set").pop();
        return (
            <section className="matrix-set w-75ch">
                <h3>{reqPieces}-piece Set</h3>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>{matrixSet[key]}</ReactMarkdown>
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
        <Layout>
            <Head>
                <title>{setPageTitle(matrix.name + " Matrix")}</title>
            </Head>
            <Modal item={matrix}>
                <div className="modal-body">
                    {matrix.chinaOnly && <CNTag name={matrix.name} />}
                    {setEffects}
                </div>
            </Modal>
        </Layout>
    )
}
