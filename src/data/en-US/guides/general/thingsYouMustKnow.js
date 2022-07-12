import { Link } from 'react-router-dom';

export const thingsYouMustKnow = {
    name: "15 Things You MUST Know",
    uri: "15-things-you-must-know",
    type: "general",
    author: ["Zakum#3080"],
    text:
        <>
            <section>
                <h2>1. Infinite Climb</h2>

                <iframe src="https://www.youtube.com/embed/xcYGj-Ucu28" allow="fullscreen" modestbranding={1} />
 
                <details style={{margin: "1rem 0"}}>
                    <summary><strong className="yellow">Climb walls while consuming nearly 0 endurance.</strong></summary>
                    <blockquote style={{margin: "0", boxShadow: "none"}}>
                        <h3 style={{margin: "0"}}>Let Go + Double Jump + Grab On</h3>
                        <h4>On PC</h4>
                        <kbd>CTRL</kbd> + <kbd>Space</kbd> + <kbd>Space</kbd> + <kbd>W</kbd>
                    </blockquote>
                </details>

                <details style={{margin: "1rem 0"}}>
                    <summary><strong className="yellow">Climb past ledges that block you from climbing vertically.</strong></summary>
                    <blockquote style={{margin: "0", boxShadow: "none"}}>
                        <h3 style={{margin: "0"}}>Backward Dash + Jump + Forward Dash</h3>
                        <h4>On PC</h4>
                        <kbd>Right Click</kbd> + <kbd>Space</kbd> + <kbd>Right Click</kbd>
                    </blockquote>
                </details>

                <p>
                    Advanced users can use Samir's Aerial hold attack to gain even more height. <br />
                    After the jump, hold Left Click until you kick upwards, then quickly Right Click at peak height before heading downwards.
                </p>
            </section>

            <section>
                <h2>2. Jetpack Dash</h2>

                <p>While gliding with your jetpack, perform a dodge to gain distance forward. At the end of the dash distance, reactivate your jetpack. Repeating this process with your dashes will allow you to gain considerable distance while gliding. </p>
                <iframe src="https://www.youtube.com/embed/FCu7E86Dh8o" allow="fullscreen" modestbranding={1} />
            </section>

            <section>
                <h2>3. Party Teleport</h2>
                <blockquote>
                    Party Teleport will bypass the cooldown on swapping lines.
                </blockquote>
                <p>
                    On the right side of the screen click the flag icon to open the party member list. Clicking the third button (icon of two people) will teleport you to the location and line (channel) of the party leader. If you are the party leader, the teleport button is replaced with a summon button which sends party members a request to come to you.
                </p>
                <strong className="yellow">Use this to form parties to teleport to world bosses.</strong>
                <p>
                    Once you are at the boss, leave the party so that more people can quickly join.<br />
                    It's recommended that party leaders enable the option to auto-accept party join requests, accessible by clicking the flag icon a second time.<br />
                </p>
            </section>

            <section>
                <h2>4. Free Colossus Arms (SSR Relic)</h2>
                
                <iframe src="https://www.youtube.com/embed/CWBbNM2SHyw" allow="fullscreen" modestbranding={1} />
                
                <p>The free SSR relic <Link to="/relics/colossusarms">Colossus Arms</Link> can be obtained on Day 1 from the Navia Ecological Park hidden quest line. You can also obtain the <Link to="/mounts/omniumbeastvii">Omnium Beast VII</Link> and <Link to="/mounts/voyager">Voyager</Link> mounts.</p>
            </section>

            <section>
                <h2>5. Hidden Free Pity</h2>
                <p>Your <strong className="yellow">30th gold nucleus</strong>  pull will guarantee an SSR weapon. If you wish to reroll until you get the perfect first pull, aim for this number. </p>
            </section>

            <section>
                <h2>6. Relic and Weapon Sets</h2>

                <p>
                    You can create 3 relic sets that you can swap with the <kbd>G</kbd> key (on PC).
                    <blockquote>
                        You can't swap sets <em>during combat</em>, but who says you can't swap <em>before combat</em>?
                    </blockquote>
                    Relics like Spacetime Rift, Drone, Couant, Magnetic Storm, Hovering Cannon, Type V Armor (for the explosion after ejecting), and Missile Barrage can be useful even when activated just before an enemy spawns, such as in Bygone Phantasm or Frontier Clash. Make use of this to maximize your DPS.
                </p>

                <h3>Weapon Sets</h3>
                <p>Weapon sets can also be made, but there's no shortcut to swap them (on PC press <kbd>N</kbd> to quickly open the menu). You can swap while out of combat to quickly heal up (i.e. between waves in Frontier Clash or before a dungeon boss) or if you need to switch weapons. Matrices cannot be changed inside dungeon instances. </p>
            </section>

            <section>
                <h2>7. Exploring With The Full World Map</h2>
                <p>The full world map provides a slightly higher field of view than the minimap. Consistently checking it while exploring can help you find exploration points that are just out of view of your minimap. </p>
            </section>

            <section>
                <h2>8. Farm Dungeons For Weekly Activity</h2>
                <p>Once you've exhausted your Vitality, you can still farm dungeons to accumulate weekly activity points. If you can only play a few days a week, this is especially useful for you.The only one you can't really do without Vitality is Omnium Beacon.</p>

                <p>It'll take some time, but if you do everything that gives activity, you can cap the weekly activity boxes in 2 or 3 days.</p>
            </section>

            <section>
                <h2>9. Aerial Attacks Do More Damage</h2>
                <p>This can vary per weapon, but in general aerial attacks do more damage. On the other hand, they leave you more vulnerable, consume endurance, and sometimes will get you caught in a cat-and-mouse chase with a moving enemy, so only aerial attack in certain situations, like when a boss is facing another player. </p>
            </section>

            <section>
                <h2>10. Aerial Discharge Skill</h2>
                <p>Using your Discharge skill leaves you vulnerable to a lot of damage as you are locked in place during the animation. Double jumping before casting Discharge skills can help you avoid most enemy attacks. Note that this may not be as effective on weapons that have a Discharge that slams downward, such as KING's and Meryl's.</p>
            </section>

            <section>
                <h2>11. Passcode Terminals</h2>
                    <img src="/images/guides/passcode_terminals.png" alt="Map of Passcode Terminals" />
                    <span>Correct passcodes for all passcode terminals</span>
            </section>

            <section>
                <h2>12. BREAK THE GOD DAMN SHIELD</h2>
                <p>If you don't break a boss' shield, they will use an ultimate of their own, which, depending on the boss, can be ignored or can be completely lethal to your team. In either case, shields reduce the damage you deal to the enemy and usually there are some juicy shield break buffs and effects that are worth pursuing, so switch to your shield break weapon and mash that left click. </p>
            </section>

            <section>
                <h2>13. Tap Revive</h2>
                <p>Fallen teammates can be revived by interacting with their limping body. However, *you can actually just tap the interact key and dash away*, and they will still be revived. This is a superior way of reviving players as you are able to continue fighting, are less vulnerable to enemy attacks, and can quickly revive multiple players. No need to stand around waiting for the revive to finish.</p>
            </section>

            <section>
                <h2>14. Sending Coordinates</h2>
                <p>With the chat box open, click the small tab that looks like a Google Maps pin icon next to the send button. That will attach your current coordinates to the message and instantly send it--other players can click on these coords to see where you are on the world map. If you're asking for help or guiding someone, it can come in handy.</p>
            </section>

            <section>
                <h2>15. Daily Free Simulacrum Gifts</h2>

                <p>On Cetus island go straight past the tent in the middle and there will be an arcade machine near Slayer. You can play the claw machine 3 times a day and earn gifts that raise simulacra affinity/friendship. The prizes you can get are fixed, but the purple fox is a purple tier gift. I'm not sure if the black robot cat (another purple tier) is even grabbable as it always slips out of the claw.</p>

                <p>Another opportunity for free gifts is at the NPC Hopkins, found at the Black Market (near the world boss Apophis). Speak to him and you will be presented with a choice between two mystery boxes. There is a chance of getting purple tier gifts from this daily.</p>
                <em>Submitted by Sazz#2223</em>
            </section>

            <section>
                <h2>Bonus: Unstuck Button</h2>
                <p>If you ever get stuck somewhere, fall out of map bounds, or get a weird movement glitch, in the game settings there is an unstuck button near the logout button.</p>
            </section>
        </>
}

const as = {
    name: "15 Things You MUST Know",
    author: ["Zakum#3080"],
    section1: {
        header: "1. Infinite Climb"
    },
    section2: {
        header: "2. Jetpack Dash"
    },
    section3: {
        header: "3. Party Teleport"
    },
    section4: {
        header: "4. Free Colossus Arms (SSR Relic)"
    },
    section5: {
        header: "5. Hidden Soft Pity"
    },
    section6: {
        header: "6. Relic and Weapon Sets"
    },
    section7: {
        header: "7. Exploring with the full world map"
    },
    section8: {
        header: "8. Dungeons for weekly activity"
    },
    section9: {
        header: "9. Aerial Attacks do more damage"
    },
    section10: {
        header: "10. Aerial Discharge Skill"
    },
    section11: {
        header: "11. Passcode Terminals"
    },
    section12: {
        header: "12. BREAK THE GOD DAMN SHIELD",
        text: ""
    },
    section13: {
        header: "13. Tap Revive",
        text: ""
    },
    section14: {
        header: "14. Sending coordinates",
        text: ""
    },
    section15: {
        header: "15. Daily Simulacra Gifts",
        text:
            ``
    },
    section16: {
        header: "Bonus: Unstuck Button",
        text:
            ` `
    }
};