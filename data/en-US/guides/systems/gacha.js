import Link from "next/link";

export const gacha = {
    name: "Gacha",
    uri: "gacha",
    type: "systems",
    author: ["Zakum#3080"],
    text:
        <>
            <section>
                <p>There are two categories of <strong>Caches</strong> (banners): Weapon and Matrix.</p>

                <h3>Weapon Caches</h3>
                <p>Weapons can be obtained with Gold Nuclei, Black Nuclei, and Red Nuclei (Limited Cache).<br/>
                Gold and Black Nuclei can be obtained from exploration, and various events or shops.<br/>
                Red Nuclei can occasionally be acquired from events and exploration milestones.<br/>
                <strong className="yellow">Weapons come with their associated <Link href="/guides/systems/simulacra"><a>Simulacra</a></Link>.</strong>
                </p>

                <h3>Matrix Caches</h3>
                <p>Matrices can be obtained with Proof of Puchase, and Special Vouchers (Limited Cache).<br/>
                Proof of Purchase can be obtained from dungeons and various events or shops.<br/>
                Special Vouchers can occasionally be acquired from events and exploration milestones. </p>
            </section>

            <section>
                <h2>Gacha Rates</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Cache</th>
                            <th>SSR Chance</th>
                            <th>SR Chance</th>
                            <th>Pity</th>
                            <th>Pull Reward</th>
                            <th>Exchange Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Gold Nucleus</th>
                            <td>0.75%</td>
                            <td>1%</td>
                            <td>80</td>
                            <td>1 coin*</td>
                            <td>120</td>
                        </tr>
                        <tr>
                            <th>Black Nucleus</th>
                            <td>0.3%</td>
                            <td>3%</td>
                            <td>None</td>
                            <td>None</td>
                            <td></td>
                        </tr>
                        <tr>
                            <th>Matrix</th>
                            <td>1.7%</td>
                            <td>7.5%</td>
                            <td>40</td>
                            <td>1 chip</td>
                            <td>80</td>
                        </tr>
                    </tbody>
                </table>

                <h3>Major Points</h3>
                <ol>
                    <li>Pulling in batches of 10 guarantees that you will get an SR or SSR.</li>
                    <li>There is no soft pity in Tower of Fantasy.</li>
                    <li>Obtaining an SSR <strong>does not</strong> reset your pity counter.</li>
                </ol>
                <p>
                    Pulling on any cache (exlcuding Black Nucleus) will provide 1 currency towards exchanging for a weapon/matrix of your choice.
                </p>
                <p>
                    After you have enough copies of a <strong>weapon</strong> to max it out, subsequent copies will be converted into coins. An SSR weapon will convert into 10 coins, and an SR weapon will convert into 1 coin. This system does not exist for Matrices.
                </p>
                <p>
                    Weapons can be purchased at 120 coins, and Matrices can be purchased at 80 chips.
                </p>
            </section>

            <section>
                <h2>Limited Caches</h2>
                <p>
                    Limited Caches follow the same rates as the Gold Nucleus Cache and Matrix Cache.<br/>
                    However, each time you get an SSR, there is a <strong>50%</strong> chance that it will be the event character.
                </p>
                <p>They have separate pity counters from the standard Caches.</p>

                <h3>Major Points</h3>
                <ol>
                    <li>Pity does not reset between caches, so if you stopped at 79/80, it will resume from 79/80 on the next Limited Cache.</li>
                    <li>After the Cache period ends, any Limited Cache currency (weapon and matrix) will be converted into standard Cache currency.</li>
                </ol>
            </section>

        </>
}