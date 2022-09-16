import { advancement, dualFire, bulletRain } from '../../../data/en-US/weapons/Samir';


// a function that takes in the game version
// if global then values = weapon_samir.global
// if china then deep merge china into global

export const WEAPON_SAMIR = {
    name: "Dual EM Stars",
    
    advancement: {
        star1: `Trigger an electrical explosion on the target after landing a critical hit, dealing additional damage equal to **${advancement.star1[0]}%** of ATK to the target and nearby enemies. Cooldown: **${advancement.star1[0]}** seconds.`,

        star2: `Increase the current weapon's base ATK growth by **${advancement.star2[0]}%**.`,

        star3: `Increase crit rate to electrified targets by **${advancement.star3[0]}%**. Electrical explosions extend the duration of electrified effects by **${advancement.star3[1]}** seconds, up to a maximum of **${advancement.star3[2]}** seconds.`,

        star4: `Increase the current weapon's base ATK growth by **${advancement.star4[0]}%**.`,

        star5: `Double the duration of Electro Field and pull targets into the center of the attack.`,

        star6: `Triggering an electrical explosion reduces skill cooldowns by ${advancement.star6[0]} second.`
    },

    abilities: {
        normal: [
            {
                name: "Dual Fire",
                input: ["Attack x5"],
                description: 'While on the ground, tap normal attack to attack 5 times in a row.',
                breakdown: [
                    `Deal total damage equal to **${dualFire.hit1[0]}%** of ATK + **${dualFire.hit1[1]}**.`,
                    `Deal total damage equal to **${dualFire.hit2[0]}%** of ATK + **${dualFire.hit2[1]}**.`,
                    `Deal total damage equal to **${dualFire.hit3[0]}%** of ATK + **${dualFire.hit3[1]}**.`,
                    `Deal total damage equal to **${dualFire.hit4[0]}%** of ATK + **${dualFire.hit4[1]}**.`,
                    `Deal total damage equal to **${dualFire.hit5[0]}%** of ATK + **${dualFire.hit5[1]}** and **launch** the target.`
                ]
            },
            {
                name: "Bullet Rain",
                input: ['Jump', 'Attack'],
                description: `While airborne, tap normal attack to fire continuously at the ground, dealing damage equal to **${bulletRain.hit1[0]}%** of ATK + **${bulletRain.hit1[1]}** each hit. Consumes **${bulletRain.end}** Endurance.`
            },
            {
                name: "Energy Burst",
                input: ['hold:Attack'],
                description: 'Hold attack button to maintain constant fire, each hit dealing **23%** x ATK + **1** base damage.'
            },
            {
                name: "Phantom Kick",
                input: ['Jump', 'hold:Attack'],
                description: 'While airborne, tap and hold normal attack to trigger Phantom Kick. Knock the target down and deal damage equal to **70.5%** of ATK + **4**. Upon landing, deal damage equal to **98.7%** of ATK + **5** to nearby targets and **launch** them.'
            }
        ],
        dodge: [
            {
                name: "Dodge",
                description: 'Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.'
            },
            {
                name: "Rising Lightning Kick",
                input: ['Dodge', 'Attack'],
                description: 'Tap normal attack after dodging to **knock targets into the air** and deal damage equal to **122.6%** of ATK + **6**.'
            }
        ],
        skill: [
            {
                name: "Electro Field",
                description: 'Fire an energy field at the target location, reflecting beams within the barrier. Deal damage equal to **269.8%** of ATK + **14**, and the last hit **strongly suspends** targets. Cooldown: **45** seconds.'
            }
        ],
        discharge: [
            {
                name: "Domain of Thunder",
                description: 'When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and create a Domain of Thunder at the target location upon switching to this weapon, dealing a total of **238.3%** of ATK + **13** damage over 3 attacks to enemies **within the area** and dispelling their buffs. The domain lasts for **3.5** seconds and deals damage equal to **42.4%** of ATK + **2** to a target every **0.5** seconds.'
            }
        ]
    },
    abilitiesVideoSrc: "https://www.youtube.com/embed/rnbvRYldzak?start=8",
    recommendedMatrices: [
        {
            name: "Samir",
            pieces: 2,
            description: "With its high rate of fire, Dual EM stars can easily maintain 100% uptime on the buff."
        },
        {
            name: "Crow",
            pieces: 2,
            description: "At high crit rate, Crow's 2 set is the second best choice for damage. Otherwise, opt for 2-piece Shiro matrices."
        },
        {
            name: "Shiro",
            pieces: 2,
            description: "Not ideal, but can be used for the damage increase until you get one of the more recommended sets."
        },
        {
            name: "Sobek",
            pieces: 3,
            description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
        }
    ]
}