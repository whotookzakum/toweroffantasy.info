import Link from "next/link";

export const artificialIslandConstruction = {
    name: "Artificial Island Construction",
    uri: "artificial-island-construction",
    date: "26 September 2022",
    description: "All about the Construction system on Artificial Island.",
    type: "systems",
    author: ["Pyrosu#6969", "Zakum#3080"],
    text:
        <>
            <section>
                <h2>Getting Started</h2>
                <p>Unlock Artificial Island by reaching level 50 and accepting the quest at Banges Port.</p>
                <blockquote>
                    To build on the Artificial Island, you will need to be level 60 OR have 50% map completion on Artificial Island (inner region only).
                </blockquote>
            </section>

            <section>
                <h2>Construction</h2>
                <p>
                    While on your Home Island, you can construct and upgrade buildings that generate materials over time. These materials are used for three things:
                </p>
                <ol>
                    <li>Upgrading buildings to generate more materials*</li>
                    <li>Currency in the housing shop (Limited Matrix pulls, Avatars, <Link href="/mounts/crimson-meteor"><a>Crimson Meteor</a></Link>..)</li>
                    <li>Crafting Matrices</li>
                </ol>
                <i>*The Development Center must be upgraded to raise the max level of other buildings.</i>
            </section>

            <section>
                <h2>Material Drops</h2>

                <p>Materials also drop from creatures on your island, including animals, normal mobs, and weakened world bosses. The higher the status of the creature (regular / elite / boss), the more materials will drop from it.</p>
                <blockquote>
                    <strong>Common enemies respawn every 3 days and bosses every 7 days.</strong> <strong className="yellow">The timer starts when enemy is defeated.</strong>
                </blockquote>
                <blockquote style={{ borderColor: "#e72e37" }}>
                    <abbr title="China Exclusive" /> <strong>All creatures respawn at weekly reset.</strong>
                </blockquote>
                <p>
                    Different creatures will drop different materials, but world bosses drop a large amount of all resources at once.
                </p>
                <h3>Recommended Route</h3>
                <img src="/static/images/guides/housing-map.webp" alt="Recommended route for farming mobs" />
                <br />

                <h3>Total Resources</h3>
                <table className="table-housing-mats">
                    <thead>
                        <tr>
                            <th>Material</th>
                            <th>Animals</th>
                            <th>Mobs</th>
                            <th>Bosses</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>
                                <img src="/static/images/guides/HomeShell.webp" alt="Material Shell" />
                            </th>
                            <td>7~10 each</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src="/static/images/guides/HomePumpkin.webp" alt="Material Pumpkin" />
                                <img src="/static/images/guides/HomeOre.webp" alt="Material Ore" />
                            </th>
                            <td></td>
                            <td>1638~1744</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src="/static/images/guides/HomeFishBones.webp" alt="Material Fish Bones" />
                                <img src="/static/images/guides/HomeMeat.webp" alt="Material Meat" />
                            </th>
                            <td></td>
                            <td>1606~1674</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src="/static/images/guides/HomeRattan.webp" alt="Material Rattan" />
                                <img src="/static/images/guides/HomeTwigs.webp" alt="Material Twigs" />
                            </th>
                            <td></td>
                            <td></td>
                            <td>284~288</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Building Levels</h2>
                <p>Resources will accumulate for 24 hours, after which they must be collected.</p>
                <table>
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>Mats/hour</th>
                            <th>Max mats</th>
                            <th>Building cost</th>
                            <th>Build time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Level 1 */}
                        <tr>
                            <th>1</th>
                            <td>4</td>
                            <td>96</td>
                            <td>
                                Base: 0 <br />
                                Buildings: 100
                            </td>
                            <td>1m</td>
                        </tr>
                        {/* Level 2 */}
                        <tr>
                            <th>2</th>
                            <td>8</td>
                            <td>192</td>
                            <td>
                                Base: 100, 10 <br />
                                Buildings: 300, 13
                            </td>
                            <td>5m</td>
                        </tr>
                        {/* Level 3 */}
                        <tr>
                            <th>3</th>
                            <td>12</td>
                            <td>288</td>
                            <td>
                                Base: 200, 15 <br />
                                Buildings: 500, 15
                            </td>
                            <td>30m</td>
                        </tr>
                        {/* Level 4 */}
                        <tr>
                            <th>4</th>
                            <td>15</td>
                            <td>360</td>
                            <td>
                                Base: 300, 20 <br />
                                Buildings: 700, 17
                            </td>
                            <td>1h</td>
                        </tr>
                        {/* Level 5 */}
                        <tr>
                            <th>5</th>
                            <td>17</td>
                            <td>408</td>
                            <td>
                                Base: 500, 25 <br />
                                Buildings: 1000, 20
                            </td>
                            <td>2h</td>
                        </tr>
                        {/* Level 6 */}
                        <tr>
                            <th>6</th>
                            <td>19</td>
                            <td>456</td>
                            <td>
                                Base: 800, 30 <br />
                                Buildings: 1500, 25
                            </td>
                            <td>4h</td>
                        </tr>
                        {/* Level 7 */}
                        <tr>
                            <th>7</th>
                            <td>21</td>
                            <td>504</td>
                            <td>
                                Base: 1200, 30 <br />
                                Buildings: 2000, 30
                            </td>
                            <td>4h</td>
                        </tr>
                        {/* Level 8 */}
                        <tr>
                            <th>8</th>
                            <td>23</td>
                            <td>552</td>
                            <td>
                                Base: 1600, 40 <br />
                                Buildings: 2500, 35
                            </td>
                            <td>4h</td>
                        </tr>
                        {/* Level 9 */}
                        <tr>
                            <th>9</th>
                            <td>25</td>
                            <td>600</td>
                            <td>
                                Base: 2000, 40 <br />
                                Buildings: 3000, 40
                            </td>
                            <td>4h</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
};
