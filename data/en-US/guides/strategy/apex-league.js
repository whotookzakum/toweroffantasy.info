import Link from "next/link";
import { CHARACTERS } from '../../characters/characterList';
import { useState } from "react";

const getCharacterName = (target) => {
    return CHARACTERS.find(character => character.uri === target);
}

function TierList() {
    const [currentWep, setCurrentWep] = useState("coco-ritter");

    const weaponTierList = Object.keys(weaponTierListData).map((tier) => {
        const weapons = weaponTierListData[tier];

        const weaponsInTier = weapons.map(weapon => {
            const character = getCharacterName(weapon);
            return (
                <li key={weapon} className="tier-list-item" onClick={() => setCurrentWep(weapon)}>
                    <img src={`/static/images/wep/${character.imgSrc}`} alt={`${character.name}'s Weapon`} />
                    <h4>{character.name}</h4>
                </li>
            )
        })

        return (
            <div key={tier} className="tier-list-row">
                <b className={`tier-title tier-${tier}`}>{tier.toUpperCase()}</b>
                <ul className="tier-list-item-wrapper">{weaponsInTier}</ul>
            </div>
        )
    })

    const currentWepData = weaponData.find(weapon => weapon.uri === currentWep);
    currentWepData.name = getCharacterName(currentWep).name;
    currentWepData.imgSrc = getCharacterName(currentWep).imgSrc;

    return (
        <>
            {weaponTierList}
            <table className="pvp-table" style={{ margin: "1.5rem 0" }}>
                <tbody>
                    <tr>
                        <td>
                            <Link href={`/simulacra/${currentWepData.uri}`}>
                                <a className="table-item">
                                    <img src={`/static/images/wep/${currentWepData.imgSrc}`} alt={`${currentWepData.name}'s Weapon`} width="96" style={{ margin: 0 }} />
                                    {currentWepData.name}
                                </a>
                            </Link>
                        </td>
                        <td>{currentWepData.summary}</td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>{currentWepData.pros.map(pro => <li key={pro} className="pro">{pro}</li>)}</ul>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <ul>{currentWepData.cons.map(con => <li key={con} className="con">{con}</li>)}</ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}

const weaponTierListData = {
    s: ['coco-ritter', 'meryl', 'huma'],
    a: ['claudia', 'zero'],
    b: ['ene', 'cobalt-b', 'shiro', 'crow', 'echo'],
    c: ['pepper', 'samir', 'king', 'tsubasa'],
    d: ['bai-ling', 'hilda']
}

const weaponData = [
    // Huma
    {
        uri: 'huma',
        summary: 'Huma is a well rounded weapon choice that offers decent mobility, high CC potential, damage, and shield break. Her close range nature makes her susceptible to long range kiting, but she is very strong overall.',
        pros: [
            'High burst damage potential',
            'Large aoe damage + knockdown on skill use',
            'Decent shield break capability AND energy recharge',
            'Dash attack has micro stuns (good for interrupt and confirming axe conversion)',
            'Strong tracking on aerial attack'
        ],
        cons: [
            'Reliant on dashes for dmg/combos',
            'Tracking on shield dashes can be difficult to work with',
            'Main use is conversion skill combo, while on cooldown/without dashes effectiveness drops off',
            'Huma is a very straight forward character and easy to read'
        ]
    },
    // Coco Ritter
    {
        uri: 'coco-ritter',
        summary: 'Coco Ritter is an amazing tool that offers energy recharge, healing/sustain, and CC. Being an ice weapon, it is also capable of freezing opponents when your energy bar is full, setting up a window for follow up attacks.',
        pros: [
            'Viable at all ranges',
            'Good CC ability from basic attack combo and innate freeze ability',
            'Skill provides CC immunity in animation',
            'Dash summons a healing bee that provides small heals and energy'
        ],
        cons: [
            'Healing provides sustain and helps prevent shield break but does not make you invincible',
            'Discharge skill is not super useful compared to dps discharges',
            'Countered by CC immunity and Hyperbody',
            'Low shield break; mainly used to set up other shield break weapons',
            'Skill leaves you vulnerable to damage during animation'
        ]
    },
    // Meryl
    {
        uri: 'meryl',
        summary: 'Meryl is a well rounded weapon that offers amazing shield break, anti cc, and absorption.',
        pros: [
            'High shield break through discharge',
            "Swapping to Meryl provides a shield and CC immunity through the shield's duration",
            "Meryl's skill offers a high damage range option if you can hit it reliably",
            "Charged attack grants CC immunity and high close range damage",
            'CC immunity (skill, spin, swap passive)'
        ],
        cons: [
            'Discharge has a long windup making it relatively easy to avoid',
            'Low energy recharge',
            "Meryl's attacks can be avoided by keeping your distance as she lacks mobility",
            "Meryl's damage can be countered by shields/anti-cc"
        ]
    },
    // Claudia
    {
        uri: 'claudia',
        summary: 'Claudia is a versatile weapon that provides a gap close option, good damage, and interrupts.',
        pros: [
            'Offers bursts of damage with every skill activation',
            'Skill is a great gap closer that locks onto and chases after enemies',
            'Dash attack performs a knock up, useful as an interrupt'
        ],
        cons: [
            'Discharge offers big damage but has a long wind up time',
            'Combos can be interrupted or countered by Anti-CC',
            'Fast and aggressive playstyle can be punished'
        ]
    },
    // Cobalt-B
    {
        uri: 'cobalt-b',
        summary: 'Cobalt-B is a good zoning option that has long range poke damage, as well as close range shred on her skill.',
        pros: [
            'High zone from long range using aerial AOE attacks',
            'Close range damage from discharge and skill are very high',
            'Skill gives Anti-CC on cast'
        ],
        cons: [
            'Skill is stationary and directional',
            "Doesn't offer much utility",
            'Loses viability as the arena shrinks and combat becomes more fast paced'
        ]
    },
    // Zero
    {
        uri: 'zero',
        summary: 'Can be used as a sustain/charge weapon, both the discharge and the skill are good ways to end opponent combos. His skill provides a large absorption shield provided he has enough cubes',
        pros: [
            'Extremely long range poke option if done correctly',
            'Aerial charged attacks can lock onto the enemy and does decent poke damage',
            'Offers a lot of utility and survivability (pickup healing and damage buffs)'
        ],
        cons: [
            'Skill cooldown is long',
            'Absorb shield can be interrupted by well timed CC/micro stuns',
            "Doesn't offer much damage over time compared to other weapons"
        ]
    },
    // Samir
    {
        uri: 'samir',
        summary: 'Samir is a decent weapon choice that is good for staggering enemies, and provides range and high energy charge, however, she has mediocre damage and bad shield break capabilities',
        pros: [
            'Good at juggling opponents',
            'High mobility and range',
            'Good damage to shield broken enemies',
            'Has potential infinite stunlock combos'
        ],
        cons: [
            'Can easily be interrupted by other CC abilities',
            'Mid-air attacks leave you vulnerable',
            'Juggle capability countered by Anti-CC and stuns',
            'Discharge and skill are not particularly strong and are easy to counter'
        ]
    },
    // Ene
    {
        uri: 'ene',
        summary: 'Ene offers a surprising amount of utility. Her high CC capability and low mobility makes her best suited to close range duels.',
        pros: [
            'Provides plenty of knockup/stunlock moves such as dash attack, air slam attack, and charged hits',
            'Swapping to Pummeler provides Hyperbody',
            'Discharge can be used as an interrupt',
            'Ice weapon provides freeze'
        ],
        cons: [
            'Very slow, difficult to land hits without setting up with different weapons beforehand',
            'Hyperbody cooldown on Pummeler can be long and hard to keep track of',
            'Discharge is easy to dodge out of'
        ]
    },
    // Echo
    {
        uri: 'echo',
        summary: 'Echo is a decent shield break and energy charge weapon, she can be easily used to start and extend combos.',
        pros: [
            'Discharge skill is hard to dodge and applies paralysis and has a high shield break.',
            'Skill can be used as a knockup/interrupt for enemies without anti-CC',
            'Can be used to enable other weapons or continue combos.'
        ],
        cons: [
            'Damage rotation short',
            'Damage is low outside of her discharge ability',
            'Very close range and can be abused from afar (except her discharge ability)'
        ]
    },
    // KING
    {
        uri: 'king',
        summary: 'KING offers high shield break and damage but has low mobility and excels mainly used in conjunction with other CC heavy weapons.',
        pros: [
            'Good damage from skill and discharge',
            'Good shield break capabilities',
            'Skill and discharge have decent vertical and horizontal range',
            'Aerial attacks are a good juggle option'
        ],
        cons: [
            'Has no utility outside of shield break and damage',
            'Combo strings are long and hard to execute + slow and time consuming',
            'Low mobility and short range'
        ]
    },
    // Crow
    {
        uri: 'crow',
        summary: 'High plunge attack dps and unshielded damage. Great for finishing off opponents once the shield is broken. Provides gap close and anti-cc.',
        pros: [
            'Provides hyperbody with weapon skill',
            'High damage on unshielded enemy',
            'Dash attack and discharge skill offers gap close in the form of an instant teleport'
        ],
        cons: [
            'Not advised to be used on shielded enemy',
            "Crow's natural damage is low compared to when he is used with jetpack (A relic slot is consumed by jetpack)",
            'High skill ceiling to perform the correct combos'
        ]
    },
    // Shiro
    {
        uri: 'shiro',
        summary: 'Shiro provides high shield break, circumstantial damage, and large area coverage in the arena. She can be used as an effective zoning tool in all situations (close range or long range)',
        pros: [
            'Can easily stun/interrupt enemies with a dash attack',
            'Skill does high damage and can result in a quick kill if done correctly',
            'High zoning potential due to range and skill'
        ],
        cons: [
            "Shiro's skill only works on stationary targets",
            'Discharge is weak and hard to hit',
            'Long skill cooldown'
        ]
    },
    // Tsubasa
    {
        uri: 'tsubasa',
        summary: 'Tsubasa is a decent long range option that provides decent damage and utility when used properly, though her kit is lacking in some aspects.',
        pros: [
            'Dash attack/skill attack covers a wide area and interrupts when hit',
            'Can be used as a long range poking tool, does decent damage on critical strikes',
            'High charge from basic attacks',
            'Ice weapon provides freeze on full energy bar'
        ],
        cons: [
            'Dash attack is currently broken for many players in Apex League',
            'Discharge difficult to hit on a moving target',
            'Poor close combat potential'
        ]
    },
    // Pepper
    {
        uri: 'pepper',
        summary: 'Staff of Scars does everything Cocoritter can do in a mechanical sense, but lacks the same utility.',
        pros: [
            'Similar knock up juggle combo as Cocoritter',
            'Long range poke and decent energy recharge',
            'Volt can be used to paralyze enemies and set up for other weapons'
        ],
        cons: [
            'Healing field is stationary',
            'Discharge is situational and not overtly useful',
            'Lacks shield break and damage potential'
        ]
    },
    // Hilda
    {
        uri: 'hilda',
        summary: "Hilda as a weapon isn't really meant for PvP, the skill offers knockback and some juggle capability.",
        pros: [
            'Can juggle well if you can hit your cannon shots (your skill)'
        ],
        cons: [
            'Discharge extremely difficult to land',
            'Skill leaves you stationary'
        ]
    },
    // Bai Ling
    {
        uri: 'bai-ling',
        summary: 'Not a great choice for pvp, physical weapons do not offer as much utility as ice/volt weapons. But she offers some range and can be used in niche comps.',
        pros: [
            'Dodge attacks stagger and can interrupt combos',
            'Can do decent damage on headshot and is a ranged option'
        ],
        cons: [
            'Physical weapon does not provide much utility',
            'Weak discharge and weak skill, used situationally but not very useful',
            "Bai Ling's weapon passives are hard to take advantage of and can be easily interrupted"
        ]
    }
]

const weaponList = weaponData.map(weapon => {
    const character = CHARACTERS.find(character => character.uri === weapon.uri);
    return (
        <tr key={weapon.uri} >
            <th>
                <img src={`/static/images/wep/${character.imgSrc}`} alt={`${weapon.name}'s Weapon`} />
                <Link href={`/simulacra/${character.uri}`}><a>{weapon.name}</a></Link>
            </th>
            <td>
                <p>{weapon.summary}</p>
                <details>
                    <summary>Strengths and Weaknesses</summary>
                    <div className="details-content">
                        <ul>{weapon.pros.map(pro => <li key={pro} className="pro">{pro}</li>)}</ul>
                        <hr />
                        <ul>{weapon.cons.map(con => <li key={con} className="con">{con}</li>)}</ul>
                    </div>
                </details>
            </td>
        </tr>
    )
})

export const apexLeague = {
    name: "Apex League",
    uri: "apex-league",
    date: "12 July 2022",
    description: "An in-depth strategy guide on Apex League (PvP) including recommended weapons, relics, team comps, and playstyle.",
    type: "strategy",
    author: ["Keita#0795", "Goldenmonkey#2798", "Riala"],
    text:
        <>
            <section>
                <p>
                    This guide will focus on Apex League where <strong className="yellow">advancements and levels are all balanced</strong>, though similar PvP strategies can apply in <Link href="/guides/systems/pvp">Sparring</Link>.
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

            <section>
                <h2>Weapon Tier List</h2>
                <p>
                    <strong className="yellow">Click on any weapon and learn more below.</strong>
                </p>
                <div className="tier-list">
                    <TierList />
                </div>
            </section>

            <section>
                <h2>Notable Relics</h2>
                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Relic</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/relics/magnetic-pulse">
                                    <a className="table-item">
                                        <img src="/static/images/relics/magneticpulse.webp" alt="Magnetic Pulse" width="96" />
                                        Magnetic Pulse
                                    </a>
                                </Link>
                            </td>
                            <td>This relic is an essential in any composition in PvP, it's a get out of jail free card, it lets you break out of CC if you are caught in one and grant CC immunity for the next 5 seconds. Alternatively this relic can be used offensively to push enemies back and start combos.</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/relics/couant">
                                    <a className="table-item">
                                        <img src="/static/images/relics/couant.webp" alt="Couant" width="96" />
                                        Couant
                                    </a>
                                </Link>
                            </td>
                            <td>Couant is a relic that lets you shield against the next attack, if popped by the enemy within the first second activision it stuns them, boosting your final damage by 20%. Reflects a certain amount of damage back to the enemy, good for applying Huma DoT back to the enemy.</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/relics/confinement">
                                    <a className="table-item">
                                        <img src="/static/images/relics/confinement.webp" alt="Confinement" width="96" />
                                        Confinement
                                    </a>
                                </Link>
                            </td>
                            <td>Traps enemies within the range of confinement and stuns them if they try to get out, great for certain weapons/comps like huma and tsubasa</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/relics/magnetic-storm">
                                    <a className="table-item">
                                        <img src="/static/images/relics/magneticstorm.webp" alt="Magnetic Storm" width="96" />
                                        Magnetic Storm
                                    </a>
                                </Link>
                            </td>
                            <td>Great relic to create space between you and the enemy, deals a lot of damage if hit by it and reverses the enemy's controls. If the enemy is knocked up/has their shield broken Magnetic Storm will suspend opponents in midair. Amazing combo potential with weapons like Ene, Meryl, and Cocoritter.
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/relics/cybernetic-arm">
                                    <a className="table-item">
                                        <img src="/static/images/relics/cyberneticarm.webp" alt="Cybernetic Arm" width="96" />
                                        Cybernetic Arm
                                    </a>
                                </Link>
                            </td>
                            <td>Relic with a lot of potential if you can accurately land your grabs. When activated, it gives you a shield that reduces damage taken by 20% for 7 seconds, along with that the enemy hit by the arm will be suspended/staggered while reducing their damage by 30% for 7 seconds. <i>Codename: Sussy Grab</i>.</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/relics/jetpack">
                                    <a className="table-item">
                                        <img src="/static/images/relics/jetpack.webp" alt="Jetpack" width="96" />
                                        Jetpack
                                    </a>
                                </Link>
                            </td>
                            <td>The jetpack is a utility tool that allows for animation canceling with certain weapons and gives survivability through high stalling potential. Tapping jetpack then left clicking (while targeting an enemy) allows for an instant plunge attack with certain weapons such as Crow and Huma. While they do take stamina, using this with other weapons allows for quick plunge damage and interesting combos.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Example Loadouts</h2>
                <p>General tips for picking loadouts:</p>
                <ol>
                    <li>Magnetic Pulse is a very strong option and is generally recommended, but other relics can be used in its place if used well.</li>
                    <li>Build around 1-2 S tier weapons (Coco for range/sustain comps, Meryl for tanky/shred comps, and Huma for burst comps)</li>
                </ol>
            </section>

            <section>
                <h3 className="yellow">Apache Helicopter Comp (stall/zoning)</h3>
                <p>Main playstyle of this comp is to avoid contact while waiting on cooldowns and making opponents waste theirs. Weapons provide a ton of survivability, chip damage, and CC to lower opponent shields/hp while finishing them off with Huma's burst damage from her skill.</p>

                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/coco-ritter">
                                    <a className="table-item">
                                        <img src="/static/images/wep/cocoritter.webp" alt="Coco Ritter" width="96" />
                                        Coco Ritter
                                    </a>
                                </Link>
                            </td>
                            <td>Coco provides sustain (heals hp and shields), CC, and chip damage at all ranges</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/zero">
                                    <a className="table-item">
                                        <img src="/static/images/wep/zero.webp" alt="Zero" width="96" />
                                        Zero
                                    </a>
                                </Link>
                            </td>
                            <td>Cube increases survivability in the form of a shield, large knockbacks (also provides CC immunity while casting), and the ability to air dodge a lot. Also provides heals and damage buffs in the form of pickups and has decent range for chip damage</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/huma">
                                    <a className="table-item">
                                        <img src="/static/images/wep/huma.webp" alt="Huma" width="96" />
                                        Huma
                                    </a>
                                </Link>
                            </td>
                            <td>Main source of shield break and burst damage in this comp. Playing around the chip damage. CC, and heals/sustain Coco and Cube provide while waiting for Huma skill cooldown is a safe way to play and will guarantee wins against 99% of opponents who don't have specific counters in mind</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3 className="yellow">Burst Shield Break Comp</h3>
                <p>This comp revolves around Huma and Meryl’s high amounts of burst damage and shield break capabilities to shatter enemy shields and finish them off. While there is no healing for sustain, Meryl provides large shields and lots of CC resist to increase survivability. Claudia allows you to chase down opponents playing from range and also allows for a decent DPS/finisher option once the opponent’s shield has broken. </p>

                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/meryl">
                                    <a className="table-item">
                                        <img src="/static/images/wep/meryl.webp" alt="Meryl" width="96" />
                                        Meryl
                                    </a>
                                </Link>
                            </td>
                            <td>Probably going to be the most equipped weapon in the comp as it provides a ton of CC immunity and survivability while active which allows you to survive while waiting for cooldowns on other weapons</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/huma">
                                    <a className="table-item">
                                        <img src="/static/images/wep/huma.webp" alt="Huma" width="96" />
                                        Huma
                                    </a>
                                </Link>
                            </td>
                            <td>Main source of burst damage. Skill has a large aoe, fast activation, and high burst damage which is great at chunking down shields. Meryl can easily finish off low shields on careless opponents/comps without sustain after Huma leaves them low</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/claudia">
                                    <a className="table-item">
                                        <img src="/static/images/wep/claudia.webp" alt="Claudia" width="96" />
                                        Claudia
                                    </a>
                                </Link>
                            </td>
                            <td>Claudia is a great weapon that has an amazing gap close skill which increases damage, chases down enemies, and provides decent amounts of damage as well. Claudia can also juggle opponents for extra damage and interrupt certain skills that opponents attempt to use.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3 className="yellow">Meryl Sustain Comp</h3>
                <p>Main playstyle of this comp is to tank damage and skills of the opponent by utilizing the massive amounts of anti-cc that meryl provides along with the heals provided by Coco and Nemesis. Nemesis also comes with large amounts of passive damage from her turrets while Coco’s CC and energy generation complete the comp.</p>

                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/coco-ritter">
                                    <a className="table-item">
                                        <img src="/static/images/wep/cocoritter.webp" alt="Coco Ritter" width="96" />
                                        Coco Ritter
                                    </a>
                                </Link>
                            </td>
                            <td>Coco provides sustain (heals hp and shields), CC, and chip damage at all ranges</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/nemesis">
                                    <a className="table-item">
                                        <img src="/static/images/wep/nemesis.webp" alt="Nemesis" width="96" />
                                        Nemesis
                                    </a>
                                </Link>
                            </td>
                            <td>Nemesis provides large amounts of passive off-field dmg (this is amazing in final zone as the opponent cannot escape the range). Nemesis neutral-dash skill also launches a slow orb that slows opponents on hit which creates great opportunities for damage and gives space</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/meryl">
                                    <a className="table-item">
                                        <img src="/static/images/wep/meryl.webp" alt="Meryl" width="96" />
                                        Meryl
                                    </a>
                                </Link>
                            </td>
                            <td>Main source of shield break and CC tanking in this comp. Can be used to burst down shields or just passively for chip damage and CC immunity. The shield also provides a great source of extra HP in clutch scenarios or to tank opponent burst hits (like enemy huma or meryls)</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h2>Alternative/Unconventional Options</h2>
                <p>
                    While the S tier options are generally highly recommended to build around, sometimes alternative options can be used effectively if utilized correctly. In addition, some weapons may be inaccessible to some depending on gacha roll luck so these are some additional options that can be used as replacements
                </p>
            </section>

            <section>
                <h3>Tank/Shield Break</h3>
                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/ene">
                                    <a className="table-item">
                                        <img src="/static/images/wep/ene.webp" alt="Ene" width="96" />
                                        Ene
                                    </a>
                                </Link>
                            </td>
                            <td>Ene provides CC resist in the form of Hyperbody. Ene also provides the ability to freeze opponents and stunlock when used properly to break shields. </td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/zero">
                                    <a className="table-item">
                                        <img src="/static/images/wep/zero.webp" alt="Zero" width="96" />
                                        Zero
                                    </a>
                                </Link>
                            </td>
                            <td>Cube provides CC resist and survivability in the form of heals, shields and a large knockback.</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/echo">
                                    <a className="table-item">
                                        <img src="/static/images/wep/echo.webp" alt="Echo" width="96" />
                                        Echo
                                    </a>
                                </Link>
                            </td>
                            <td>Echo doesn’t provide too much survivability in terms of shields or healing, but allows one to stun enemies to interrupt attacks, knock enemies up, and do massive shield burst damage at range with discharge.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>Sustain/Chip Damage</h3>
                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/zero">
                                    <a className="table-item">
                                        <img src="/static/images/wep/zero.webp" alt="Zero" width="96" />
                                        Zero
                                    </a>
                                </Link>
                            </td>
                            <td>Zero provides shields, knock up, and good sustain. Also can basically fly with air dashes, allowing one to reposition easily and escape from certain skills with ease</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/pepper">
                                    <a className="table-item">
                                        <img src="/static/images/wep/pepper.webp" alt="Pepper" width="96" />
                                        Pepper
                                    </a>
                                </Link>
                            </td>
                            <td>Pepper does everything Coco can do, but lacks the same utility . It fills the same role and does the same thing as Coco but at a lower level. It provides sustain in the form of heals, huge ranged chip damage, and CC (knockup combo and electric innate stun)</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/tsubasa">
                                    <a className="table-item">
                                        <img src="/static/images/wep/tsubasa.webp" alt="Tsubasa" width="96" />
                                        Tsubasa
                                    </a>
                                </Link>
                            </td>
                            <td>Tsubasa doesn’t provide much sustain like the other options, but provides ranged damage, knockbacks with skill and dash attack (which applies a micro stun/stagger) and a slow when using charged attack or discharge (note that during both CBTs, Tsubasa’s dash attack did not work for many players)</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/cobalt-b">
                                    <a className="table-item">
                                        <img src="/static/images/wep/cobalt-b.webp" alt="Cobalt-B" width="96" />
                                        Cobalt-B
                                    </a>
                                </Link>
                            </td>
                            <td>Cobalt-B can be used to great effectiveness with certain playstyles (mainly Pogo-balt Comp). Doesn’t directly provide any sustain, but allows one to deal massive amounts of chip damage from range while avoiding opponents completely by maintaining distance  while raining down shots from afar</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h3>DPS/Jugglers</h3>
                <table className="pvp-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Explanation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Link href="/simulacra/samir">
                                    <a className="table-item">
                                        <img src="/static/images/wep/samir.webp" alt="Samir" width="96" />
                                        Samir
                                    </a>
                                </Link>
                            </td>
                            <td>Samir isn’t great due to the fact that she does not offer much utility, but has a great knock up option with her dash attack. She also provides some range damage with her skill and aim shots by holding but mostly useful for her knock up skill</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/crow">
                                    <a className="table-item">
                                        <img src="/static/images/wep/crow.webp" alt="Crow" width="96" />
                                        Crow
                                    </a>
                                </Link>
                            </td>
                            <td>If utilized with jetpack, Crow can deal one of the highest amounts of DPS on unshielded targets. Crow also provides gap close options in the form of his dash attack and his discharge, his skill gives you Hyperbody on skill use that prevents most forms of CC</td>
                        </tr>
                        <tr>
                            <td>
                                <Link href="/simulacra/shiro">
                                    <a className="table-item">
                                        <img src="/static/images/wep/shiro.webp" alt="Shiro" width="96" />
                                        Shiro
                                    </a>
                                </Link>
                            </td>
                            <td>Shiro is a decent option that provides ranged shield damage, a high burst skill, and a quick ranged stun option to interrupt opponents. When using Shiro, you can deal high amounts of shield damage while maintaining distance. A decent counter pick against Coco abusers since Coco has a low shatter stat. The dash attack comes out quick and stuns opponents which can be used to interrupt them as they are casting skills such as Coco’s knock up. When utilized properly, the skill can instantly shred shields of opponents who approach carelessly.</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <hr />
                <h4>Credits</h4>
                <ul>
                    <li>
                        <a href="https://www.twitch.tv/Keita_Kyu">Keita</a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/goldenmonkeee">Asuwuna | Goldenmonkee</a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/riala_w">Riala</a>
                    </li>
                </ul>

                <h4>Special Thanks</h4>
                <ul>
                    <li>
                        <a href="https://www.youtube.com/c/pandoraxp">Pandora</a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/gateoo">Gateoo</a>
                    </li>
                    <li>
                        An (Azn#9328)
                    </li>
                    <li>
                        <a href="https://space.bilibili.com/6532786">Linye/深水yl</a>
                    </li>
                    <li>
                        <a href="https://www.twitch.tv/thechickenjoy">ChickenJoy | Katsuyori</a>
                    </li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>

                <h4>Join the PvP Discord!</h4>
                <a href="https://discord.gg/6aK78dA79W">PvP Discord</a>
                <p>
                    <a href="https://docs.google.com/document/d/1eZVlm-Y9Uosyx9Fqy9m8N8IfY31XF6YdQjFxCwiFcfk/edit">Original Document</a>
                </p>
            </section>
        </>
}