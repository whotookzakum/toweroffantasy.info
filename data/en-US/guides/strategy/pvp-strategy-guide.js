import Link from "next/link";

export const pvpStrategy = {
    name: "PvP Strategy Guide",
    uri: "pvp-strategy-guide",
    type: "strategy",
    author: ["Keita#0795", "Goldenmonkey#2798", "theLaw#5678"],
    text:
        <>
            <section>
                <h2>Types of PvP</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Overworld PvP</th>
                            <td>The Sparring system of the game, you can click on someone and request for a duel. In overworld PvP all your gear which includes armor, matrices, advancements, and levels matter. It is NOT balanced</td>
                        </tr>
                        <tr>
                            <th>Apex League</th>
                            <td>Apex League is the competitive mode of PvP where you fight in an Arena setting that gets smaller as the match goes on, each player has 2 lives, the match ends when one player runs out of lives or when the match timer ends. Everything in Apex League is balanced, with weapons and relics being boosted to the max level including advancements. Weapons resonance does not matter and all healing is reduced by 50%</td>
                        </tr>
                    </tbody>
                </table>
                <p>
                    <strong className="yellow">This guide will mainly focus on Apex League</strong> where refinements and levels are all balanced, though similar pvp strategies can apply in overworld PvP.
                </p>
            </section>

            <section>
                <h2>PvP Terminology</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Term</th>
                            <th>Meaning</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Hyperbody</th>
                            <td>Resistance to knockup/knockdown/freeze but not stuns (Huma/Shiro/Confinement)</td>
                        </tr>
                        <tr>
                            <th>CC Immunity</th>
                            <td>Resistance to all CC (Stuns Included)</td>
                        </tr>
                        <tr>
                            <th>Knockup</th>
                            <td>Knock up opponents and potentially keep them suspended in the air</td>
                        </tr>
                        <tr>
                            <th>Knockdown</th>
                            <td>Opponents are knocked to the ground, forcing them to use a dodge roll</td>
                        </tr>
                        <tr>
                            <th>Skill</th>
                            <td>The weapon's active skill (default binded to 1)</td>
                        </tr>
                        <tr>
                            <th>Dash Attack</th>
                            <td>Shift → left click OR right click → left click (dash movement key → attack key)</td>
                        </tr>
                        <tr>
                            <th>Discharge</th>
                            <td>The characters discharge ability that can be used once your energy is full</td>
                        </tr>
                        <tr>
                            <th>Micro Stuns</th>
                            <td>Short stuns that are mainly used as interrupts, performable by certain characters</td>
                        </tr>
                        <tr>
                            <th>Anti-CC</th>
                            <td>A colloquial term used to describe any kind of Anti-CC including I-frames, hyperbody, and CC Immunity</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section style={{ maxWidth: "100%" }} className="pvp-strategy">
                <h2>Weapons</h2>

                <table>
                    <thead>
                        <tr>
                            <th style={{width: "25%"}}>Weapon</th>
                            <th style={{width: "25%"}}>Summary</th>
                            <th style={{width: "25%"}}></th>
                            <th style={{width: "25%"}}></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <img src="/images/wep/huma.png" alt="Huma's Weapon" />
                                <Link href="/simulacra/huma"><a>Huma</a></Link>
                            </th>
                            <td colSpan={3}>
                                <p>A good counter against Cocoritter due to stunlock capability, high shield break, and burn damage.</p>


                                <p>Basic Shield Combo:</p>
                                <kbd>Dash attack x3</kbd> → <kbd>Skill</kbd>

                                <p>Basic Axe Combo:</p>
                                <kbd>Click</kbd> → <kbd>Hold</kbd> → <kbd>Dash Attack</kbd> (repeat as necessary)
                            </td>

                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <ul>
                                    <li className="pro">High burst damage</li>
                                    <li className="pro">Large aoe damage + knockdown on skill use</li>
                                    <li className="pro">Decent shield break capability AND energy recharge</li>
                                    <li className="pro">Dash attack has micro stuns (good for interrupt and confirming axe conversion)</li>
                                    <li className="pro">Strong tracking on aerial attack</li>
                                </ul>

                            </td>
                            <td colSpan={2}>
                                <ul>
                                    <li className="con">Consumes a lot of dashes and is reliant on dashes for dmg/combos</li>
                                    <li className="con">Tracking on shield dashes can be iffy at times</li>
                                    <li className="con">Main use is conversion skill combo, while on cooldown/without dashes effectiveness drops off</li>
                                    <li className="con">The main hit of Huma axe conversion can be blocked by enemy Couant which also reflects back some of the tick damage afterwards</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <img src="/images/wep/huma.png" alt="Huma's Weapon" />
                                <Link href="/simulacra/huma"><a>Huma</a></Link>
                            </th>
                            <td>
                                <p>A good counter against Cocoritter due to stunlock capability, high shield break, and burn damage.</p>


                                <p>Basic Shield Combo:</p>
                                <kbd>Dash attack x3</kbd> → <kbd>Skill</kbd>

                                <p>Basic Axe Combo:</p>
                                <kbd>Click</kbd> → <kbd>Hold</kbd> → <kbd>Dash Attack</kbd> (repeat as necessary)
                            </td>

                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <details>
                                    <summary>Strengths &amp; Weaknesses</summary>
                                    <ul>
                                        <li className="pro">High burst damage</li>
                                        <li className="pro">Large aoe damage + knockdown on skill use</li>
                                        <li className="pro">Decent shield break capability AND energy recharge</li>
                                        <li className="pro">Dash attack has micro stuns (good for interrupt and confirming axe conversion)</li>
                                        <li className="pro">Strong tracking on aerial attack</li>
                                    </ul>
                                    <hr />
                                    <ul>
                                        <li className="con">Consumes a lot of dashes and is reliant on dashes for dmg/combos</li>
                                        <li className="con">Tracking on shield dashes can be iffy at times</li>
                                        <li className="con">Main use is conversion skill combo, while on cooldown/without dashes effectiveness drops off</li>
                                        <li className="con">The main hit of Huma axe conversion can be blocked by enemy Couant which also reflects back some of the tick damage afterwards</li>
                                    </ul>
                                </details>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
}