import Link from "next/link"

export const beginnerWeapons = {
    name: "Beginner Weapon Guide",
    uri: "beginner-weapon-guide",
    date: "8 July 2022",
    type: "general",
    author: ["Stitch#8913"],
    text:
        <>
            <section className="stitch-wep-guide">
                <blockquote style={{ borderColor: "#e72e37" }}>
                    Note: This guide has not been updated for <Link href="/banners">characters after Nemesis</Link>.
                </blockquote>
                <div>
                    <iframe src="https://www.youtube.com/embed/cmlWNfVmmYg" allow="fullscreen" modestbranding />
                </div>
                <h2>Weapon Types</h2>
                <p>
                    There are 3 different weapon types in ToF: <strong className="yellow">DPS</strong>, <strong className="yellow">Defense</strong>, and <strong className="yellow">Support</strong>.
                </p>
                <div className="flex" style={{ gap: "0.5rem" }} >
                    <img src="/static/images/dps.webp" alt="DPS type" />
                    <img src="/static/images/defense.webp" alt="Defense type" />
                    <img src="/static/images/support.webp" alt="Support type" />
                </div>
                <p>
                    You can equip 3 weapons at a time, and based on the combination of your weapon types, you will receive a <strong className="yellow">Resonance</strong>.
                </p>
                <table className="wep-types">
                    <thead>
                        <tr>
                            <th>Resonance</th>
                            <th>Requirement</th>
                            <th>Effect</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th className="yellow">Balanced</th>
                            <td>
                                <div className="flex" style={{ gap: "0.5rem" }} >
                                    <img src="/static/images/dps.webp" alt="DPS type" />
                                    <img src="/static/images/defense.webp" alt="Defense type" />
                                    <img src="/static/images/support.webp" alt="Support type" />
                                </div>
                            </td>
                            <td>
                                <p>
                                    <h4>Solo Play</h4>
                                    5% damage increase, 5% received damage reduction, 20% shatter and healing increase
                                </p>
                                <p>
                                    <h4>Team Play</h4>
                                    Additional 20% damage increase and 20% received damage reduction
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="yellow">Brute Force</th>
                            <td>
                                <div className="flex" style={{ gap: "0.5rem" }} >
                                    <img src="/static/images/dps.webp" alt="DPS type" />
                                    <img src="/static/images/dps.webp" alt="DPS type" />
                                </div>
                            </td>
                            <td>
                                <p>
                                    <h4>Solo Play</h4>
                                    10% damage increase
                                </p>
                                <p>
                                    <h4>Team Play</h4>
                                    Additional 40% damage increase
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="yellow">Perseverance</th>
                            <td>
                                <div className="flex" style={{ gap: "0.5rem" }} >
                                    <img src="/static/images/defense.webp" alt="Defense type" />
                                    <img src="/static/images/defense.webp" alt="Defense type" />
                                </div>
                            </td>
                            <td>
                                <p>
                                    <h4>Solo Play</h4>
                                    25% received damage reduction, 60% shatter increase, 800% enemy aggro increase
                                </p>
                                <p>
                                    <h4>Team Play</h4>
                                    Additional 20% received damage reduction
                                </p>
                            </td>
                        </tr>
                        <tr>
                            <th className="yellow">Blessing</th>
                            <td>
                                <div className="flex" style={{ gap: "0.5rem" }} >
                                    <img src="/static/images/support.webp" alt="Support type" />
                                    <img src="/static/images/support.webp" alt="Support type" />
                                </div>
                            </td>
                            <td>
                                <p>
                                    <h4>Solo Play</h4>
                                    100% healing increase
                                </p>
                                <p>
                                    <h4>Team Play</h4>
                                    Additional 100% healing increase
                                </p>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="stitch-wep-guide">
                <h2>All Weapon Descriptions</h2>
                <p>
                    Let's take a closer look at each character's weapon.
                </p>
                <details>
                    <summary>Character List</summary>
                    <table className="wep-descriptions">
                        <tbody>
                            <tr>
                                <th>
                                    <Link href="/simulacra/baiyuekui">
                                        <a>
                                            <img src="/static/images/avatar/baiyuekui.webp" alt="Baiyuekui" />
                                            Baiyuekui
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is a lightning element Tang Dao, her roles would be shield break and dps. This is good to have in your build so u can break shields, and interrupt boss skills, as well as having iframes for safety. I would at minimum use her at 1★ for the dmg boost, preferably at least 3★ for the shield break dmg. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/marc">
                                        <a>
                                            <img src="/static/images/avatar/marc.webp" alt="Marc" />
                                            Marc
                                        </a>
                                    </Link>
                                </th>
                                <td>His weapon is a physical Mech suit with a swap skill to enter his robot. He has defensive shields, offensive buffs, and great energy recharge. This helps to cast more switch skills while drastically increasing survivability and boosting offensive capabilities. At minimum I would use him at 1★ for the survivability, however 3★ optimally for the 35% dmg boost. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/zero">
                                        <a>
                                        <img src="/static/images/avatar/zero.webp" alt="Zero" />
                                        Zero
                                        </a>
                                    </Link>
                                </th>
                                <td>His weapon is a fire cube. He provides heals, offensive buffs, and shields, as well as a decent recharge rate. This helps increase survivability while also boosting offensive capabilities. He is also the only non macro option for afk farming <s>gotta afk farm those mount parts and honey for foods</s>. I would at minimum use him at 1★ for the heals. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/king">
                                        <a>
                                        <img src="/static/images/avatar/king.webp" alt="KING" />
                                        KING
                                        </a>
                                    </Link>
                                </th>
                                <td>His weapon is a fire scythe. His roles are shield break. While he may primarily only do one thing, its quite important. At 1★ when breaking he provides a strong dot(damage over time) effect. This enables you to break shields easily, get the DoT, and swap to a stronger dps weapon. I would at minimum use him at 1★ for the break DoT. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/shiro">
                                        <a>
                                        <img src="/static/images/avatar/shiro.webp" alt="Shiro" />
                                        Shiro
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapons are physical chakrams. She also fills the shield break role. At 3★ she provides a full skill cd reset. This enables crazy combos and has great utility but decent investment as well. I would at minimum use her at 3★ for the free skill cd reset. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/coco-ritter">
                                        <a>
                                        <img src="/static/images/avatar/cocoritter.webp" alt="Coco Ritter" />
                                        Coco Ritter
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is an ice staff. Her role is healing, buff support, and recharge. This helps increase survivability as well as boost offensive capabilities. As a wise man once said, dead dps is no dps. At minimum I would use her at 1★ for the hp and energy regen over time. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/meryl">
                                        <a>
                                        <img src="/static/images/avatar/meryl.webp" alt="Meryl" />
                                        Meryl
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is an ice claymore. Her role is shield break, cc immune, shields. This enables her to quickly take down shields, as well as keep you alive without being thd-flexn around. I would at minimum use her at 1★ for the increased shield break power, as well as the self sustain. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/crow">
                                        <a>
                                        <img src="/static/images/avatar/crow.webp" alt="Crow" />
                                        Crow
                                        </a>
                                    </Link>
                                </th>
                                <td>His weapon is lightning dual blades. His role is dps, offensive buff, cc immune. This enables him to provide high crit rate as well as boost lightning dmg without being thrown around while also doing significant dmg himself. At minimum I would use him at 3★ for the significant dmg boost it provides(30% when target below 60% hp). </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/cobalt-b">
                                        <a>
                                        <img src="/static/images/avatar/cobalt-b.webp" alt="Cobalt-B" />
                                        Cobalt-B
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is a fire shotgun. Her role is dps. This enables her to shred down bosses and handle the fight before things get messy. I would at minimum use her at 6★ because without it, her skill cd is far too long to be worth using. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/claudia">
                                        <a>
                                        <img src="/static/images/avatar/claudia.webp" alt="Claudia" />
                                        Claudia
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is physical sword(katana). Her role is aerial dps and offensive buffs. This enables her to buff other weapons, and increase skill dmg at 5★ while doing decent dmg herself. I would at minimum use her at 1★ for the 24% dmg buff. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/samir">
                                        <a>
                                        <img src="/static/images/avatar/samir.webp" alt="Samir" />
                                        Samir
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is electric dual guns. Her role is aerial dps, decent recharge. She is special in that she attacks in the air but above enemies keeping you relatively safe, while doing massive dmg. At minimum I would use her at 0★, not that her stars aren't good, but she is simply that good at base. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/huma">
                                        <a>
                                        <img src="/static/images/avatar/huma.webp" alt="Huma" />
                                        Huma
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is fire shield. Her role is debuff, stun, dmg reduction. This enables her to neutralize enemies effectively, while providing decent recharge. At minimum I would use her at 0★ because her dupes while useful, aren't really game breaking in regards to her role. </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/nemesis">
                                        <a>
                                        <img src="/static/images/avatar/nemesis.webp" alt="Nemesis" />
                                        Nemesis
                                        </a>
                                    </Link>
                                </th>
                                <td>Her weapon is lightning railguns. Her role is lightning support, dot, heals. This enables her to boost lightning dmg significantly, whole also healing and dealing lightning dmg while using another weapon. I would use her at 1★ minimum for the heals, and extra sustain. 3★ however adds DoT. </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
            </section>

            <section>
                <h2>Example DPS Teams</h2>
                <h3 className="turquoise">Skill Based: Crow, Tsubasa, Marc</h3>
                <p>
                    The concept of this build is high energy recharge with Marc and Tsubasa, enabling me to spam Crow's discharge skill. Tsubasa also buffs my damage. Marc boosts survivability via his shields. In summary, this is balanced between offensive buffs, survivability and raw damage. Crow is kind of a special case as his plunge attack is extremely powerful.
                </p>
                <a href="https://www.bilibili.com/video/BV1NL411T7Np">DPS Showcase 1</a> &nbsp;
                <a href="https://www.bilibili.com/video/BV1K44y1n7N7">DPS Showcase 2</a>
                <h3 className="turquoise">Raw Power: Baiyuekui, Tsubasa, Claudia</h3>
                <p>
                    While this build may lack shields, it has dmg, dmg, and more dmg. Bai handles the heavy lifting, shield break as well as having iframes during her active skill. Tsubasa and Claudia both are used to charge energy and buff damage. While it may not be as forgiving as builds with some survivability, it makes up for it with dmg output.
                </p>
                <h3 className="turquoise">A Balanced Trio: Marc, Nemesis, Samir</h3>
                <p>
                    While Marc needs dupes for his damage buff and more shields, it truly is worth the cost. Nemesis provides DoT, Heals, and energy, while Marc basically ensures u don't die with his shields. Both of them provide powerful buffs. Samir in this case provides energy as well as the big dmg, attacking safely from the air.
                </p>
                <h3 className="turquoise">Best F2P Team: Samir, Tsubasa, King</h3>
                <p>
                    King offers shield break, as well as DoT off his shield break. King also happens to be one of two options for DPS-type shield break, the other being Shiro. Tsubasa gives a 40% dmg buff as well as charges energy for switch skills. Samir carries dmg while safely attacking from the air. It also helps that this is a tri-elemental build so there is always the option of using a non-resisted weapon.
                </p>
                <h3 className="turquoise">Overall Best Team: 6★ Baiyuekui, Marc, Nemesis</h3>
                <p>
                    Bai breaks shields while having a very strong dodge attack and the highest damage in game as of now. Marc grants a 35% damage buff as well as shields making you nearly invincible. Nemesis provides a strong 50% lightning damage buff, as well as a powerful DoT effect often healing more than pure support healers.
                </p>
            </section>

            <section>
                <h2>Example Tank Teams</h2>
                <p>
                    Much of the utility each weapon can provide highly depends on the amount of dupes you can get on the weapon. As such it's important to know what you want to work with. Personally, this ended up with me giving Tsubasa a lot of value because she provides a strong damage buff, as well as energy to charge switch skills more often.
                </p>
                <blockquote>
                    DPS isn't all that matters; ded DPS is no DPS. <br />
                    Some content hits too hard and you would benefit from having a tank.
                </blockquote>
                <h3 className="turquoise">The King of Tanks: Marc</h3>
                <p>
                    Marc enables you to use the Brute Force Resonance while still having insane survivability. In this game, tanks have an aggro buff and receive reduced damage, but if a DPS can maintain aggro through their damage while avoiding getting hit, <strong className="yellow">wouldn't a good DPS just outperform a tank?</strong>
                </p>
                <p>
                    Yes. However that doesn't mean tanks are useless. In specific end game content such as Frontier Clash (Hard) the boost tanks get in shatter is what you need to prevent annoying mechanics such as enemies taking flight. We all know how annoying a boss that jumps across the map can be, especially when you have long cooldowns.
                </p>
                <h3 className="turquoise">Massive Shield Break: Marc, Meryl, Tsubasa</h3>
                <p>
                    Meryl has the best breaking power, as well as CC immunity. Her switch skill can also trap enemies, thought it'll trap your allies as well… She also does decent damage with her spin attack. Marc provides shield, energy, a damage buff, as well as cc immunity. Tsubasa provides ranged damage, a damage buff, DoT arrow rain, and energy recharge to spam more switch skills.
                </p>
                <a href="https://youtu.be/wEPNMDxLkDQ">Tank Showcase</a>
            </section>

            <section>
                <h2>Example Support Teams</h2>
                <p>
                    Healer builds will typically want to run shield break to prevent boss ultimate abilities, but they can run full support as well. As there are only 4 support weapons a good build would be <strong className="yellow">2 from Zero/Nemesis/Coco, and a Shiro/Meryl</strong>.
                </p>
                <p>
                    Zero provides shields as well has offensive buffs and heals to the party. He has a party wide 3 sec iframe, and charges switch skills too.
                </p>
                <p>
                    Nemesis has DoT from 3★ and HoT from 1★, while Coco has offensive buffs and cc immune from 3★, and a strong burst heal. At high stars Nemesis even offers noticeable damage which could be a good option for healer mains.
                </p>
                <p>
                    Meryl has the strongest breaking power while Shiro active skill boosts shield break efficiency and damage for party. She also has a skill cd reset when she breaks enemies shields from 3★.
                </p>
                <a href="https://www.bilibili.com/video/BV1Dr4y1D7jk">Support Showcase</a>
            </section>
        </>
}