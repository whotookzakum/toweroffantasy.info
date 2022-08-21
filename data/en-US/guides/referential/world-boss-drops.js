import Link from "next/link"
export const worldBossDrops = {
    name: "World Boss Drops",
    uri: "world-boss-drops",
    date: "19 August 2022",
    description: "Drop rates for world bosses found throughout Tower of Fantasy.",
    type: "referential",
    author: ["Afrodiy#9769", "Sova#0618"],
    text:
        <>
            <section>
                <p>
                    Drop rates for all the world bosses. <strong className="yellow">Drop rates are affected by your character level</strong>, thus multiple rates are indicated below.
                </p>
                <p>
                    <strong className="yellow">Special Fall</strong> is a mechanic which, under certain conditions, the chance of an item dropping increases. The exact trigger for Special Fall is unknown.
                </p>
            </section>

            {/* Aesperia */}
            <section>
                <h2>Robarg</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.3%</td>
                            <td>2.0%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/king">
                                    <a>KING Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>2.6%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>40%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/robarg">
                                    <a>Robarg Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>7.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/missile-barrage">
                                    <a>Missile Barrage fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Apophis</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.3%</td>
                            <td>2.2%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/tsubasa">
                                    <a>Tsubasa Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>2.6%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>45%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/apophis">
                                    <a>Apophis Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>7.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/couant">
                                    <a>Couant fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Frost Bot</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.4%</td>
                            <td>2.5%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/huma">
                                    <a>Huma Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>2.8%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>50%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/frost-bot">
                                    <a>Frost Bot Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>7.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/hovering-cannon">
                                    <a>Hovering Cannon fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Sobek</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.4%</td>
                            <td>2.7%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/crow">
                                    <a>Crow Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>2.8%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>55%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/sobek">
                                    <a>Sobek Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>8.5%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/cybernetic-arm">
                                    <a>Cybernetic Arm fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Lucia</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.4%</td>
                            <td>2.7%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/shiro">
                                    <a>Shiro Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>3.0%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>55%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/echo">
                                    <a>Echo Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>9.2%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/quantum-cloak">
                                    <a>Quantum Cloak fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Barbarossa</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.5%</td>
                            <td>3.0%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/meryl">
                                    <a>Meryl Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>3.3%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>60%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/barbarossa">
                                    <a>Barbarossa Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>9.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/hovering-cannon">
                                    <a>Magnetic Pulse fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            {/* Vera */}
            <section>
                <h2>Interdimensional Frostfire Dragon</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.5%</td>
                            <td>3.0%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/samir">
                                    <a>Samir Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>3.3%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>60%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/pepper">
                                    <a>Pepper Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>9.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/magnetic-storm">
                                    <a>Magnetic Storm fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Devourer</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="row-light">
                            <td rowSpan={2}>Random SSR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>1.5%</td>
                            <td>3.0%</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/zero">
                                    <a>Zero Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-39</td>
                            <td>2.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>40-100</td>
                            <td>3.3%</td>
                            <td>5.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td rowSpan={2}>Random SR Weapon</td>
                        </tr>
                        <tr className="row-light">
                            <td>Any</td>
                            <td>60%</td>
                            <td>-</td>
                        </tr>

                        <tr className="row-dark">
                            <td rowSpan={3}>
                                <Link href="/matrices/echo">
                                    <a>Echo Matrix</a>
                                </Link>
                            </td>
                        </tr>
                        <tr className="row-dark">
                            <td>0-29</td>
                            <td>6.0%</td>
                            <td>-</td>
                        </tr>
                        <tr className="row-dark">
                            <td>30-100</td>
                            <td>9.9%</td>
                            <td>15.0%</td>
                        </tr>

                        <tr className="row-light">
                            <td>
                                <Link href="/relics/omnium-handcannon">
                                    <a>Omnium Handcannon fragments (8)</a>
                                </Link>
                            </td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Rudolph</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Random SSR Visor</td>
                            <td>Any</td>
                            <td>1%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Gold Spacetime Crystal (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Random SR Visor</td>
                            <td>Any</td>
                            <td>5%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Purple Spacetime Crystal (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Magma</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Random SSR Visor</td>
                            <td>Any</td>
                            <td>1%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Gold Spacetime Crystal (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Random SR Visor</td>
                            <td>Any</td>
                            <td>5%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Purple Spacetime Crystal (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Abyssal Hera</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Aberrant SSR Engine</td>
                            <td>Any</td>
                            <td>1%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Aberrant SSR Engine fragments (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Aberrant SR Engine</td>
                            <td>Any</td>
                            <td>5%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Aberrant SR Engine fragments (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Crystal Nucleus Hoof Colton</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Item</th>
                            <th>Wanderer Level</th>
                            <th>Drop Rate</th>
                            <th>Special Fall</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Random SSR Engine</td>
                            <td>Any</td>
                            <td>1%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>SSR Engine selection fragments (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>Random SR Engine</td>
                            <td>Any</td>
                            <td>5%</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>SR Engine selection fragments (?)</td>
                            <td>Any</td>
                            <td>100%</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
}