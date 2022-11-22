const lin = {
    name: "Lin",
    uri: "lin",
    imgSrc: "lin.webp",
    rarity: "SSR",
    banners: {
        cn: [
            {
                bannerNo: 15,
                subtext: "Limited Banner only",
                start: "9 Jul 2022",
                end: "29 Jul 2022",
                duration: "20d",
                week: "30~33"
            },
            {
                bannerNo: 25,
                subtext: "Limited Banner only",
                start: "20 Oct 2022",
                end: "1 Nov 2022",
                duration: "12d",
                week: "46~48"
            },
        ],
        glob: [
            {
                bannerNo: 7,
                subtext: "Limited Banner only",
                start: "22 Nov 2022",
                end: "21 Dec 2022",
                duration: "29d",
                week: "16~20"
            },
        ]
    },
    weapon: {
        name: "Shadoweave",
        element: "altered",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["S", "11.50"],
        materials: ["red", "green", "black", "blue"],
        bonusEffect: {
            effect1: {
                title: `Weapons Master`,
                description: `When pairing Shadoweave with other weapons, the **Weapons Master** effect can be created. Epiphyllum will appear around the target randomly and explode within **1-3** seconds, dealing **25%** area damage.`
            }
        },
        advancement: {
            star1: `Normal attacks now deal area damage upon hit. When there is another epiphyllum within the epiphyllum explosion area, increase the damage of each of the subsequent epiphyllum explosions by **10%**, up to a maximum of **50%**.  
            The epiphyllum generation interval from **Moonlight Realm** is now reduced to **0.5** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `The epiphyllum generation interval from **Moonlight Realm** is now reduced to **0.3** seconds. Epiphyllums will attach to the enemy.  
            The duration of **Moonlight Realm** is now increased to **20** seconds.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `While under the effect of **Moonlight Realm**, gain **30** weapon charge every second and increase the damage of discharge skills by **15%**.`,

            // Global 6 star is so bad that it's unusable
            star6: `**Moonlight Realm** can be activated up to **2** times. Gain **1** charge from skill cooldown. Gain **1** charge from using discharge skills **3** times (effective in the background). The ATK bonus while inside **Moonlight Realm** is increased to **15%**.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, use Shadoweave to launch 5 consecutive attacks.`,
                    breakdown: [
                        `Deal damage equal to **59.9%** of ATK + **3**.`,
                        `Deal damage equal to **57.1%** of ATK + **3**.`,
                        `Deal damage equal to **49.5%** of ATK + **3**.`,
                        `Deal damage equal to **114.2%** of ATK + **6**.`,
                        `Deal damage equal to **152.2%** of ATK + **8**.`
                    ]
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump", "Attack x5"],
                    description: `While airborne, use normal attack to attack 5 times in a row.`,
                    breakdown: [
                        `Deal damage equal to **30.6%** of ATK + **2**.`,
                        `Deal damage equal to **55.6%** of ATK + **3**.`,
                        `Deal damage equal to **48.2%** of ATK + **3**.`,
                        `Deal damage equal to **111.2%** of ATK + **6**.`,
                        `Deal damage equal to **148.3%** of ATK + **8**.`
                    ]
                },
                {
                    name: "Scattered Soil",
                    input: ["Attack", "hold:Attack"],
                    description:
                        `After the second normal attack on the ground or in mid-air, hold normal attack to trigger Scattered Soil. Attack the target position, dealing damage equal to **83.2%** of ATK + **4** and knocking the target down.  
                        Passive: After unleashing Scattered Soil on the ground, rapidly tapping normal attack will immediately unleash Brief Bloom (fully charged).`
                },
                {
                    name: "Brief Bloom",
                    input: ["hold:Attack"],
                    description:
                        `Hold normal attack to unleash Brief Bloom. Can be charged for up to 3 stacks, with hyperbody and control immunity during charging.  
                        &nbsp;  
                        First stack: Deal damage equal to **73.9%** ATK + **4**.  
                        Second stack: Deal damage equal to **146.2%** of ATK + **8**.  
                        Third stack: Deal damage equal to **246.4%** of ATK + **13**.`
                },
                {
                    name: "Falling Shadow",
                    input: ["Jump", "hold:Attack"],
                    description: `Hold normal attack in mid-air to trigger Falling Shadow. Plummet from the skies, dealing damage equal to **160%** of ATK + **8** and knocking the target down.`
                },
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Leafy Green",
                    input: ["Dodge", "Attack"],
                    description:
                        `Unleash Leafy Green at the target while performing a backflip, dealing damage equal to **70%** of ATK + **4**, generating **1-3** epiphyllums upon hit, and forming a Green Field that lasts for **5** seconds. When enemies in the Green Field lock onto the Wanderer, their movement speed is reduced by **50%**.  
                        Passive: Can be unleashed on the ground or mid-air.  
                        Passive: Immediately break the control if under control effect and automatically release Leafy Green without any cost of dodge. Skill cooldown lasts for **20** seconds.`
                }
            ],
            skill: [
                {
                    name: "Moonlight Realm",
                    description: 
                        `Create a Moonlight Realm around yourself for **15** seconds. Your attack in the realm is increased by **15%**, jumping ability increased by **20%**, and endurance consumption reduced by **50%**. Cooldown: **30** seconds.  
                        Enter the special state Airbloom when using Shadoweave in the realm. Your fall speed is greatly reduced and you can perform multiple double-jumps. In this state, using the directional controls or jumping button while mid-air will perform a Roam and launch an attack on the target. Upon hit, deal damage equal to **66%** of ATK + **3** and randomly generate **1-3** epiphyllums.  
                        &nbsp;  
                        Passive: In the Moonlight Realm, **1** epiphyllum will be generated near 1 target every **0.8** seconds.  
                        Passive: When you use Shadoweave in Moonlight Realm, an extra **50%** of damage is dealt to enemies with less than **20%** HP.  
                        Passive: When you use Shadoweave in Moonlight realm, you will blink away from the target when incoming damage is detected. Cooldown: **10** seconds.`
                },
                {
                    name: "Passive: Weapons Master",
                    description: 
                        `Flame: When Shadoweave is paired with 2 flame weapons, Moonlight Realm is converted to Flame: Moonlight Realm, which lasts for an extra **4** when burning targets seconds. Targets with shields take an extra **15%** flame damage.  
                        &nbsp;  
                        Volt: When Shadoweave is paired with 2 volt weapons, Moonlight Realm is converted to Volt: Moonlight Realm, with a **65%** chance of not consuming a dodge attempt when dodging, and a **5%** boost to dodge attack damage, and volt damage is boosted an extra **10%**.  
                        &nbsp;  
                        Frost: When Shadoweave is paired with 2 frost weapons, Moonlight Realm is converted to Frost: Moonlight Realm. While in Frost: Moonlight Realm, frost ATK is increased by **10%**.  
                        &nbsp;  
                        Physical: When Shadoweave is paired with 2 physical weapons, Moonlight Realm is converted to Physical: Moonlight Realm. While in Physical: Moonlight Realm, deal damage equal to **50%** of ATK + **3** to targets within attack range every second.  
                        &nbsp;  
                        Balance: When Shadoweave is paired with any two different elemental weapons (among flame, volt, frost, and physical weapons), the Wanderer's ATK is increased by **15%** in the realm, and counted as activating flame, volt, frost, and physical resonance without resonance effects.`
                }
            ],
            discharge: [
                {
                    name: "Gravity Weave",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder** and unleashes Gravity Weave with a stronger absorption force, dealing damage equal to **368.5%** of ATK + **19**. Then explode and create a ranged diffusion wave after **5** seconds, dealing damage equal to **184.3%** + **10**. Damage immunity lasts for **1.5** seconds while the skill is active (unavailable in Apex League).`
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Lin",
                pieces: 4,
                description: "Extremely powerful damage and attack buffs that are easy to upkeep."
            },
            {
                name: "Samir",
                pieces: 2,
                description: "Recommended only if you're using Shadoweave as a DPS and not solely for DoT/buffs, otherwise use Lin 2-piece set. Shadoweave deals many hits, easily maintaining uptime of the damage buff."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "Recommended only if you're using Shadoweave as a DPS and not solely for DoT/buffs, otherwise use Lin 2-piece set. At high crit rate, Crow's 2 set is the second best choice for damage. Otherwise, opt for 2-piece Shiro matrices."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `Increase ATK by **2.1%/2.6%/3.1%/3.6%** on hit for **18** seconds, stacking up to 5 times. Only the effect of the highest level is applied when obtained repeatedly.`,

        set4: `Every 5m traveled within Moonlight Realm grants 1 stack of Moonlight, increasing final damage by **4%/4.9%/5.8%/6.7%** for 15 seconds, stacking up to 3 times. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`
    },

    awakening: {
        trait1200: `Increase epiphyllum explosion damage by **15%**.`,

        trait4000: `Increase epiphyllum explosion damage by **20%**. Reduce all resistance by **7%** upon hit by epiphyllums for **7** seconds. This effect does not stack.`,

        giftCategories: ['metalware', 'decorations', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [40, "strangeFragment"],
            [30, "bunnyDoll"],
            [15, "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '175 cm',
        birthplace: 'Mirroria',
        horoscope: 'Virgo',
        birthday: '3 Sep',
        voiceActors: {
            jp: "南條愛乃",
            en: "Erin Yvette",
            cn: "陈婷婷"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: `Weapons Master`,
                    description: `<abbr title="China Exclusive"></abbr> When pairing Shadoweave with other weapons, the **Weapons Master** effect can be created. Epiphyllum will appear around the target randomly and explode within **1-3** seconds, dealing **60%** area damage.`
                }
            },
            advancement: {
                star6: `<abbr title="China Exclusive"></abbr> **Moonlight Realm** can be activated up to **2** times. Gain **1** charge from skill cooldown. Gain **1** charge from using discharge skills **3** times (effective in the background). The damage bonus while inside **Moonlight Realm** is increased to **15%**.`
            },
            abilities: {
                skill: [
                    {
                        name: "Moonlight Realm",
                        description: 
                            `<abbr title="China Exclusive"></abbr> Create a Moonlight Realm around yourself for **15** seconds. Your damage in the realm is increased by **10%**, jumping ability increased by **20%**, and endurance consumption reduced by **50%**. Cooldown: **30** seconds.  
                            Enter the special state Airbloom when using Shadoweave in the realm. Your fall speed is greatly reduced and you can perform multiple double-jumps. In this state, using the directional controls or jumping button while mid-air will perform a Roam and launch an attack on the target. Upon hit, deal damage equal to **66%** of ATK + **3** and randomly generate **1-3** epiphyllums.  
                            &nbsp;  
                            Passive: In the Moonlight Realm, **1** epiphyllum will be generated near 1 target every **0.8** seconds.  
                            Passive: When you use Shadoweave in Moonlight Realm, an extra **50%** of damage is dealt to enemies with less than **20%** HP.  
                            Passive: When you use Shadoweave in Moonlight realm, you will blink away from the target when incoming damage is detected. Cooldown: **10** seconds.`
                    },
                    {
                        name: `Passive: Weapons Master`,
                        description: 
                            `<abbr title="China Exclusive"></abbr> Flame: When Shadoweave is paired with 2 flame weapons, Moonlight Realm is converted to Flame: Moonlight Realm, and burns have their duration extended by **4** seconds. Targets with shields take an extra **15%** flame damage.  
                            &nbsp;  
                            <abbr title="China Exclusive"></abbr> Volt: When Shadoweave is paired with 2 volt weapons, Moonlight Realm is converted to Volt: Moonlight Realm, with a **65%** chance of not consuming a dodge attempt when dodging, and a **35%** boost to dodge attack damage. When using Volt Resonance, increase Volt damage by an extra **30%**.  
                            &nbsp;  
                            <abbr title="China Exclusive"></abbr> Frost: When Shadoweave is paired with 2 frost weapons, Moonlight Realm is converted to Frost: Moonlight Realm. When enemies in the Realm receive frost damage **10** times, they enter a state of frostbite for **15** seconds, receiving **22%** more frost damage. The number of hits to activate frostbite does not accumulate while the enemy is in the frostbite state.  
                            &nbsp;  
                            <abbr title="China Exclusive"></abbr> Physical: When Shadoweave is paired with 2 physical weapons, Moonlight Realm is converted to Physical: Moonlight Realm. When there is an active life shield in the Realm, deal damage equal to **150%** of ATK + **8** every second.  
                            &nbsp;  
                            Balance: When Shadoweave is paired with any two different elemental weapons (among flame, volt, frost, and physical weapons), the Wanderer's ATK is increased by **15%** in the realm, and counted as activating flame, volt, frost, and physical resonance without resonance effects.`
                    },
                ],
                discharge: [
                    {
                        name: "Gravity Weave",
                        description: `<abbr title="China Exclusive"></abbr> When ***weapon charge is full*** or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder** and unleashes Gravity Weave with a stronger absorption force, dealing damage equal to **542%** of ATK + **29**. Then explode and create a ranged diffusion wave after **5** seconds, dealing damage equal to **271%** + **14**. Damage immunity lasts for **2.6** seconds while the skill is active (unavailable in Apex League).`
                    }
                ]
            }
        },

        matrix: {
            set2: `Increase ATK by **3%/3.7%/4.3%/5%** on hit for **18** seconds, stacking up to 5 times. Only the effect of the highest level is applied when obtained repeatedly.`,
    
            set4: `Every 5m traveled within Moonlight Realm grants 1 stack of Moonlight, increasing final damage by **7%/8.3%/9.6%/11%** for 15 seconds, stacking up to 3 times. This Matrix's effect is also active in the off-hand slot, but only the set with the highest star rating will take effect.`
        },
    }
}

export default lin;