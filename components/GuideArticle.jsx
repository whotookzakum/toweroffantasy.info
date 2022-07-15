import Head from "next/head"
import { setPageTitle } from "./Layout"

export function GuideArticle({ guide }) {
    const author = guide.author.map((author, index) => {
        return (index === guide.author.length - 1) ? <em>{author}</em> : <><em>{author}</em>, </>
    })
    return (
        <article className="guide">
            <Head>
                <title>{setPageTitle(guide.name)}</title>
                <meta name="description" content={guide.description} />
            </Head>

            <header>
                <h1>{guide.name}</h1>
                <div className="authors">By {author}</div>
            </header>
            {guide.text}
        </article>
    )
}