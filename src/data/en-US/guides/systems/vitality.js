export const vitality = {
    name: "Vitality",
    uri: "vitality",
    type: "systems",
    author: ["Unconsidered#1568", "Zakum#3080"],
    text:
        <>
            <section>
                <p>
                    Vitality is consumed when claiming rewards for certain dungeons. You can <em>store up to 180 VIT</em>, and it recovers at a rate of 1 VIT/8 minutes (24 hours to recover from 0 to 180). <br/>
                    <abbr title="China Exclusive" /> Max VIT is now 360, and it recovers at the same rate (48 hours from 0 to 360).
                </p>

                <h2>Vitality Dungeons</h2>
                <p>All dungeons consume <strong className="yellow">30 VIT per run</strong>, while Joint Operation consumes <strong className="yellow">30 VIT <i>per chest</i></strong> (3 chests + free bonus chest).</p>
                <p>All Vitality dungeons will give you Blue/Purple/Gold Energy Dust that you can use to purchase useful things.</p>

                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Rewards</th>
                            <th>Description <em>(Rewards)</em></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Joint Operation</th>
                            <td>Armor, Matrices</td>
                            <td>1-4 player dungeon that consists of mobs and two bosses. Clear each section to unlock a chest.</td>
                            
                        </tr>
                        <tr>
                            <th>Dimensional Trials</th>
                            <td>Wep Materials, Wep EXP, Matrix EXP</td>
                            <td>1-4 player dungeon similar to, but weaker than, Joint Operation instances.</td>
                        </tr>
                        <tr>
                            <th>Interstellar Exploration</th>
                            <td>Wep Materials</td>
                            <td>
                                1-4 player instance where you fight 3 waves of monsters. Entry gates are found in the overworld.<br/>
                                <em>Very low chance of spawning a boss that rewards a Gold Nucleus at the end.</em>
                            </td>
                        </tr>
                        <tr>
                            <th>Omnium Beacon</th>
                            <td>Wep Materials</td>
                            <td>Place on the ground and after X amount of time rewards will arrive in your mail. There is a chance of getting a card which you can use to locate another player's beacon and earn some more rewards.</td>
                        </tr>
                        <tr>
                            <th>Spacetime Domain</th>
                            <td>Gold</td>
                            <td>Solo instance of a random Ruin every day.</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Joint Operation Schedule</h2>
                <img src="/images/guides/JOINTOP.jpg" alt="Joint Operation Schedule" />
            </section>

        </>
};