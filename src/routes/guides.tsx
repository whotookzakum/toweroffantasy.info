import { ModalMenu, Modal } from "../components/Modal";
import { removeSpace, getItemByName } from "../utils/stringHelper";
import { Link } from "react-router-dom";
import { GUIDES } from "../data/en-US/guides/guideList";
import ReactMarkdown from "react-markdown";
import { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import { cnTopUp } from "../data/en-US/guides/technical/cnTopUp";
import { dailies } from "../data/en-US/guides/systems/dailies";
import { simulacra } from "../data/en-US/guides/systems/simulacra";
import { gacha } from "../data/en-US/guides/systems/gacha";
import { thingsYouMustKnow } from "../data/en-US/guides/general/thingsYouMustKnow";
import { vitality } from "../data/en-US/guides/systems/vitality";
import { housing } from "../data/en-US/guides/systems/housing";
import { cnRegistration } from "../data/en-US/guides/technical/cnRegistration";
import { pvpStrategy } from "../data/en-US/guides/strategy/pvpStrategy";

function Guides() {
    return (
        <>
            <img className="bg-img" src={require(`../data/images/bg-1.png`)} alt="Background Image" />
            {/* <header>
                <h1>Guides</h1>
                <p>
                    Here you can learn about the game's systems, find helpful resources, and reference data that has been gathered.<br />
                    <strong>Opinions expressed in these guides belong solely to the author(s) and may not reflect those of the site curators.</strong>
                </p>
            </header>
            <ModalMenu listContent={GUIDES} type="guides" /> */}
            <GuideArticle/>
        </>
    );
}

function GuideArticle() {
    const guide = pvpStrategy;
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