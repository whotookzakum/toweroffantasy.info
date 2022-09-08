const king = {
    name: "KING",
    uri: "king",
    imgSrc: "king.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Scythe of the Crow",
        element: "flame",
        type: "dps",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["S", "12.50"],
        charge: ["B", "5.00"],
        materials: ["flame", "green", "blue"],
        advancement: {
            star1: `Increase shatter by **15%**. After shattering the target's shield, deal burn damage equal to **120%** of ATK to the target every second for **15** seconds.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `Increase damage dealt by **10%** for each enemy within **6** meters, up to a maximum of **30%**.`,

            star4: `Increase the current weapon's base ATK growth by **32%**.`,

            star5: `Increase damage dealt against HP shields or shielded enemies by **100%**.`,

            star6: `Increase damage dealt by **10%** for each enemy slain for **30** seconds. Stack up to **3** times.`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    type: "normal",
                    description: `While on the ground, swing the scythe to launch 5 consecutive attacks.`,
                    breakdown: [
                        'Deal damage equal to **57.1%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **49.1%** of ATK + **3** and knock the target back a short distance.',
                        'Deal damage equal to **106.8%** of ATK + **6** and knock the target back a short distance.',
                        'Deal damage equal to **109.5%** of ATK + **6** and knock the target back a short distance.',
                        'Deal damage equal to **104.2%** of ATK + **5**, **strongly suspend** the target, and cause the Wanderer to go airborne.'
                    ]
                },
                {
                    name: "Rising Scythe",
                    input: ["Jump","Attack x5"],
                    type: "normal",
                    description: `While airborne or after jumping once, attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **63.4%** of ATK + **3**.',
                        'Deal damage equal to **68.8%** of ATK + **4**.',
                        'Deal damage equal to **190.5%** of ATK + **10**.',
                        'Deal damage equal to **213.6%** of ATK + **11**.',
                        'Deal damage equal to **173.9%** of ATK + **9** and knock the target down. The higher the altitude when triggering the attack, the greater the damage dealt, up to **600%** damage.'
                    ]
                },
                {
                    name: "Asunder",
                    input: ["Jump","hold:Attack"],
                    description: 
                        `Tap and hold normal attack while airborne (or tap when a target is selected), or tap normal attack while climbing, jumping backward, or using the Jetpack to trigger Asunder. While falling, deal damage equal to **12.5%** of ATK + **1** each hit. Upon landing, deal damage equal to **71.9%** of ATK + **4** and deliver a **knockdown**.  
                        The higher the altitude when triggering the attack, the greater the damage dealt, up to **600%** damage.`
                },
                {
                    name: "Returning Chainblade",
                    input: ["Attack x4","hold:Attack"],
                    description: `After the fourth normal attack, hold the normal attack button to trigger Returning Chainblade. Transform into a chainblade, dealing damage equal to **137.4%** of ATK + **7** to nearby targets and pulling them in.`
                },
                {
                    name: "Sneak Attack",
                    input: ["Crouch","Attack"],
                    description: `Approach the enemy from behind while crouching, then tap normal attack to use Sneak Attack, dealing damage equal to **570%** of ATK + **30**.`
                }
            ],
            dodge: [
                {
                    name: "Returning Chainblade",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Rapid Lunge. Deal up to **126.9%** of ATK + **7** damage and pull in nearby enemies.`
                },
                {
                    name: "Domain of the Bat",
                    input: ["Dodge"],
                    description: `When dodging, summon a group of bats that pulls the target into the center. Tap normal attack during the short period after dodging to swing the scythe, dealing up to **114.3%** of ATK + **6** damage to the target.`
                },
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to trigger a Phantasia, reducing the speed of enemies within an area. Become immune to hitstun for **0.5** seconds while dodging.`
                }
            ],
            skill: [
                {
                    name: "Mortal Coil",
                    description: `Swing the scythe, dealing damage equal to **499.9%** of ATK + **26**. Cooldown: **45** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Flaming Scythe",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder** and create a Flaming Scythe upon switching to this weapon, dealing damage equal to **398.3%** of ATK + **21** and lasts for **10** seconds. Additionally, spawn Flaming Scythes every **2** seconds. The scythes summon volcanic eruptions from the ground, which deal damage equal to **66%** of ATK + **3** to targets and suspend them.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/GGT4yoDCb4I?start=10",
        recommendedMatrices: [
            {
                name: "Shiro",
                pieces: 2,
                description: "Great set for both damage and shatter."
            },
            {
                name: "KING",
                pieces: 2,
                description: "Decent option if you only use Scythe of the Crow for shield breaking."
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
        set2: `When a target is shattered, grant **8%/10%/12%/14%** damage boost for **25** seconds. Only the highest level is applied when the effect is obtained repeatedly.`,

        set4: `When there are more than 2 enemies around, hits restore HP equal to **14%/18%/22%/26%** of damage dealt upon attacking. The maximum HP restored every **0.5** seconds must not exceed **36%/42%/48%/54%** of ATK.`
    },

    awakening: {
        trait1200: "Every **7** enemies killed by KING restores HP equal to **8%** of Max HP.",

        trait4000: "Every **5** enemies killed by KING restores HP equal to **10%** of Max HP.",

        giftCategories: ['collectibles', 'rare-items', 'limited-edition'],

        gifts: [
            [80, "seal", "goldCoin"],
            [60, "kitchenware", "tataCards", "foxFigure", "catFigure", "miaFigure", "tataFigure", "ufo", "psp", "snowglobe", "linyeFigure"],
            [30, "necklace", "vial"],
            [15, "photo", "snackBox", "harmonica", "strangePlant"]
        ]
    },

    bio: {
        gender: 'Male',
        height: '190 cm',
        birthplace: 'Crown',
        horoscope: 'Scorpio',
        birthday: '3 Nov',
        voiceActors: {
            jp: "松岡禎丞 (Yoshitsugu Matsuoka)",
            en: "Johnny Young",
            cn: "子晰"
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
            ]
        },
        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> For every 10% of shield broken, gain a **4%/5%/6%/7%** damage buff, up to **3** stacks, lasting **25** seconds.`
        }
    }
}

export default king;