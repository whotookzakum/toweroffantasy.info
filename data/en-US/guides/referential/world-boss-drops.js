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
                <h2>Aesperia</h2>

            </section>
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
                        <td rowSpan={2}>Random SSR Weapon</td>
                    </tr>
                    <tr>
                        <td>Any</td>
                        <td>1.3%</td>
                        <td>2.0%</td>
                    </tr>

                    <tr className="row-light">
                        <td rowSpan={3}>
                            <div className="item-frame rarity-5" style={{width: "148px", transform: "scale(0.75)"}}>
                                <img style={{objectFit: "none"}} src="/static/images/matrices/king.webp" alt="KING Matrix" />
                            </div>
                            <Link href="/matrices/king">
                                <a>
                                <img style={{objectFit: "none"}} src="/static/images/matrices/king.webp" alt="KING Matrix" />
                                    KING
                                </a>
                            </Link>
                        </td>
                    </tr>
                    <tr className="row-light">
                        <td>0-39</td>
                        <td>2.0%</td>
                        <td>—</td>
                    </tr>
                    <tr className="row-light">
                        <td>40-100</td>
                        <td>2.6%</td>
                        <td>5.0%</td>
                    </tr>

                    <tr>
                        <td rowSpan={2}>Random SR Weapon</td>
                    </tr>
                    <tr>
                        <td>Any</td>
                        <td>40%</td>
                        <td>—</td>
                    </tr>

                    <tr>
                        <td rowSpan={3}>
                            <Link href="/matrices/robarg">
                                <a>
                                    {/* <img src="/static/images/matrices/robarg.webp" alt="Robarg Matrix" width={128} /> */}
                                    Robarg
                                </a>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td>0-29</td>
                        <td>6.0%</td>
                        <td>—</td>
                    </tr>
                    <tr>
                        <td>30-100</td>
                        <td>7.9%</td>
                        <td>15.0%</td>
                    </tr>
                </tbody>
            </table>
        </>
}