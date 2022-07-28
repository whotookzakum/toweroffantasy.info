import Link from "next/link";

export const dailies = {
    name: "Dailies & Weeklies",
    uri: "dailies-and-weeklies",
    date: "6 July 2022",
    type: "systems",
    author: ["Unconsidered#1568", "Zakum#3080"],
    text:
        <>
            <section>
                <h2 className="yellow">Daily</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Dailies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Daily Bounty</th>
                            <td>Daily quests that reward Gold/Black Nuclei, Vera gacha currency, and EXP.</td>
                        </tr>
                        <tr>
                            <th>Vitality</th>
                            <td>See <Link href="/guides/vitality"><a>Vitality</a></Link>.</td>
                        </tr>
                        <tr>
                            <th>Crew Donation</th>
                            <td>Donate some ingredients so the crew can reach weekly reward payouts.</td>
                        </tr>
                        <tr>
                            <th>Ability Training</th>
                            <td>2 minigames that award Ability Points—used to purchase matrix EXP chips and simulacrum gifts.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="yellow">Semi-Daily</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Dailies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Void Rifts</th>
                            <td>
                                Farm mobs that drop buffs. Exchange buffs with teammates. Obtain 3 keys and fight boss. Rewards Matrices and Matrix pulls.<br />
                                <strong>+1 run every Mon/Wed/Fri</strong>.
                            </td>
                        </tr>
                        <tr>
                            <th>Frontier Clash</th>
                            <td>
                                Clear 15 waves of enemies⁠—every 3rd wave is a boss. On Hard mode, 5 waves and every wave is a boss. For every boss cleared, gain 1 reward box that contains armor.<br />
                                <strong>+1 run every Tue/Thu/Sat</strong>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="yellow">Weekly</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Dailies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Weekly Activity</th>
                            <td>Up to 900 weekly activity from doing content. Rewards Gold lockbox keys, battle pass EXP, and Dark Crystals.</td>
                        </tr>
                        <tr>
                            <th>Dream Machines</th>
                            <td>Up to 7 minigames that pop up when defeating enemies or opening boxes. Rewards include Gold/Black Nuclei, Armor Modules, Relic Fragments, and more.</td>
                        </tr>
                        <tr>
                            <th>Bygone Phantasm</th>
                            <td>
                                600+ floors of progressively stronger enemies, with rewards such as Energy Dust, Armor Modules, and Dark Crystals. <br />
                                <strong>Resets on Monday</strong>.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2 className="yellow">Seasonal</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Content</th>
                            <th>Dailies</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Apex League</th>
                            <td>PvP Arena open for 12 hours a day. Pays out rewards based on rank at the end of season. Can be done every day for Weekly Activity Points.</td>
                        </tr>
                        <tr>
                            <th>Break Fate</th>
                            <td>Battle Royale game mode. Not much is known at this point, but it should pay out end of season rewards.</td>
                        </tr>
                    </tbody>
                </table>
            </section>
        </>
};