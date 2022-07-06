import { Link } from 'react-router-dom';

export const housing = {
    name: "Housing",
    type: "systems",
    author: ["Pyrosu#6969"],
    text:
        <>
            <section>
                <h2>Getting Started</h2>
                <p>
                    Accept the quest by clicking the Present icon in the top right.<br />
                    <strong className="yellow">Collect 10 Developer Logs</strong>. This will unlock the Home Island option in the menu.
                </p>
                <img src={require('../../../images/guides/developerlogs.jpg')} alt="Developer Logs Map" />
                <blockquote>
                    To build on your Home Island, you will need 1170 Exploration Points on Artificial Island (innder region only).
                </blockquote>
                <p></p>
            </section>

            <section>
                <h2>Construction</h2>
                <p>
                    While on your Home Island, you can construct and upgrade buildings that generate materials over time. These materials are used for three things:
                    <ol>
                        <li>Upgrading buildings to generate more materials*</li>
                        <li>Currency in the housing shop (Limited Matrix pulls, Avatars, <Link to="/mounts/crimsonmeteor">Crimson Meteor</Link>..)</li>
                        <li>Crafting Matrices</li>
                    </ol>
                    <i>*The Development Center must be upgraded to raise the max level of other buildings.</i>
                </p>
            </section>

            <section>
                <h2>Material Drops</h2>

                <p>Materials also drop from creatures on your island, including animals, normal mobs, and weakened world bosses. The higher the status of the creature (regular / elite / boss), the more materials will drop from it.</p>
                <blockquote>
                    <strong>All creatures respawn at weekly reset.</strong> Different creatures will drop different materials, but world bosses drop a large amount of all resources at once.
                </blockquote>

                <h3>Recommended Route</h3>
                <img src={require('../../../images/guides/housing-map.jpg')} alt="Recommended route for farming mobs" />
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
                                <img src={require('../../../images/guides/HomeShell.png')} alt="Material Shell" />
                            </th>
                            <td>7~10 each</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src={require('../../../images/guides/HomePumpkin.png')} alt="Material Pumpkin" />
                                <img src={require('../../../images/guides/HomeOre.png')} alt="Material Ore" />
                            </th>
                            <td></td>
                            <td>1638~1744</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src={require('../../../images/guides/HomeFishBones.png')} alt="Material Fish Bones" />
                                <img src={require('../../../images/guides/HomeMeat.png')} alt="Material Meat" />
                            </th>
                            <td></td>
                            <td>1606~1674</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>
                                <img src={require('../../../images/guides/HomeRattan.png')} alt="Material Rattan" />
                                <img src={require('../../../images/guides/HomeTwigs.png')} alt="Material Twigs" />
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
                            <th>Materials per hour</th>
                            <th>Max materials (24 hr)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>4</td>
                            <td>96</td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>8</td>
                            <td>192</td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>12</td>
                            <td>288</td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td>15</td>
                            <td>360</td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td>17</td>
                            <td>408</td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td>19</td>
                            <td>456</td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td>21</td>
                            <td>504</td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td>23</td>
                            <td>552</td>
                        </tr>
                        <tr>
                            <th>9</th>
                            <td>25</td>
                            <td>600</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
};