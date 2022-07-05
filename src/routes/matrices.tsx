import { ModalMenu, Modal } from "../components/Modal";
import { MATRICES } from "../data/en-US/matrices/matrixList";
import { removeSpace } from "../utils/stringHelper";

// Import list of non-character matrices and merge them

function Matrices() {

    return (
        <>
            <img className="bg-img" src={require(`../data/images/art/${removeSpace(MATRICES[0].name)}.png`)} alt={MATRICES[0].name + " Artwork"} />
            <header>
                <h1>Matrices</h1>
                <p>
                    Matrices (aka Chips) are weapon attachments that provide stat boosts and special effects.<br/>
                    There are 4 slots on each weapon; Emotion, Mind, Belief, and Memory. Each of these slots gives slightly different passive stats.<br/>
                    Matrices can be strengthened similar to weapons, with each star unlocking higher values for the set effect.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Matrices</h2>
                <ModalMenu type="matrices" listContent={MATRICES.filter(character => character.rarity === "SSR")} />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Matrices</h2>
                <ModalMenu type="matrices" listContent={MATRICES.filter(character => character.rarity === "SR")} />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-b)"}}>R</span> Matrices</h2>
                <ModalMenu type="matrices" listContent={MATRICES.filter(character => character.rarity === "R")} />
            </section>

        </>
    );
}

export default Matrices;