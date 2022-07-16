import Link from "next/link";

export const pvp = {
    name: "PvP",
    uri: "pvp",
    type: "systems",
    author: ["Keita#0795", "Goldenmonkey#2798", "theLaw#5678", "Zakum#3080"],
    text:
        <>
            <section>
                <p>
                    There are 3 forms of Player versus Player combat in Tower of Fantasy—Duels, Apex League, and Break Fate.
                </p>
            </section>

            <section>
                <h2>Duels</h2>
                <p>
                    The sparring system of the game; you can click on someone in the overworld to request a duel. In a duel, all your gear which includes armor, matrices, advancements, and levels matter. It is <strong className="yellow">NOT balanced</strong> and healing is not reduced.
                </p>
                <p>
                    The match will end when one player is defeated, the time limit expires, or if players wander too far from the duel zone.
                </p>
            </section>

            <section>
                <h2>Apex League</h2>
                
                <p>The competitive mode of PvP where you fight in an Arena setting that gets smaller as the match goes on. Each player has 2 lives, the match ends when one player runs out of lives or when the match timer ends. <strong className="yellow">Weapons and Relics are boosted to their max level including advancements</strong>. Weapon Resonance, Matrices, and Simulacrum Traits do not take effect in Apex League, and all healing is reduced by 50%.</p>
                <blockquote>
                    For an extensive guide on Apex League meta, check out <Link href="/guides/strategy/apex-league">Apex League</Link>.
                </blockquote>
                <p>
                    At the end of the season (usually 1 month), you are rewarded dark crystals, a title, and optionally cosmetics and a mount based on your rank.
                </p>
            </section>

            <section>
                <h2>Break Fate</h2>
                <p>
                    The battle royale game mode which can be played solo or in trios. Similar to Naraka: Bladepoint, you can select an area to spawn at instead of dropping to it. Everyone must collect all their match gear from the beginning, thus it is the most balanced game mode.
                </p>
                <p>
                    At the end of the season (usually 1 month), you are rewarded dark crystals and a title based on your rank.
                </p>
            </section>
        </>
}