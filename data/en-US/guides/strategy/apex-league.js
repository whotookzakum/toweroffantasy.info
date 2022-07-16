import Link from "next/link";
import { CHARACTERS } from '../../characters/characterList';


const weaponTierListData = {
    s: ['Coco Ritter', 'Meryl', 'Huma'],
    a: ['Claudia', 'Zero'],
    b: ['Ene', 'Cobalt-B', 'Shiro', 'Crow', 'Echo'],
    c: ['Pepper', 'Samir', 'KING', 'Tsubasa'],
    d: ['Bai Ling', 'Hilda']
}

const weaponTierList = Object.keys(weaponTierListData).map((tier) => {
    const weapons = weaponTierListData[tier];

    const weaponsInTier = weapons.map(weapon => {
        const character = CHARACTERS.find(character => character.name === weapon);
        return(
            <li className="tier-list-item">
                <img src={`/images/wep/${character.imgSrc}`} alt={`${character.name}'s Weapon`} />
                <h4>{character.name}</h4>
            </li>
        )
    })
    
    return(
        <div className="tier-list-row">
            <h2 className={`tier-title tier-${tier}`}>{tier.toUpperCase()}</h2>
            <ul className="tier-list-item-wrapper">{weaponsInTier}</ul>
        </div>
    )
})

const weaponListData = [
    // Huma
    {
        name: 'Huma',
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
        name: 'Coco Ritter',
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
        name: 'Meryl',
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
        name: 'Claudia',
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
        name: 'Cobalt-B',
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
        name: 'Zero',
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
        name: 'Samir',
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
        name: 'Ene',
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
        name: 'Echo',
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
        name: 'KING',
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
        name: 'Crow',
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
        name: 'Shiro',
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
        name: 'Tsubasa',
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
        name: 'Pepper',
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
        name: 'Hilda',
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
        name: 'Bai Ling',
        summary: 'Not a great choice for pvp, physical weapons do not offer as much utility as ice/volt weapons. But she offers some range and can be used in niche comps.',
        pros: [
            'Dodge attacks stagger and can interrupt combos',
            'Can do decent damage on headshot and is a ranged option'
        ],
        cons: [
            'Physical weapon does not provide much utility',
            'Weak discharge and weak skill, used situationally but not very useful',
            'Bai Ling’s weapon passives are hard to take advantage of and can be easily interrupted'
        ]
    }
]

const weaponList = weaponListData.map(weapon => {
    const character = CHARACTERS.find(character => character.name === weapon.name);
    return (
        <tr>
            <th>
                <img src={`/images/wep/${character.imgSrc}`} alt={`${weapon.name}'s Weapon`} />
                <Link href={`/simulacra/${character.uri}`}><a>{weapon.name}</a></Link>
            </th>
            <td>
                <p>{weapon.summary}</p>
                <details>
                    <summary>Strengths and Weaknesses</summary>
                    <div className="details-content">
                        <ul>{weapon.pros.map(pro => <li className="pro">{pro}</li>)}</ul>
                        <hr />
                        <ul>{weapon.cons.map(con => <li className="con">{con}</li>)}</ul>
                    </div>
                </details>
            </td>
        </tr>
    )
})

export const apexLeague = {
    name: "Apex League",
    uri: "apex-league",
    type: "strategy",
    author: ["Keita#0795", "Goldenmonkey#2798", "theLaw#5678"],
    text:
        <>
            <section>
                <p>
                    This guide will focus on Apex League where <strong className="yellow">advancements and levels are all balanced</strong>, though similar PvP strategies can apply in <Link href="/guides/systems/pvp">Duels</Link>.
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

            <section className="pvp-strategy" style={{display: "none"}}>
                <h2>Weapons</h2>
                <p>
                    Here we'll take a look at each weapon and scenarios that they're viable in and some weaknesses they can be exploited when fighting against.
                </p>

                <table className="weapons-table">
                    <thead>
                        <tr>
                            <th>Weapon</th>
                            <th>Summary</th>
                        </tr>
                    </thead>
                    <tbody>{weaponList}</tbody>
                </table>
            </section>

            <section>
                <h2>Weapon Tier List</h2>
                <p>
                    Click on any weapon to bring up its data.
                </p>
                <div className="tier-list">
                    {weaponTierList}
                </div>
            </section>
        </>
}