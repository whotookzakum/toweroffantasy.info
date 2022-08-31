const tsubasa = {
    name: "Tsubasa",
    uri: "tsubasa",
    imgSrc: "tsubasa.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Icewind Arrow",
        element: "ice",
        type: "dps",
        baseStats: ["attack", "health", "crit"],
        shatter: ["B", "4.00"],
        charge: ["S", "11.50"],
        materials: ["ice", "red", "blue"],
        advancement: {
            star1: `Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by **5%** for **15** seconds. Stack up to **3** times.`,
            
            star2: `Increase the current weapon's base ATK growth by **16%**.`,
            
            star3: `Launching a Dodge attack fires **3** Charged Arrows.`,
            
            star4: `Increase the current weapon's base ATK growth by **32%**.`,
            
            star5: `Double duration of Arrow Rain and slow targets by **25%**.`,
            
            star6: `Sharp Arrow stacks up to **5** times. Hitting a target with Charged Arrow immediately grants **3** stacks, headshots grant **5** stacks.`
        },
        abilities: {
            normal: [
                {
                    name: "Quickdraw",
                    input: ["Attack x5"],
                    description: `While on the ground, draw the bow repeatedly to attack 5 times.`,
                    breakdown: [
                        'Deal damage equal to **48.8%** of ATK + **3**.',
                        'Deal damage equal to **43.7%** of ATK + **2**.',
                        'Deal damage equal to **78.6%** of ATK + **4**.',
                        'Deal damage equal to **121.2%** of ATK + **6**.',
                        'Deal damage equal to **112.5%** of ATK + **6** and knock the target back a short distance.'
                    ]   
                },
                {
                    name: "Charged Arrow",
                    input: ["hold:Attack"],
                    description: `Tap and hold normal attack to charge the weapon. Deal basic damage equal to **87.8%** of ATK + **5**, and **50%** more for each 1 second spent charging, up to **3** seconds. Deal double damage when scoring a headshot or when hitting an enemy's weakness, knocking them down (headshots are ineffective against Wanderers).`
                },
                {
                    name: "Arrow Rain",
                    input: ["Attack","hold:Attack"],
                    description: `After any normal attack, hold the normal attack button to unleash Arrow Rain, dealing up to **287.2%** of ATK + **15** area damage to targets.`
                },
                {
                    name: "Air Volley",
                    input: ["Jump","Attack x4"],
                    description: `While airborne, tap normal attack to attack 4 times in a row in the air.`,
                    breakdown: [
                        'Deal damage equal to **56.3%** of ATK + **3**.',
                        'Deal damage equal to **74%** of ATK + **4**.',
                        'Deal damage equal to **112.7%** of ATK + **6**.',
                        'Deal damage equal to **169.8%** of ATK + **9**.'
                    ]    
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`
                },
                {
                    name: "Loaded Arrow",
                    input: ["Dodge","Attack"],
                    description: `Tap attack after dodging to trigger a Loaded Arrow, which **knocking the target back** and dealing damage equal to **124%** of ATK + **7**.`
                }
            ],
            skill: [
                {
                    name: "Piercing Arrow",
                    description: `Perform a backflip and fire **3** piercing arrows, with the main arrow deals damage equal to **258.3%** of ATK + **14**, and the other two arrows deal 60% damage. In addition, **knock targets back** and stun them for **5** seconds if they collide with an obstacle. Cooldown: **12** seconds.`
                }
            ],
            discharge: [
                {
                    name: "Explosive Barrage",
                    description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to **570%** of ATK + **30**. The storm has a **10%** chance to inflict a **2** seconds **freeze effect**. Gain cold front, and increase speed by **45%** for **7** seconds.`
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/GralXQC8G-E?start=10",
        recommendedMatrices: [
            {
                name: "Frigg",
                pieces: 2,
                description: "A good choice for Frost teams as it adds another buff for Icewind Vector to apply."
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
        set2: `Increase damage dealt by **14%/16%/18%/20%** when there are no enemies within 4 meters.`,

        set4: `Upon a headshot or using Icewind Arrow: Piercing Shot, increase ATK by **15%/18%/21%/25%** for 8 seconds.`
    },

    awakening: {
        trait1200: `Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.5%** ATK, up to **15** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.`,

        trait4000: `Each time Tsubasa deals damage, gain **1** stack of Fierce Strike, up to **1** stack per **1** second. Each stack adds **0.6%** ATK, up to **30** stacks. Refreshes effect duration upon gaining the effect again. The effect lasts for **30** seconds.`,

        giftCategories: ['figurines', 'limited-edition', 'rare-items'],

        gifts: [
            [80, "tataPlush", "miaFigure"],
            [60, "seal", "tataCards", "bearFigure", "catFigure", "ufo", "psp", "goldCoin", "snowglobe", "linyeFigure"],
            [30, "vial", "pumpkinFigure", "androidFigure"],
            [15, "photo", "snackBox", "harmonica"]
        ],
    },

    bio: {
        gender: 'Female',
        height: '169 cm',
        birthplace: 'Astra',
        horoscope: 'Aries',
        birthday: '24 Mar',
        voiceActors: {
            jp: "小原好美 (Konomi Kohara)",
            en: "Amber Lee Connors",
            cn: "徐徐"
        }
    },

    cnData: {
        name: "Tsubasa (Hane)",
        weapon: {
            advancement: {
                star1: `<abbr title='China Exclusive'></abbr> Grant a stack of Sharp Arrow each time the arrow fired by a Dodge attack hits a target. Each stack increases damage by **8%** for **15** seconds. Stack up to **3** times.`
            },
            abilities: {
                discharge: [
                    {
                        name: "Explosive Barrage",
                        description: `When ***weapon charge is full*** or ***Phantasia*** is triggered, **remove all debuffs from the wielder**, and create a hailstorm at the target location upon switching to this weapon, dealing damage equal to **570%** of ATK + **30**. The storm has a **10%** chance to inflict a **2** seconds **freeze effect**. Gain cold front, increasing damage dealt by **15%**, and speed by **45%** for **7** seconds.`
                    }
                ]
            },
            recommendedMatrices: [
                {
                    name: "Saki Fuwa",
                    pieces: 4,
                    description: "Best possible matrices for a supporting weapon on Frost teams. High damage boost on both set effects."
                },
                {
                    name: "Frigg",
                    pieces: 2,
                    description: "A good choice for Frost teams as it adds another buff for Icewind Vector to apply."
                },
                {
                    name: "Crow",
                    pieces: 2,
                    description: "High damage matrix set when you have high crit rate. Otherwise, opt for Shiro 2-piece matrices."
                },
                {
                    name: "Sobek",
                    pieces: 3,
                    description: "A good substitute for SSR damage chips if you don't have them. Very useful against groups of mobs, i.e. in Bygone Phantasm."
                }
            ]
        },
        matrix: {
            set2: `<abbr title='China Exclusive'></abbr> Increase damage dealt by **12.5%/15%/17.5%/20%** when there are no enemies within 4 meters.`
        },
    }
}

export default tsubasa;
