const zero = {
    name: "Zero",
    uri: "zero",
    imgSrc: "zero.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Negating Cube",
        element: "flame",
        type: "support",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["B", "5.00"],
        charge: ["S", "13.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Deal damage and produce a healing orb, which lasts for **20** seconds and restore HP of any teammate who picks it up equal to **60%** of ATK. **2**-second cooldown.`,
            // 20% chance of generating a healing sphere when dealing damage, lasts 20 seconds and restores 60% of attack power as health to the player who picks up the healing sphere.

            star2: `Increase the current weapon's base ATK growth by **16%**.`,
            
            star3: `Reduce skill cooldown from **60** seconds to **30** seconds. Restore HP equal to **30%** of ATK every second while the shield is active.`,
            
            star4: `Increase the current weapon's base HP growth by **32%**.`,
            
            star5: `Damaging a target also produces a damage orb, which lasts for **20** seconds and increases all damage and healing of any teammate who picks it up by **2%** for **30** seconds. Stack up to **10** times. Skill cooldown is **2.5** seconds.`,
            
            star6: `Using a Skill grants allies healing orbs and damage orbs equal to the number of Omnium Cubes.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, manipulate the cube to attack 5 times in a row.  
                                **Passive: If normal attacks hit targets 6 times, gain 1 cube. Up to 5 cubes can be stored**.`,
                    breakdown: [
                        'First Attack: Deal damage equal to **46.7%** of ATK + **2**.',
                        'Second Attack: Deal damage equal to **38.2%** of ATK + **2**.',
                        'Third Attack: Deal damage equal to **118.5%** of ATK + **8**.',
                        'Fourth Attack: Deal damage equal to **79.6%** of ATK + **4**.',
                        'Fifth Attack: Deal damage equal to **80.9%** of ATK + **4** up to 3 times and **launch** the target.'
                    ]
                },
                {
                    name: "Omnium Missile",
                    input: ["Jump","hold:Attack"],
                    description: `While airborne, tap normal attack to activate the energy within the cube, firing up to **5** missiles and dealing total damage equal to **59.3%** of ATK + **3**. Consume up to **250** endurance.  
                    **Passive: If the Wanderer has any stored cubes, consume all cubes to fire Omnium Missiles at targets to deal damage**.`
                },
                {
                    name: "Energy Overflow",
                    input: ["Jump","Attack"],
                    description: `While airborne or after jumping once, tap normal attack to trigger Energy Overflow. Upon landing, fire a shockwave that travels forward, dealing up to **23.4%** of ATK + **1** damage to targets in its path.`
                },
                {
                    name: "Omnium Shock",
                    input: ["Attack x3","hold:Attack"],
                    description: `On the third normal attack, hold the normal attack button to trigger Omnium Shock. A pillar of energy launches nearby targets into the air, dealing damage equal to **68.4%** of ATK + **4**. The pillar lasts 5 seconds and deals damage equal to **28.5%** of ATK + **2** to nearby targets every second.`
                },
                {
                    name: "Energy Sentinel",
                    description: `Cubes orbiting the Wanderer deal damage equal to **9.7%** of ATK + **1** to enemies.`
                },
                {
                    name: "Energy Missile",
                    description: `When the Wanderer casts Omnium Missiles and Energy Overflow, their orbiting cubes are fired as well, dealing damage equal to **48.5%** of ATK + **2** to the target.`
                }
            ],
            dodge: [
                {
                    name: "Soul Surge",
                    description: `Dodge right before getting hit to trigger a Phantasia, which reduces speed of enemies within range and grants hitstun immunity for **0.5** seconds. If the Wanderer has less than **5** cubes, each successful dodge has a **40%** chance to restore 1 dodge attempt. Successful dodges do not interrupt normal attack combos.  **Passive: Gain a cube for every successful aerial dodge**.`
                }
            ],
            skill: [
                {
                    name: "Omnium Shield",
                    description: `Create shielding for self and nearby allies to block up to **800%** x ATK in damage for **10** seconds, and deal **142.9%** x ATK + **8** damage to nearby targets and **launch** them. Each cube in possession when this skill is used adds **160%** of ATK to max shielding and exhaust the cube. Cooldown: **60** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Omnium Wave",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and gain **5** cubes upon switching to this weapon, then unleash the **5** cubes along with a Shockwave. This Shockwave deals damage equal to **171%** of ATK + **9** to nearby targets, and **launches** them into the air. Each cube also deals damage equal to **48.5%** of ATK + **3**. If allies are in the vicinity, they gain damage immunity for **3** seconds.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/1tk5CdG8O58?start=11",
        recommendedMatrices: [
            {
                name: "Coco Ritter",
                pieces: 4,
                description: "A decent choice to apply additional damage buffs to teammates while also increasing healing."
            },
            {
                name: "Pepper",
                pieces: 3,
                description: "Decent option to build weapon charge while using Negating Cube."
            }
        ]
    },

    matrix: {
        set2: `Upon using a discharge skill to switch to the current weapon, gain a shield equal to **150%/200%/250%/300%** of ATK for **6** seconds.`,

        set4: `While the shield is active, you and your teammates deal **16%/20%/24%/28%** more damage.`
    },

    awakening: {
        trait1200: `When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **1.5** seconds. Can only activate for the same weapon **1** time every **5** seconds.`,

        trait4000: `When Zero uses a weapon skill, reduce cooldown time for Relics in cooldown by **3** seconds. Can only activate for the same weapon **1** time every **5** seconds.`,

        giftCategories: ['limited-edition', 'games'],

        gifts: [
            [80, "psp"],
            [60, "goldCoin", "tataCards", "pearl", "catFigure", "ufo", "tataFigure"],
            [30, "chessSet", "diary"],
            [15, "tradingCard", "snackBox"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '155 cm',
        birthplace: 'Banges',
        horoscope: 'Gemini',
        birthday: '6 Jun',
        voiceActors: {
            jp: "村瀬歩 (Ayumu Murase)",
            en: "",
            cn: "幽幽"
        }
    },

    cnData: {
        weapon: {
            advancement: {
                star5: `<abbr title='China Exclusive'></abbr> Damaging a target also produces a damage orb, which lasts for **20** seconds and increases ATK of any teammate who picks it up by **2%** for **45** seconds. Stack up to **10** times. Skill cooldown is **2.5** seconds.`
            },
            recommendedMatrices: [
                {
                    name: "Samir",
                    pieces: 4,
                    description: "The extra hit can activate Negating Cube's 1★ and 5★, effectively doubling the drop rate on healing/damage boost orbs."
                },
                {
                    name: "Coco Ritter",
                    pieces: 4,
                    description: "A decent choice to apply additional damage buffs to teammates while also increasing healing."
                },
                {
                    name: "Pepper",
                    pieces: 3,
                    description: "Decent option to build weapon charge while using Negating Cube."
                }
            ]
        }
    }
}

export default zero;