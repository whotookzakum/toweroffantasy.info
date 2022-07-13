import Meta from "components/Meta";
import { ModalMenu } from "components/Modal/Modal";
import NotFoundPage from "routes/NotFoundPage";
import { GUIDES } from "data/en-US/guides/guideList";

function Guides() {
    return (
        <>
            <img className="bg-img" src='/images/bg-1.png' role="presentation" alt="" />
            <header>
                <h1>Guides</h1>
                <p>
                    Here you can learn about the game's systems, find helpful resources, and reference data that has been gathered.<br />
                    Information might apply to only to a specific version.
                </p>
            </header>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">General</h2>
                <p>Guides that provide general information about the game.</p>
                <ModalMenu list={GUIDES} filter="type" target="general" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Game Systems</h2>
                <p>These guides explain core game mechanics.</p>
                <ModalMenu list={GUIDES} filter="type" target="systems" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Strategy</h2>
                <p>Contains information for minmaxing and optimizations on a specific topic. </p>
                <ModalMenu list={GUIDES} filter="type" target="strategy" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Technical</h2>
                <p>For information outside of gameplay.</p>
                <ModalMenu list={GUIDES} filter="type" target="technical" />
            </section>
            <section className="w-75ch mx-auto" style={{padding: "1.5rem 0"}}>
                <h2 className="yellow">Referential</h2>
                <p>Data that is mainly meant for reference purposes.</p>
                <ModalMenu list={GUIDES} filter="type" target="reference" />
            </section>
        </>
    );
}

export function GuideArticle({ guide }) {
	if (!guide) {
		return (<NotFoundPage page="Guide" />);
	}
	
	const author = guide.author.map((author, index) => {
			return (index === guide.author.length - 1) ? <em>{author}</em> : <><em>{author}</em>, </>
	});

	return (
		<>
			<Meta
				title={guide.name}
				description={guide.name + " - a guide for Tower of Fantasy Global and Chinese versions.}"}
			>
				{guide.author.map((author, i) => (<meta property="author" content={author} key={"author" + i} />))}
			</Meta>
			<article className="guide">
					<header>
							<h1>{guide.name}</h1>
							<div className="authors">By {author}</div>
					</header>
					{guide.text}
			</article>
		</>
	);
}

export default Guides;