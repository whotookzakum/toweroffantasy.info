const ruby = {
    name: "Ruby",
    uri: "ruby",
    imgSrc: "ruby.webp",
    rarity: "SSR",
    banners: {
        cn: [
            {
                bannerNo: 9,
                start: "25 Apr 2022",
                end: "13 May 2022",
                duration: "18d",
                week: "20~22"
            },
            {
                bannerNo: 19,
                subtext: "",
                start: "30 Aug 2022",
                end: "18 Sep 2022",
                duration: "19d",
                week: "39~42"
            }
        ],
        glob: [
            {
                bannerNo: 5,
                start: "20 Oct 2022",
                end: "9 Nov 2022",
                duration: "20d",
                week: "11~14"
            }
        ]
    },
    weapon: {
        name: "Spark",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["S", "11.50"],
        charge: ["A", "8.00"],
        materials: ["flame", "green", "blue"],
        bonusEffect: {
            effect1: {
                title: "Flame Resonance",
                description: "Increase flame ATK by **15%** and flame resistance by **25%**. Activate by equipping **2** or more flame weapons. This set effect works in the off-hand slot. Cannot stack with effects of the same type."
            }
        },
        advancement: {
            star1: `Emblazen boosts the damage of Spark Attack to **80%**. Skill cooldown drops to **24** seconds.`,

            star2: `Increase the current weapon's base ATK growth by **16%**.`,

            star3: `Emblazen increases flame boost by **8%** and the burn multiplier to **75%**`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Restore an additional **75** points of weapon charge each time Spark Attack hits an enemy. Cooldown: 0.9 seconds. Shatter increases by **25%** when Ultimate Heat is active.`,

            star6: `Emblazen boosts the damage of Spark Attack to **160%** and double Heat acquisition efficiency. Skill cooldown drops to **16** seconds.`
        },
        abilities: {
            normal: [
                {
                    name: "Spark Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, tap the normal attack button to command Spark to attack 5 times in a row.`,
                    breakdown: [
                        `Deal damage equal to **84.6%** of ATK + **4** to each target.`,
                        `Deal damage equal to **93%** of ATK + **5** to each target.`,
                        `Deal damage equal to **101.5%** of ATK + **5** to each target.`,
                        `Deal damage equal to **109.9%** of ATK + **6** to each target.`,
                        `Deal damage equal to **253.7%** of ATK + **13** to each target and **launches** them.`
                    ]
                },
                {
                    name: "Aerial Discharge",
                    input: ["Jump", "Attack x5"],
                    description: `While airborne, tap the normal attack button to command Spark to attack 4 times in a row.`,
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
                    description: `Tap and hold the normal attack button or do this after Lockdown Zone is triggered to continuously fire searing energy beams at enemies in a target direction, dealing damage equal to 40%** of ATK + **2**. Consumes Wanderer's endurance.`
                },
                {
                    name: "Blazing Dive",
                    input: ["Jump", "hold:Attack"],
                    description: `Tap and hold normal attack while airborne to trigger Blazing Dive.  
                    &nbsp;  
                    Envelop the body in energy before rapidly plunging into the ground, dealing damage equal to **172.1%** of ATK + **9** to nearby targets.`
                },
                {
                    name: "Lockdown Zone",
                    input: ["Attack x2", "hold:Attack"],
                    description: `After the second normal attack, hold the button during any attack to deal damage equal to **40%** of ATK + **2** against the target. The locked-on target is confined and burned for **3** seconds, and damage equal to **26.2%** of ATK + **1** is dealt to the target every second (ineffective against bosses).`
                }
            ],
            dodge: [
                {
                    name: "Go, Dolly!",
                    input: ["Dodge", "Attack"],
                    description: `Throw Dolly after dodging. Dolly remains for **10** seconds, drawing in nearby enemies and dealing damage equal to **84.6%** of ATK + **4** against them, as well as taunting them for **1.5** seconds, causing them to divert their attacks to Dolly (cannot taunt enemies when in a team).`
                },
                {
                    name: "Dodge",
                    description:
                        `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                },
            ],
            skill: [
                {
                    name: "Sparkling Collider",
                    description:
                        `Spark fires out Sparks that last for 15 seconds and bounces between the target and the Wanderer. Upon hitting the target, the Sparks slot it down for **4** seconds with a **15**-second cooldown. Sparks deals more damage the further it travels. On hit, it deals damage up to **350%** of ATK + **37** and inflicts a **25** second Emblazen mark on the target. At the same time, spark fires 4 bullets with each bullet dealing damage equal to **50%** of ATK + **3** against its target. Spark's normal attacks deal **30%** more damage to Emblazen-marked targets. When Sparks hits targets burned by the Wanderer, it burns or ignites the target once and deals additional damage equal to **45%** of the total remaining damage (multiple burn or incendiary effects are counted together). The result calculation cooldown is **6** seconds and the skill cooldown is **30** seconds.  
                        &nbsp;
                        **Passive**: When Sparks is active, each time Spark Attack deals damage, the Wanderer gains **1** point of Heat with a **0.9**-second cooldown, for up to **8** points of Heat. When Heat reaches the maximum, the Wanderer gains the effect Ultimate Heat, increasing flame ATK by **10%** for **25** seconds.`
                        // `Sparky shoots a [**spark**] forward for **15** seconds, bouncing between the target and the player and slowing the target's movement and attack speed for **4** seconds, cooldown **15** seconds.  
                        // &nbsp;  
                        // The farther the distance, the higher the damage, up to **700%** of ATK + **37** damage. Applies the [**Hot**] mark for **25** seconds, and release 4 bullets, each dealing **50%** of ATK + **3** damage to the target.  
                        // &nbsp;  
                        // Sparky's basic attack damage to the target marked by [**Hot**] increases to **110%**. If the target is affected by a burn inflicted by you, when [**Spark**] hits, trigger a burn or ignite an additional damage of **100%** of the remaining total damage (multiple burns or burns are combined), the cooldown is **6** seconds, and the skill cooldown is **30** seconds.  
                        // &nbsp;  
                        // **Passive**: During the existence of [**Spark**], every time Sparky's basic attack deals 1 damage, gain **1** stack of [**Heat Energy**], up to one every **0.9** seconds, up to a maximum of **8** stacks. At max stacks, gain [**Ultimate Heat Energy**], increasing Flame ATK by **25%** for **25** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Supernova",
                    description: "When ***weapon charge*** is full or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder**. Spark enters a charged state, continuously blasting searing energy beams at the target location before eventually exploding, dealing damage equal to **750%** of ATK + **39**. When Sparks hits targets burned by the Wanderer, it burns or ignites the target once and deals additional damage equal to **45%** of the total remaining damage (multiple burn or incendiary effects are counted together). The result calculation cooldown is **6** seconds. Damage immunity lasts for **1.5** seconds when the skill is active (unavailable in Apex League)."
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
                name: "Samir",
                pieces: 2,
                description: "High damage buff that can be maintained with Sparky's multiple attacks."
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
        set2: `Increases flame ATK after casting weapon skill by **8%/10%/12%/15%** for **25** seconds. If multiple star rating effects are triggered, the one triggered last prevails. This effect does not stack.`,

        set4: `Grant Mastery after casting weapon skill for **15** seconds, with a cooldown of **15** seconds (Mastery shares cooldowns across levels). Mastery is not stackable. Increases flame damage by **2%/2.5%/3%/3.5%** every time the target is hit with a normal attack until the end of Mastery. Stacks up to **6** times, adding a maximum of **1** stack every **0.2** seconds. At **6** stacks, grants a shield that can block damage **1** time.`
    },

    awakening: {
        trait1200: `Increases the flame damage taken by all enemies within **5** meters of Dolly by **8%**. This effect does not stack.`,

        trait4000: `Increases the flame damage taken by all enemies within **5** meters of Dolly by **8%**. Not stackable. Increases flame ATK after throwing Dolly for **12%** for **10** seconds. This effect does not stack.`,

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
            en: "Lizzie Freeman",
            cn: "赵爽"
        }
    },

    cnData: {
        weapon: {
            bonusEffect: {
                effect1: {
                    title: "Flame Resonance",
                    description: "<abbr title='China Exclusive'></abbr> Increase flame ATK by **20%** and flame resistance by **40%**. Activate by equipping **2** or more flame weapons. This set effect works in the off-hand slot. Cannot stack with effects of the same type."
                }
            },
            advancement: {
                star1: `<abbr title='China Exclusive'></abbr> Emblazen boosts the damage of Spark Attack to **182%**. Skill cooldown drops to **24** seconds.`,
    
                star3: `<abbr title='China Exclusive'></abbr> Emblazen increases flame boost by **18%** and the burn multiplier to **150%**`,
    
                star5: `<abbr title='China Exclusive'></abbr> Restore an additional **75** points of weapon charge each time Spark Attack hits an enemy. Cooldown: 0.9 seconds. Shatter increases by **25%** when Ultimate Heat is active.`,
    
                star6: `<abbr title='China Exclusive'></abbr> Emblazen boosts the damage of Spark Attack to **240%** and double Heat acquisition efficiency. Skill cooldown drops to **16** seconds.`
            },
            abilities: {
                skill: [
                    {
                        name: "Sparkling Collider",
                        description:
                            `<abbr title='China Exclusive'></abbr> Spark fires out Sparks that last for 15 seconds and bounces between the target and the Wanderer. Upon hitting the target, the Sparks slot it down for **4** seconds with a **15**-second cooldown. Sparks deals more damage the further it travels. On hit, it deals damage up to **700%** of ATK + **37** and inflicts a **25** second Emblazen mark on the target. At the same time, spark fires 4 bullets with each bullet dealing damage equal to **50%** of ATK + **3** against its target. Spark's normal attacks deal **110%** more damage to Emblazen-marked targets. When Sparks hits targets burned by the Wanderer, it burns or ignites the target once and deals additional damage equal to **100%** of the total remaining damage (multiple burn or incendiary effects are counted together). The result calculation cooldown is **6** seconds and the skill cooldown is **30** seconds.  
                            &nbsp;
                            **Passive**: When Sparks is active, each time Spark Attack deals damage, the Wanderer gains **1** point of Heat with a **0.9**-second cooldown, for up to **8** points of Heat. When Heat reaches the maximum, the Wanderer gains the effect Ultimate Heat, increasing flame ATK by **25%** for **25** seconds.`
                    }
                ],
                discharge: [
                    {
                        name: "Supernova",
                        description: "<abbr title='China Exclusive'></abbr> When ***weapon charge*** is full or ***Phantasia*** is triggered, switching to this weapon from another weapon **removes all debuffs from the wielder**. Spark enters a charged state, continuously blasting searing energy beams at the target location before eventually exploding, dealing damage equal to **750%** of ATK + **39**. When Sparks hits targets burned by the Wanderer, it burns or ignites the target once and deals additional damage equal to **100%** of the total remaining damage (multiple burn or incendiary effects are counted together). The result calculation cooldown is **6** seconds. Damage immunity lasts for **2.6** seconds when the skill is active (unavailable in Apex League)."
                    }
                ]
            },
        },

        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> Increases flame ATK after casting weapon skill by **15%/18%/21%/25%** for **25** seconds. If multiple star rating effects are triggered, the one triggered last prevails. This effect does not stack.`,
    
            set4: `<abbr title='China Exclusive'></abbr> Grant Mastery after casting weapon skill for **15** seconds, with a cooldown of **15** seconds (Mastery shares cooldowns across levels). Mastery is not stackable. Increases flame damage by **4%/5%/6%/7%** every time the target is hit with a normal attack until the end of Mastery. Stacks up to **6** times, adding a maximum of **1** stack every **0.2** seconds. At **6** stacks, grants a shield that can block damage **1** time.`
        },
    }
}

export default ruby;