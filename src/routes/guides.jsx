import { ModalMenu } from "../components/Modal";
import { GUIDES } from "../data/en-US/guides/guideList";


function Guides() {
    return (
        <>
            <img className="bg-img" src={require(`../data/images/bg-1.png`)} alt="Background Image" />
            <header>
                <h1>Guides</h1>
                <p>
                    Here you can learn about the game's systems, find helpful resources, and reference data that has been gathered.<br />
                    Information might apply to only to a specific version.
                </p>
                <blockquote>
                    Opinions expressed in these guides belong solely to the author(s) and may not reflect those of the site curators.
                </blockquote>
            </header>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">General</h2>
                <p>Guides that provide general information about the game.</p>
                <ModalMenu type="guides" listContent={GUIDES.filter(guide => guide.type === "general")} />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Game Systems</h2>
                <p>These guides explain core game mechanics.</p>
                <ModalMenu type="guides" listContent={GUIDES.filter(guide => guide.type === "systems")} />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Strategy</h2>
                <p>Contains information for minmaxing and optimizations on a specific topic. </p>
                <ModalMenu type="guides" listContent={GUIDES.filter(guide => guide.type === "strategy")} />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Technical</h2>
                <p>For information outside of gameplay.</p>
                <ModalMenu type="guides" listContent={GUIDES.filter(guide => guide.type === "technical")} />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Referential</h2>
                <p>Data that is mainly meant for reference purposes.</p>
                <ModalMenu type="guides" listContent={GUIDES.filter(guide => guide.type === "referential")} />
            </section>
        </>
    );
}

export function GuideArticle({ guide }) {
    const author = guide.author.map((author, index) => {
        return (index === guide.author.length - 1) ? <em>{author}</em> : <><em>{author}</em>, </>
    })
    return (
        <article className="guide">
            <header>
                <h1>{guide.name}</h1>
                <div className="authors">By {author}</div>
            </header>
            {guide.text}
        </article>
    )
}

export default Guides;