import { ModalMenu } from "components/Modal/Modal";
import { CHARACTERS } from "data/en-US/characters/characterList";
import { removeSpace } from "utils/stringHelper";

function Simulacra() {
    return (
        <>
					<img className="bg-img" src={`/images/art/${removeSpace(CHARACTERS[0].name)}.png`} role="presentation" alt="" />
					<header>
							<h1>Simulacra</h1>
							<p>
									Simulacra (aka Mimics) are the player's representation of the characters found in Tower of Fantasy.<br />
									They have an associated weapon and an optional passive effect. Their associated matrices must be obtained separately.
							</p>
					</header>
					
					<section>
							<h2><span style={{color: "var(--color-tier-s)"}}>SSR</span> Simulacra</h2>
							<ModalMenu list={CHARACTERS} filter="rarity" target="SSR" />
					</section>

					<section>
							<h2><span style={{color: "var(--color-tier-a)"}}>SR</span> Simulacra</h2>
							<ModalMenu list={CHARACTERS} filter="rarity" target="SR" />
					</section>

        </>
    );
}

export default Simulacra;