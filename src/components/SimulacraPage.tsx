import { ModalMenu, Modal } from "./Modal";
import { SSR_CHARACTERS, SR_CHARACTERS } from "../data/en-US/characterList";

function SimulacraPage() {
    return (
        <main>
            <header>
                <h1>Simulacra</h1>
                <p>
                    Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy.<br />

                    They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately.
                </p>
            </header>

            <section>
                <h2>SSR Simulacra</h2>
                {/* <ModalMenu listContent={SSR_CHARACTERS} /> */}
                <Modal/>
            </section>

            <section>
                <h2>SR Simulacra</h2>
                {/* <ModalMenu listContent={SR_CHARACTERS} /> */}
            </section>

        </main>
    );
}

export default SimulacraPage;