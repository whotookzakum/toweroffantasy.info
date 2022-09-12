const meryl = {
    name: "Meryl",
    uri: "meryl",
    imgSrc: "meryl.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Rosy Edge",
        element: "ice",
        type: "defense",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["S", "12.00"],
        charge: ["B", "4.00"],
        materials: ["ice", "red", "black"],
        advancement: {
            star1: "Increase shatter by **15%** and restore **10%** of HP after shattering the target's shield.",

            star2: "Increase the current weapon's base HP growth by **16%**.",

            star3: "Upon switching to the weapon, gain an Ice Shield equal to **10%** of Max HP. Cooldown **20** seconds. The Ice Shield lasts up to **10** seconds.",

            star4: "Increase the current weapon's base HP growth by **32%**.",

            star5: "Increase damage and shatter by **50%** while the shield is active.",

            star6: "Upon switching to the weapon, gain an Ice Shield equal to **20%** of Max HP and immmune to controls when shield is active. Cooldown: **20** seconds. The Ice Shield lasts up to **10** seconds."
        },
        abilities: {
            normal: [
                {
                    name: "Heavy Cleave",
                    input: ["Attack x4"],
                    description: `While on the ground, swing a greatsword to attack 4 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **72.9%** of ATK + **4** and knock the target back a short distance.',
                        'Deal damage equal to **60.1%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **105.4%** of ATK + **6** and knock the target back a short distance.',
                        'Deal damage equal to **156.3%** of ATK + **8**, **strongly suspend** the target, then launch them upon landing.'
                    ]
                },
                {
                    name: "Aerial Strike",
                    input: ["Jump","Attack x4"],
                    description: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **106.5%** of ATK + **6**.',
                        'Deal damage equal to **87.5%** of ATK + **5**.',
                        'Deal damage equal to **156%** of ATK + **8**.',
                        'Deal damage equal to **140.5%** of ATK + **7** and deliver a **knockdown**, launch the target upon landing.'
                    ]
                },
                {
                    name: "Rising Slash",
                    input: ["Attack x3","hold:Attack"],
                    description: `After the third normal attack, hold normal attack to trigger Rising Slash. Upon hit, **strongly suspend** the target and go airborne, dealing damage equal to **64.3%** of ATK + **3**.`,
                },
                {
                    name: "Moonset Slash",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Moonset Slash. While falling, each hit deals damage equal to **12.5%** of ATK + **1**. Upon landing, deal damage equal to **140.5%** of ATK + **7** and launch targets. The higher the altitude when triggering the attack, the greater the damage dealt, up to **600%** damage.`,
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
                },
                {
                    name: "Whirlwind",
                    input: ["hold:Attack"],
                    description: `While standing still or moving, tap and hold normal attack to trigger Whirlwind, dealing damage equal to **132.8%** of ATK + **7** every **0.5** seconds to the target. Grant hitstun immunity while in use.`,
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Devastate",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Devastate. Deal damage equal to **65.9%** of ATK + **3** each hit and **launch** targets.`,
                },
                {
                    name: "Crescent Slash",
                    input: ["Dodge","Attack"],
                    description: `Tap normal attack during the short period after dodging to trigger Crescent Slash. Swing the blade to unleash sword auras forward, each dealing damage equal to **49.6%** of ATK + **3**.`,
                }
            ],
            skill: [
                {
                    name: "Blizzard",
                    description: `Swing the blade to launch sword auras forward, each dealing damage equal to **141.7%** of ATK + **7** and increasing damage dealt by **5%** with each hit. While active, immune to control effects. Cooldown: **45** seconds.`,
                }
            ],
            discharge: [
                {
                    name: "Frost Barrier",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, upon switching to this weapon, **remove all debuffs from the wielder**, and smash the ground to form a barrier, dealing damage equal to **503.2%** of ATK + **26** to nearby enemies, knocking enemies into the air. This reduces their speed by **50%** and stops them from dodge or jump. The barrier lasts **5** seconds and blocks projectiles.`,
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/53QNsZxM5kg?start=11",
        recommendedMatrices: [
            {
                name: "Shiro",
                pieces: 2,
                description: "Great set for both damage and shatter."
            },
            {
                name: "KING",
                pieces: 2,
                description: "Decent option if you only use Rosy Edge for shield breaking."
            },
            {
                name: "Crow",
                pieces: 2,
                description: "High damage matrix when you have high crit rate."
            },
            {
                name: "Sobek",
                pieces: 3,
                description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
            }
        ]
    },

    matrix: {
        set2: 
            `If HP is less than **30%** after being attacked, gain a shield equal to **20%/26%/32%/40%** of Max HP for **10** seconds. Cooldown: **90** seconds.`,

        set4: 
            `Increase Whirlwind's damage by **36%/45%/54%/63%** and restore HP equal to **30%/38%/44%/50%** of the damage dealt while Whirlwind is active. The maximum HP restored every **0.5** seconds cannot exceed **60%/72%/81%/90%** of ATK.`,
    },

    awakening: {
        trait1200: 
            `Reduce frost damage received by Meryl by **20%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**.`,

        trait4000: 
            `Reduce frost damage received by Meryl by **25%**, gain immunity to the frostbitten effect, and reduce duration of being frozen by **50%**. Meryl's surroundings will freeze.`,

        giftCategories: ['metalware', 'rare-items'],

        gifts: [
            [80, "seal"],
            [60, "goldCoin", "miaFigure", "foxFigure", "snowglobe", "kitchenware", "ufo", "linyeFigure"],
            [30, "necklace", "vial"],
            [15, "photo", "harmonica", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '170 cm',
        birthplace: '???',
        horoscope: 'Libra',
        birthday: '10 October',
        voiceActors: {
            jp: "石川由依 (Yui Ishikawa)",
            en: "Kira Buckland",
            cn: "秦紫翼"
        }
    },

    cnData: {
        weapon: {
            recommendedMatrices: [
                {
                    name: "Shiro",
                    pieces: 2,
                    description: "Great set for both damage and shatter."
                },
                {
                    name: "KING",
                    pieces: 2,
                    description: "High stacking buff for when you can break 30% of a shield by yourself. The effect stacks with other KING 2-piece sets, which may be useful in Bygone Phantasm."
                },
                {
                    name: "Crow",
                    pieces: 2,
                    description: "High damage matrix when you have high crit rate."
                },
                {
                    name: "Sobek",
                    pieces: 3,
                    description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
                }
            ],
            abilities: {
                normal: [
                    {
                        name: "Heavy Cleave",
                        input: ["Attack x4"],
                        description: `While on the ground, swing a greatsword to attack 4 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **66.8%** of ATK + **4** and knock the target back a short distance.',
                            'Deal damage equal to **55.1%** of ATK + **3** and knock the target back a short distance.',
                            'Deal damage equal to **96.7%** of ATK + **5** and knock the target back a short distance.',
                            'Deal damage equal to **143.3%** of ATK + **8**, **strongly suspend** the target, then launch them upon landing.'
                        ]
                    },
                    {
                        name: "Aerial Strike",
                        input: ["Jump","Attack x4"],
                        description: `While airborne or after jumping once, tap normal attack to attack 4 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **97.6%** of ATK + **5**.',
                            'Deal damage equal to **80.2%** of ATK + **4**.',
                            'Deal damage equal to **143.2%** of ATK + **8**.',
                            'Deal damage equal to **128.8%** of ATK + **7** and deliver a **knockdown**, launch the target upon landing.'
                        ]
                    },
                    {
                        name: "Rising Slash",
                        input: ["Attack x3","hold:Attack"],
                        description: `After the third normal attack, hold normal attack to trigger Rising Slash. Upon hit, **strongly suspend** the target and go airborne, dealing damage equal to **58.9%** of ATK + **3**.`,
                    },
                    {
                        name: "Moonset Slash",
                        input: ["Jump","hold:Attack"],
                        description: `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Moonset Slash. While falling, each hit deals damage equal to **12.5%** of ATK + **1**. Upon landing, deal damage equal to **128.8%** of ATK + **7** and launch targets. The higher the altitude when triggering the attack, the greater the damage dealt, up to **600%** damage.`,
                    },
                    {
                        name: "Sneak Attack",
                        input: ["Crouch","Attack"],
                        description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`,
                    },
                    {
                        name: "Whirlwind",
                        input: ["hold:Attack"],
                        description: `While standing still or moving, tap and hold normal attack to trigger Whirlwind, dealing damage equal to **121.7%** of ATK + **6** every **0.5** seconds to the target. Grant hitstun immunity while in use.`,
                    }
                ],
                dodge: [
                    {
                        name: "Dodge",
                        description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                    },
                    {
                        name: "Devastate",
                        input: ["Arrow keys","Dodge","Attack"],
                        description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Devastate. Deal damage equal to **60.5%** of ATK + **3** each hit and **launch** targets.`,
                    },
                    {
                        name: "Crescent Slash",
                        input: ["Dodge","Attack"],
                        description: `Tap normal attack during the short period after dodging to trigger Crescent Slash. Swing the blade to unleash sword auras forward, each dealing damage equal to **45.5%** of ATK + **2**.`,
                    }
                ],
                skill: [
                    {
                        name: "Blizzard",
                        description: `Swing the blade to launch sword auras forward, each dealing damage equal to **129.9%** of ATK + **7** and increasing damage dealt by **5%** with each hit. While active, immune to control effects. Cooldown: **45** seconds.`,
                    }
                ],
                discharge: [
                    {
                        name: "Frost Barrier",
                        description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, upon switching to this weapon, **remove all debuffs from the wielder**, and smash the ground to form a barrier, dealing damage equal to **461.3%** of ATK + **24** to nearby enemies, knocking enemies into the air. This reduces their speed by **50%** and stops them from dodge or jump. The barrier lasts **5** seconds and blocks projectiles.`,
                    }
                ]
            },
        },
        matrix: {
            set4: `<abbr title='China Exclusive'></abbr> Converts **60%/75%/90%/105%** of damage dealt during shield to health, restores no more than **105%/127.5%/150%/172.5%** of ATK every 0.5 seconds.`
        }
    }
}

export default meryl;
