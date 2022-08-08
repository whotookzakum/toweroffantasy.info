import Link from 'next/link';

export const dpsLoadouts = {
    name: "DPS Weapon Loadouts",
    uri: "dps-weapon-loadouts",
    date: "5 May 2022",
    type: "strategy",
    author: ["Cytus#4151"],
    text:
        <>
            <section>
                There are 3 main roles for DPS weapons: <strong className="yellow">Shield Breaker, Main DPS, and Support DPS</strong>.
                <blockquote style={{ borderColor: "#e72e37" }}>
                    Note: This guide has not been updated for <Link href="/banners">characters after Frigg</Link>.
                </blockquote>
            </section>
            <section className="dps-loadouts">
                <h2>Shield Breaker</h2>
                <p>
                    Deal the highest damage to shields. Necessary as most bosses and minibosses have shields that significantly reduce damage taken. Bosses will also use powerful attacks if their shield is not broken in time. These weapons tend to unlock a crucial shield break effect at 1★ or 3★.
                </p>
                <details>
                    <summary>Recommended Shield Breakers</summary>
                    <table>
                        <thead>
                            <tr>
                                <th>Weapon</th>
                                <th>Strengths &amp; Weaknesses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <Link href="/simulacra/baiyuekui">
                                        <a>
                                            <img src="/static/images/wep/baiyuekui.webp" alt="Baiyuekui's Weapon" />
                                            <h4>Baiyuekui</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Insanely high damage with skills and dash attacks, instant burst on shieldbreak (3★)</p>
                                    <p className="pro">i-frames on active skill</p>
                                    <p className="pro">Can be paired with 2 support weapons</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/ruby">
                                        <a>
                                            <img src="/static/images/wep/ruby.webp" alt="Ruby's Weapon" />
                                            <h4>Ruby</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Very high damage numbers, can be used as Main DPS</p>
                                    <p className="pro">Detonates burn effects, synergize with fire weapons</p>
                                    <p className="pro">Can permastun elite mobs and be effective at long range</p>
                                    <p className="con">Not as efficient as other shieldbreakers til 5★</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/king">
                                        <a>
                                            <img src="/static/images/wep/king.webp" alt="KING's Weapon" />
                                            <h4>KING</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">High DoT on shieldbreak (1★)</p>
                                    <p className="pro">Area burst with skills</p>
                                    <p className="con">Easily interrupted when casting and basic attacking</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/meryl">
                                        <a>
                                            <img src="/static/images/wep/meryl.webp" alt="Meryl's Weapon" />
                                            <h4>Meryl</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Highest shieldbreak efficiency, self-heal on shieldbreak (1★)</p>
                                    <p className="pro">Immune to interrupts</p>
                                    <p className="con">No shieldbreak damage</p>
                                    <p className="con">Clunky switch skill</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/shiro">
                                        <a>
                                            <img src="/static/images/wep/shiro.webp" alt="Shiro's Weapon" />
                                            <h4>Shiro</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">High burst with active skill + 3 dash attacks</p>
                                    <p className="pro">3★ resets CDs on shieldbreak, benefits other weapons</p>
                                    <p className="con">Skill has small range, useless if enemies are mobile</p>
                                    <p className="con">Switch skill is terrible</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/huma">
                                        <a>
                                            <img src="/static/images/wep/huma.webp" alt="Huma's Weapon" />
                                            <h4>Huma</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Decent shieldbreaking efficiency</p>
                                    <p className="pro">Relatively high energy charge</p>
                                    <p className="con">No shieldbreak effect</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
            </section>

            <section className="dps-loadouts">
                <h2>Main DPS</h2>
                <p>
                    Highest standing DPS to unshielded targets; the weapon you want to be on most of the time. These weapons tend to have low damage to shields and average charge rate.
                </p>
                <details>
                    <summary>Recommended Main DPS</summary>
                    <table>
                        <thead>
                            <tr>
                                <th>Weapon</th>
                                <th>Strengths &amp; Weaknesses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <Link href="/simulacra/cobalt-b">
                                        <a>
                                            <img src="/static/images/wep/cobalt-b.webp" alt="Cobalt-B's Weapon" />
                                            <h4>Cobalt-B</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Applies multiple high damage burn effects</p>
                                    <p className="pro">Very high damage active skill</p>
                                    <p className="con">Reliant on 2 set Cobalt chips to apply 3rd burn</p>
                                    <p className="con">Reliant on 6★ to reduce skill cooldown</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/samir">
                                        <a>
                                            <img src="/static/images/wep/samir.webp" alt="Samir's Weapon" />
                                            <h4>Samir</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Fast hits, good DPS and charge rate</p>
                                    <p className="pro">Safe AoE air attack</p>
                                    <p className="con">Final hit of ground basic attack is terrible</p>
                                    <p className="con">Bad long range attack, ineffective anti-air</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/crow">
                                        <a>
                                            <img src="/static/images/wep/crow.webp" alt="Crow's Weapon" />
                                            <h4>Crow</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Backstabs, execute, built-in crit buffs</p>
                                    <p className="pro">Air attack has very high DPS potential</p>
                                    <p className="con">Very difficult to use, requires 2pc Claudia chips</p>
                                    <p className="con">Weak at low ★s</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/frigg">
                                        <a>
                                            <img src="/static/images/wep/frigg.webp" alt="Frigg's Weapon" />
                                            <h4>Frigg</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Ice field allows free dash attacks and buffs other ice weapons</p>
                                    <p className="pro">Large AOE attacks</p>
                                    <p className="pro">i-frames on active skill</p>
                                    <p className="con">Slow attacks, reliant on staying in ice field</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/tsubasa">
                                        <a>
                                            <img src="/static/images/wep/tsubasa.webp" alt="Tsubasa's Weapon" />
                                            <h4>Tsubasa</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">High charge rate</p>
                                    <p className="pro">Good dash attack and arrow rain damage</p>
                                    <p className="con">Basic attacks are weak and blocked by other players</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/ene">
                                        <a>
                                            <img src="/static/images/wep/ene.webp" alt="Ene's Weapon" />
                                            <h4>Ene</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Good DPS for SR</p>
                                    <p className="pro">Provides good CC and CC immunity</p>
                                    <p className="pro">Active skill allows dash attack spam</p>
                                    <p className="con">Slow attacks</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
            </section>

            <section className="dps-loadouts">
                <h2>Support DPS</h2>
                <p>
                    Increase your overall DPS through damage buffs and other means. These weapons are best used as "quickswap" weapon, by rotating frequently to throw out their burst and refresh their buffs.
                </p>
                <details>
                    <summary>Recommended Support DPS</summary>
                    <table>
                        <thead>
                            <tr>
                                <th>Weapon</th>
                                <th>Strengths &amp; Weaknesses</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>
                                    <Link href="/simulacra/marc">
                                        <a>
                                            <img src="/static/images/wep/marc.webp" alt="Marc's Weapon" />
                                            <h4>Marc</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">35% all damage buff (3★) &amp; CC immunity buff (6★)</p>
                                    <p className="pro">High charge rate</p>
                                    <p className="con">No useful buffs before 3★, takes damage for allies</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/nemesis">
                                        <a>
                                            <img src="/static/images/wep/nemesis.webp" alt="Nemesis's Weapon" />
                                            <h4>Nemesis</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">20%/40%(5★)/50%(6★) electric attack buff</p>
                                    <p className="pro">Heals while doing good passive dps (3★+)</p>
                                    <p className="con">Only supports electric weapons</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/tsubasa">
                                        <a>
                                            <img src="/static/images/wep/tsubasa.webp" alt="Tsubasa's Weapon" />
                                            <h4>Tsubasa</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Highest charge rate against grouped enemies</p>
                                    <p className="pro">24% (1★)/40% (6★) all damage buff</p>
                                    <p className="con">Reliant on dash attacks to apply buff until 6★</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/claudia">
                                        <a>
                                            <img src="/static/images/wep/claudia.webp" alt="Claudia's Weapon" />
                                            <h4>Claudia</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">24% all damage buff (1★), 10% (3★)/20% (6★) phys damage increase, 20% skill damage buff (5★)</p>
                                    <p className="pro">High charge rate</p>
                                    <p className="con">Vulnerable during skill</p>
                                    <p className="con">No main physical DPS to support</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/shiro">
                                        <a>
                                            <img src="/static/images/wep/shiro.webp" alt="Shiro's Weapon" />
                                            <h4>Shiro</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">1★ greatly increases team burst damage and shieldbreak during active skill</p>
                                    <p className="pro">3★ resets cooldowns on shieldbreak, benefitting other weapons</p>
                                    <p className="con">Reliant on active skill</p>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    <Link href="/simulacra/bai-ling">
                                        <a>
                                            <img src="/static/images/wep/bailing.webp" alt="Bai Ling's Weapon" />
                                            <h4>Bai Ling</h4>
                                        </a>
                                    </Link>
                                </th>
                                <td>
                                    <p className="pro">Applies wounded debuff on dash attacks (increase all damage to target by 20%)</p>
                                    <p className="pro">Useful in group raid if you don't have good DPS options yourself</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </details>
            </section>

            <section className="dps-loadouts">
                <h2>Current Strongest Teams</h2>
                <details>
                    <summary>With 6★ and maxed matrices</summary>
                    <div className="details-content">
                        <div className="flex">
                            <Link href="/simulacra/baiyuekui">
                                <a>
                                    <img src="/static/images/wep/baiyuekui.webp" alt="Baiyuekui's Weapon" />
                                    <h4>Baiyuekui</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/marc">
                                <a>
                                    <img src="/static/images/wep/marc.webp" alt="Marc's Weapon" />
                                    <h4>Marc</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/nemesis">
                                <a>
                                    <img src="/static/images/wep/nemesis.webp" alt="Nemesis's Weapon" />
                                    <h4>Nemesis</h4>
                                </a>
                            </Link>
                        </div>

                        <div className="flex">
                            <Link href="/simulacra/baiyuekui">
                                <a>
                                    <img src="/static/images/wep/baiyuekui.webp" alt="Baiyuekui's Weapon" />
                                    <h4>Baiyuekui</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/claudia">
                                <a>
                                    <img src="/static/images/wep/claudia.webp" alt="Claudia's Weapon" />
                                    <h4>Claudia</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/nemesis">
                                <a>
                                    <img src="/static/images/wep/nemesis.webp" alt="Nemesis's Weapon" />
                                    <h4>Nemesis</h4>
                                </a>
                            </Link>
                        </div>

                        <div className="flex">
                            <Link href="/simulacra/ruby">
                                <a>
                                    <img src="/static/images/wep/ruby.webp" alt="Ruby's Weapon" />
                                    <h4>Ruby</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/cobalt-b">
                                <a>
                                    <img src="/static/images/wep/cobalt-b.webp" alt="Cobalt-B's Weapon" />
                                    <h4>Cobalt-B</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/marc">
                                <a>
                                    <img src="/static/images/wep/marc.webp" alt="Marc's Weapon" />
                                    <h4>Marc</h4>
                                </a>
                            </Link>
                        </div>

                    </div>
                </details>

                <details>
                    <summary>Without Limited Weapons</summary>
                    <div className="details-content">
                        <div className="flex">
                            <Link href="/simulacra/king">
                                <a>
                                    <img src="/static/images/wep/king.webp" alt="KING's Weapon" />
                                    <h4>KING</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/samir">
                                <a>
                                    <img src="/static/images/wep/samir.webp" alt="Samir's Weapon" />
                                    <h4>Samir</h4>
                                </a>
                            </Link>
                            <Link href="/simulacra/tsubasa">
                                <a>
                                    <img src="/static/images/wep/tsubasa.webp" alt="Tsubasa's Weapon" />
                                    <h4>Tsubasa</h4>
                                </a>
                            </Link>
                        </div>
                    </div>
                </details>

            </section>
        </>
};