import { ModalMenu, Modal } from "../components/Modal";
import { removeSpace } from "../utils/stringHelper";


function Relics() {

    return (
        <>
            <img className="bg-img" src={require(`../data/images/art/${removeSpace(CHARACTERS[0].name)}.png`)} alt={CHARACTERS[0].name + " Artwork"} />
            <header>
                <h1>Relics</h1>
                <p>
                    Relics (aka Gadgets) are tools that aid the player in exploration or combat.
                </p>
            </header>
            
            <section>
                <h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Relics</h2>
                <ModalMenu type="relics" listContent={} />
            </section>

            <section>
                <h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Relics</h2>
                <ModalMenu type="relics" listContent={} />
            </section>

        </>
    );
}

export default Relics;