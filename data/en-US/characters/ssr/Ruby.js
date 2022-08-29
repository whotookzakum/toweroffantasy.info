const ruby = {
    name: "Ruby",
    uri: "ruby",
    imgSrc: "ruby.webp",
    rarity: "SSR",
    chinaOnly: true,
    banners: {
        cn: [
            {
                bannerNo: 9,
                start: "25 Apr 2022",
                end: "13 May 2022",
                duration: "18d",
                week: "20~22"
            }
        ]
    },
    weapon: {
        name: "Sparky",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["A", "8.00"],
        materials: ["flame", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description: "When equipped with **2** or more Flame weapons, increase Flame ATK by **20%** and Flame Resistance by **40%**, taking effect in the background."
            }
        },
        advancement: {
            star1: `[Scorching Heat] Increases Sparky's basic attack damage to **182%**. Weapon Skill cooldown reduced to **24** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `[Scorching Heat] Incidental fire damage increased by **18%**; scorch settlement multiplier increased to **150%**.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Each time Sparky's basic attack hits an enemy unit **75** weapon charge is restored, cooldown 0.9 seconds. During [Ultimate Heat], Shatter is increased by **25%**.`,

            star6: `[Scorching Heat] Increases Sparky's basic attack damage to **240%** and doubles the effectiveness of [Heat]. Weapon Skill cooldown reduced to **16** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Spark Attack",
                    input: ["Attack x5"],
                    description: `Click on the basic attack while on the ground, and control Sparky to attack 5 times in a row.`,
                    breakdown: [
                        `Deal damage equal to **84.6%** of ATK + **4** to each target.`,
                        `Deal damage equal to **94%** of ATK + **5** to each target.`,
                        `Deal damage equal to **101.5%** of ATK + **5** to each target.`,
                        `Deal damage equal to **109.9%** of ATK + **6** to each target.`,
                        `Deal damage equal to **253.7%** of ATK + **13** to each target and **suspends** them.`
                    ]
                },
                {
                    name: "Aerial Attack",
                    input: ["Jump", "Attack x5"],
                    description: `When you are in the air, click on the basic attack, and you can control Spark to attack 4 times in a row.`,
                    breakdown: [
                        `Deal damage equal to **97.1%** of ATK + **5** to each target.`,
                        `Deal damage equal to **106.8%** of ATK + **6** to each target.`,
                        `Deal damage equal to **121.3%** of ATK + **6** to each target.`,
                        `Deal damage equal to **145.6%** of ATK + **8** to each target.`
                    ]
                },
                {
                    name: "Gotcha!",
                    input: ["hold:Attack"],
                    description: `Hold normal attack, or Hold normal attack after triggering **Forbidden Realm to continuously shoot out a flame beam, dealing damage equal to 40%** of ATK + **2** to targets in your direction, while consuming stamina.`
                },
                {
                    name: "Flame Fall",
                    input: ["Jump", "hold:Attack"],
                    description: `Hold basic attack while in the air to trigger the flame fall. Wrapped in an energy body, it quickly falls to the ground, dealing **172.1%** of ATK + **9** damage to surrounding targets.
                    `
                },
                {
                    name: "Forbidden Realm",
                    input: ["Attack x2", "hold:Attack"],
                    description: `Press and hold attack after the second basic attack, dealing damage equal to **40%** of ATK + **2** to the target, and locking the target (not strong control) and burning for **3** seconds, dealing damage equal to **26.2%** of ATK + **1** per second (does not apply to bosses).`
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
                {
                    name: "Dolly",
                    input: ["Dodge", "Attack"],
                    description: `Attack after dodging to throw Dolly, which lasts for **10** seconds and attracts nearby enemies, dealing damage equal to **84.6%** of ATK + **4** and taunting the enemy for **1.5** seconds (taunting does not work in group play). Taunted enemies will target Dolly.`
                },
            ],
            skill: [
                {
                    name: "Sparky Crash",
                    description:
                        `Sparky shoots a [**spark**] forward for **15** seconds, bounces between the target and the player, after hitting the first time, slowing the target's action rate for **4**seconds, cooling down for **15** seconds, the farther the distance, the higher the damage, hitting the enemy can cause up to **700%** of ATK + **37** damage and apply the [**Hot**] mark for **25** seconds, and release 4 bullets at the same time, each bullet deals **50%** of ATK + **3** damage to the target; Sparky's basic attack damage to the target marked by [**Hot**] increases to **110%**. If the target has a self-inflicted burn, when [**Spark**] hits, trigger a burn or ignite an additional damage of **100%** of the remaining total damage (multiple burns or burns are combined), the cooldown is **6** seconds, and the skill cooldown is **30** seconds.  

                        **Passive**: During the existence of [**Spark**], every time Sparky's basic attack deals 1 damage, the player will accumulate **1** point of [**Heat Energy**] to cool down for **0.9** seconds, up to a maximum of **8** points. When the [**Heat Energy**] reaches the upper limit, the player will get the effect of [**Ultimate Heat Energy**]. Fire attack increased by **25%** for **25** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Supernova Explosion",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, **clear all debuffs from the user**. Sparky turns on the charging form, continuously shoots a large-area flame beam forward, and explodes at the end, causing **750%** of ATK + **39** points of damage; if the target has self-inflicted burning, it will trigger a burning or ignition when it hits Additional damage equal to **100%** of the remaining total damage (combined for multiple burns or ignitions), and during the **6**-second cooldown period, the skill is immune to damage for **2.6** seconds (does not apply in Apex League)."
                }
            ]
        },
        recommendedMatrices: [
            {
                name: "Ruby",
                pieces: 4,
                description: "Excellent set for buffing Flame damage and providing utility through a shield. Alternatively, Ruby's 2-piece set is also very good."
            },
            {
                name: "Shiro",
                pieces: 2,
                description: "Good option for increasing Sparky's shatter (and damage)."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix set when you have high crit rate."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: `After using the weapon skill, Flame ATK is increased by **15%/18%/21%/25%** for **25** seconds. The effect works in the background, and if multiple sets are used, the highest star set will take effect (does not stack).`,

        set4: `After releasing the weapon skill, gain Mastery for **15** seconds, cooldown **15** seconds. While Mastery is active, successful basic attacks increase Flame damage by **4%/5%/6%/7%**, up to **6** stacks, with a cooldown of **0.2** seconds between stacks. At **6** stacks, gain a shield to resist damage **1** time. Mastery cannot be stacked, and different levels of mastery share cooldown.`
    },

    awakening: {
        trait1200: `Enemies within **5** meters of Dolly receive **8%** more Flame damage, does not stack.`,

        trait4000: `Enemies within **5** meters of Dolly receive **8%** more Flame damage, does not stack. After throwing Dolly, increase Flame ATK by **12%** for **10** seconds, does not stack.`,

        giftCategories: ['games', 'toys', 'vera'],

        gifts: [
            [80, "princeTataFigure"],
            [60, "linyeFigure"],
            [40, "bunnyDoll"],
            [30, "strangeFragment"],
            [15, "strangePlant"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '140 cm',
        birthplace: '???',
        horoscope: 'Cancer',
        birthday: '15 July',
        voiceActors: {
            jp: "",
            en: "",
            cn: "赵爽"
        }
    }
}

export default ruby;