import Head from "next/head"
import { setPageTitle } from "./Layout"
import { useEffect, useState } from "react";
import BackButton from "./BackButton";
import AnchorJS from "anchor-js";

export function GuideArticle({ guide }) {
    const author = guide.author.map((author, index) => {
        return (index === guide.author.length - 1) ? <em>{author}</em> : <><em>{author}</em>, </>
    })

    // Avoid Hydration issue
    const [hasMounted, setHasMounted] = useState(false);
    useEffect(() => {
        setHasMounted(true);
        const anchors = new AnchorJS();
        anchors.add('h2');
        anchors.add('h3');
    })

    if (!hasMounted) {
        return null;
    }

    return (
        <>
            <Head>
                <title>{setPageTitle(guide.name)}</title>
                <meta name="description" content={guide.description} />
            </Head>
            <img className="bg-img" src="/static/images/bg-1.webp" alt="Background Image" />
            <article className="guide">
                <BackButton/>
                <header>
                    <h1>{guide.name}</h1>
                    <div className="authors">By {author}</div>
                    <div style={{color: "gray"}}>Last updated {guide.date}</div>
                </header>
                {guide.text}
                <BackButton/>
            </article>
        </>
    )
}