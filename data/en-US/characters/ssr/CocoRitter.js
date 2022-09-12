const coco = {
    name: "Coco Ritter",
    uri: "coco-ritter",
    imgSrc: "cocoritter.webp",
    rarity: "SSR",
    chinaOnly: false,
    weapon: {
        name: "Absolute Zero",
        element: "ice",
        type: "support",
        baseStats: ["attack", "resistance", "health"],
        shatter: ["B", "4.00"],
        charge: ["S", "12.50"],
        materials: ["ice", "green", "black"],
        advancement: {
            star1: `After dodging, summon a healing bee that follows the user and heals the ally with the lowest percentage of HP within **15** meters. Heal for **25%** of ATK and restore **50** weapon charge points each time and last for **25** seconds. Cooldown: **25** seconds.`,

            star2: `Increase the current weapon's base HP growth by **16%**.`,

            star3: `Use ***Sanctuary*** or discharge skills to remove debuffs from targets, can be used while being affected by control effects. Increase shatter and damage dealt for all teammates within range by **20%**, and grant them immunity to control effects and shatter.`,

            star4: `Increase the current weapon's base HP growth by **32%**.`,

            star5: `Increase healing effect by **15%**, plus an additional **20%** when healing targets with less than **60%** HP.`,

            star6: `Whenever a healing bee is summoned or disappears from battle, heal all allies for **100%** of the user's ATK. All allies within **10** meters of the healing bee also gain **15%** all damage and healing boost (cannot stack).`
        },
        abilities: {
            normal: [
                {
                    name: "Normal Attack",
                    input: ["Attack x5"],
                    description: `While on the ground, swing the staff to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **54.4%** of ATK + **3**.',
                        'Deal damage equal to **40.8%** of ATK + **2**.',
                        'Deal damage equal to **65.6%** of ATK + **3**. ',
                        'Deal damage equal to **89.7%** of ATK + **5**.',
                        'Deal damage equal to **158.4%** of ATK + **8**.'
                    ]
                },
                {
                    name: "Soaring Barrage",
                    input: ["Jump","Attack x5"],
                    description: `While airborne or after jumping once, tap normal attack to attack 5 times in a row.`,
                    breakdown: [
                        'Deal damage equal to **70.5%** of ATK + **4**.',
                        'Deal damage equal to **50.8%** of ATK + **3**.',
                        'Deal damage equal to **55.1%** of ATK + **3**.',
                        'Deal damage equal to **99.1%** of ATK + **5**.',
                        'Deal damage equal to **103.2%** of ATK + **5**.'
                    ]
                },
                {
                    name: "Moonfall",
                    input: ["Jump","hold:Attack"],
                    description: `Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **123.8%** of ATK + **7** damage.`,
                },
                {
                    name: "Focused Assault",
                    input: ["Attack x3","hold:Attack"],
                    description: `After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.`,
                    breakdown: [
                        'Pull in enemies in front of the user, **suspending them** and dealing damage equal to **34.9%** of ATK + **2** every **0.3** seconds (up to **4** times).',
                        'Deal damage equal to **40.4%** of ATK + **2** at the target location and to nearby enemies every **0.3** seconds.'
                    ]
                }
            ],
            dodge: [
                {
                    name: "Dodge",
                    description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                },
                {
                    name: "Surge",
                    input: ["Arrow keys","Dodge","Attack"],
                    description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **45.9%** of ATK + **2** to targets. Grant **75** weapon charge points upon use.`,
                },
                {
                    name: "Tesseract",
                    input: ["Dodge","Attack"],
                    description: `Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **66.4%** of ATK + **3** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.`,
                }
            ],
            skill: [
                {
                    name: "Sanctuary",
                    description: `Create a healing zone that moves with the Wanderer and heals nearby allies for **95%** of ATK + **5** once every **0.5** seconds for **6** seconds. **60**-second cooldown.`,
                }
            ],
            discharge: [
                {
                    name: "Swift Deliverance",
                    description: `When a ***weapon is fully charged*** or triggers ***Phantasia***, switching to this weapon from another weapon **removes all debuffs from the wielder**, and the staff continues to remove debuffs from the Wanderer and allies, plus healing nearby Wanderers and allies for **118.8%** x ATK + **6** HP for **7** seconds.`,
                }
            ]
        },
        abilitiesVideoSrc: "https://www.youtube.com/embed/tiH-5dFUW1E?start=11",
        recommendedMatrix: {
            set2: ["coco-ritter", "meryl"],
            set4: ["coco-ritter", "zero"],
            set3: ["pepper"]
        },
        recommendedMatrices: [
            {
                name: "Coco Ritter",
                pieces: 4,
                description: "Great choice for Absolute Zero that will increase healing and provide an attack buff to allies."
            },
            {
                name: "Zero",
                pieces: 4,
                description: "Decent option that shields and buffs allies when using discharge skills."
            },
            {
                name: "Meryl",
                pieces: 2,
                description: "Niche option, may potentially be useful to protect you from lethal damage."
            },
            {
                name: "Pepper",
                pieces: 3,
                description: "Decent option to build weapon charge while using Absolute Zero."
            }
        ]
    },

    matrix: {
        set2: `Increase healing capability and healing received by **10%/12%/14%/16%**.`,

        set4: `When you or your teammates are healed, increase ATK by **12.5%/15%/17.5%/20%** for **6** seconds. Only the highest level's effect is applied when obtained repeatedly.`
    },

    awakening: {
        trait1200: `When Cocoritter uses a support weapon, increase healing effects she inflicts on others and receives by **20%**.`,

        trait4000: `When Cocoritter uses a support weapon, increase healing and healing received by **20%**. And when Cocoritter uses a support-type weapon's discharge skill or weapon skill, increase nearby allies' ATK by **15%** for **5**.`,

        giftCategories: ['toys', 'decorations', 'rare-items'],

        gifts: [
            [80, "snowGlobe"],
            [60, "foxFigure", "catFigure", "present", "ufo", "miaFigure", "seal"],
            [30, "tataPlush", "spiderFigure", "vial", "elfFigure", "bunnyDoll", "catPlush", "robotFigure"],
            [15, "photoAlbum", "photo", "plant", "harmonica", "pinwheel"]
        ]
    },

    bio: {
        gender: 'Female',
        height: '147 cm',
        birthplace: 'Hagarde',
        horoscope: 'Gemini',
        birthday: '1 Jun',
        voiceActors: {
            jp: "鬼頭明里 (Kito Akari)",
            en: "Lexi Fontaine",
            cn: "胡婷婷"
        }
    },

    cnData: {
        weapon: {
            advancement: {
                star6: `<abbr title='China Exclusive'></abbr> Whenever a healing bee is summoned or disappears from battle, heal all allies for **100%** of the user's ATK. All allies within **10** meters of the healing bee also gain **15%** ATK (cannot stack).`
            },
            abilities: {
                normal: [
                    {
                        name: "Normal Attack",
                        input: ["Attack x5"],
                        description: `While on the ground, swing the staff to attack 5 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **48.2%** of ATK + **3**.',
                            'Deal damage equal to **36.1%** of ATK + **2**.',
                            'Deal damage equal to **58%** of ATK + **3**. ',
                            'Deal damage equal to **79.5%** of ATK + **4**.',
                            'Deal damage equal to **140%** of ATK + **7**.'
                        ]
                    },
                    {
                        name: "Soaring Barrage",
                        input: ["Jump","Attack x5"],
                        description: `While airborne or after jumping once, tap normal attack to attack 5 times in a row.`,
                        breakdown: [
                            'Deal damage equal to **62.3%** of ATK + **3**.',
                            'Deal damage equal to **45%** of ATK + **2**.',
                            'Deal damage equal to **48.8%** of ATK + **3**.',
                            'Deal damage equal to **87.6%** of ATK + **5**.',
                            'Deal damage equal to **91.3%** of ATK + **5**.'
                        ]
                    },
                    {
                        name: "Moonfall",
                        input: ["Jump","hold:Attack"],
                        description: `Tap and hold normal attack while airborne to trigger Moonfall. Upon landing, deal damage once every **0.2** seconds, for a total of **109.6%** of ATK + **6** damage.`,
                    },
                    {
                        name: "Focused Assault",
                        input: ["Attack x3","hold:Attack"],
                        description: `After the third normal attack, hold the normal attack button to trigger branch attacks, consuming **300** points of endurance.`,
                        breakdown: [
                            'Pull in enemies in front of the user, **suspending them** and dealing damage equal to **30.8%** of ATK + **2** every **0.3** seconds (up to **4** times).',
                            'Deal damage equal to **35.7%** of ATK + **2** at the target location and to nearby enemies every **0.3** seconds.'
                        ]
                    }
                ],
                dodge: [
                    {
                        name: "Dodge",
                        description: `Dodge right before getting hit to activate a Phantasia, which reduces the speed of enemies within the area. Cooldown: 15 seconds. While dodging, you gain hitstun immunity for **0.5** seconds.`,
                    },
                    {
                        name: "Surge",
                        input: ["Arrow keys","Dodge","Attack"],
                        description: `Tap normal attack during the short perfect dodge window (tap an arrow button before dodging) to trigger Surge. Each wave of energy deals damage equal to **40.6%** of ATK + **2** to targets. Grant **75** weapon charge points upon use.`,
                    },
                    {
                        name: "Tesseract",
                        input: ["Dodge","Attack"],
                        description: `Tap normal attack during the short period after dodging to trigger Evasive Blast. Fire an energy orb forward, dealing damage equal to **58.7%** of ATK + **3** to targets in its path every **0.3** seconds (up to 5 times). Grant **75** weapon charge points upon use.`,
                    }
                ]
            },
        },
        
    }
}

export default coco;
